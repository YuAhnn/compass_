export default function ArticleSkeleton() {
  const skeleton = Array.from({ length: 6 });

  return (
    <>
    <header className="mb-10">
      <div className="skeleton h-8 lg:h-10 w-64 lg:w-80 bg-base-content/15"></div>
      <div className="skeleton h-1.5 w-20 mt-2 bg-base-content/10 rounded-none"></div>
    </header> 

    <main className="grid grid-cols-1 xl:grid-cols-2 gap-10">
      {skeleton.map((_, index) => (
        <section
          key={index}
          className="flex flex-row bg-base-300 rounded-lg overflow-hidden shadow-sm h-48 border border-base-content/10"
        >
          <div className="skeleton w-1/3 h-full rounded-none shrink-0 bg-base-content/15"></div>

          <article className="flex flex-col flex-1 p-5 justify-between">
            <div className="space-y-3">
              <div className="skeleton h-6 w-3/4 bg-base-content/15"></div>
              <div className="skeleton h-6 w-1/2 bg-base-content/15"></div>
              <div className="skeleton h-4 w-24 mt-4 bg-base-content/10"></div>
            </div>

            <div className="flex justify-end">
              <div className="skeleton h-8 w-32 rounded-full bg-base-content/15"></div>
            </div>
          </article>
        </section>
      ))}
    </main>
    </>
  )
}