"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, FileText, FileCheck, UserRoundPlus } from "lucide-react"
import ThemeToggle from "../ui/ThemeToggle"

const NavLinks = [
  { title: "Your page is not done, keep living.", label: "Articles", path: "/article", icon: FileText },
  { title: "Even small steps count. Keep going.", label: "Assessments", path: "/assessment", icon: FileCheck },
  { title: "You are not alone. Reach out.", label: "Assistance", path: "/assistance", icon: UserRoundPlus },
]

export default function NavBar() {
  const [sideBar, setSideBar] = useState(false)

  const handleSideBar = () => setSideBar(prev => !prev)

  return (
    <>
      <header className="sticky top-0 z-50 flex w-full justify-center px-4 py-6">
        <nav
          className={`relative flex w-full max-w-6xl items-center justify-between 
          rounded-full border px-6 py-3 transition-all duration-300 
          ${sideBar
              ? "border-transparent bg-transparent"
              : "border-neutral/20 bg-bg/80 backdrop-blur-md"
            }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            className={`flex items-center ${sideBar ? "opacity-0" : "opacity-100"}`}
          >
            <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
          </Link>

          {/* NAV */}
          <ul
            className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex 
            ${sideBar ? "opacity-0" : "opacity-100"}`}
          >
            {NavLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-sm text-neutral hover:text-primary transition"
                  title={link.title}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div
            className={`hidden items-center gap-3 md:flex 
            ${sideBar ? "opacity-0" : "opacity-100"}`}
          >
            <Link
              href="/about"
              className="rounded-full px-5 py-2 text-sm text-neutral hover:text-primary transition"
            >
              About
            </Link>

            <ThemeToggle />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={handleSideBar}
            className={`relative z-50 flex h-10 w-10 items-center 
            justify-center rounded-full md:hidden`}
          >
            {sideBar ? (
              <X className="h-8 w-8 text-white dark:text-neutral transition rotate-90" />
            ) : (
              <Menu className="h-8 w-8 text-white dark:text-neutral transition" />
            )}  
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <aside
        className={`
          fixed inset-0 z-40 flex flex-col
          bg-base-100 px-8 pt-28 md:hidden
          transition-transform duration-500 ease-in-out
          ${sideBar ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav className="flex flex-col gap-6 text-neutral">
          <ul className="flex flex-col gap-4">
            {NavLinks.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={handleSideBar}
                    className="flex items-center gap-4 rounded-xl p-3 hover:bg-primary/20 transition"
                  >
                    <Icon size={24} />
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <hr className="border-neutral/20" />

          <div className="flex items-center justify-between">
            <Link
              href="/about"
              onClick={handleSideBar}
              className="rounded-full px-5 py-2 text-sm font-medium text-neutral hover:bg-accent hover:text-primary transition"
            >
              About
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </aside>
    </>
  )
}