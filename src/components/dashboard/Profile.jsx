import { getOrCreateProfile } from "@lib/auth/actions"
import { logActivity } from "@lib/auth/activity"
import DiceBear from "@components/ui/DiceBear"
import Greeting from "./Greeting"

export default async function Profile() {
  const profile = await getOrCreateProfile()

  if (profile) {
    await logActivity("page_view", "/dashboard")
  }

  return (
    <header className="w-full h-auto md:h-30 bg-base-100 border border-primary/10 shadow-sm rounded-xl p-2 sm:p-2 lg:p-4 m-4 transition-all duration-300">
      <main className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
        
        <section className="flex items-center gap-4 sm:gap-6 min-w-0">
          <DiceBear 
            seed={profile?.nickname} 
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0"
          />
          <div className="flex flex-col gap-1 min-w-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-base-content tracking-tight">
              {profile?.nickname}
            </h2>
            <p className="text-sm sm:text-base text-base-content/70 max-w-lg leading-relaxed whitespace-normal md:whitespace-nowrap">
              Insights into emotional awareness, self-assessment, and well-being trends.
            </p>
          </div>
        </section>

        <footer className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-base-200/50">
          <Greeting />
        </footer>

      </main>
    </header>
  );
}