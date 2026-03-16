export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100)

  return (
    <main className="mb-8">
      <section className="flex justify-end text-sm opacity-60 mb-2">
        <span>{percentage}%</span>
      </section>
      {/* 
      <progress
        className="w-full h-4 bg-gray-200 rounded-full overflow-hidden"
        value={percentage}
        max="100"
      /> */}
      <section className="h-3 bg-gray-200 rounded-full w-full overflow-hidden">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </section>
    </main>
  )
}