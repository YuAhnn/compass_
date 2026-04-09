import ReferralForm from "@components/referral/ReferralForm"
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-base-100 pb-10">
      <section className="max-w-6xl mx-auto space-y-6 px-6 mt-10">
        <Link
          href="/assistance"
          className="btn btn-sm bg-transparent border-neutral/20 mb-2 text-neutral/70"
        >
          <ChevronLeft size={14} /> Back
        </Link>
        <ReferralForm />
      </section>
    </main>
  );
}