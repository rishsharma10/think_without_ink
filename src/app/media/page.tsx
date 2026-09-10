import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import { Sparkles, PlayCircle, Users, BookOpen, ExternalLink, ArrowRight, Award, Video, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Media & Keynotes | Mr. Roopak Kumar — Think Without Ink",
  description:
    "Watch keynote speeches, workshop demonstrations, and media appearances by Mr. Roopak Kumar across India.",
};

export default function MediaPage() {
  const mediaHighlights = [
    {
      title: "Bharat Education Forum 2026 Keynote",
      venue: "New Delhi",
      role: "Lead Speaker & Guest of Honour",
      image: "/images/roopak-speaking.jpg",
      desc: "Delivered keynote address on 'Resilient Teachers, Thriving Classrooms' and demonstrated speed Vedic Math techniques to over 200 educators and institutional heads.",
    },
    {
      title: "Vidyasagar Leadership Award Presentation",
      venue: "Shikshak Diwas • New Delhi",
      role: "Award Conferred",
      image: "/images/roopak-vidyasagar-award.jpg",
      desc: "Honored on Teachers' Day by the Shikshak Shakti Council in recognition of exceptional leadership and innovative math pedagogy.",
    },
    {
      title: "Teacher Appreciation Ceremony 2026",
      venue: "National Education Conclave",
      role: "Guest of Honour",
      image: "/images/roopak-stage-honour.jpg",
      desc: "Conducted interactive student motivational seminar and received national citation for fearless math education.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/30 text-red-400">
              <PlayCircle className="w-3.5 h-3.5 text-red-400" />
              <span>Video & Stage Appearances</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight">
              Keynotes & <span className="text-gold-gradient">Media Features</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Experience the passion, energy, and impact of Mr. Roopak Kumar’s educational addresses and live demonstrations.
            </p>
          </div>
        </section>

        {/* Video Player Showcase */}
        <VideoSection />

        {/* Appearances & Keynote Details with Real Photos */}
        <section className="py-20 bg-[#070a14] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/30 text-amber-300">
                <Camera className="w-3.5 h-3.5" />
                <span>On-Stage & In the Spotlight</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                Stage Addresses & Guest of Honour Appearances
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Inspiring educators, school boards, and university students across national forums.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaHighlights.map((item, idx) => (
                <div key={idx} className="rounded-3xl glass-panel-gold border-amber-500/25 overflow-hidden flex flex-col justify-between shadow-2xl hover:border-amber-400/50 transition-all duration-300">
                  <div className="relative aspect-[16/10] w-full bg-slate-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/10">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-xs text-slate-400 font-medium">{item.venue}</span>
                      <h3 className="text-xl font-bold text-white font-serif">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5">
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Invite for your next event</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct YouTube channel banner */}
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border-white/10 text-center space-y-4 max-w-3xl mx-auto shadow-2xl">
              <div className="flex items-center justify-center gap-2 text-red-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  YouTube Video Channel
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">
                Watch Full Video & Speed Math Demonstrations
              </h3>
              <p className="text-sm text-slate-300">
                Subscribe to stay updated with new mental calculation breakdowns and live classroom recordings.
              </p>
              <div className="pt-2 flex justify-center">
                <a
                  href="https://youtu.be/YmCJAIu7GWg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-red-600/30 transition-all"
                >
                  <span>Open Video in YouTube</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
