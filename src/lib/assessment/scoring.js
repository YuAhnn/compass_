export function calculateScore({ answers, scoringConfig, scales }) {
  const { method, reverse_items } = scoringConfig

  let max = 0
  let min = 0
  // Get highest and lowest possible scale values
  if (scales && scales.length > 0) {
    const values = scales.map(s => s.value)
    max = Math.max(...values)
    min = Math.min(...values)
  }
  // Reverse-scored items formula: (max + min - answer)
  const adjustedAnswers = answers.map((answer, index) => {
    const isReverse = reverse_items?.includes(index + 1)
    return isReverse ? (max + min - answer) : answer
  })

  const total = adjustedAnswers.reduce((sum, val) => sum + val, 0)

  if (method === 'sum') return total                        

  return 0
}
// Find: Matching interpretation to given score/total.
export function interpretScore(score, ranges) {
  const result = ranges.find(
    range => score >= range.min_score && score <= range.max_score
  )
  return result?.label ?? 'No interpretation available'
}