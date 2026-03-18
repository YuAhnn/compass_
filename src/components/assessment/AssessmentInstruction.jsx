'use client'

import Link from 'next/link'
import { Info, ShieldAlert, ChevronLeft } from 'lucide-react'

export default function AssessmentInstruction({ instructions, onBegin, basePath = "" }) {
  return (
    <main className="card bg-base-100 shadow-xl border border-base-200">
      <Link href={`${basePath}/assessment`}>
        <ChevronLeft className="w-8 h-8 absolute top-[-87px] left-[-15px] hover:text-primary" />
      </Link>
      <div className="card-body p-6 lg:p-10">
        <header className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center text-primary w-12 h-12 rounded-full bg-primary/10 ">
            <Info className="w-6 h-6" />
          </div>
          <h2 className="card-title text-3xl font-bold">Instructions</h2>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-6">
          {instructions.map((instruction, idx) => (
            <div key={instruction.id || idx} className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-base-200 shrink-0">
                <span className="text-xs font-bold">{idx + 1}</span>
              </div>
              <p className="text-lg leading-relaxed opacity-80 pt-0.5">
                {instruction.content}
              </p>
            </div>
          ))}
        </section>

        <section className="alert bg-base-200 border-none mb-6 flex items-start gap-4 p-6">
          <ShieldAlert className="w-6 h-6 text-warning shrink-0"/>
          <div>
            <p className="text-sm font-medium opacity-70">
              Disclaimer: This assessment is for informational purposes only and is not a clinical diagnosis. If you are in 
              immediate distress, please contact a professional hotline or emergency services.
            </p>
          </div>
        </section>

        <footer className="card-actions justify-center">
          <button 
            className="btn btn-primary btn-lg px-16 rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={onBegin}
          >
            Begin Assessment
          </button>
        </footer>
      </div>
    </main>
  )
}
