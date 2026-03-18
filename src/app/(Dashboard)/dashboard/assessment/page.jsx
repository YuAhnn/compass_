import { getAllAssessments } from '@lib/assessment/queries'
import AssessmentGrid from '@components/assessment/AssessmentGrid'
import AssessmentSkeleton from '@components/assessment/AssessmentSkeleton'

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
        <h1 className="text-base-content text-2xl lg:text-4xl font-black uppercase">
          Take a step toward clarity
        </h1>
        <div className="h-1.5 w-20 bg-primary mt-2"></div>
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
