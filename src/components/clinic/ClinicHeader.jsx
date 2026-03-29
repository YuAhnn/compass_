import { MapPin } from 'lucide-react'

export default function ClinicHeader({ clinic, children }) {
  if (!clinic) return null

  const searchQuery = `${clinic.name}, ${clinic.address}`
  
  const mapsLink = `https://www.google.com/maps?q=${encodeURIComponent(searchQuery)}`

  return (
    <header className="flex flex-col justify-between items-start sm:flex-row sm:items-center gap-4 w-full">
      <h1 className="text-xl md:text-2xl font-bold text-base-content">{clinic.name}</h1>
      <div className="flex items-center gap-2 shrink-0">
        <a 
          href={mapsLink} 
          target="_blank"
          className="btn btn-primary btn-sm md:btn-md hover:bg-primary/20 hover:text-primary transition-all duration-200 ease-in-out border-none rounded-full dark:text-white shadow-md flex items-center gap-2"
        >
          <MapPin className="w-4 h-4" /> 
          Open in Maps
        </a>
        {children}
      </div>
    </header>
  )
}