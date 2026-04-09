export default function Header() {
  return(
    <header className="w-full bg-base-100 border-b border-neutral/20 mx-auto my-10">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 px-4 md:px-8 pt-8 pb-6 w-full">
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
              Connect with a <br />
              <span className="text-primary">Provider.</span>
            </h1>
            <p className="text-base text-base-content/60 max-w-xs">
              Take the first step toward better mental health.
            </p>
          </div>
        </div>

        <figure className="relative w-48 md:w-64 lg:w-80 shrink-0">
          <img
            src="/compass-appointment.png"
            className="w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </figure>
      </div>
    </header>
  )
}