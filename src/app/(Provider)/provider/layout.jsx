"use server"

import { getOrCreateProfile } from "@lib/auth/actions"
import { redirect } from "next/navigation"

export default async function ProviderLayout({ children }) {
  const profile = await getOrCreateProfile()

  if (profile.role !== "provider") {
    redirect("/")
  }

  return (
    <>
      {children}
    </>
  )
}