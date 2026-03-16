import { createClient } from "lib/supabase/client";
//Anon
export const signInAnonymously = async () => {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInAnonymously()
  if (error) throw error
  return data
}
//OAuth 
export const signInWithGoogle = async () => {
  const supabase = createClient();
  
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback?next=/create-profile/sign-in`,
    }
  })

  if (error) throw error;
}
//SignOut
export const signOut = async () => {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()
  if (error) throw error
}