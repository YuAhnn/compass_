'use client'

import { Quote, BookOpen, Lightbulb, Loader2, Heart } from 'lucide-react'

export default function AssessmentRecommendation({ recommendations, loading, onFinish }) {

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-sm opacity-50 tracking-wide">Preparing your personalized recommendations...</p>
      </div>
    )
  }

  //Fallback if user somehow bypass phase 4 
  if (!recommendations) {
    return (
      <main className="card bg-base-100 shadow-xl border border-base-200">
        <section className="card-body p-8 text-center gap-4">
          <h2 className="text-2xl font-bold">You're not alone</h2>
          <p className="opacity-60 max-w-sm mx-auto">
            Create an account to unlock personalized recommendations.
          </p>
          <div className="card-actions justify-center pt-4">
            <button className="btn btn-primary btn-lg px-12 rounded-full" onClick={onFinish}>
              Get Started
            </button>
          </div>
        </section>
      </main>
    )
  }

  const { quote, verse, activities } = recommendations

  return (
    <main className="card bg-base-100 shadow-md border border-base-200 p-4">
      <section className="card-body p-4 lg:p-10 gap-8">
        {/* QUOTE */}
        {quote?.text && (
          <div className="border border-neutral/10 bg-base-200 rounded-lg p-6 flex gap-4 items-start shadow-sm">
            <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <p className="text-base leading-relaxed">{quote.text}</p>
              {quote.author && (
                <p className="text-sm opacity-40 mt-2 font-medium">- {quote.author}</p>
              )}
            </div>
          </div>
        )}

        {/* BIBLICAL VERSE */}
        {verse?.text && (
          <div className="border border-neutral/10 bg-base-200 rounded-lg p-6 flex gap-4 items-start shadow-sm">
            <BookOpen className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <p className="text-base leading-relaxed">{verse.text}</p>
              {verse.reference && (
                <p className="text-sm opacity-40 mt-2 font-medium">
                  {verse.reference} {verse.version && `· ${verse.version}`}
                </p>
              )}
            </div>
          </div>
        )}

        {/* SMALL ACTIONS */}
        {activities?.length > 0 && (
          <div> 
            <h3 className="text-xs font-black tracking-widest text-primary mb-3">
              TRY THESE ACTIVITIES
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activities.map((act, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border border-neutral/10 bg-base-200 rounded-lg p-4 shadow-sm"
                >
                  <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm leading-snug">{act}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <footer className="card-actions justify-center pt-2">
          <button
            className="btn btn-primary btn-lg px-6 rounded-full border-none hover:bg-[#3fb18534] hover:text-accent-content transition-all duration-200 ease-in-out dark:text-white"
            onClick={onFinish}
            title="Hope we helped!"
          >
            <Heart className='w-8 h-8'/>
          </button>
        </footer>
      </section>
    </main>
  )
}