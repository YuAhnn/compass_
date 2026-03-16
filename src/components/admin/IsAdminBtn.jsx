import Link from "next/link"
import { SquareTerminal } from "lucide-react"
export default function IsAdminBtn( { isAdmin } ) {
  return(
    <>
    {isAdmin && (
      <main className="absolute bottom-18 right-12 lg:bottom-8 lg:right-12">
        <Link
        href="/admin"
        title='Admin Panel'
        className="btn btn-ghost group gap-3 px-3 border border-primary/30 hover:bg-[#3fb18534] hover:text-accent-content transition-all duration-200 ease-in-out rounded-lg"
        >
          <SquareTerminal className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-8"/>
      </Link>
      </main>
    )}
    </>
  )
}