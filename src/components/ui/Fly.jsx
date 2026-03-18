'use client'

import { ChevronUp } from 'lucide-react'

export default function Fly() {
  const handleFly = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <button 
      className="btn btn-primary btn-circle border border-neutral/20 dark:text-white fixed bottom-20 right-4 sm:right-6 md:right-10 z-20 hover:bg-[#3fb18534] hover:text-accent-content transition-all duration-200 ease-in-out border-none rounded-full"
      onClick={handleFly}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}