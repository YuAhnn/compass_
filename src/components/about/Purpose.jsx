import { Heart } from "lucide-react";

export default function Purpose() {
  return (
    <main className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
      <section className="flex flex-col lg:flex-row rounded-3xl overflow-hidden group border border-neutral/20 glass">

        <figure className="flex-1 flex items-center justify-center p-10 bg-primary transition-colors duration-500 group-hover:bg-transparent">
          <img 
            src="/compass-about.png" 
            className="w-48 md:w-64 lg:w-80 h-auto drop-shadow-2xl" 
          />
        </figure>

        <aside className="flex-1 flex flex-col justify-center transition-colors duration-500 group-hover:bg-primary p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-5xl font-bold transition-colors duration-500 group-hover:text-primary-content">
            Our<span className="text-primary group-hover:text-white"> Goal</span>
          </h2>
          <p className="py-6 text-lg opacity-80 transition-colors duration-500 group-hover:text-primary-content group-hover:opacity-100">
            Encouraging self-awareness, emotional care, and early intervention for everyone in <b>Morong, Rizal</b>, while fostering understanding and reducing stigma around mental health.
          </p>
          <div className="divider"></div>

          <section className="flex justify-center lg:justify-start w-full mt-6">
            <div 
            className="tooltip tooltip-top tooltip-neutral" 
            data-tip='"You are deeply valued and loved. Never forget that."'
            >
              <button className="btn btn-primary rounded-xl group-hover:bg-base-100 group-hover:text-primary group-hover:border-transparent active:scale-[0.97] px-8 border-2">
                <Heart/>
              </button>
            </div>
          </section>
        </aside>

      </section>
    </main>
  )
}