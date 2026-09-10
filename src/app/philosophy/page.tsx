import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhilosophySection from "@/components/PhilosophySection";
import { Sparkles, Brain, Lightbulb, Calculator, HelpCircle, Heart, ArrowRight, CheckCircle2, ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Philosophy & The 5 Pillars | Think Without Ink — Roopak Kumar",
  description:
    "Explore the pedagogical philosophy behind Think Without Ink: How to THINK, UNDERSTAND, CALCULATE, QUESTION, and BELIEVE.",
};

export default function PhilosophyPage() {
  const comparisons = [
    {
      conventional: "Memorizing formulas mechanically without understanding origins",
      thinkWithoutInk: "Visual pattern recognition and underlying arithmetic logic",
    },
    {
      conventional: "Heavy reliance on rough sheets, leading to panic and calculation errors",
      thinkWithoutInk: "Mental speed algorithms allowing 2-second calculations in the mind",
    },
    {
      conventional: "Fear of making mistakes and negative math conditioning",
      thinkWithoutInk: "Safe inquiry-based environment where students learn to question and explore",
    },
    {
      conventional: "Rote drills that disengage learners and create lifelong math anxiety",
      thinkWithoutInk: "Vibrant ancient Vedic Sutras tailored for modern competitive exams & school boards",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero Header */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Brain className="w-3.5 h-3.5 text-amber-400" />
              <span>Pedagogy & Core Beliefs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight">
              The <span className="text-gold-gradient">Think Without Ink</span> Philosophy
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              “Mathematics is not difficult. It is difficult only when it is taught without understanding.”
            </p>

            <div className="p-6 rounded-3xl glass-panel-gold border-amber-500/30 max-w-2xl mx-auto text-center space-y-2">
              <p className="text-base sm:text-lg text-amber-200 font-serif italic">
                “Think differently. Learn fearlessly. Master Mathematics.”
              </p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">— Roopak Kumar</p>
            </div>
          </div>
        </section>

        {/* Visual Pedagogy Spotlight */}
        <section className="py-20 bg-[#070a14] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-400/30">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>The Psychology of Math Fear</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                  Why Math Anxiety Exists & How We Eliminate It
                </h2>

                <p>
                  Most students do not struggle with numbers—they struggle with the anxiety of being judged by speed and rigid methods. When students are forced to write 6 lines of mechanical steps without understanding the underlying symmetry, their cognitive load skyrockets.
                </p>

                <p>
                  At <strong className="text-white">Think Without Ink</strong>, Roopak Sir reverses this dynamic. By demonstrating that 3-digit multiplication or squaring can be solved in a single mental step, the student experiences an immediate dopamine hit of success. Fear is replaced by fascination.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl glass-panel border-white/5">
                    <div className="text-2xl font-bold font-serif text-amber-400">10x</div>
                    <div className="text-xs text-slate-400 mt-1">Faster mental execution without rough sheets</div>
                  </div>
                  <div className="p-4 rounded-2xl glass-panel border-white/5">
                    <div className="text-2xl font-bold font-serif text-emerald-400">0%</div>
                    <div className="text-xs text-slate-400 mt-1">Math dread & examination anxiety</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel-gold border-amber-500/30 shadow-2xl">
                  <Image
                    src="/images/teacher-appreciation-award.jpg"
                    alt="Teacher Appreciation Ceremony honoring Roopak Kumar"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl glass-panel-gold border-amber-400/30">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      National Teacher Appreciation
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Honoring Excellence in Mathematics Pedagogy
                    </h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The 5 Pillars Section Component */}
        <PhilosophySection />

        {/* Pedagogical Comparison Table */}
        <section className="py-20 bg-[#070b15] border-t border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-extrabold text-white font-serif">
                Conventional Learning vs. The Vedic Approach
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Why thousands of students undergo dramatic grade improvements with Roopak Sir&apos;s methods.
              </p>
            </div>

            <div className="rounded-3xl glass-panel border-white/10 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-950/80 border-b border-white/10 text-xs font-bold uppercase tracking-wider">
                <div className="p-4 sm:p-5 text-red-400 border-b md:border-b-0 md:border-r border-white/10">
                  Conventional Rote Math
                </div>
                <div className="p-4 sm:p-5 text-amber-400">
                  Think Without Ink (Vedic Math)
                </div>
              </div>

              {comparisons.map((item, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 md:grid-cols-2 text-xs sm:text-sm ${
                    idx % 2 === 0 ? "bg-slate-900/40" : "bg-transparent"
                  } border-b border-white/5 last:border-0`}
                >
                  <div className="p-4 sm:p-6 text-slate-400 border-b md:border-b-0 md:border-r border-white/5 flex items-start gap-2.5">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>{item.conventional}</span>
                  </div>
                  <div className="p-4 sm:p-6 text-slate-200 flex items-start gap-2.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.thinkWithoutInk}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote banner */}
            <div className="p-8 sm:p-10 rounded-3xl glass-panel-gold border-amber-400/40 text-center space-y-4 shadow-2xl">
              <h3 className="text-2xl font-bold text-white font-serif">
                Experience It First-Hand
              </h3>
              <p className="text-sm text-slate-300 max-w-xl mx-auto">
                Test the speed math calculator in real-time or schedule a live demonstration workshop for your school.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/vedic-math-lab"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:scale-105 transition-all"
                >
                  <span>Launch Speed Math Lab</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-bold text-xs"
                >
                  Book School Session
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
