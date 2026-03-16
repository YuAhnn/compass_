const Emo = [
  { emoji: "🔭", message: "Curious: Explore Articles" },
  { emoji: "📃", message: "Reflect: Take an Assessment" },
  { emoji: "🧭", message: "Navigating: Personal Guidance" },
  { emoji: "⚡", message: "Recharge: Professional Tips" },
  { emoji: "🤝", message: "Connect: Referral Assistance" },
  { emoji: "💬", message: "Companion: Support" }
]

export default function Emoji() {
  return (
    <main className="border border-primary/30 p-4 rounded-2xl absolute z-20 top-[80%] lg:top-[75%] max-w-6xl left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <section className="flex justify-center">
        <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-18 sm:gap-20 md:gap-30 lg:gap-20 list-none p-0 m-0 w-full max-w-6xl px-6">
          {Emo.map((mood, index) => (
            <li
              key={index}
              className="tooltip tooltip-top tooltip-neutral/50 flex justify-center"
              data-tip={mood.message}
            >
              <button className="btn btn-circle border border-accent shadow-sm bg-base-100 mt-4 hover:scale-105 active:scale-95 transition-transform duration-200 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-xl sm:text-2xl md:text-3xl">
                {mood.emoji}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}