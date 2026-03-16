import { Phone, Globe, Info } from 'lucide-react'
import ClinicIsEmpty from './ClinicIsEmpty'

export default function ClinicDetails({ clinic }) {
  if (!clinic) return <ClinicIsEmpty />

  return (
    <main className="grid gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Description */}
      <section className="p-4 md:p-6 bg-base-100 border border-base-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <h3 className="flex items-center gap-2 mb-3 md:mb-4 text-base md:text-lg font-semibold text-base-content">
          <Info className="w-4 h-4 text-primary" />
          About the Clinic
        </h3>
        <p className="leading-relaxed text-sm md:text-base text-base-content/70 text-justify md:text-left">
          {clinic.description || "No description available for this clinic."}
        </p>

        {/* Socmed Icons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href={clinic.facebook_url ?? "https://www.facebook.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-sm bg-primary border-transparent hover:bg-primary/20 transition-colors"
          >
            <img src="/facebook.svg" alt="Facebook" className="w-4 h-4" />
          </a>
          
          <a
            href={clinic.instagram_url ?? "https://www.instagram.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-sm bg-primary border-transparent hover:bg-primary/20 transition-colors"
          >
            <img src="/instagram.svg" alt="Instagram" className="w-4 h-4" />
          </a>
          
          <a
            href={clinic.website_url ?? "https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-sm bg-primary/90 border-transparent hover:bg-primary/20 transition-colors dark:text-black"
          >
            <Globe className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Contacts */}
      <section className="p-4 md:p-6 border bg-base-100 border-base-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <h3 className="flex items-center gap-2 mb-4 md:mb-6 text-xs font-bold uppercase tracking-widest text-base-content/50">
          <Phone className="w-3.5 h-3.5" />
          Contact Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-1 lg:gap-6">
          {clinic.phone_contact || clinic.email_address ? (
            <>
              {clinic.phone_contact && (
                <div className="group">
                  <p className="text-[10px] md:text-xs font-medium text-primary mb-1 uppercase tracking-wider">Phone Number</p>
                  <p className="text-base md:text-lg font-semibold text-base-content">
                    {clinic.phone_contact}
                  </p>
                </div>
              )}
        
              {clinic.email_address && (
                <div className="group">
                  <p className="text-[10px] md:text-xs font-medium text-primary mb-1 uppercase tracking-wider">Email Address</p>
                  <p className="text-sm md:text-base font-medium text-base-content/80 break-all">
                    {clinic.email_address}
                  </p>
                </div>
              )}
            </>
          ) : (
            <p className="text-sm text-base-content/40 italic">No contact information available.</p>
          )}
        </div>
      </section>
    </main>
  )
}