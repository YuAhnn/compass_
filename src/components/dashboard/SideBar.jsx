"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Bookmark, ClipboardCheck, Compass, History } from "lucide-react"
import DiceBear from "components/ui/DiceBear"
import SignOutButton from "components/auth/SignOutButton"
import ThemeToggle from "components/ui/ThemeToggle"

const SideLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Article", href: "/dashboard/article", icon: Bookmark },
  { label: "Assessment", href: "/dashboard/assessment", icon: ClipboardCheck },
  { label: "Assistance", href: "/dashboard/assistance", icon: Compass },
  { label: "History", href: "/dashboard/progress", icon: History },
]

export default function SideBar({ profile }) {
  const pathname = usePathname()

  return (
    <>
      {/* --- Mobile --- */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-100 bg-base-100 border-t border-base-300 px-2 pb-safe">
        <nav className="flex justify-around items-center h-16">
          {SideLinks.map((link) => {
            const isActive = pathname === link.href
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center flex-1 min-w-0 gap-1 transition-colors ${
                  isActive ? "text-primary" : "text-base-content/50"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "scale-110" : ""}`} />
                <span className="text-[10px] font-medium truncate w-full text-center">
                  {link.label}
                </span>
              </Link>
            )
          })}
          <div className="flex items-center gap-5">
            <ThemeToggle/>
            <SignOutButton />
          </div>
        </nav>
      </div>

      {/* Desktop */}
      <aside className="hidden lg:flex fixed inset-y-4 left-4 z-58 flex-col bg-base-100  border border-primary/30 overflow-hidden transition-[width] duration-300 hover:duration-200 ease-in-out group w-20 hover:w-72 cursor-pointer rounded-2xl">
        <figure className="flex items-center shrink-0 h-32 px-5">
          <Link href="/dashboard" className="relative flex items-center w-full">
            {/* Compass */}
            <div className="absolute left-0 w-60 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150">
              <img
                src="/logo.svg"
                alt="Logo"
                className="w-45 h-12 object-contain"
              />
            </div>
            {/* 🧭 */}
            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-150">
              <img
                src="/title-logo.svg"
                alt="Icon"
                className="w-12 h-12 object-contain"
              />
            </div>
          </Link>
        </figure>

        <div className="mx-4 h-0.5 bg-base-content/10" />

        {/* Nav */}
        <nav className="relative top-5 z-50 flex-1 px-3 space-y-2 mt-4 overflow-y-auto overflow-x-hidden">
          {SideLinks.map((link) => {
            const isActive = pathname === link.href
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 px-3.5 py-3 rounded-xl transition-all duration-200 group/item ${
                  isActive
                    ? "bg-primary text-primary-content shadow-md"
                    : "text-base-content/70 hover:bg-base-200 hover:text-primary"
                }`}
              >
                <Icon className="w-6 h-6 shrink-0 transition-transform duration-200 group-hover/item:scale-110" />

                <span
                  className="text-sm font-medium whitespace-nowrap w-0 group-hover:w-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150"
                >
                  {link.label}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* User */}
        <div className="mx-4 h-0.5 bg-base-content/10" />
        <main className="mt-auto p-4 border-t border-base-300 bg-base-200/30 shrink-0 overflow-hidden">
          <div className="flex items-center gap-3">

            {/* Avatar */}
            <figure className="relative shrink-0">
              <DiceBear
                seed={profile?.nickname}
                className="rounded-full border-2 border-primary/20 w-10 h-10 bg-base-100"
              />
            </figure>

            {/* Info */}
            <section
              className="flex-1 min-w-0 w-0 group-hover:w-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150"
            >
              <p className="text-sm font-bold truncate leading-none">
                {profile?.nickname || "User"}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-base-content/50 mt-1">
                {profile?.role || "Member"}
              </p>
            </section>

            {/* Sign Out */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150">
              <SignOutButton />
            </div>  
            
            <ThemeToggle/>
          </div>
        </main>
      </aside>
    </>
  )
}