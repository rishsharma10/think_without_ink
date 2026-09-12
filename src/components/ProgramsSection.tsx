"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, School, GraduationCap, Users, ArrowRight, CheckCircle2, ShieldCheck, Flame, BookOpen, Clock, Award } from "lucide-react";
import TiltCard from "@/components/TiltCard";

interface ProgramsSectionProps {
  onOpenContact?: (programName?: string) => void;
}

export default function ProgramsSection({ onOpenContact }: ProgramsSectionProps) {
  const programs = [
    {
      id: "schools",
      icon: School,
      tag: "For Schools & Institutions",
      badge: "Most Popular",
      image: "/images/classroom-mastery.jpg",
      title: "School & College Vedic Math Bootcamps",
      subtitle: "Transforming whole classrooms through interactive speed calculation workshops.",
      description:
        "Designed for students from Grade 6 onwards, board exam students, and competitive aspirants. Demystifies complex calculations and fosters fearless mathematical intuition.",
      deliverables: [
        "1 to 3-day intensive on-campus or hybrid bootcamps",
        "Mastering 16 Vedic Sutras for rapid multiplication, division & roots",
        "Eradicating exam panic and rough-sheet time wastage",
        "Tailored for CBSE, ICSE, State Boards & Olympiads",
      ],
      popular: true,
      accent: "from-amber-500 to-yellow-400",
    },
    {
      id: "teachers",
      icon: Users,
      tag: "For Educators & Faculty",
      badge: "Accredited Pedagogy",
      image: "/images/roopak-stage-honour.jpg",
      title: "Faculty Development & Teacher Training",
      subtitle: "Empowering educators with innovative Vedic Math teaching tools and mindset training.",
      description:
        "Keynotes and masterclasses based on Roopak Sir’s acclaimed 'Resilient Teachers, Thriving Classrooms' model. Learn how to turn disengaged students into passionate math lovers.",
      deliverables: [
        "Interactive FDPs for Mathematics Departments",
        "Techniques to explain the 'Why' behind every math concept",
        "Integrating Vedic mental math into existing school curricula",
        "Certificate of Participation & Shikshak empowerment toolkit",
      ],
      popular: false,
      accent: "from-cyan-500 to-blue-500",
    },
    {
      id: "masterclass",
      icon: GraduationCap,
      tag: "For Students & Aspirants",
      badge: "High Impact",
      image: "/images/mental-math-mastery.jpg",
      title: "Online VIP Vedic Maths Batch",
      subtitle: "Comprehensive online & offline mentorship for lightning-fast mental arithmetic.",
      description:
        "A structured end-to-end program for competitive aspirants (JEE, CUET, Banking, SSC, NDA) and enthusiastic learners seeking deep mental agility and calculation mastery.",
      deliverables: [
        "Complete 16 Sutras & 13 Sub-Sutras breakdown",
        "Mental speed enhancement: solve sums 5x faster",
        "Personal mentorship and Q&A sessions with Roopak Sir",
        "Lifetime access to practice worksheets & speed drills",
      ],
      popular: false,
      accent: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <section id="programs" className="py-24 relative bg-[#040816] overflow-hidden">
      
      {/* Background radial glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-r from-amber-500/10 via-cyan-500/8 to-indigo-500/10 blur-[180px] pointer-events-none"></div>

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
            <span>Workshops & Programs</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight"
          >
            Learn with <span className="text-gold-gradient">Roopak Sir</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Tailored programs for schools, colleges, educators, and individual learners looking to master mathematics fearlessly.
          </motion.p>
        </div>

        {/* Program Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full"
              >
                <TiltCard className="h-full" maxTilt={6}>
                  <div
                    className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 relative overflow-hidden ${
                      prog.popular
                        ? "glass-panel-gold border-amber-400/55 shadow-2xl shadow-amber-500/20"
                        : "glass-panel border-white/12 hover:border-amber-400/40"
                    }`}
                  >
                    {/* Top Image Preview */}
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-white/10 group">
                      <Image
                        src={prog.image}
                        alt={prog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                      
                      {/* Popular Pill */}
                      {prog.popular && (
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 fill-slate-950" />
                          <span>{prog.badge}</span>
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-amber-400/40 flex items-center justify-center text-amber-300 backdrop-blur-md shadow-md">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10">
                          {prog.tag}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 flex-1">
                      <div>
                        <h3 className="text-xl font-bold text-white font-serif leading-snug">
                          {prog.title}
                        </h3>
                        <p className="text-xs text-amber-200/90 font-medium mt-1">
                          {prog.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {prog.description}
                      </p>

                      <div className="pt-3 space-y-2.5 border-t border-white/10">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          What is included:
                        </p>
                        {prog.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-7 mt-auto">
                      {onOpenContact ? (
                        <button
                          onClick={() => onOpenContact(prog.title)}
                          className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                            prog.popular
                              ? "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02]"
                              : "bg-slate-800/80 hover:bg-slate-700 text-white border border-white/15 hover:border-amber-400/50 hover:text-amber-300"
                          }`}
                        >
                          <span>Request Details / Book Program</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <Link
                          href="/contact"
                          className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                            prog.popular
                              ? "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02]"
                              : "bg-slate-800/80 hover:bg-slate-700 text-white border border-white/15 hover:border-amber-400/50 hover:text-amber-300"
                          }`}
                        >
                          <span>Request Details / Book Program</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Institution Keynote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel-gold border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>National Speaker & Guest of Honour</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-serif">
              Inviting Roopak Sir for Keynotes & Annual Summits?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Inspire your teachers, students, and parent community with high-energy keynotes on mathematics resilience and cognitive acceleration.
            </p>
          </div>
          {onOpenContact ? (
            <button
              onClick={() => onOpenContact("Keynote / Special Guest Invitation")}
              className="shrink-0 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/45 hover:scale-105 transition-all"
            >
              Invite as Special Guest
            </button>
          ) : (
            <Link
              href="/contact"
              className="shrink-0 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/45 hover:scale-105 transition-all"
            >
              Invite as Special Guest
            </Link>
          )}
        </motion.div>

      </div>
    </section>
  );
}
