export const GUEST_RECOMMENDATIONS = {
  low: {
    quote: {
      text: "Small steps every day can shape a better tomorrow.",
      author: "Unknown"
    },
    verse: {
      text: "Let all that you do be done in love.",
      reference: "1 Corinthians 16:14",
      version: "ESV"
    },
    activities: [
      "Take 5 slow deep breaths, focusing on each inhale and exhale.",
      "Step outside for a short 10-minute walk and notice your surroundings.",
      "Write down one thing you’re grateful for today.",
      "Drink a glass of water and stretch your body gently."
    ]
  },

  mild: {
    quote: {
      text: "You don’t have to control your thoughts—you just have to stop letting them control you.",
      author: "Dan Millman"
    },
    verse: {
      text: "Cast all your anxieties on him, because he cares for you.",
      reference: "1 Peter 5:7",
      version: "ESV"
    },
    activities: [
      "Pause and name what you’re feeling in one word.",
      "Do a 10-minute light activity like stretching or tidying a small space.",
      "Listen to a calming song and focus only on the sound.",
      "Text or message someone you trust, even just to say hello."
    ]
  },

  moderate: {
    quote: {
      text: "You are not your worst moments—you are still growing.",
      author: "Unknown"
    },
    verse: {
      text: "The Lord is near to the brokenhearted and saves the crushed in spirit.",
      reference: "Psalm 34:18",
      version: "ESV"
    },
    activities: [
      "Sit quietly and take slow breaths for 5 minutes, counting each inhale.",
      "Write down what’s bothering you without judging it.",
      "Break one task into a tiny step and complete just that step.",
      "Wash your face or take a quick shower to reset your body."
    ]
  },

  severe: {
    quote: {
      text: "Even the darkest night will end and the sun will rise.",
      author: "Victor Hugo"
    },
    verse: {
      text: "Fear not, for I am with you; be not dismayed, for I am your God.",
      reference: "Isaiah 41:10",
      version: "ESV"
    },
    activities: [
      "Focus on your breathing: inhale for 4 seconds, exhale for 6 seconds.",
      "Hold something comforting and ground yourself by noticing 5 things around you.",
      "Reach out to someone you trust and let them know you need support.",
      "Sit in a safe, quiet space and remind yourself you are not alone."
    ]
  }
}

export function getGuestRecommendation(interpretation) {
  const text = interpretation?.toLowerCase() ?? ''
  let level = 'mild'

  if (text.includes('low') || text.includes('minimal')) {
    level = 'low'
  } else if (text.includes('severe')) {
    level = 'severe'
  } else if (text.includes('moderate')) {
    level = 'moderate'
  } else if (text.includes('mild')) {
    level = 'mild'
  }

  return GUEST_RECOMMENDATIONS[level]
}