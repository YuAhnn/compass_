'use client'

import { useState, useEffect } from "react";

export default function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours()

      if (hour < 12) {
        setGreeting("Good Morning")
      } 
      else if (hour < 18) {
        setGreeting("Good Afternoon")
      }
      else setGreeting("Good Evening")
    }

    updateGreeting()

    const timer = setInterval(updateGreeting, 60 * 1000); 
    return () => clearInterval(timer);
  }, [])

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
      <span className="badge h-auto badge-primary text-xs sm:text-sm font-medium px-4 py-2 sm:py-2.5 text-white/95 border border-white/20 shadow-sm rounded-full">
        {greeting}
      </span>
      <span className="badge h-auto badge-ghost text-xs sm:text-sm font-medium px-4 py-2 sm:py-2.5 text-base-content/80 border border-primary/20 shadow-sm rounded-full">
        Dashboard
      </span>
    </div>
  );
}