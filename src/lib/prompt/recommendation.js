import groq  from '@lib/api/ai'

function makeRecommendationPrompt(assessment, score, interpretation) {
  return `The user finished a mental health questionnaire (e.g., PHQ-9, GAD-7, PSS, etc.): ${assessment}
          Interpretation: ${interpretation}
          Score: ${score}

          Return ONLY a valid JSON object — no markdown, no explanation, no extra text.
          Structure it exactly like this:
          {
            "quote": { "text": "...", "author": "..." },
            "verse": { "text": "...", "reference": "...", "version": "ESV" },
            "activities": ["...", "...", "...", "..."]
          }

          Rules:
          - Adapt to severity level (${interpretation})
          - quote: one relevant quote (not cliché)
          - verse: one biblical verse in ESV
          - 4 simple, self-care activity for today (under 10–15 minutes each) and avoid complex or high-effort tasks; keep each activity one short, actionable sentence
          - Return ONLY the JSON object`
}

export async function generateRecommendation(assessment, score, interpretation) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a compassionate compananion assistant. Respond ONLY with a valid JSON object. No explanation, no extra text. Output must be directly parseable by JSON.parse().',
        },
        {
          role: 'user',
          content: makeRecommendationPrompt(assessment, score, interpretation),
        },
      ],
      model: 'llama-3.1-8b-instant',
      temperature: 0.85,
      max_completion_tokens: 160,
      top_p: 1,
      stream: true,
      stop: null,
    })

    let fullResponse = ''
    for await (const chunk of chatCompletion) {
      fullResponse += chunk.choices[0]?.delta?.content || ''
    }

    return JSON.parse(fullResponse.trim())
  } catch (error) {
    console.error('Groq Recommendations Unavailable:', error.message)
    return null
  }
}