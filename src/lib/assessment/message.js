import { Groq } from 'groq-sdk'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

const INTRODUCTIONS = [
  "You can start with something simple like, 'Hey, I hear you.'",
  "Maybe begin with a small, warm observation about what they’re going through.",
  "You might open by gently acknowledging their situation.",
  "Start with a calm line that helps them feel a bit grounded.",
  "You can begin with a soft message that gives a little hope.",
  "Maybe start by noticing the feeling, without putting too strong a label on it.",
  "Open with a simple but sincere affirmation for them."
]

function makePrompt(assessment, score, interpretation) {
  const introduction = INTRODUCTIONS[Math.floor(Math.random() * INTRODUCTIONS.length)]

  return `The user just completed: ${assessment} 
          Their interpretation: ${interpretation} 
          Score: ${score}
          Understand support level from interpretation:
          Based on how they are doing, adjust your presence:
          - If they are doing okay (Low): Keep it chill. No need to overdo the comfort. Maybe just a small check-in like “good to see you’re doing alright” or just a simple high-five vibe.
          - If they are a little off but still managing (Mild): Be a bit more present. A simple “I get you” or “that makes sense” can go a long way. Just keep it light and supportive, like someone sitting beside them for a while.
          - If they are feeling the weight (Moderate): Lean in a little. Let them know life can really get heavy sometimes. You don’t have to fix anything. Just stay there with them, like standing beside them while it’s raining, and remind them it’s normal to feel that way.
          - If they are in the deep end (High): Be a steady presence. Don’t rush with positive words that might feel forced. Acknowledge that the pain is real and heavy. Sometimes just being quiet but present is already big help. If the moment feels right, gently remind them they don’t have to carry everything alone.
          Use this style: ${introduction}
          Follow these rules:
          - Don’t mention scores, assessments, or results
          - No medical advice
          - Be calm, kind, and gentle
          - Use simple everyday words
          - Keep it under 70 words`
}

export async function generateSupportFeedback(assessment, score, interpretation) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system',
          content: 'You are a kind, quiet friend who is there to support the user. Speak simply. Avoid clinical language. Never mention scores or results. Keep it gentle and supportive.',
        },
        {
          role: 'user',
          content: makePrompt(assessment, score, interpretation),
        },
      ],
      model: 'llama-3.1-8b-instant',
      temperature: 0.85,
      max_completion_tokens: 90,
      top_p: 1,
      stream: true,
      stop: null,
    })
    let fullResponse = ''
    for await (const chunk of chatCompletion) {
      fullResponse += chunk.choices[0]?.delta?.content || ''
    }
    return fullResponse
  } catch (error) {
      console.error('Groq Unavailable:', error.message)
      return `I’m sorry, I am having some technical difficulties at the moment, but please know that you're not alone.`
  }
}