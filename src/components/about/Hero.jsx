export default function Hero() {
  return (
    <main className="hero min-h-[25vh] lg:min-h-[50vh] bg-base-100 px-4 py-10 lg:py-0 ml-0 lg:ml-10">
      <section className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-20 p-0">
        <figure className="w-full max-w-[280px] md:max-w-sm lg:max-w-md">
          <img
            src="/about-illus.png"
            alt="Wellbeing Illustration"
            className="w-full h-auto"
          />
        </figure>
        <aside className="text-center lg:text-left max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Companion for <br />
            <span className="text-primary">Emotional Awareness</span>
          </h1>
          <p className="py-6 text-base md:text-lg opacity-70 leading-relaxed">
            Compass is a non-clinical tool designed to help you reflect on 
            your emotional well-being and take meaningful next steps.
          </p>
        </aside>
      </section>
    </main>
  )
}