import { getAssessmentBySlug } from '@lib/assessment/queries'
import AssessmentForm from '@components/assessment/AssessmentForm'

export default async function DashboardAssessmentPage({ params }) {
  const { slug } = await params
  const data = await getAssessmentBySlug(slug)

  if (!data) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-bold">Assessment not found</h1>
      </div>
    )
  }

  return (
    <div className="p-8">
      <AssessmentForm data={data} basePath="/dashboard" />
    </div>
  )
}
