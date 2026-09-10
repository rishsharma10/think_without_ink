import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AwardsGallery from "@/components/AwardsGallery";
import { Sparkles, Trophy, Award, Star, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Awards & Recognition | Mr. Roopak Kumar — Vedic Mathematics Educator",
  description:
    "Explore the national and international honors received by Mr. Roopak Kumar: Vidyasagar Leadership Award 2026, CENTA National Ranker, Teacher Appreciation Award, and more.",
};

export default function AwardsPage() {
  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Excellence in Education</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight">
              Honors, Awards & <span className="text-gold-gradient">Recognition</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Acknowledged by government bodies, national educational councils, and state forums for transformative contributions to mathematics pedagogy.
            </p>
          </div>
        </section>

        {/* Awards Gallery Component */}
        <AwardsGallery />

        {/* Impact Quote & Invitation */}
        <section className="py-20 bg-[#060911] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel-gold border-amber-400/40 space-y-6 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <Star className="w-3.5 h-3.5" />
                <span>Special Guest & Keynote Speaker</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                Invite Roopak Sir as Guest of Honour
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Roopak Sir frequently graces school annual functions, teacher training conclaves, and university summits as a Special Guest and Keynote Speaker.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25"
                >
                  <span>Send Invitation / Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/media"
                  className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-bold text-xs"
                >
                  Watch Past Keynote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
