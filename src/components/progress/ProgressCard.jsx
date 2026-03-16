'use client'

import { Trash2 } from 'lucide-react'

export default function ProgressCard({ result, onDelete, isProcessing }) {
  if (!result) return null

  return (
    <main className="card border border-neutral/10 bg-base-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 overflow-hidden group relative">
      <div className="flex-row items-center gap-6 card-body p-6">

        {/* Iskor */}
        <section className="avatar shrink-0">
          <div className="flex flex-col items-center justify-center border border-primary/10 transition-all duration-500 hover:scale-105 bg-primary/5 text-primary rounded-2xl w-20 h-20 ">
            <span className="text-2xl font-black leading-none">{result.score}</span>
            <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest mt-1">Score</span>
          </div>
        </section>

        {/* Info */}
        <section className="flex-1 min-w-0">
          <h3 className="font-black text-lg text-base-content truncate transition-colors duration-300">
            {result.assessment_title}
          </h3>
          <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">
            {result.interpretation}
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="badge badge-sm border border-base-200 bg-base-200/60 text-base-content/80 font-semibold tracking-widest uppercase">
              {new Date(result.created_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
        </section>

        {/* Delete */}
        <button 
          onClick={() => onDelete(result.result_id)}
          disabled={isProcessing}
          className="absolute top-4 right-4 p-2 rounded-xl bg-base-200 text-base-content/30 opacity-0 group-hover:opacity-100 group-hover:text-neutral/80 hover:bg-secondary/10 transition-all duration-300 cursor-pointer"
          title="Hope you're doing well"
        >
          <Trash2 className="w-5 h-5" />
        </button>

      </div>
    </main>
  )
}