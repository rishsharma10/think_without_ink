import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Think Without Ink — Roopak Kumar",
  description: "Privacy policy and data protection terms for Think Without Ink.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Legal & Transparency</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">Privacy Policy</h1>
            <p className="text-xs text-slate-400">Last updated: September 2026</p>
          </div>

          <div className="p-8 rounded-3xl glass-panel-gold border-amber-500/20 space-y-6 text-slate-300 text-sm leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
              <p>
                When you submit an inquiry form or workshop booking request on Think Without Ink, we collect your name, email address, phone number, and institutional affiliation to coordinate session dates and communications.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Use of Information</h2>
              <p>
                The information provided is strictly used to fulfill workshop coordination, provide study materials, and respond to direct educational inquiries. We do not sell or share your personal data with third-party marketers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Security</h2>
              <p>
                We implement modern industry-standard security protocols to safeguard all submitted information against unauthorized access.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Contact Information</h2>
              <p>
                If you have questions regarding this Privacy Policy, please contact us at <span className="text-amber-300 font-semibold">contact@thinkwithoutink.in</span>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
