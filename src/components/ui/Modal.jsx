import { X } from "lucide-react"

export default function Modal({ isOpen, onClose, title, children, footer, size = "max-w-lg" }) {
  if (!isOpen) return null

  return (
    <dialog className="modal modal-open">
      <div className={`modal-box ${size}`}>

        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          <X />
        </button>

        {title && <h3 className="font-bold text-lg mb-4">{title}</h3>}

        <div className="py-2">
          {children}
        </div>

        {footer && (
          <div className="modal-action">
            {footer}
          </div>
        )}

      </div>

      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  )
}