"use client";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const getButtonClass = (page) => `join-item btn btn-sm md:btn-md ${currentPage === page ? "btn-primary" : "btn-ghost"}`

  return (
    <main className="flex justify-center items-center mt-12 mb-8">
      <section className="join bg-base-100 shadow-sm border border-base-300">

        {/* Prev */}
        <button
          className="join-item btn btn-sm md:btn-md"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          «
        </button>

        {/* Page No. */}
        {pages.map((page) => (
          <button
            key={page}
            className={getButtonClass(page)}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          className="join-item btn btn-sm md:btn-md"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          »
        </button>

      </section>
    </main>
  )
}