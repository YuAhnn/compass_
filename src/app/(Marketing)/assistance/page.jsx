import ClinicsDirectory from "@components/clinic/ClinicsDirectory"
import Header from "@components/ui/Header"

export const metadata = {
  title: "Assistance | Compass",
  description: "Assistance",
}

export default function AssistancePage() {
  return (
    <main className="min-h-screen">
      <section className="p-8 max-w-6xl mx-auto">
        <Header
          title="Connect with a"
          highlight="Provider."
          subtitle="Take the first step toward better mental health."
          imageSrc="/compass-appointment.png"
        />
        <ClinicsDirectory basePath="/assistance" />
      </section>
    </main>
  )
}