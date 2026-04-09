"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from 'next/navigation'
import { getUniqueCategories } from "@lib/article/queries"
import { buildQueryString } from '@lib/article/utils'
import { ChevronDown } from "lucide-react"

export default function ArticleCategory() {
  const currentQuery = useSearchParams()
  const [categories, setCategories] = useState([])
  const router = useRouter()
  
  const selectedCategory = currentQuery.get('category')

  useEffect(() => {
    async function fetchCategories() {
      try {
        const uniqueCategories = await getUniqueCategories()
        setCategories(uniqueCategories)
      } catch (error) {
        console.error("Failed to load categories:", error)
      }
    }
    fetchCategories()
  }, [])

  const handleCategorySelect = (category) => {
    const query = buildQueryString(currentQuery, { category })
    router.push(`?${query}`)

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  return (
    <main className="dropdown dropdown-bottom dropdown-center w-full">
      <section 
        tabIndex={0} 
        role="button" 
        className="btn btn-md bg-base-100 hover:bg-base-200 border-neutral/20 shadow-sm font-medium w-full flex-nowrap justify-between sm:justify-center"
      >
        <span className="truncate">
          {selectedCategory || "Category"}
        </span>
        <ChevronDown size={18} className="text-neutral-500 shrink-0"/>
      </section>

      <ul 
        tabIndex={0} 
        className="dropdown-content menu mt-4 bg-base-100 rounded-box w-52 p-2 shadow-lg border border-neutral/10 z-1"
      >
        {categories.map((category) => (
          <li key={category}>
            <a 
              onClick={(e) => {
                e.preventDefault()
                handleCategorySelect(category)
              }}
              className={selectedCategory === category ? 'active bg-primary/10 text-primary font-medium' : ''}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}