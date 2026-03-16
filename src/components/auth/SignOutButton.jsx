"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "lib/auth/auth"
import { LogOut } from "lucide-react"

export default function SignOutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()

  const handleSignOut = async () => {
    setIsLoggingOut(true)
    try {
      await signOut()
      router.push("/create-profile")
      router.refresh()
    } catch (error) {
      console.error("Error signing out:", error)
      setIsLoggingOut(false)
    }
  }

  return (
    <button
      onClick={handleSignOut}
      disabled={isLoggingOut}
      title="Take Care"
      className="btn btn-sm bg-base-100 md:btn-md gap-2 rounded-xl group transition-all duration-300 hover:text-primary hover:bg-accent border-accent"
    >
      <LogOut className="w-4 h-4" />
    </button>
  )
}