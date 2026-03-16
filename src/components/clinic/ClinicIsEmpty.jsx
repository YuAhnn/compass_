import { HeartHandshake } from 'lucide-react'

export default function ClinicIsEmpty() {
  return (
    <main className="flex flex-col items-center justify-center text-center mx-auto p-8 min-h-screen max-w-xl">
        <section className="p-6 mb-6 rounded-full bg-primary/5 ring-8 ring-primary/5 animate-pulse">
          <HeartHandshake className="w-12 h-12 text-primary/40" />
        </section>
        <h2 className="text-2xl font-bold text-base-content/70">Select a Clinic</h2>
        <p className="max-w-xs mt-3 text-sm md:text-base text-base-content/40 leading-relaxed">
          Choose one from the list to view its details.
        </p>
    </main>
  )
}