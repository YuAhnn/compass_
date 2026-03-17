'use client'

import { MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ClinicList({ clinics, basePath, selectedClinic }) {
  return (
    <aside className="flex flex-col w-full md:w-80 lg:w-96 h-full border-r border-base-300 bg-base-100 shrink-0">
      <section className="flex-1 overflow-y-auto px-4 py-4 md:py-6 space-y-2">
        {clinics?.length > 0 ? (
          clinics.map((clinic) => {
            const isSelected = selectedClinic?.id === clinic.id

            return (
              <Link
                key={clinic.id}
                href={`${basePath}/${clinic.slug}`}
                className={`flex items-center w-full gap-3 md:gap-4 p-3 md:p-4 text-left transition-all border rounded-xl ${
                  isSelected
                    ? 'bg-primary/10 border border-primary/30 shadow-sm'
                    : 'bg-base-100 border-transparent hover:bg-accent/50 hover:border-accent'
                }`}
              >
                <figure className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </figure>

                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-semibold text-sm md:text-base truncate ${
                      isSelected ? 'text-primary' : 'text-base-content'
                    }`}
                  >
                    {clinic.name}
                  </h4>

                  <p className="mt-0.5 md:mt-1 text-[10px] md:text-xs text-base-content/60 truncate">
                    {clinic.address || 'Location information unavailable'}
                  </p>
                </div>
              </Link>
            )
          })
        ) : (
          <section className="flex flex-col items-center justify-center py-12 text-center text-base-content/40">
            <MapPin className="w-12 h-12 mb-3 opacity-30" />
            <p className="text-sm font-medium">No clinics available</p>
          </section>
        )}
      </section>
    </aside>
  )
}