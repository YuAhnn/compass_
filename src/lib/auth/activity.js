import { createAdminClient } from "lib/supabase/admin"
import { createClient } from "lib/supabase/server"

export async function logActivity(event, path) {
  const authClient = await createClient()
  const { data: { user } } = await authClient.auth.getUser()

  if (!user) return

  const supabase = await createAdminClient()

  await supabase.from("user_activity").insert({
    profile_id: user.id,
    event,
    path,
    user_agent: "nextjs-server"
  })
}