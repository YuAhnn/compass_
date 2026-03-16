"use client"

import { useState, useEffect } from "react"
import { getPaginatedArticles } from "lib/article/queries"
import ArticleCard from "./ArticleCard"
import Pagination from "components/ui/Pagination"
import Link from "next/link"
import ArticleSkeleton from 'components/article/ArticleSkeleton'

const ARTICLES_PER_PAGE = 6

export default function ArticleGrid({ basePath = "" }) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)

  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const { data, count } = await getPaginatedArticles(currentPage, ARTICLES_PER_PAGE)
        setArticles(data || [])
        setTotalArticles(count || 0)
      } catch (error) {
        console.error("Error fetching articles:", error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    if (!loading) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [currentPage])

  if (loading) {
    return (
      <div className="container mx-auto max-w-7xl">
        <ArticleSkeleton />
      </div>
    )
  }

  return (
    <main>
      <header className="mb-10">
        <h1 className="text-base-content text-2xl lg:text-4xl font-black uppercase">
          Featured Articles
        </h1>
        <div className="h-1.5 w-20 bg-primary mt-2"></div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        {articles.length > 0 ? (
          articles.map((item) => (
            <Link
              href={`${basePath}/article/${item.slug}`}
              key={item.id}
              className="block transition-transform hover:scale-[1.01]"
            >
              <ArticleCard
               title={item.title}
               category={item.category}
               date={new Date(item.created_at).toLocaleDateString("en-US", {
                 month: "short",
                 day: "numeric",
                 year: "numeric",
               })}
               imagePlaceholder={item.image_url}
               bgColor={item.bg_color}
              />
            </Link>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-base-200 rounded-box">
            <p className="text-neutral-500 font-medium">
              No articles available at the moment.
            </p>
          </div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  )
}