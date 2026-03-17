"use server"

import { createClient } from "lib/supabase/server"
import { createAdminClient } from "lib/supabase/admin"

export async function isNicknameTaken(nickname, currentUserId) {
  const supabase = await createClient()
  const { data } = await supabase
    .from("profiles")
    .select("id")
    .eq("nickname", nickname)
    .neq("id", currentUserId)
    .maybeSingle()
  
  return !!data
}

export async function saveNickname(nickname) {
  const clientAuth = await createClient()
  const { data: { user } } = await clientAuth.auth.getUser()

  if (!user) throw new Error("Not logged in.")

  await clientAuth.auth.updateUser({ data: { nickname } })

  const supabase = await createAdminClient()
  const { error } = await supabase
    .from("profiles")
    .upsert({ 
      id: user.id, 
      nickname, 
      is_anonymous: user.is_anonymous ?? true 
    }, { onConflict: "id" })

  if (error?.code === "23505") 
    return { error: "taken" }
  
  if (error) 
    throw error
  
  return { success: true }
}