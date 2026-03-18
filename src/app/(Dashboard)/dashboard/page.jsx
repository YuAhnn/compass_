import { createClient } from "@lib/supabase/server"
import { redirect } from "next/navigation"
import Profile from "@components/dashboard/Profile"
import IsAdminBtn from "@components/admin/IsAdminBtn"

export default async function DashboardPage() {
  const supabase = await createClient()
  const {data: { user }} = await supabase.auth.getUser()

  if (!user) redirect("/create-profile") 

  const { data: profiles } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  const isAdmin = profiles?.role === 'admin'

  return (
    <>
      <main className="flex min-h-[97vh] bg-base-100 rounded-2xl border border-primary/30 space-x-5">
        <Profile/>
      </main>
      {isAdmin && <IsAdminBtn isAdmin={isAdmin}/>}
    </>
  )
}