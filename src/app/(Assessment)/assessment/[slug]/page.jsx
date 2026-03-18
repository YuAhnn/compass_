import { getAssessmentBySlug } from '@lib/assessment/queries'
import AssessmentForm from '@components/assessment/AssessmentForm'

export default async function AssessmentSlugPage({ params }) {
  const { slug } = await params
  const data = await getAssessmentBySlug(slug)

  if (!data) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Assessment not found</h1>
      </div>
    )
  }

  return <AssessmentForm data={data} basePath="" />
}
