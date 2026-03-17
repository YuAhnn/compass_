"use client"

import { useClinicInfo } from "hooks/useClinicInfo"
import Link from 'next/link'
import ClinicList from "./ClinicList"
import ClinicHeader from "./ClinicHeader"
import ClinicMap from "./ClinicMap"
import ClinicDetails from "./ClinicDetails"
import ClinicEmpty from "./ClinicIsEmpty"
import { Info, ChevronLeft } from "lucide-react"

export default function ClinicsDirectory({ basePath = "", selectedClinic = null }) {
  const { clinics, loading } = useClinicInfo()

  return (
    <main className="flex h-full overflow-hidden bg-base-100 relative">
      <div className={`${selectedClinic ? 'hidden md:block' : 'block'} h-full w-full md:w-auto`}>
        <ClinicList 
          clinics={clinics} 
          basePath={basePath}
          selectedClinic={selectedClinic} 
        />
      </div>

      <section className={`flex-1 overflow-y-auto bg-base-200/20 h-full ${!selectedClinic ? 'hidden md:block' : 'block'}`}>
        {selectedClinic ? (
          <div className="max-w-6xl p-4 md:p-8 mx-auto space-y-4 md:space-y-6 md:slide-in-from-none duration-500">
            <div className="md:hidden">
              <Link 
                href={basePath}
                className="btn btn-ghost btn-sm gap-2 text-primary"
              >
                <ChevronLeft/> Back
              </Link>
            </div>

            <div className="pb-4 border-b border-base-200">
              <ClinicHeader clinic={selectedClinic} />
            </div>

            {/* Map */}
            <div className="overflow-hidden bg-base-100 border border-base-200 shadow-sm rounded-2xl md:rounded-3xl h-64 md:h-96 lg:h-112 group transition-all hover:shadow-md">
              <ClinicMap clinic={selectedClinic} />
            </div>

            {/* Details + Image */}
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Info */}
              <div className="lg:col-span-7">
                <ClinicDetails clinic={selectedClinic} />
              </div>

              {/* Image */}
              <div className="mt-0 lg:mt-3 lg:col-span-5">
                <div className="lg:sticky lg:top-6 overflow-hidden bg-base-100 border border-base-200 shadow-sm rounded-2xl md:rounded-3xl aspect-square group">
                  {selectedClinic.image_url ? (
                    <img
                      src={selectedClinic.image_url}
                      alt={selectedClinic.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-base-200/30">
                      <Info className="w-12 h-12 text-base-content/20" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:block h-full">
            <ClinicEmpty />
          </div>
        )}
      </section>
    </main>
  )
}