'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { calculateScore, interpretScore } from '@lib/assessment/scoring'
import { supabase } from '@lib/supabase/client'
import { saveResult } from '@lib/assessment/queries'
import { ShieldAlert } from 'lucide-react'
import Modal from '@components/ui/Modal'
import AssessmentTimeline from './AssessmentTimeline'
import AssessmentInstruction from './AssessmentInstruction'
import AssessmentQuestion from './AssessmentQuestion'
import AssessmentResultView from './AssessmentResultView'
import AssessmentResultLoading from './AssessmentResultLoading'
import AssessmentRecommendation from './AssessmentRecommendation'
import { generateSupport, generateRecommendation } from '@lib/assessment/support'

export default function AssessmentForm({ data, basePath = "" }) {
  const { assessment, scales, scoring, interpretation, questions, instructions } = data
  const [currentStep, setCurrentStep] = useState(1) 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [recommendations, setRecommendations] = useState(null)
  const [loadingRecommendations, setLoadingRecommendations] = useState(false)
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [isGuest, setIsGuest] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function checkUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setIsGuest(!user)
    }
    checkUser()
  }, [])

  const handleBegin = () => setCurrentStep(2)

  const handleSelect = (value) => setSelectedAnswer(value)

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      setSelectedAnswer(answers[currentQuestionIndex - 1])
    } else {
      setCurrentStep(1)
    }
  }

  const handleContinue = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = selectedAnswer
    setAnswers(newAnswers)
    setSelectedAnswer(null)

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1)

      if (newAnswers[currentQuestionIndex + 1] !== undefined) {
        setSelectedAnswer(newAnswers[currentQuestionIndex + 1])
      }
    } else {
      submitAssessment(newAnswers)
    }
  }

  const submitAssessment = async (finalAnswers) => {
    setLoading(true)
    try {
      const currentAnswers = finalAnswers || answers
      const score = calculateScore({
        answers: currentAnswers,
        scoringConfig: scoring,
        scales: scales
      })
      const label = interpretScore(score, interpretation)

      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        await saveResult({
          user_id: user.id,
          assessment_id: assessment.id,
          score,
          interpretation: label
        })
      }

      const aiFeedback = await generateSupport({
        assessment: assessment.id,
        score,
        interpretation: label,
        isGuest,
      })

      setResult({ 
        score, 
        label, 
        aiFeedback: aiFeedback
      })
      setCurrentStep(3)
    } catch (error) {
      console.error('Error submitting assessment:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleResultContinue = async () => {
    if (isGuest) {
      setShowSaveModal(true)
    } else {
      setLoadingRecommendations(true)
      const recs = await generateRecommendation({
        assessment: assessment.id,
        score: result.score,
        interpretation: result.label,
        isGuest,
      })
      setRecommendations(recs)
      setLoadingRecommendations(false)
      setCurrentStep(4)
    }
  }

  const handleFinish = () => {
    router.push(basePath || '/')
  }

  if (loading) return <AssessmentResultLoading />

  return (
  <>
   <AssessmentTimeline currentStep={currentStep}/>
    <div className="max-w-4xl w-full mx-auto py-2">
      <div className="mt-8 transition-all duration-500 ease-in-out">
        {currentStep === 1 && (
          <AssessmentInstruction 
            instructions={instructions} 
            onBegin={handleBegin} 
            basePath={basePath}
          />
        )}

        {currentStep === 2 && (
          <AssessmentQuestion 
            currentQuestion={currentQuestionIndex}
            totalQuestions={questions.length}
            questionText={questions[currentQuestionIndex]?.question_text}
            options={scales}
            selectedAnswer={selectedAnswer}
            onSelect={handleSelect}
            onContinue={handleContinue}
            onBack={handleBack}
          />
        )}

        {currentStep === 3 && result && (
          <AssessmentResultView 
            score={result.score}
            interpretation={result.label}
            feedback={result.aiFeedback}
            onContinue={handleResultContinue}
          />
        )}

        {currentStep === 4 && (
          <AssessmentRecommendation
            recommendations={recommendations}
            interpretation={result?.label}
            loading={loadingRecommendations}
            onFinish={handleFinish}
          />
        )}
      </div>

      <Modal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        title="Save Your Insights"
        footer={
          <div className="flex flex-col w-full gap-3 pt-4">
            <button 
              className="btn btn-primary btn-md rounded-full w-full shadow-lg"
              onClick={() => router.push('/create-profile')}
            >
             Create Account
            </button>
            <button 
              className="btn btn-ghost btn-md rounded-full w-full"
              onClick={() => router.push('/assessment')}
            >
              Continue Without Saving
            </button>
          </div>
        }
      >
        <div className="py-2 text-center">
           <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
             <ShieldAlert className="w-8 h-8" />
           </div>
           <p className="text-lg font-medium mb-2">Don’t Lose Your Results</p>
           <p className="opacity-70 leading-relaxed px-4 text-center">
             Create a free account to keep your responses and track your progress over time
           </p>
        </div>
      </Modal>
    </div>
    </>
  )
}