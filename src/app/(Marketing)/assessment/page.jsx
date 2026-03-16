import { getAllAssessments } from 'lib/assessment/queries'
import AssessmentGrid from 'components/assessment/AssessmentGrid'

export const metadata = {
  title: "Mental Health Self-Assessment | Compass",
  description: "Take a step toward clarity with our mental health self-assessment.",
}

export default async function AssessmentPage() {
  const assessments = await getAllAssessments()

  return (
    <main className="min-h-screen bg-base-100">
    <div className="p-8">
      <h1 className="text-2xl lg:text-4xl font-black mb-6">
         TAKE A STEP TOWARD CLARITY
      <div className="h-1.5 w-20 bg-primary mt-2"></div>
      </h1>

      {!assessments || assessments.length === 0 ? (
        <div className="alert alert-info">
          <span>TRY AGAIN LATER</span>
        </div>
      ) : (
        <AssessmentGrid assessments={assessments} />
      )}
    </div>
    </main>
  )
}
