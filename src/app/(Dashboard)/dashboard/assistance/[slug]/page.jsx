import ClinicsDirectory from "components/clinic/ClinicsDirectory"
import { getClinicBySlug } from "lib/clinic/clinicInfo"

export const metadata = {
  title: "Assistance | Compass",
  description: "Assistance",
}

export default async function SupportSlugPage({ params }) {
  const { slug } = await params
  const clinic = await getClinicBySlug(slug)

  return (
    <main className="min-h-[95vh] border border-primary/30 bg-base-100 rounded-2xl overflow-hidden">    
      <ClinicsDirectory basePath="/dashboard/assistance" selectedClinic={clinic} />
    </main>
  )
}
