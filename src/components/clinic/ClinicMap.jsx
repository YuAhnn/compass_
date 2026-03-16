export default function ClinicMap({ clinic }) {
  if (!clinic) return null

  const searchQuery = `${clinic.name}, ${clinic.address}`

  const clinicMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(searchQuery)}&z=15&output=embed`

  return (
    <iframe
      title={clinic.name}
      src={clinicMapUrl}
      className="w-full h-full rounded-xl"
      loading="lazy"
    />
  )
}