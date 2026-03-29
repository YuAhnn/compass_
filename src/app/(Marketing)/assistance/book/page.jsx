import BookingForm from "@components/appointment/BookingForm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BookPage() { 
  return (
    <main className="max-w-6xl mx-auto p-4 grid lg:grid-cols-12 gap-6 w-full">
      <section className="lg:col-span-12 flex items-center gap-4 border p-6 bg-base-100 rounded-xl">
        <Link href="/assistance" className="hover:bg-base-200 p-2 rounded-full transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold">Book Appointment</h1>
      </section>

      <section className="lg:col-span-8 bg-base-100 rounded-xl">
        <BookingForm />
      </section>

      <figure className="lg:col-span-4 flex items-start justify-center border p-4 bg-base-100 rounded-xl">
        <div className="w-full">
          <img
            src="/compass-appointment.png"
            className="w-full max-w-full h-auto object-contain"
            alt="Compass Appointment"
          />
        </div>
      </figure>
    </main>
  );
}