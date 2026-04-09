import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ReferralForm from "@components/referral/ReferralForm";

export const metadata = {
  title: "Book Appointment | Compass",
  description: "Book an appointment with a clinic"
}

export default function BookPage() { 
  return (
    <main className="min-h-screen border border-primary/30 bg-base-100 rounded-2xl pb-10">
      <section className="max-w-6xl mx-auto space-y-6 px-6 mt-10">
        <Link
          href="/dashboard/assistance"
          className="btn btn-sm bg-transparent border-neutral/20 mb-2 text-neutral/70"
        >
          <ChevronLeft size={14} /> Back
        </Link>
        <ReferralForm />
      </section>
    </main>
  )
}