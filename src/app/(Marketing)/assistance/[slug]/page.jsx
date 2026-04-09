import ClinicsDirectory from "@components/clinic/ClinicsDirectory"
import { getClinicBySlug } from "@lib/clinic/clinicInfo"
import Header from "@components/ui/Header"

export const metadata = {
  title: "Assistance | Compass",
  description: "Assistance",
}

export default async function AssistanceSlugPage({ params }) {
  const { slug } = await params
  const clinic = await getClinicBySlug(slug)

  return (
    <main className="min-h-screen">
      <Header
        title="Connect with a"
        highlight="Provider."
        subtitle="Take the first step toward better mental health."
        imageSrc="/compass-appointment.png"
      />
      <section className="p-8 max-w-6xl mx-auto">
        <ClinicsDirectory basePath="/assistance" selectedClinic={clinic} />
      </section>
    </main>
  )
}
