import { getOrCreateProfile } from "@lib/auth/actions"
import SideBar from "@components/dashboard/SideBar"

export default async function DashboardLayout({ children }) {
  const profile = await getOrCreateProfile()

  return (
    <div className="flex min-h-screen bg-base-200">
      <SideBar profile={profile} />
      <main className="flex-1 transition-all duration-300 pb-4 lg:pb-2 lg:ml-20 px-4 md:px-8 py-4">
        {children}
      </main>
    </div>
  )
}