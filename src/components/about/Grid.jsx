export default function Grid() {
  return(
    <main className='flex flex-col justify-center items-center max-w-5xl mt-15 mx-auto'>
      <section className="border border-neutral/20 p-6 rounded-lg">
        <h1 className="font-bold text-2xl lg:text-4xl leading-tight text-primary">What is Compass?</h1>
        <p className="text-sm sm:text-base lg:text-md text-justify leading-relaxed max-w-full wrap-break-word">
          Compass provides accessible, research-based self-assessment tools that help users understand their emotional state. 
          By combining validated psychological scales with AI-supportive feedback, the platform promotes awareness and early 
          intervention while maintaining user privacy and anonymity.
        </p>
      </section>
      <section className="py-16 bg-base-100">
        <h1 className="text-end font-bold text-2xl lg:text-4xl leading-tight mb-6">
          🐘 How it Works?
        </h1>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="card hover:shadow-md transition-all border border-neutral/20 group">
              <div className="card-body items-center text-center">
                <span className="badge badge-lg badge-primary group-hover:badge-accent font-bold h-10 w-10 rounded-full transition-all duration-300">1</span>
                <h2 className="card-title mt-2">Choose & Reflect</h2>
                <p className="text-sm opacity-70">Select an assessment and answer questions about your current state.</p>
              </div>
            </div>
            
            <div className="card hover:shadow-md transition-all border border-neutral/20 group">
              <div className="card-body items-center text-center">
                <span className="badge badge-lg badge-primary group-hover:badge-accent font-bold h-10 w-10 rounded-full transition-all duration-300">2</span>
                <h2 className="card-title mt-2">Understand Your Patterns</h2>
                <p className="text-sm opacity-70">See your emotional patterns and notice what repeats.</p>
              </div>
            </div>
            
            <div className="card hover:shadow-md transition-all border border-neutral/20 group">
              <div className="card-body items-center text-center">
                <span className="badge badge-lg badge-primary group-hover:badge-accent font-bold h-10 w-10 rounded-full transition-all duration-300">3</span>
                <h2 className="card-title mt-2">Self-Reflection</h2>
                <p className="text-sm opacity-70">Discover insights about yourself through the assessment results.</p>
              </div>
            </div>
            
            <div className="card hover:shadow-md transition-all border border-neutral/20 group">
              <div className="card-body items-center text-center">
                <span className="badge badge-lg badge-primary group-hover:badge-accent font-bold h-10 w-10 rounded-full transition-all duration-300">4</span>
                <h2 className="card-title mt-2">See Your Growth</h2>
                <p className="text-sm opacity-70">Monitor your well-being trends.</p>
              </div>
            </div>
            
         </div>
        </div>
      </section>
    </main>
  )
}