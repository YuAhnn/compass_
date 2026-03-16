export const metadata = {
  title: "Assessment | Compass",
  description:
    "Take the mental health self-assessment to reflect on your emotional wellbeing, increase self-awareness, and gain clarity. Educational and supportive — not a diagnostic tool.",
}

export default function AssessmentLayout({ children }) {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {children}
      </div>
    </div>
  )
}
