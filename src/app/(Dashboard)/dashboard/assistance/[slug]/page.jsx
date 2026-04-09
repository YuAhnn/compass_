import ClinicsDirectory from "@components/clinic/ClinicsDirectory"
import { getClinicBySlug } from "@lib/clinic/clinicInfo"
import Header from "@components/ui/Header"

export const metadata = {
  title: "Assistance | Compass",
  description: "Assistance",
}

export default async function SupportSlugPage({ params }) {
  const { slug } = await params
  const clinic = await getClinicBySlug(slug)

  return (
    <main className="min-h-[95vh] border border-primary/30 bg-base-100 rounded-2xl overflow-hidden flex flex-col">    
      <Header
        title="Connect with a"
        highlight="Provider."
        subtitle="Take the first step toward better mental health."
        imageSrc="/compass-appointment.png"
      />
      <ClinicsDirectory basePath="/dashboard/assistance" selectedClinic={clinic} />
    </main>
  )
}
