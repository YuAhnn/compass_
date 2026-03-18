export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100)

  return (
    <main className="mb-8">
      <section className="flex justify-end text-sm opacity-60 mb-2">
        <span>{percentage}%</span>
      </section>

      <section className="h-3 bg-gray-200 rounded-full w-full overflow-hidden">
        <div
        style={{
          height: '100%',
          background: 'var(--color-primary)',
          borderRadius: '100px',
          transition: 'width 0.5s ease-in-out',
          width: `${percentage}%`
        }}
        />
        </section>
    </main>
  )
}