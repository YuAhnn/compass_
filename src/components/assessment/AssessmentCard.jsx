'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Modal from 'components/ui/Modal'
import { Info, Shield } from "lucide-react"

export default function AssessmentCard({ data, basePath = "" }) {
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const router = useRouter()

  const handleStart = (e) => {
    e.stopPropagation()
    setShowDisclaimer(true)
  }

  const handleAgree = () => {
    setShowDisclaimer(false)
    router.push(`${basePath}/assessment/${data.assessment_id}`)
  }

  return (
    <>
      <main
        className="card h-52 p-6 bg-base-100 border border-neutral/10 shadow-md transition cursor-pointer active:shadow-[0_4px_20px_rgba(63,177,133,0.3)] hover:shadow-[0_4px_20px_rgba(63,177,133,0.3)]"
        onClick={handleStart}
      >
        <section className="card-body">
          <h2 className="card-title">
            {data.title}
          </h2>
          <p className="text-sm opacity-70 min-h-12">
            {data.short_description}
          </p>
          <div className="card-actions justify-end mt-4">
            <button 
              className="btn btn-primary btn-sm"
              onClick={handleStart}
            >
              Start
            </button>
          </div>
        </section>
      </main>

      <Modal
        isOpen={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
        title="Before You Begin"
        footer={
          <div className="flex justify-end gap-2 w-full">
            <button
              className="btn btn-ghost"
              onClick={() => setShowDisclaimer(false)}
            >
              Cancel
            </button>
        
            <button
              className="btn btn-primary"
              onClick={handleAgree}
            >
              Continue
            </button>
          </div>
        }
      >
        <section className="text-sm space-y-4">
          <div className="flex gap-3">
            <Info className="w-10 h-10 text-base-content/60 mt-0.5" />
            <p className="text-base-content/80">
              This assessment is for self-reflection purposes only and does not
              provide a clinical diagnosis.
            </p>
          </div>
      
          <div className="flex gap-2">
            <Shield className="w-10 h-10 text-base-content/60 mt-0.5" />
            <p className="text-base-content/80">
              Your responses remain private and are used only to give you personal
              insights.
            </p>
          </div>
      
          <p className="pt-2 text-base-content/70">
            Would you like to continue?
          </p>
        </section>
      </Modal>
    </>
  )
}