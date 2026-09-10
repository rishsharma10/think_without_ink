"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, Award, CheckCircle2, Calculator, ShieldCheck, Zap, Star } from "lucide-react";
import VedicCanvasAnimation from "@/components/VedicCanvasAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#030712]">
      {/* Background Celestial Vedic Aurora Visual Artwork */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-screen pointer-events-none">
        <Image
          src="/images/hero-vedic-aurora.jpg"
          alt="Vedic Mathematics & Sacred Geometry Cosmos"
          fill
          className="object-cover object-center scale-105"
          priority
        />
      </div>

      {/* Interactive GSAP / Canvas Floating Math & Sutras Runes */}
      <VedicCanvasAnimation className="opacity-70" />

      {/* Radiant Glowing Meshes & Nebula Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-amber-500/20 via-yellow-400/15 to-transparent rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-600/18 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content with Staggered Framer Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Pill Badges with Radiant Shimmer */}
            <motion.div variants={itemVariants} className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-400/40 text-amber-300 shadow-lg shadow-amber-500/10 backdrop-blur-md shimmer-badge">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '7s' }} />
                <span>Think Without Ink Platform</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-400/35 text-cyan-300 backdrop-blur-md shadow-md shadow-cyan-500/10">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Govt. & Internationally Certified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-400/35 text-emerald-300 backdrop-blur-md shadow-md shadow-emerald-500/10">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>CENTA National Ranker</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif leading-[1.12]">
                Making Mathematics{" "}
                <span className="text-gold-gradient block mt-1 text-amber-glow">
                  Simple, Fast & Fearless.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Meet <span className="font-semibold text-white">Mr. Roopak Kumar</span>—Govt. certified Vedic Mathematics master, educator, and visionary behind <span className="text-amber-300 font-medium italic">Think Without Ink</span>. Turning math fear into an empowering superpower.
              </p>
            </motion.div>

            {/* Core Philosophy Quote Banner */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -2 }}
              transition={{ duration: 0.3 }}
              className="p-5 sm:p-6 rounded-2xl glass-panel-gold border-amber-500/40 max-w-2xl mx-auto lg:mx-0 text-left shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <p className="text-sm sm:text-base text-amber-100 font-serif italic flex items-start gap-3 leading-relaxed relative z-10">
                <span className="text-4xl text-amber-400 leading-none select-none font-sans">“</span>
                <span className="font-normal">
                  Mathematics is not difficult. It is difficult only when it is taught without understanding.
                </span>
                <span className="text-4xl text-amber-400 leading-none select-none font-sans">”</span>
              </p>
            </motion.div>

            {/* CTAs with Magnetic Hover Glow */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                <Link
                  href="/vedic-math-lab"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/35 hover:shadow-amber-500/55 transition-all duration-300"
                >
                  <Calculator className="w-4 h-4 text-slate-950" />
                  <span>Try Speed Math Lab</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                <Link
                  href="/media"
                  className="w-full sm:w-auto px-6 py-4 rounded-full glass-panel hover:bg-slate-800/80 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all hover:border-amber-400/60 duration-300 shadow-lg"
                >
                  <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Watch Roopak Sir Live</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-6 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-amber-500/50 text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
                >
                  <span>Book Workshop</span>
                </button>
              </motion.div>
            </motion.div>

            {/* GSAP Animated Stat Counters */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 max-w-2xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left p-2 rounded-xl hover:bg-white/[0.02] transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">
                  <AnimatedCounter target={10000} suffix="+" duration={2.2} />
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium">Students Impacted</div>
              </div>
              <div className="text-center lg:text-left p-2 rounded-xl hover:bg-white/[0.02] transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                  <AnimatedCounter target={100} suffix="+" duration={2.0} />
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium">Workshops & Sessions</div>
              </div>
              <div className="text-center lg:text-left p-2 rounded-xl hover:bg-white/[0.02] transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">
                  <AnimatedCounter target={16} suffix="+" duration={1.8} />
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium">Vedic Sutras Decoded</div>
              </div>
              <div className="text-center lg:text-left p-2 rounded-xl hover:bg-white/[0.02] transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-serif">
                  <AnimatedCounter target={100} suffix="%" duration={1.5} />
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium">Zero-Fear Mindset</div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Hero Image with 3D Tilt & Framer Motion Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/30 via-cyan-500/20 to-amber-400/30 rounded-3xl blur-2xl -z-10 animate-pulse-slow"></div>
            
            <TiltCard className="w-full max-w-md" maxTilt={8}>
              <div className="relative w-full bg-gradient-to-b from-slate-900/95 to-slate-950/95 p-3.5 rounded-3xl border border-amber-500/40 shadow-2xl shadow-black/90 group overflow-hidden">
                
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/roopak-speaking.jpg"
                    alt="Mr. Roopak Kumar - Vedic Mathematics Educator & Keynote Speaker"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-slate-950/20 to-transparent opacity-90"></div>
                  
                  {/* Floating Bottom Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl glass-panel-gold border-amber-500/40 backdrop-blur-xl shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          <span>Keynote Speaker & Educator</span>
                        </div>
                        <div className="text-base font-bold text-white font-serif mt-0.5">
                          Mr. Roopak Kumar
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Bharat Education Forum • Teacher Training
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/25 animate-pulse">
                        <Zap className="w-5 h-5 text-amber-300" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Top Left */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -left-3 sm:-left-5 p-3 rounded-2xl glass-panel-gold border-amber-400/60 shadow-2xl hidden sm:flex items-center gap-3 backdrop-blur-xl z-20"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/30 flex items-center justify-center text-amber-300 shadow-md">
                    <Award className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Vidyasagar Awardee</div>
                    <div className="text-[10px] text-amber-300 font-medium">Shikshak Shakti Council 2026</div>
                  </div>
                </motion.div>

                {/* Floating Badge Bottom Right */}
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-3 -right-3 sm:-right-5 p-3 rounded-2xl glass-panel border-emerald-500/50 shadow-2xl hidden sm:flex items-center gap-3 backdrop-blur-xl z-20"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">CTET Qualified</div>
                    <div className="text-[10px] text-emerald-300 font-medium">TGT & PRT Certified</div>
                  </div>
                </motion.div>

              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
