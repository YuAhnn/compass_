"use server"

import { getOrCreateProfile } from "@lib/auth/actions"
import { redirect } from "next/navigation"

export default async function AdminLayout({ children }) {
  const profile = await getOrCreateProfile()

  if (profile.role !== "admin") {
    redirect("/")
  }

  return (
    <>
      {children}
    </>
  )
}