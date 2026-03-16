"use client"; 

import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import ReactMarkDown from "react-markdown"
import remarkGfm from "remark-gfm"
import { MarkdownComponents } from "components/ui/ArticleMarkdown"

export default function ArticleContent({ article }) {
  const router = useRouter()
  
  if (!article) return <div className='p-20 text-center'>Article not found</div>

  return (
    <>
    <div className='max-w-7xl mx-auto p-6'>

      <button 
        onClick={() => router.back()} 
        className='btn btn-ghost mb-6'
      >
        <ChevronLeft size={20} /> Back
      </button>
      
      <header className='grid grid-cols-1 md:grid-cols-2 bg-base-100 min-h-100 mb-10 border border-neutral/10 p-6 rounded-2xl'>
        <section className='flex flex-col justify-center p-8 lg:p-16 order-2 md:order-1'>
          <h1 className='text-4xl mb-8 font-semibold uppercase leading-tight'>
            {article.title}
          </h1>

          <p className='text-gray-500 text-lg mb-8'>
            {new Date(article.created_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <div className='badge badge-lg badge-primary border border-neutral/20 uppercase text-sm font-medium tracking-wide'>
            {article.category}
          </div>
        </section>

        <figure className='bg-gray-200 order-1 md:order-2 rounded-2xl'>
          <img 
            src={article.image_url} 
            className='rounded-2xl w-full h-full object-cover'
            alt={article.title} 
          />
        </figure>
      </header>

      {/* markdown */}
      <section className='prose prose-lg max-w-none mb-10 text-justify text-lg'>
        <ReactMarkDown 
          components={MarkdownComponents}
          remarkPlugins={[remarkGfm]}>
          {article.content}
        </ReactMarkDown>
      </section>
      
    </div>

    <section className='max-w-4xl mx-auto p-6'>
      {article.citation && (
      <div className="border-l-4 border-primary p-6 bg-base-200 rounded-xl italic ">
        {article.citation}
      </div>
    )}
    </section>
    </>
  )
}