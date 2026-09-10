"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HeartHandshake, 
  Plane, 
  Activity, 
  GraduationCap, 
  Sparkles, 
  Check, 
  Quote, 
  ArrowRight,
  ShieldAlert,
  Award,
  ChevronRight
} from "lucide-react";
import TiltCard from "@/components/TiltCard";

export default function StoryTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const timelineSteps = [
    {
      id: "early-trials",
      icon: HeartHandshake,
      tag: "Early Life & Strength",
      title: "A Journey That Began With Adversity",
      image: "/images/hero-vedic-aurora.jpg",
      summary: "Channeling grief into determination and academic excellence.",
      description: (
        <>
          <p className="mb-3 text-slate-300 leading-relaxed">
            Life had other plans from a very young age. Growing up in a middle-class family, I experienced the painful loss of my father. It was one of the earliest moments that changed my perspective on life.
          </p>
          <p className="mb-3 text-slate-300 leading-relaxed">
            Instead of allowing grief to hold me back, I channelled it into my studies. I worked harder, pushed myself further, and consistently stood among the top students of my class.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Then came another devastating loss—the passing of my Dada Ji. It shook me deeply. But my mother gave me a reason to keep moving forward. I knew I had to become her strength. So I kept going.
          </p>
        </>
      ),
      quote: "Grief did not break me—it taught me how to become the pillar of strength my family needed.",
      badge: "School Topper & Resilience",
      accent: "from-amber-500 to-yellow-400",
    },
    {
      id: "air-force",
      icon: Plane,
      tag: "The Uniform Dream",
      title: "The Dream of Serving My Country",
      image: "/images/vedic-geometry-bg.jpg",
      summary: "First-attempt screening success in the Indian Air Force.",
      description: (
        <>
          <p className="mb-3 text-slate-300 leading-relaxed">
            One of my biggest dreams was to join the Indian Air Force. I cleared the initial screening on my very first attempt and felt that my dream of wearing the uniform was finally within reach.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The discipline, courage, and dedication of the defense forces were deeply etched into my mindset—values that would later define every single classroom I entered.
          </p>
        </>
      ),
      quote: "I was ready to give everything for the nation in uniform.",
      badge: "Cleared 1st Attempt",
      accent: "from-cyan-500 to-blue-500",
    },
    {
      id: "setback-recovery",
      icon: ShieldAlert,
      tag: "The Trial of Fire",
      title: "The Injury & The Deepest Battle",
      image: "/images/mental-math-mastery.jpg",
      summary: "Bedridden with a serious back injury, overcoming depression and rebuilding life.",
      description: (
        <>
          <p className="mb-3 text-slate-300 leading-relaxed">
            During training, fate intervened. A serious back injury left me bedridden and forced me to step away from the path I had dreamed about for years.
          </p>
          <p className="mb-3 text-slate-300 leading-relaxed">
            The physical pain was only one part of the battle. The emotional struggle was even harder. For nearly a year, I went through depression, counselling and treatment while trying to understand what my life would look like without the dream I had worked so hard for.
          </p>
          <p className="text-slate-300 font-medium text-amber-200 leading-relaxed">
            Then I made a decision: If I could not serve my country in the uniform I had imagined, I would find another way to serve its future.
          </p>
        </>
      ),
      quote: "If I could not serve my country in the sky, I would serve its future on the ground.",
      badge: "Unbroken Spirit",
      accent: "from-rose-500 to-amber-500",
    },
    {
      id: "chose-teaching",
      icon: GraduationCap,
      tag: "The True Calling",
      title: "I Chose Teaching: Finding My Purpose",
      image: "/images/roopak-speaking.jpg",
      summary: "Rebuilding physically & mentally, qualifying CTET, and transforming classrooms.",
      description: (
        <>
          <p className="mb-3 text-slate-300 leading-relaxed">
            I began rebuilding myself—physically, mentally and professionally. I worked on my recovery, explored ways to understand my own body and gradually regained confidence.
          </p>
          <p className="mb-3 text-slate-300 leading-relaxed">
            Then I entered the world of education. I cleared the required examinations and interviews and began teaching. And something beautiful happened: I discovered that teaching was not just a profession for me—it was my purpose.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Every classroom became an opportunity to influence young minds. Every student who said <span className="text-amber-300 font-semibold italic">“Sir, ab Maths samajh aa gaya!”</span> became a reminder that I had chosen the right path.
          </p>
        </>
      ),
      quote: "Teaching was not a backup career; it was the mission my entire life had prepared me for.",
      badge: "CTET Qualified & Educator",
      accent: "from-emerald-500 to-teal-400",
    },
    {
      id: "think-without-ink",
      icon: Sparkles,
      tag: "The Revolution",
      title: "Founding Think Without Ink",
      image: "/images/classroom-mastery.jpg",
      summary: "Demystifying math through Vedic Mathematics across India.",
      description: (
        <>
          <p className="mb-3 text-slate-300 leading-relaxed">
            Over the years, I noticed a painful pattern: mathematics was turning into a source of fear for millions of students. Countless bright learners believed they were &quot;weak in maths&quot; simply because traditional rote-learning failed them.
          </p>
          <p className="mb-3 text-slate-300 leading-relaxed">
            That realization gave birth to <strong className="text-white">Think Without Ink</strong>. Built on the ancient speed principles of Vedic Mathematics, the platform helps students, teachers, and competitive aspirants calculate mentally, understand concepts deeply, and experience the pure joy of numbers.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Today, having trained thousands of students and teachers across top institutions, our mission remains crystal clear: to make mathematics simple, fast, and fearless.
          </p>
        </>
      ),
      quote: "Mathematics is not difficult. It is difficult only when it is taught without understanding.",
      badge: "Founder & Mission",
      accent: "from-amber-400 to-yellow-300",
    },
  ];

  const current = timelineSteps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="journey" className="py-24 relative bg-[#030712] overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-[650px] h-[500px] bg-amber-500/10 blur-[170px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[550px] h-[450px] bg-indigo-600/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/35 text-amber-300 shadow-md backdrop-blur-md"
          >
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            <span>Biographical Odyssey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight"
          >
            From Setbacks to a <span className="text-gold-gradient">Mission</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            How early adversity, an Air Force injury, and unbroken resilience gave birth to India&apos;s most passionate Vedic Mathematics movement.
          </motion.p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-12">
          {timelineSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left flex md:flex-col items-center md:items-start justify-between md:justify-start gap-3 transition-all duration-300 relative ${
                  isActive
                    ? "glass-panel-gold border-amber-400/60 shadow-xl shadow-amber-500/15 md:-translate-y-1 z-10"
                    : "glass-panel border-white/10 hover:border-white/20 hover:bg-slate-800/40"
                }`}
              >
                {/* Active Indicator Top Line on Desktop */}
                {isActive && (
                  <motion.div
                    layoutId="timelineActiveBar"
                    className="absolute -top-1 inset-x-4 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 shadow-md shadow-amber-400"
                  />
                )}

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isActive
                        ? "bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 font-bold shadow-md shadow-amber-500/30"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="md:hidden">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block">
                      Chapter 0{idx + 1}
                    </span>
                    <span className="text-sm font-bold text-white block">
                      {step.title}
                    </span>
                  </div>
                </div>

                <div className="hidden md:block space-y-1 mt-1">
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider block ${
                      isActive ? "text-amber-300" : "text-slate-400"
                    }`}
                  >
                    Chapter 0{idx + 1}
                  </span>
                  <div className="text-xs font-extrabold text-white line-clamp-2 leading-tight">
                    {step.title}
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 md:hidden ${isActive ? "text-amber-400" : "text-slate-500"}`} />
              </button>
            );
          })}
        </div>

        {/* Selected Chapter Dynamic Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl glass-panel-gold border-amber-500/40 p-6 sm:p-10 shadow-2xl overflow-hidden relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column Story & Quote */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/40">
                      {current.tag}
                    </span>
                    <span className="text-xs font-bold text-amber-400">
                      • {current.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif">
                    {current.title}
                  </h3>
                </div>

                <div className="text-sm sm:text-base text-slate-200">
                  {current.description}
                </div>

                {/* Impact Quote Banner */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent border-l-4 border-amber-400">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <p className="text-sm font-serif italic text-amber-100 font-medium">
                      &quot;{current.quote}&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column Visual Preview with TiltCard */}
              <div className="lg:col-span-5">
                <TiltCard maxTilt={8}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-panel border-amber-400/40 shadow-2xl group">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 border border-amber-400/30 backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                          <CurrentIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white font-serif">
                            Chapter 0{activeStep + 1}: {current.tag}
                          </div>
                          <div className="text-[11px] text-amber-300">
                            {current.badge}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
