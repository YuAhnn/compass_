import ArticleGrid from "components/article/ArticleGrid"

export const metadata = {
  title: "Articles | Compass",
  description: "Read helpful articles focused on clarity, growth, and direction.",
}

export default function ArticlePage() {
  return (
    <main className="min-h-[97vh] bg-base-100 rounded-2xl border border-primary/30">
      <section className="max-w-6xl mx-auto mt-10 px-4">
        <ArticleGrid basePath="/dashboard" />
      </section>
    </main>
  )
}