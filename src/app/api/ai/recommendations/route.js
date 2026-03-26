import { createClient } from '@lib/supabase/server'
import { generateRecommendation } from '@lib/prompt/recommendation'

export async function POST(req) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return new Response(JSON.stringify({ error: 'Sign in to unlock personalized recommendations' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const { assessment, score, interpretation } = await req.json()

    const recommendations = await generateRecommendation(assessment, score, interpretation)

    return new Response(JSON.stringify({ recommendations }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ error: 'Recommendations unavailable. Please try again.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
