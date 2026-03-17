import { supabase } from "lib/supabase/client"

export async function getClinics() {
  const { data, error } = await supabase
    .from("clinics")
    .select("*")
    .order("name")

  if (error) throw error

  return data
}

export async function getClinicBySlug(slug) {
  const { data, error } = await supabase
    .from("clinics")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error) throw error

  return data
}