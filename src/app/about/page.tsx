import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryTimeline from "@/components/StoryTimeline";
import { Sparkles, Award, ShieldCheck, Heart, Plane, ArrowRight, Quote, CheckCircle2, Target, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About Mr. Roopak Kumar | From Adversity to Vedic Math Mission",
  description:
    "Discover the inspiring journey of Mr. Roopak Kumar: overcoming loss, the Air Force training injury, rebuilding through adversity, and founding Think Without Ink.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero Header */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>The Story & The Purpose</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight leading-[1.15]">
                  About <span className="text-gold-gradient">Mr. Roopak Kumar</span>
                </h1>

                <p className="text-lg sm:text-xl text-amber-200/90 font-medium">
                  From Setbacks to a Mission: Making Mathematics Simple, Fast & Fearless.
                </p>

                <p className="text-base text-slate-300 leading-relaxed">
                  Mr. Roopak Kumar is a Government-Certified and Internationally Certified Vedic Mathematics Teacher, educator, and the founder of <span className="text-white font-semibold">Think Without Ink</span>—a learning platform built with one simple belief:
                </p>

                <div className="p-5 rounded-2xl glass-panel-gold border-amber-500/30">
                  <p className="text-base text-amber-100 font-serif italic">
                    “Mathematics is not difficult. It is difficult only when it is taught without understanding.”
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-amber-400/30 text-amber-300 flex items-center gap-2 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Govt. & Internationally Certified
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-white/10 text-slate-300 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" />
                    CENTA TPO National Ranker
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-white/10 text-slate-300 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-400" />
                    CTET Qualified (TGT & PRT)
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 p-3 rounded-3xl border border-amber-500/30 shadow-2xl">
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/roopak-speaking.jpg"
                      alt="Roopak Kumar speaking at Bharat Education Forum"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent opacity-85"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <h3 className="text-lg font-bold text-white font-serif">Mr. Roopak Kumar</h3>
                      <p className="text-xs text-amber-300">Founder, Think Without Ink • Keynote Speaker</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The Full Timeline Narrative Component */}
        <StoryTimeline />

        {/* Visual Story Spotlight Section with Real Images */}
        <section className="py-20 bg-[#070a14] border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Moments of Purpose & Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                Rebuilding from Adversity into National Recognition
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                How a dream interrupted became an opportunity to transform mathematics education for thousands of students and teachers across India.
              </p>
            </div>

            {/* Story Card 1: Air Force Dream & Turning Point */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel-gold border-amber-500/30 shadow-2xl">
                  <Image
                    src="/images/roopak-vidyasagar-award.jpg"
                    alt="Mr. Roopak Kumar receiving Vidyasagar Leadership Award 2026"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
                      Leadership in Education 2026
                    </span>
                    <p className="text-sm font-bold text-white mt-1">
                      Conferred with the Vidyasagar Leadership Award by Shikshak Shakti Council
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/15 text-blue-300 border border-blue-400/30">
                  <Plane className="w-3.5 h-3.5" />
                  <span>The Dream & The Pivot</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                  When Life Gives Setbacks, You Build New Wings
                </h3>
                <p>
                  After clearing the Indian Air Force screening on my first attempt, an unexpected training back injury left me bedridden. The physical pain was severe, but the emotional battle of having my childhood dream taken away was even heavier.
                </p>
                <p>
                  For nearly a year, I fought through depression and rehabilitation. When I stood back up, I realized: <strong className="text-white">my mission was never about just wearing a uniform—it was about service.</strong> If I could not defend my country in the skies, I would empower its youth through education.
                </p>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 text-amber-200 text-xs sm:text-sm font-medium italic">
                  “Your circumstances may shape your beginning, but they do not have to decide your destination.”
                </div>
              </div>
            </div>

            {/* Story Card 2: Teacher Appreciation & The Movement */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                  <Users className="w-3.5 h-3.5" />
                  <span>Classroom Revolution</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                  Every Classroom is an Opportunity to Change a Life
                </h3>
                <p>
                  When I cleared my CTET (TGT & PRT) and stepped onto the teacher&apos;s podium, everything clicked. Mathematics wasn&apos;t just an academic requirement; it was a psychological arena where children either built self-esteem or developed crippling fear.
                </p>
                <p>
                  By introducing Vedic Mathematics, I watched students who had failed pre-boards suddenly solve complex arithmetic in 2 seconds. That spark in a student&apos;s eyes when they realize they are NOT &quot;weak in math&quot; is what drives Think Without Ink every single day.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>10,000+ Students Mentored</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>100+ School & FDP Bootcamps</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel-gold border-amber-500/30 shadow-2xl">
                  <Image
                    src="/images/roopak-stage-honour.jpg"
                    alt="Mr. Roopak Kumar honored on stage at Teacher Appreciation Ceremony"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
                      National Teacher Appreciation 2026
                    </span>
                    <p className="text-sm font-bold text-white mt-1">
                      Honored on stage with state dignitaries for excellence in mathematics education
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-[#05070e]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel-gold border-amber-400/40 text-center space-y-4 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Bring Roopak Sir&apos;s Transformational Message to Your School
              </h3>
              <p className="text-sm text-slate-300 max-w-xl mx-auto">
                Invite Roopak Sir for an on-campus Vedic Math Bootcamp, Teacher Training Program, or Keynote Address.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:scale-105 transition-all"
                >
                  <span>Book Workshop / Invite Roopak Sir</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/awards"
                  className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-bold text-xs"
                >
                  View All Awards & Gallery
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
