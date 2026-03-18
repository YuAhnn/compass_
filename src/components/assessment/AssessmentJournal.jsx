'use client'

export default function AssessmentJournal({ onFinish }) {
  return (
    <main className="card bg-base-100 shadow-xl border border-base-200">
      <section className="card-body p-10 text-center items-center">
        <header className="flex items-center justify-center mb-6 text-primary">
          <p className="text-3xl font-black">JOURNAL</p>
        </header>
        
        <h2 className="text-3xl font-bold mb-4">
          Before you move on, you might want to pause for a moment. If there’s anything you’d like to put into words, you can write it here.
        </h2>

        <textarea
          className="textarea textarea-bordered w-full h-40 text-base leading-relaxed"
        />
        
        <button 
          className="btn btn-primary btn-lg px-12 rounded-full shadow-lg"
          onClick={onFinish}
        >
          Take Care
        </button>
      </section>
    </main>
  )
}
