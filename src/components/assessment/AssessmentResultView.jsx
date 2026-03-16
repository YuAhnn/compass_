'use client'

import { CheckCircle2 } from 'lucide-react'

export default function AssessmentResultView({ score, interpretation, feedback, onContinue }) {

  return (
    <main className="card bg-base-100 shadow-xl border border-base-200">
       <section className="card-body p-4 lg:p-12 text-center">
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success">
            <CheckCircle2 className="w-8 h-8" />
          </div>
        </div>

        <h2 className="text-3xl font-bold">Complete</h2>
        <p className="opacity-60 max-w-md mx-auto">
          Thank you for taking the time to reflect. Here's a summary of your results.
        </p>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center justify-center border border-neutral/10 bg-base-200 p-10 rounded-3xl shadow-sm">
              <div className="relative">
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black">{score}</span>
                  <span className="text-sm uppercase font-bold opacity-40">Score</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center border border-neutral/10 bg-base-200 p-15 rounded-3xl shadow-sm text-left gap-2">
              <h3 className="text-lg uppercase font-black text-primary mb-3 tracking-widest">
                Interpretation
              </h3>
              <p className="text-2xl font-semibold leading-tight">
                {interpretation}
              </p>
              <p className="text-md font-thin tracking-wider opacity-40 animate-pulse">Just a reminder this is for insight, not diagnosis.</p>
            </div>
          </div>

          <div className="border border-neutral/10 bg-base-200 p-8 rounded-3xl text-left w-full shadow-sm">
            <h3 className="text-lg uppercase font-black text-primary mb-3 tracking-widest">
              Message for you
            </h3>
            <p className="text-base leading-relaxed text-justify" title="You matter more than you know.">
              {feedback || "Based on your responses, this shows your current state of mind. Remember, this is a snapshot in time."}
            </p>
          </div>
        </div>
      
        {onContinue && (
          <div className="card-actions justify-center">
            <button 
              className="btn btn-primary btn-lg px-20 hover:bg-[#3fb18534] hover:text-accent-content 
              transition-all duration-200 ease-in-out transform border-none rounded-full dark:text-white"
              onClick={onContinue}
              title="Thank you for checking in with yourself."
            >
              Take care
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
