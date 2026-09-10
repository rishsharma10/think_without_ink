"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Lightbulb, Calculator, HelpCircle, Heart, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import TiltCard from "@/components/TiltCard";

export default function PhilosophySection() {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      id: "think",
      title: "How to THINK",
      subtitle: "Beyond Memorization & Mechanical Steps",
      icon: Brain,
      tagline: "Cultivating Mental Agility",
      color: "from-amber-500 to-yellow-400",
      accentBg: "bg-amber-500/15 border-amber-500/40 text-amber-300",
      image: "/images/hero-vedic-aurora.jpg",
      description:
        "Mathematics is not a routine drill; it is the art of pattern recognition. We teach students to examine numbers from multiple perspectives and approach problems with curiosity and agility rather than formulaic anxiety.",
      points: [
        "Develop structural pattern recognition across numerical systems",
        "Eliminate rote formula memorization through intuitive visual models",
        "Build flexible mental frameworks that adapt to new problem types",
      ],
    },
    {
      id: "understand",
      title: "How to UNDERSTAND",
      subtitle: "The 'Why' Behind Every Single Step",
      icon: Lightbulb,
      tagline: "Conceptual Mastery",
      color: "from-cyan-500 to-blue-400",
      accentBg: "bg-cyan-500/15 border-cyan-500/40 text-cyan-300",
      image: "/images/vedic-geometry-bg.jpg",
      description:
        "When students understand why a method works, fear vanishes. We deconstruct arithmetic and algebraic concepts through clear visual, logical, and Vedic principles that make intuitive sense.",
      points: [
        "Uncover the logical foundations behind every Vedic shortcut",
        "Bridge the gap between Vedic math & school board curriculum",
        "Deepen root conceptual clarity over superficial answer-hunting",
      ],
    },
    {
      id: "calculate",
      title: "How to CALCULATE",
      subtitle: "Lightning-Fast Accuracy Without Ink",
      icon: Calculator,
      tagline: "Speed & Precision",
      color: "from-emerald-500 to-teal-400",
      accentBg: "bg-emerald-500/15 border-emerald-500/40 text-emerald-300",
      image: "/images/mental-math-mastery.jpg",
      description:
        "Master 16 Vedic Sutras and mental math algorithms to perform multi-digit calculations, squares, roots, and fractions in seconds—reducing rough sheet dependency and boosting exam speed.",
      points: [
        "Solve multi-digit sums 5x to 10x faster in your head",
        "Calculate mentally without messy rough work chaos",
        "Gain instant time advantage in competitive exams (JEE, CUET, NDA)",
      ],
    },
    {
      id: "question",
      title: "How to QUESTION",
      subtitle: "The Fuel for True Intellectual Growth",
      icon: HelpCircle,
      tagline: "Inquiry-Driven Mindset",
      color: "from-purple-500 to-indigo-400",
      accentBg: "bg-purple-500/15 border-purple-500/40 text-purple-300",
      image: "/images/classroom-mastery.jpg",
      description:
        "Every profound discovery begins with a question. We create safe, vibrant classroom spaces where students are encouraged to ask 'Can we solve this another way?' and explore alternative pathways.",
      points: [
        "Encourage creative problem solving with multiple solution paths",
        "Challenge conventional single-method rigid thinking",
        "Foster scientific temper, curiosity, and analytical reasoning",
      ],
    },
    {
      id: "believe",
      title: "How to BELIEVE",
      subtitle: "From 'I am weak in Maths' to 'I CAN DO IT!'",
      icon: Heart,
      tagline: "Unshakable Self-Confidence",
      color: "from-rose-500 to-amber-400",
      accentBg: "bg-rose-500/15 border-rose-500/40 text-rose-300",
      image: "/images/roopak-stage-honour.jpg",
      description:
        "The greatest barrier in mathematics is psychological. By experiencing immediate wins through Vedic techniques, students rebuild their self-esteem and realize math is within their grasp.",
      points: [
        "Eradicate math anxiety, phobia, and exam panic",
        "Build lifelong cognitive resilience and self-efficacy",
        "Celebrate breakthrough moments: 'Sir, ab Maths samajh aa gaya!'",
      ],
    },
  ];

  const current = pillars[selectedPillar];
  const CurrentIcon = current.icon;

  return (
    <section id="philosophy" className="py-24 relative bg-[#040711] overflow-hidden">
      
      {/* Background visual art blend */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-screen pointer-events-none">
        <Image
          src="/images/vedic-geometry-bg.jpg"
          alt="Vedic Sacred Geometry"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Ambient gradient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-indigo-500/10 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/35 text-amber-300 shadow-md backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The 5 Pillars of Learning</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight"
          >
            Our Core Teaching <span className="text-gold-gradient">Philosophy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Mathematics isn’t just numbers on a page—it is a training ground for life. Roopak Sir’s methodology builds resilient thinkers and joyful learners.
          </motion.p>
        </div>

        {/* 5 Pillars Interactive Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = selectedPillar === idx;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(idx)}
                className={`p-4 rounded-2xl flex flex-col items-center text-center gap-3 transition-all duration-300 relative ${
                  isSelected
                    ? "glass-panel-gold border-amber-400/60 shadow-xl shadow-amber-500/20 scale-105 z-10"
                    : "glass-panel border-white/10 hover:border-white/20 hover:bg-slate-800/50"
                }`}
              >
                {/* Active Indicator Bar */}
                {isSelected && (
                  <motion.div
                    layoutId="pillarIndicator"
                    className="absolute -top-1.5 inset-x-6 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 shadow-md shadow-amber-400"
                  />
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    isSelected
                      ? "bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 font-bold shadow-lg shadow-amber-500/30"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isSelected ? "text-amber-300" : "text-slate-400"
                    }`}
                  >
                    Pillar 0{idx + 1}
                  </div>
                  <div className="text-sm font-extrabold text-white mt-0.5">
                    {p.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPillar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl glass-panel-gold border-amber-500/40 p-6 sm:p-10 shadow-2xl overflow-hidden relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column Description */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/40">
                    <CurrentIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{current.tagline}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif">
                    {current.title} —{" "}
                    <span className="text-gold-gradient">{current.subtitle}</span>
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {current.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Key Outcomes & Methodology:
                  </h4>
                  <div className="space-y-2.5">
                    {current.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column Visual Preview */}
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
                    
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/80 border border-amber-400/30 backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                          <CurrentIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white font-serif">{current.title}</div>
                          <div className="text-[11px] text-amber-300">{current.tagline}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Conventional vs Vedic Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl glass-panel border-white/10 p-6 sm:p-10"
        >
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              Conventional Methods vs. <span className="text-gold-gradient">Think Without Ink</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Why Vedic Mathematics revolutionizes the student experience from the ground up
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-4 px-4 font-bold uppercase tracking-wider">Dimension</th>
                  <th className="py-4 px-4 font-bold uppercase tracking-wider text-rose-400">Traditional Approach</th>
                  <th className="py-4 px-4 font-bold uppercase tracking-wider text-amber-400">Think Without Ink (Vedic)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Calculation Speed</td>
                  <td className="py-4 px-4 text-slate-400">Multi-step tedious column work (45-60 sec)</td>
                  <td className="py-4 px-4 font-semibold text-amber-300 bg-amber-500/5">One-line mental answer (2-4 sec)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Rough Work Dependency</td>
                  <td className="py-4 px-4 text-slate-400">Messy rough margins & high error rate</td>
                  <td className="py-4 px-4 font-semibold text-amber-300 bg-amber-500/5">Direct mental projection; zero ink needed</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Cognitive Brain Utilization</td>
                  <td className="py-4 px-4 text-slate-400">Left-brain sequential mechanical rules</td>
                  <td className="py-4 px-4 font-semibold text-amber-300 bg-amber-500/5">Whole-brain pattern recognition & visual flow</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Student Psychology</td>
                  <td className="py-4 px-4 text-slate-400">Math phobia, exam anxiety, avoidance</td>
                  <td className="py-4 px-4 font-semibold text-amber-300 bg-amber-500/5">Empowerment, curiosity, fearless confidence</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Self-Verification / Cross-check</td>
                  <td className="py-4 px-4 text-slate-400">Must re-calculate entire sum from start</td>
                  <td className="py-4 px-4 font-semibold text-amber-300 bg-amber-500/5">Instant cross-check via Navasesh (Digit Sums)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
