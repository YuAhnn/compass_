import { CalendarHeart } from "lucide-react";

export default function BookingForm() {
  return (
    <form className="space-y-6 border p-4 w-full">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label>Full Name</label>
          <input type="text" className="border px-2 py-1 w-full" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" className="border px-2 py-1 w-full" />
        </div>

        <div>
          <label>Phone</label>
          <input type="text" className="border px-2 py-1 w-full" />
        </div>

        <div>
          <label>Date</label>
          <input type="date" className="border px-2 py-1 w-full" />
        </div>

        <div className="md:col-span-2">
          <label>Time</label>
          <select className="border px-2 py-1 w-full">
            <option>Select</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>
      </div>

      <div>
        <label>Message</label>
        <textarea className="border px-2 py-1 w-full" />
      </div>

      <footer className="flex justify-center">
        <button 
          type="button" 
          className="flex items-center border p-2 gap-2"
        >
          <CalendarHeart />
          Book Now
        </button>
      </footer>
    </form>
  )
}