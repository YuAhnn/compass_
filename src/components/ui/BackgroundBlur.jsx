export default function BackgroundBlur( { children } ) {
  return (
    <>
      <div className="relative max-w-screen mx-auto min-h-[80vh] overflow-visible">
        <div className="relative z-10 flex items-center justify-center h-full">
            {children}
        </div>
        <div
          className="
            absolute z-1
            top-70 left-20
            lg:top-50 lg:left-40
            w-25 h-25
            sm:w-27.5 sm:h-27.5
            md:w-37.5 md:h-37.5
            lg:w-62.5 lg:h-62.5
            rounded-full bg-primary
            blur-[90px] sm:blur-[100px] md:blur-[120px] lg:blur-[200px]
            opacity-20
            sm:opacity-30
            md:opacity-50
            lg:opacity-70
            animate-pulse
          "
        ></div>

        <div
          className="
            absolute z-1
            top-60 right-20
            lg:top-50 lg:right-40
            w-25 h-25
            sm:w-27.5 sm:h-27.5
            md:w-37.5 md:h-37.5
            lg:w-62.5 lg:h-62.5
            rounded-full bg-secondary
            blur-[90px] sm:blur-[100px] md:blur-[120px] lg:blur-[200px]
            opacity-20
            sm:opacity-30
            md:opacity-50
            lg:opacity-70
            animate-pulse
          "
        ></div>
      </div>
    </>
  )
}