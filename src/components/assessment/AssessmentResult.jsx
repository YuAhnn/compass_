'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from 'lib/supabase/client'
import Modal from 'components/ui/Modal'

export default function AssessmentResult({
  score,
  interpretation,
  feedback = "Take time to reflect on this insight. Small steps matter."
}) {
  const router = useRouter()
  const [isGuest, setIsGuest] = useState(false)
  const [showSaveModal, setShowSaveModal] = useState(false)

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser()
      setIsGuest(!data.user)
    }
    checkUser()
  }, [])

  const handleExit = () => {
    if (isGuest) {
      setShowSaveModal(true)
    } else {
      router.push('/assessment')
    }
  }

  return (
    <>
    <main className="min-h-screen bg-base-100">
      <div className="hero min-h-[60vh]">
        <div className="hero-content text-center">
          <div className="card bg-base-100 shadow-xl p-10 w-full max-w-md">

            <h1 className="text-2xl font-semibold mb-6">
              Your Reflection Result
            </h1>

            <div className="flex justify-center mb-6">
              <div
                className="radial-progress text-primary"
                style={{ "--value": score }}
                role="progressbar"
              >
                {score}
              </div>
            </div>

            <p className="text-lg font-medium mb-2">
              {interpretation}
            </p>

            <p className="text-sm opacity-70 mb-6 text-justify">
              {feedback}
            </p>

            <button 
              className="btn btn-primary w-full"
              onClick={handleExit}
            >
              Take care
            </button>

          </div>
        </div>
      </div>

      <Modal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        title="Save Your Progress?"
        footer={
          <div className="flex flex-col w-full gap-2">

            <Link href="/create-profile">
              <button 
                className="btn btn-primary w-full"
              >
                Create Account to Save
              </button>
            </Link>

            <button 
              className="btn btn-ghost w-full"
              onClick={() => router.push('/assessment')}
            >
              Maybe Later, Explore Tools
            </button>

          </div>
        }
      >
        <div className="py-4">
          <p className="text-gray-600">
            Great job on completing the reflection! 
          </p>
          <p className="mt-2 text-gray-600">
            Create an account to save your results, track your progress over time, and unlock more personalized insights.
          </p>
        </div>
      </Modal>
    </main>
    </>
  )
}