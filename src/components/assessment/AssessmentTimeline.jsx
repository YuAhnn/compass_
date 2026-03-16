'use client'

export default function AssessmentTimeline({ currentStep }) {
  const steps = [
    { id: 1, label: 'Instructions' },
    { id: 2, label: 'Assessment' },
    { id: 3, label: 'Results' },
    { id: 4, label: 'Support' }
  ]

  return (
    <section className="flex justify-center w-full">
      <ul className="steps steps-horizontal w-full max-w-2xl scale-105">
        {steps.map((step) => (
          <li 
            key={step.id} 
            className={`step ${currentStep >= step.id ? 'step-primary' : ''} text-xs md:text-sm font-medium`}
          >
            {step.label}
          </li>
        ))}
      </ul>
    </section>
  )
}
