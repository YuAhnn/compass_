import { getOrCreateProfile } from "lib/auth/actions"
import { createClient} from "lib/supabase/server"
import { getUserAssessmentResults } from "lib/assessment/queries"
import ProgressHistory from "components/progress/ProgressHistory"

export const metadata = {
    title: "Progress | Compass",
}

export default async function ProgressPage() {
    const profile = await getOrCreateProfile()
    const supabaseClient = await createClient()
    const results = await getUserAssessmentResults(profile.id, supabaseClient)

    return (
        <main className="min-h-[97vh] bg-base-100 rounded-2xl border border-primary/30">
            <section className="p-8 max-w-7xl mx-auto">
                <ProgressHistory results={results} userId={profile.id} />
            </section>
        </main>
    )
}