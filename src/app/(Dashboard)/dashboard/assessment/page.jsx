import { getAllAssessments } from '@lib/assessment/queries'
import AssessmentGrid from '@components/assessment/AssessmentGrid'
import AssessmentSkeleton from '@components/assessment/AssessmentSkeleton'
import { CircleQuestionMark } from 'lucide-react'

export const metadata = {
  title: "Assessment | Compass",
  description: "Take a step toward clarity with our mental health self-assessment.",
}

export default async function AssessmentPage() {
  const assessments = await getAllAssessments()

  return (
    <main className="min-h-[97vh] bg-base-100 rounded-2xl border border-primary/30">
    <section className="p-8 max-w-7xl mx-auto">
      <header className="mb-10">
      <section className='flex flex-row justify-between'>
        <h1 className="text-2xl lg:text-4xl font-black mb-6">
          TAKE A STEP TOWARD CLARITY
          <div className="h-1.5 w-20 bg-primary mt-2"></div>
        </h1>
        <div className="tooltip tooltip-left tooltip-primary">
          <div className="tooltip-content text-white text-justify w-64 p-3 leading-relaxed">
            This test is a tool often used by health professionals to identify potential 
            signs or symptoms of mental health conditions. While it's not a diagnosis, 
            it can offer insights and guide your next steps.
          </div>

          <button className="btn btn-circle font-medium bg-base-100 text-neutral hover:bg-accent 
                 hover:text-primary transition border-accent">
            <CircleQuestionMark className="w-6 h-6" />
          </button>
        </div>
      </section>
      </header>

      {!assessments || assessments.length === 0 ? (
        <AssessmentSkeleton />
      ) : (
        <AssessmentGrid assessments={assessments} basePath="/dashboard" />
      )}
    </section>
    </main>
  )
}
