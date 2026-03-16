'use client'

import { useEffect, useState } from "react"
import { getClinics } from "lib/clinics/clinicInfo"

export function useClinicInfo() {

  const [clinics, setClinics] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await getClinics()
      setClinics(data)
      setLoading(false)
    }

    load()
  }, [])

  return { clinics, loading }
}