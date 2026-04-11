"use client"

import { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { buildQueryString } from '@lib/article/utils'
import { Search } from 'lucide-react'

function SearchContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentQuery = searchParams.get('q') || ""

  const handleSearch = (e) => {
    e.preventDefault()
    const query = new FormData(e.target).get('q')?.trim() || ""
    const queryString = buildQueryString(searchParams, { q: query })

    router.push(`?${queryString}`)
  }

  return(
    <main className="form-control w-full">
      <form onSubmit={handleSearch} className='w-full'>
        <label className="input flex items-center gap-2 w-full outline-none border border-neutral/20 focus-within:border-transparent focus-within:ring-2 focus-within:ring-primary shadow-md">
          <input 
            key={currentQuery}
            type="text" 
            name="q"
            className="grow" 
            placeholder="Search articles..." 
            defaultValue={currentQuery}
          />
          <button 
          type="submit" 
          className='text-neutral-400 hover:text-primary transition-colors'
          >
            <Search size={18}/>
          </button>
        </label>
      </form>
    </main>
  )
}

export default function ArticleSearch() {
  return (
    <Suspense fallback={
      <main className="form-control w-full">
        <div className="input flex items-center gap-2 w-full outline-none border border-neutral/20 shadow-md">
          <div className="grow text-neutral-400 opacity-50">Search articles...</div>
          <button type="button" className="text-neutral-400 pointer-events-none">
            <Search size={18}/>
          </button>
        </div>
      </main>
    }>
      <SearchContent />
    </Suspense>
  )
}
