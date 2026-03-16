import BackgroundBlur from "components/ui/BackgroundBlur"
import Link from "next/link"

export default function Hero({ title, subtitle, description, button, link }) {
  return (
    <BackgroundBlur>
    <div className="hero min-h-[70vh] px-4">
      <div className="hero-content text-center">
        <div className="max-w-5xl space-y-2 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-black text-primary leading-tight">
            {title}
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-black text-base-content leading-tight">
            {subtitle}
          </h1>
          <p className="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto py-2 text-xs sm:text-base md:text-lg text-base-content/65">
            {description}
          </p>
          <Link href={link} className="btn btn-primary btn-md sm:btn-lg lg:btn-xl
            hover:bg-[#3fb18534] hover:text-accent-content transition-all duration-200 ease-in-out 
            transform hover:scale-[1.03] border-none rounded-full dark:text-white">
            {button}
          </Link>
        </div>
      </div>
    </div>
    </BackgroundBlur>
  )
}