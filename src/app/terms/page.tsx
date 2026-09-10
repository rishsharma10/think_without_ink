import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Think Without Ink — Roopak Kumar",
  description: "Terms and conditions of service for Think Without Ink workshops and educational programs.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Legal Agreement</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">Terms & Conditions</h1>
            <p className="text-xs text-slate-400">Last updated: September 2026</p>
          </div>

          <div className="p-8 rounded-3xl glass-panel-gold border-amber-500/20 space-y-6 text-slate-300 text-sm leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Educational Purpose</h2>
              <p>
                All programs, materials, and workshops provided by Mr. Roopak Kumar and Think Without Ink are intended for academic enrichment, mental calculation agility, and pedagogical enhancement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Intellectual Property</h2>
              <p>
                All original worksheets, slide decks, and training frameworks developed by Think Without Ink remain the intellectual property of Mr. Roopak Kumar. Materials may not be redistributed or commercialized without prior written consent.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Workshop Bookings & Cancellations</h2>
              <p>
                Institutional session dates are scheduled mutually upon receipt of an official booking confirmation. Rescheduling requests should be communicated at least 7 working days prior to the event.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Contact & Jurisdiction</h2>
              <p>
                Any legal disputes shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India. For inquiries: <span className="text-amber-300 font-semibold">contact@thinkwithoutink.in</span>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
