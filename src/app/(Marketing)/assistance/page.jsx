export const metadata = {
  title: "Assistance | Compass",
  description: "Assistance",
}

import ClinicsDirectory from "components/clinic/ClinicsDirectory"

export default function AssistancePage() {
  return (
    <main className="min-h-screen">
      <section className="p-8 max-w-6xl mx-auto">
        <ClinicsDirectory basePath="/assistance" />
      </section>
    </main>
  )
}