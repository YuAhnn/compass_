"use server"

import { createAdminClient } from "lib/supabase/admin"
import { supabase as defaultClient } from "lib/supabase/client"
import { createClient } from "lib/supabase/server"

export async function getUserId() {
  const authClient = await createClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) throw new Error("Unauthorized")
  return user.id
}

// Fetch all assessments
export async function getAllAssessments(client = defaultClient) {
  const { data, error } = await client
    .from("assessment")
    .select(`
      id,
      title,
      slug,
      assessment_card (
        short_description,
        icon,
        display_size
      )
    `)

  if (error) {
    console.error('getAllAssessments DB error:', error.message)
    throw new Error('Failed to load assessments. Please try again.')
  }

  return data.map(item => ({
    assessment_id: item.id,
    title: item.title,
    slug: item.slug,
    short_description: item.assessment_card?.short_description || "Get quick insights",
    icon: item.assessment_card?.icon,
    display_size: item.assessment_card?.display_size,
  }))
}

// Fetch assessment by slug or ID
export async function getAssessmentBySlug(slugOrId, client = defaultClient) {
  const { data: assessment, error: assessmentError } = await client
    .from("assessment")
    .select("*")
    .or(`id.eq.${slugOrId},slug.eq.${slugOrId}`)
    .single()

  if (assessmentError) {
    console.error('getAssessmentBySlug DB error:', assessmentError.message)
    throw new Error('Assessment not found.')
  }

  const assessmentId = assessment.id

  const [instructions, scales, scoring, interpretation, questions] = await Promise.all([
    client.from("assessment_instruction").select("*").eq("assessment_id", assessmentId).order("display_order"),
    client.from("assessment_scale").select("*").eq("assessment_id", assessmentId).order("value"),
    client.from("assessment_scoring").select("*").eq("assessment_id", assessmentId).single(),
    client.from("assessment_interpretation").select("*").eq("assessment_id", assessmentId),
    client.from("assessment_question").select("*").eq("assessment_id", assessmentId).order("display_order"),
  ])

  return {
    assessment,
    instructions: instructions.data || [],
    scales: scales.data || [],
    scoring: scoring.data,
    interpretation: interpretation.data || [],
    questions: questions.data || [],
  }
}

//Save
export async function saveResult(payload) {
  const userId = await getUserId()
  const adminClient = await createAdminClient()
  const { error } = await adminClient
    .from("assessment_result")
    .insert({ ...payload, user_id: userId })

  if (error) {
    console.error('saveResult DB error:', error.message)
    throw new Error('Failed to save result. Please try again.')
  }
}

// User delete single assessment
export async function deleteAssessmentResult(resultId) {
  const userId = await getUserId()
  const adminClient = await createAdminClient()
  const { error } = await adminClient
    .from("assessment_result")
    .delete()
    .eq("id", resultId)
    .eq("user_id", userId)

  if (error) {
    console.error('deleteAssessmentResult DB error:', error.message)
    throw new Error('Failed to delete result. Please try again.')
  }
}

// User delete all results
export async function deleteAllUserResults(userId) {
  const authenticatedUserId = await getUserId()
  if (authenticatedUserId !== userId) throw new Error("Unauthorized")

  const adminClient = await createAdminClient()
  const { error } = await adminClient
    .from("assessment_result")
    .delete()
    .eq("user_id", userId)

  if (error) {
    console.error('deleteAllUserResults DB error:', error.message)
    throw new Error('Failed to delete results. Please try again.')
  }
}

//Fetch all results for a user
export async function getUserAssessmentResults(userId, client = defaultClient) {
  const { data, error } = await client
    .from("assessment_result")
    .select(`
      id,
      assessment_id,
      score,
      interpretation,
      created_at,
      assessment (
        title,
        slug
      )
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error('getUserAssessmentResults DB error:', error.message)
    throw new Error('Failed to load your results. Please try again.')
  }

  return data.map(result => ({
    result_id: result.id,
    assessment_id: result.assessment_id,
    assessment_title: result.assessment?.title,
    assessment_slug: result.assessment?.slug,
    score: result.score,
    interpretation: result.interpretation,
    created_at: result.created_at,
  }))
}