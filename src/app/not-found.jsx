import Link from 'next/link'
import { Compass } from 'lucide-react'

export default function NotFound() {
  const message = "This platform may help you, but our true Compass is God—a compassionate, loving friend who sees and understands."
  const btnMsg = "Hey, You Got This 🤍"
  const tooltipStyle = "tooltip tooltip-primary"

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <figure 
      className={`${tooltipStyle} tooltip-top`} 
      data-tip={message}
      >
        <img
          src="/error-compass.png"
          className="w-[80vw] max-w-[400px] aspect-square object-contain mx-auto mb-8"
        />
      </figure>

      <div 
      className={`${tooltipStyle} tooltip-bottom`} 
      data-tip={btnMsg}
      >
        <Link 
        href="/" 
        className="btn btn-lg border border-neutral/10"
        >
          <Compass size={40} 
          className='hover:text-primary'
          style={{ animation: "spin 8s linear infinite" }}
          />
        </Link>
      </div>
    </main>
  )
}