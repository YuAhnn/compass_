import ClinicsDirectory from "components/clinic/ClinicsDirectory"
import { getClinicBySlug } from "lib/clinic/clinicInfo"

export const metadata = {
  title: "Assistance | Compass",
  description: "Assistance",
}

export default async function AssistanceSlugPage({ params }) {
  const { slug } = await params
  const clinic = await getClinicBySlug(slug)

  return (
    <main className="min-h-screen">
      <section className="p-8 max-w-6xl mx-auto">
        <ClinicsDirectory basePath="/assistance" selectedClinic={clinic} />
      </section>
    </main>
  )
}
