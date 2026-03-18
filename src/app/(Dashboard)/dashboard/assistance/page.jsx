export const metadata = {
  title: "Assistance | Compass",
  description: "Assistance",
}

import ClinicsDirectory from "@components/clinic/ClinicsDirectory"

export default function SupportPage() {
  return (
    <main className="min-h-[95vh] border border-primary/30 bg-base-100 rounded-2xl overflow-hidden">    
    <ClinicsDirectory basePath="/dashboard/assistance" />
    </main>
  )
}