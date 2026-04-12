import groq  from '@lib/service/ai'

const INTRODUCTIONS = [
  "Start with something simple like 'Hey, I hear you.'",
  "Say a small, warm observation about what they’re feeling.",
  "Gently acknowledge their situation.",
  "Use a calm line to help them feel grounded.",
  "Share a soft message that offers a little hope.",
  "Notice the feeling without labeling it too strongly.",
  "Give a simple, sincere affirmation.",
  "Offer a friendly check-in.",
  "Start with a short comforting line.",
  "Keep it warm and kind."
]

function makePrompt(assessment, score, interpretation) {
  const introduction = INTRODUCTIONS[Math.floor(Math.random() * INTRODUCTIONS.length)]

  return `The user finished a mental health questionnaire (e.g., PHQ-9, GAD-7, PSS, etc.): ${assessment}
          Interpretation: ${interpretation}
          Score: ${score}

          Adjust your tone and language based on the severity (${interpretation}):

          - Low: light, chill, friendly. Acknowledge they are doing okay. (e.g., "glad you're checking in")
          - Mild: gentle, understanding. Normalize minor struggles.
          - Moderate: acknowledge emotional weight. (e.g., "it makes sense that things feel a bit much")
          - High: calm, steady, real, grounding. (e.g., "this feels heavy", "a lot to carry")

          Use this style: ${introduction}

          Rules:
          - Never mention scores, results, tests or labels
          - Avoid clinical or diagnostic terms
          - Do not name emotions explicitly (e.g., avoid specific labels)
          - Use simple, natural language
          - Keep under 100 words
          
          Critical:
          - Do not ask questions
          - Do not suggest actions or next steps
          - Do not invite conversation or sharing

          Instead:
          - Recognize the feeling indirectly and appropriately for the severity level
          - Normalize the experience
          - Offer quiet presence (“I’m here with you”)
          - Create a sense of safety without expectation`
}
//FUNCTION TO GENERATE SUPPORT FEEDBACK
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