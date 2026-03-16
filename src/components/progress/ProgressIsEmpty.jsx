'use client'

import { useRouter } from 'next/navigation'
import { HeartHandshake } from 'lucide-react'

export default function ProgressIsEmpty() {
  const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-28 min-h-[87vh] max-w-sm mx-auto">
      <section className="flex items-center justify-center mb-6 rounded-2xl bg-base-200 w-16 h-16">
        <HeartHandshake className="text-base-content/30 w-8 h-8" />
      </section>

      <p className="text-sm text-base-content/60 leading-relaxed mb-2">
        Sometimes you just need to pause —<br />
        and check in with yourself.
      </p>

      <p className="text-xs text-base-content/40 mb-8">
        No diagnosis. Just awareness.
      </p>

      <button
        onClick={() => router.push('/dashboard/assessment')}
        className="btn btn-primary btn-md hover:bg-[#3fb18534] hover:text-accent-content transition-all duration-200 ease-in-out border-none rounded-full dark:text-white/80"
      >
        Take a moment
      </button>
    </main>
  )
}