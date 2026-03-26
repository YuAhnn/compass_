import { getGuestMessage } from '@lib/assessment/staticMessages'

export async function generateSupport({ assessment, score, interpretation, isGuest = false }) {

  if (isGuest) return getGuestMessage(interpretation)

  try {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assessment, score, interpretation }),
    })
    
    if (!response.ok) throw new Error(`Failed: ${response.status}`)
    
    const data = await response.json()
    return data.message
  } catch (error) {
    console.error('Failed to generate support feedback', error)
    return getGuestMessage(interpretation)
  }
}

export async function generateRecommendation({ assessment, score, interpretation, isGuest = false }) {
  if (isGuest) return null

  try {
    const response = await fetch('/api/ai/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assessment, score, interpretation }),
    })

    if (!response.ok) throw new Error(`Failed: ${response.status}`)

    const data = await response.json()
    return data.recommendations
  } catch (error) {
    console.error('Failed to generate recommendations', error)
    return null
  }
}