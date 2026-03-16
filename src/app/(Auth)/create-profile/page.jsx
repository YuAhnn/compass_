'use client'

import { signInAnonymously, signInWithGoogle } from "lib/auth/auth";
import { supabase } from "lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Divider from "components/ui/Divider";
import { HatGlasses, UserRoundKey } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleAnonymousSignIn = async () => {
    setLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push("/create-profile/sign-in")
        return
      }

      await signInAnonymously()
      router.push("/create-profile/sign-in")
    } catch (error) {
      console.error("Anonymous sign-in failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error("Google sign-in failed:", error)
      setLoading(false)
    }
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Instructions */}
      <div className="w-full max-w-[320px] flex flex-col gap-3 text-center">
        <h2 className="text-lg font-medium mb-4 text-base-content">
          How would you like to continue?
        </h2>

        {/* Anonymous */}
        <button 
          onClick={handleAnonymousSignIn}
          disabled={loading}
          className="btn btn-primary w-full hover:bg-[#3fb18534] hover:text-accent-content transition-all 
          duration-200 ease-in-out border-none dark:text-white"
        >
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "Sign in Anonymously"}
        </button>

        <Divider className="my-2 text-xs uppercase opacity-50">or</Divider>

        {/* Google */}
        <button 
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="btn border border-neutral/20 flex items-center justify-center w-full gap-3 hover:bg-[#3fb18534] hover:text-accent-content transition-all duration-200 ease-in-out dark:text-white"
        >
          <img src="https://www.google.com/favicon.ico" className="w-5 h-5" />
          <span className="font-medium text-base-content">Continue with Google</span>
        </button>

        {/* Instructions */}
        <main className="border-t border-base-content/10 text-left mt-5 pt-6">
          <section className="flex flex-col gap-4">
            <article className="flex gap-3">
              <HatGlasses className="w-20 h-20" />
              <span>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Anonymous Entry
                </p>
                <p className="text-[12px] leading-relaxed text-base-content/60">
                  Quick access for temporary sessions. Your nickname and results will be lost if you sign out or clear your browser.
                </p>
              </span>
            </article>

            <article className="flex gap-3">
              <UserRoundKey className="w-20 h-20" />
              <span>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Account
                </p>
                <p className="text-[12px] leading-relaxed text-base-content/60">
                  Permanent access. Your progress, history, and profile will be saved securely and accessible from any device.
                </p>
              </span>
            </article>

          </section>
        </main>

        <section className="opacity-60 hover:opacity-80 mt-6">
          <Link href="/" className="btn btn-ghost btn-sm">Back to home</Link>
        </section>

      </div>
    </div>
    </>
  )
}