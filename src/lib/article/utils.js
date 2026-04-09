export function buildQueryString(currentQuery, changes) {
  const query = new URLSearchParams(currentQuery.toString())

  for (const [key, value] of Object.entries(changes)) {
    value ? query.set(key, value) : query.delete(key)
  }

  if (!changes.page) {
    query.delete("page")
  }

  return query.toString()
}