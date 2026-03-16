import DiceBear from "components/ui/DiceBear"

export default function ProfileHeader({ nickname }) {
  return (
    <header className="mb-10 text-center lg:text-left">
      <DiceBear
        seed={nickname || "guest"}
        className="w-24 h-24 shadow-lg mb-6 mx-auto lg:mx-0"
      />
      <h2 className="text-3xl font-bold tracking-tight">Choose your nickname</h2>
      <p className="text-base-content/60 mt-2">This is how you'll be known on Compass.</p>
    </header>
  )
}
