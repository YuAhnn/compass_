'use client'

import { ChevronLeft } from 'lucide-react'
import ProgressBar from '@components/ui/ProgressBar'

export default function AssessmentQuestion({ 
  currentQuestion, 
  totalQuestions, 
  questionText, 
  options, 
  selectedAnswer, 
  onSelect, 
  onContinue, 
  onBack 
}) {
  return (
    <main className="card bg-base-100 shadow-xl border border-base-200 min-h-125">
      <section className="card-body p-8 lg:p-12">
        {/* Progress Bar */}
        <section className="flex justify-between items-center mb-1">
          <button 
            className="btn btn-ghost btn-circle"
            onClick={onBack}
            disabled={!onBack}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="w-full">
            <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
          </div>
        </section>

        {/* Question */}
        <section className="border border-primary rounded-2xl p-4 text-center mb-10 w-full">
          <h2 className="text-neutral/88 text-xl md:text-2xl font-semibold leading-tight max-w-2xl mx-auto text-start">
            {questionText}
          </h2>
        </section>

        {/* Options */}
        <section className="grid gap-3 max-w-xl mx-auto w-full mb-12">
          {options.map((option) => (
            <button
              key={option.id}
              className={`btn btn-lg h-auto py-4 px-6 justify-start font-normal transition-all rounded-2xl border-2 
                ${ selectedAnswer === option.value 
                  ? 'btn-primary border-primary shadow-md' 
                  : 'btn-ghost bg-base-200 border-transparent hover:border-primary/30'
                }`}
              onClick={() => onSelect(option.value)}
            >
              <span className="text-lg">{option.label}</span>
            </button>
          ))}
        </section>

        {/* Continue Btn */}
        <section className="card-actions justify-center mt-auto">
          <button 
            className="btn btn-primary btn-lg px-20 rounded-full shadow-lg hover:shadow-xl transition-all"
            disabled={selectedAnswer === null}
            onClick={onContinue}
          >
            {currentQuestion + 1 === totalQuestions ? 'Finish' : 'Continue'}
          </button>
        </section>
      </section>
    </main>
  )
}