import { getGuestMessage } from '@lib/assessment/staticMessages'
import { getGuestRecommendation } from '@lib/assessment/staticRecommendation'

export async function generateSupport({ assessment, score, interpretation, isGuest = false }) {

  if (isGuest) return getGuestMessage(interpretation)

  try {
    const response = await fetch('/api/message', {
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
  if (isGuest) return getGuestRecommendation(interpretation)

  try {
    const response = await fetch('/api/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assessment, score, interpretation }),
    })

    if (!response.ok) throw new Error(`Failed: ${response.status}`)

    const data = await response.json()
    return data.recommendations
  } catch (error) {
    console.error('Failed to generate recommendations', error)
    return getGuestRecommendation(interpretation)
  }
}