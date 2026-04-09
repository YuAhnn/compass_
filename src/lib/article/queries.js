import { supabase } from "@lib/supabase/client"

export async function getArticleBySlug(slug) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error) throw error
  return data
}

export async function getAllArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("id, title, slug, category, image_url, bg_color, created_at")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error in getAllArticles:", error.message)
    throw error
  }
  return data
}

export async function getPaginatedArticles({
  page = 1,
  pageSize = 6,
  searchQuery = "",
  category = "All",
  fields = "id, title, slug, category, image_url, bg_color, created_at"
} = {}) {
  
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1

  let queryBuilder = supabase
    .from("articles")
    .select(fields, { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to)

  if (searchQuery) {
    queryBuilder = queryBuilder.textSearch("title", searchQuery, { type: "websearch" })
  }

  if (category && category !== "All") {
    queryBuilder = queryBuilder.eq("category", category)
  }

  const { data, count, error } = await queryBuilder

  if (error) {
    console.error("Error in getPaginatedArticles:", error.message)
    throw error
  }
  return { data, count }
}

export async function getArticlesCount() {
  const { count, error } = await supabase
    .from("articles")
    .select("id", { count: "exact", head: true })

  if (error) {
    console.error("Error in getArticlesCount:", error.message)
    throw error
  }
  return count
}

export async function getUniqueCategories() {
  const { data, error } = await supabase
  .from("articles")
  .select("category")

  if (error) {
    console.error("Error fetching categories:", error.message)
    return []
  }

  return data.map(item => item.category).filter(Boolean).sort()
}