export const GUEST_MESSAGES = {
  low: [
    "Hey, from the outside it seems like you're holding things together pretty well. Life's not perfect, but you're managing, and that counts for a lot. Just don't forget to check in with yourself too. You don't always have to push through—rest when you need to."
  ],
  mild: [
    "Hey, I don't know exactly what's been on your mind, but it feels like something's been there lately. Not overwhelming, just… present. You don't have to ignore it or rush to fix it. Just take a moment, sit with it, and be kind to yourself while you figure things out."
  ],
  moderate: [
    "Hey, it really sounds like things have been weighing on you more than usual. That kind of heaviness can sneak into everything, and it's tiring. You don't have to carry it all by yourself though. Even letting someone in just a little can make it feel less heavy."
  ],
  severe: [
    "Hey… whatever you're carrying right now feels really heavy, and I'm sorry you're in that place. You don't have to go through it alone, even if it feels like that. If you can, reach out to someone—just being heard can matter more than you think. I'm really glad you're still here."
  ],
}

export function getGuestMessage(interpretation) {
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

  const messages = GUEST_MESSAGES[level]
  return messages[Math.floor(Math.random() * messages.length)]
}