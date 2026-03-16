import { createClient } from "lib/supabase/server"
import { createAdminClient } from "lib/supabase/admin"

export async function getOrCreateProfile() {
  const authClient = await createClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) return null

  const supabase = await createAdminClient()

  const { data: existing } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle()
  if (existing) return existing

  const nickname = user.user_metadata?.nickname

  const { data, error } = await supabase
    .from("profiles")
    .insert({ 
      id: user.id, 
      nickname, 
      is_anonymous: user.is_anonymous ?? true 
    })
    .select()
    .single()

  if (error) throw error
  return data
}