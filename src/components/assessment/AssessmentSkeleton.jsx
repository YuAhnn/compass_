export default function AssessmentSkeleton() {
  const skeleton = Array.from({ length: 3 })

  return (
  <>
  <header className="mb-10">
    <div className="skeleton h-8 lg:h-10 w-72 lg:w-96 bg-base-content/15"></div>
    <div className="skeleton h-1.5 w-20 mt-2 bg-base-content/10 rounded-none"></div>
  </header>
  
  <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {skeleton.map((_, index) => (
      <section
        key={index}
        className="flex flex-col justify-between bg-base-300 border border-base-content/10 rounded-lg p-6 h-48"
      >
        <div className="space-y-3">
          <div className="skeleton h-5 w-28 bg-base-content/15"></div>
          <div className="skeleton h-4 w-full bg-base-content/10"></div>
          <div className="skeleton h-4 w-3/4 bg-base-content/10"></div>
        </div>

        <div className="flex justify-end">
          <div className="skeleton h-9 w-20 rounded-lg bg-base-content/15"></div>
        </div>
      </section>
    ))}
  </main>
  </>
  )
}