export async function generateSupport({ assessment, score, interpretation }) {
  try {
    const response = await fetch('/api/compassion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assessment, score, interpretation }),
    })

    if (!response.ok) {
      throw new Error(`Failed: ${response.status}`)
    }

    const data = await response.json()
    return data.message 
  } catch (error) {
    console.error('Failed to generate support feedback', error)
    return "Thank you for sharing. Taking this step shows courage, and it's okay to pause and take things at your own pace."
  }
}