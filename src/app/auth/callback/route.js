import { createClient } from "@lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      const { data } = await supabase.auth.getUser()
      const user = data.user

      if (user) {
        const { data: profile } = await supabase
        .from("profiles")
        .select("id, nickname")
        .eq("id", user.id)
        .maybeSingle()
        
        const isNicknameValid = profile?.nickname && !profile.nickname.startsWith("guest_")

        if (profile && isNicknameValid) {
          return NextResponse.redirect(`${origin}/dashboard`)
        }
        
        return NextResponse.redirect(`${origin}/create-profile/sign-in`)
      }
    }
  }
  
  return NextResponse.redirect(`${origin}/create-profile`)
}