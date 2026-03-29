import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import BookingForm from "@components/appointment/BookingForm";

export const metadata = {
  title: "Book Appointment | Compass",
  description: "Book an appointment with a clinic"
}

export default function BookPage() { 
  return (
    <main className="min-h-[97vh] border border-primary/30 bg-base-100 rounded-2xl pt-2">
      <section className="max-w-6xl mx-auto space-y-6 w-full"> 
        <section className="flex items-center gap-4 border p-6 bg-base-100">
          <Link href="/dashboard/assistance">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-semibold">Book Appointment</h1>
        </section>

        <div className="grid lg:grid-cols-12 gap-6">
          <section className="lg:col-span-8">
            <BookingForm />
          </section>

          <figure className="lg:col-span-4 flex items-start justify-center border p-4 bg-base-100">
            <div className="w-full">
              <img
                src="/compass-appointment.png"
                className="w-full max-w-full h-auto object-contain"
              />
            </div>
          </figure>
        </div>
      </section>
    </main>
  )
}