import { getAllAssessments } from '@lib/assessment/queries'
import AssessmentGrid from '@components/assessment/AssessmentGrid'
import AssessmentSkeleton from '@components/assessment/AssessmentSkeleton'
import Header from '@components/ui/Header'
import { CircleQuestionMark } from 'lucide-react'

export const metadata = {
  title: "Assessment | Compass",
  description: "Take a step toward clarity with our mental health self-assessment.",
}

export default async function AssessmentPage() {
  const assessments = await getAllAssessments()

  return (
    <main className="min-h-[97vh] bg-base-100 rounded-2xl border border-primary/30 flex flex-col overflow-hidden">
      <Header
        title="Take a Step Toward"
        highlight="Clarity"
        subtitle="Take the first step toward better mental health."
        imageSrc="/compass-assessment.png"
      />
      <section className="flex-1 max-w-7xl w-full mx-auto mt-6 mb-10 px-4 sm:px-8">
        <header className="mb-10">
          <section className='flex flex-row justify-between'>
            <div className="h-1.5 w-45 bg-primary mt-2"></div>
            <div className="tooltip tooltip-left tooltip-primary z-10">
              <div className="tooltip-content text-white text-justify w-64 p-3 leading-relaxed">
                This test is a tool often used by health professionals to identify potential 
                signs or symptoms of mental health conditions. While it's not a diagnosis, 
                it can offer insights and guide your next steps.
              </div>

              <button className="btn btn-circle font-medium bg-base-100 text-neutral hover:bg-accent 
                     hover:text-primary transition border-accent relative">
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
