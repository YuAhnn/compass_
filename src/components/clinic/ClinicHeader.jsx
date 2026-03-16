import { MapPin } from 'lucide-react'

export default function ClinicHeader({ clinic }) {
  if (!clinic) return null

  const searchQuery = `${clinic.name}, ${clinic.address}`
  
  const mapsLink = `https://www.google.com/maps?q=undefined,undefined...0${encodeURIComponent(searchQuery)}`

  return (
    <main className="flex flex-col justify-between items-start sm:flex-row sm:items-center gap-4">
      <h1 className="text-xl md:text-2xl font-bold text-base-content">{clinic.name}</h1>
      <a 
        href={mapsLink} 
        target="_blank"
        className="btn btn-primary btn-sm md:btn-md hover:bg-primary/20 hover:text-primary transition-all duration-200 ease-in-out border-none rounded-full dark:text-white shrink-0 shadow-md"
      >
        <MapPin className="w-4 h-4" /> 
        Open in Maps
      </a>
    </main>
  )
}