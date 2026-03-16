import AssessmentCard from './AssessmentCard'

export default function AssessmentGrid({ assessments, basePath = "" }) {
  return (
    <main className="grid md:grid-cols-3 gap-6">
      {assessments.map(item => (
        <AssessmentCard key={item.assessment_id} data={item} basePath={basePath} />
      ))}
    </main>
  )
}