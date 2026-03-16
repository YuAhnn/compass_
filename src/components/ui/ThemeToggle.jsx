"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  
  if (!mounted) return null

  const isDark = theme === "mytheme-dark"

  return (
    <button
      onClick={() =>
        setTheme(isDark ? "mytheme" : "mytheme-dark")
      }
      className="btn btn-circle font-medium bg-base-100 text-neutral hover:bg-accent 
                 hover:text-primary transition border-accent"
      title="Day and night, you are not forgotten."
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}