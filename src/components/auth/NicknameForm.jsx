"use client"

import { z } from "zod"
import { useState, useEffect, useRef } from "react"
import { isNicknameTaken, saveNickname } from "lib/profiles/actions"
import DiceBear from "components/ui/DiceBear"

const schema = z.string().min(3).max(24).regex(/^[a-zA-Z0-9_ ]+$/)

export default function NicknameForm({ user, onSuccess }) {
  const [nickname, setNickname] = useState(user?.user_metadata?.nickname ?? "")
  const [hint, setHint] = useState("")
  const [ready, setReady] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    setReady(false)
    setHint("")
    if (!schema.safeParse(nickname).success) return

    clearTimeout(timer.current)
    timer.current = setTimeout(async () => {
      const taken = await isNicknameTaken(nickname, user.id)
      if (taken) { 
        setHint("This nickname is already taken."); 
        return 
      }
      setHint("✓ You're all set")
      setReady(true)
    }, 500)
  }, [nickname])

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)

    const result = await saveNickname(nickname).catch(() => ({ error: true }))
    if (result?.error) { 
      setHint("This nickname is already taken."); 
      setReady(false) 
    }
    else { 
      onSuccess?.() 
    }
    setSubmitting(false)
  }

  const ok = hint === "✓ You're all set"

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div className="text-center lg:text-left mb-6">
        <DiceBear seed={nickname || "guest"} className="w-24 h-24 shadow-lg mb-6 mx-auto lg:mx-0" />
        <h2 className="text-3xl font-bold tracking-tight">Choose your nickname</h2>
        <p className="text-base-content/60 mt-2">This is how you'll be known on Compass.</p>
      </div>

      <div className="form-control w-full">
        <label className="label pb-2">
          <span className="label-text font-semibold text-base-content/70">Nickname</span>
          {hint && (
            <span className={`label-text-alt font-medium ${ok ? "text-success" : "text-error"}`}>
              {hint}
            </span>
          )}
        </label>
        <input
          type="text"
          placeholder="A name you're comfortable with"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          autoFocus
          className={`input input-bordered w-full bg-base-200 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all ${ok ? "border-success/30 focus:border-success" : hint ? "border-error/30 focus:border-error" : "focus:border-primary/50"}`}
        />
      </div>

      <button
        type="submit"
        disabled={!ready || submitting}
        className="btn btn-primary btn-block btn-lg rounded-xl shadow-md border-none dark:text-white"
      >
        {submitting ? <span className="loading loading-spinner loading-sm" /> : "Continue"}
      </button>

    </form>
  )
}