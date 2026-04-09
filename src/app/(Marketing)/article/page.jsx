import ArticleSearch from "@components/article/ArticleSearch"
import ArticleCategory from "@components/article/ArticleCategory"
import ArticleGrid from "@components/article/ArticleGrid"
import Header from "@components/ui/Header"
import Link from "next/link"
import { X } from "lucide-react"

export const metadata = {
  title: "Helpful Articles | Compass",
  description: "Read helpful articles focused on clarity, growth, and direction.",
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-base-100">
      <section className="max-w-5xl mx-auto mt-10 px-4">
        <header className="mb-20">
          <Header
            title="Find Helpful"
            highlight="Articles"
            subtitle="Clear, Practical Articles About Mental Health and Well-Being"
            imageSrc="/compass-articles.png"
          />
          <section className='flex flex-col sm:flex-row md:flex-row justify-between items-start xl:items-center gap-6 mt-10 mb-10'>
            <div className="h-1.5 w-45 bg-primary mt-2"></div>

            <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto md:w-auto lg:w-auto gap-3">
              <div className="w-full">
                <ArticleSearch />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="flex-1 sm:flex-none">
                  <ArticleCategory />
                </div>
                <Link
                  href="/article"
                  className="btn btn-md btn-circle border border-neutral/20 hover:text-error hover:bg-error/10 transition-colors shrink-0 bg-base-100/80 backdrop-blur-md shadow-sm"
                  title="Clear filters">
                  <X size={20}/>
                </Link>
              </div>
            </div>

          </section>
        </header>
        <ArticleGrid />
      </section>
    </main>
  )
}