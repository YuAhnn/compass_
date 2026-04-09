import ClinicsDirectory from "@components/clinic/ClinicsDirectory"
import Header from "@components/ui/Header"

export const metadata = {
  title: "Assistance | Compass",
  description: "Assistance",
}

export default function SupportPage() {
  return (
    <main className="min-h-[95vh] border border-primary/30 bg-base-100 rounded-2xl overflow-hidden flex flex-col">    
      <Header
        title="Connect with a"
        highlight="Provider."
        subtitle="Take the first step toward better mental health."
        imageSrc="/compass-appointment.png"
      />
      <ClinicsDirectory basePath="/dashboard/assistance" />
    </main>
  )
}