import { generateSupportFeedback } from 'lib/assessment/message'

export async function POST(req) {
  const { 
    assessment, 
    score, 
    interpretation 
  } = await req.json()

  try {
    const message = await generateSupportFeedback(assessment, score, interpretation)

    return new Response(JSON.stringify( { message } ), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })

  } catch (err) {
    console.error('Failed to generate support feedback', err)

    return new Response(JSON.stringify({ error: 'Failed to generate support feedback' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}