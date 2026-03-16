import ArticleGrid from "components/article/ArticleGrid"

export const metadata = {
  title: "Helpful Articles | Compass",
  description: "Read helpful articles focused on clarity, growth, and direction.",
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-base-100">
      <section className="max-w-6xl mx-auto mt-10 px-4">
        <ArticleGrid />
      </section>
    </main>
  )
}