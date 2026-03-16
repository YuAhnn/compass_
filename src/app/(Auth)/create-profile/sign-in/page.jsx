"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "lib/supabase/client"
import NicknameForm from "components/auth/NicknameForm"
import Link from "next/link"

export default function SignInPage() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser()
      .then(({ data: { user } }) => {
        if (!user) router.push("/create-profile")
        else setUser(user)
      })
  }, [router])

  if (!user) return null

  return (
    <main className="flex min-h-screen bg-base-200 text-base-content">
      <section className="w-full lg:w-1/2 flex flex-col p-8 lg:p-24 justify-between bg-base-100">
        <img src="/logo.svg" alt="logo" className="absolute top-0 left-12 w-45 h-45" />

        <div className="max-w-sm w-full mx-auto my-auto">
          <NicknameForm user={user} 
            onSuccess={() => {
              router.push("/dashboard")
              router.refresh()
            }} 
          />
        </div>

        <div className="max-w-sm mx-auto opacity-60 hover:opacity-80">
          <Link href="/dashboard" className="btn btn-ghost btn-sm">Continue without Nickname</Link>
        </div>
      </section>

      <section className="hidden lg:flex flex-col border-l border-neutral/10 w-1/2">
        <div className="flex flex-1 items-center justify-center p-10">
          <div className="h-full w-full bg-[url('/bg-auth.png')] bg-contain bg-center bg-no-repeat" />
        </div>
      </section>
    </main>
  )
}