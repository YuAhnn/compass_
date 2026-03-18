import { getOrCreateProfile } from "@lib/auth/actions"
import { logActivity } from "@lib/auth/activity"
import DiceBear from "@components/ui/DiceBear"

export default async function Profile() {
  const profile = await getOrCreateProfile()

  if (profile) {
    await logActivity("page_view", "/dashboard")
  }

  return (
  <section className="m-2 h-fit w-full max-w-2xl border border-base-200 bg-base-200/50 rounded-2xl p-8 shadow-sm">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <DiceBear seed={profile?.nickname} className="w-16 h-16 md:w-32 md:h-32"/>
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight"> Welcome, {profile?.nickname || "Friend"} </h1>
        <p className="text-base-content/60 mt-2 text-lg"> We're glad to see you on your personal Dashboard. </p>
      </div>
    </div>
  </section>
  )
}