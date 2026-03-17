import { createClient } from 'lib/supabase/server'
import { generateSupportFeedback } from 'lib/assessment/message'

export async function POST(req) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return new Response(JSON.stringify({ error: 'Sign in to personalize this experience' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const { assessment, score, interpretation } = await req.json()

    const message = await generateSupportFeedback(
      assessment,
      score,
      interpretation
    )

    return new Response(JSON.stringify({ message }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    console.error(err)

    return new Response(
      JSON.stringify({ error: 'Message unavailable. Please try again' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}