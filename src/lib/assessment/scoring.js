export function calculateScore({
  answers,
  scoringConfig
}) {
  const { method, reverse_items } = scoringConfig

  const processed = answers.map((val, index) => {
    if (reverse_items?.includes(index + 1)) {
      return scoringConfig.scale_max + scoringConfig.scale_min - val
    }
    return val
  })

  if (method === 'sum') {
    return processed.reduce((a, b) => a + b, 0)
  }

  if (method === 'mean') {
    const total = processed.reduce((a, b) => a + b, 0)
    return total / processed.length
  }

  return 0
}

export function interpretScore(score, ranges) {
  const match = ranges.find(
    r => score >= r.min_score && score <= r.max_score
  )
  return match?.label || 'No interpretation available'
}