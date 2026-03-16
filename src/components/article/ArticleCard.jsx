"use client"

export default function ArticleCard ({ 
  title, 
  date, 
  category, 
  bgColor = "#C5E1A5", 
  imagePlaceholder 
})  {
  return (
    <main className="card card-side bg-base-100 shadow-xl overflow-hidden w-full max-w-2xl border border-base-300 h-52">
      
      <figure className="w-1/3 min-w-35 h-full bg-base-300 relative shrink-0 overflow-hidden">
        {imagePlaceholder ? (
          <img 
            src={imagePlaceholder} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full text-base-content/30 italic text-sm">
            Image
          </div>
        )}
      </figure>

      {/* Content */}
      <section 
        className="card-body w-2/3 p-5 relative justify-center overflow-hidden" 
        style={{ backgroundColor: bgColor }}
      > 
        <div className="space-y-2">
          <h2 className="card-title text-lg font-bold text-black border-b-2 border-black pb-1 inline-block leading-tight line-clamp-2">
            {title || "Article Title"}
          </h2>
          <p className="text-neutral-600 text-sm font-medium">
            {date || "Date Published"}
          </p>
        </div>

        {category && (
          <div className="card-actions justify-end mt-2">
            <div className="badge badge-lg py-3 px-5 bg-[#F1F5E9] text-black border-none font-semibold uppercase tracking-wider text-xs shadow-sm">
              {category}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}