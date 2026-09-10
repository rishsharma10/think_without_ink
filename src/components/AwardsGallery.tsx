"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Star, ShieldCheck, Sparkles, X, ExternalLink, Maximize2, CheckCircle2 } from "lucide-react";
import TiltCard from "@/components/TiltCard";

export default function AwardsGallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    subtitle: string;
  } | null>(null);

  const galleryImages = [
    {
      src: "/images/roopak-vidyasagar-award.jpg",
      title: "Vidyasagar Leadership Award 2026 Presentation",
      subtitle: "Presented on Teachers' Day by Shikshak Shakti Council, New Delhi",
      tag: "Vidyasagar Award 2026",
    },
    {
      src: "/images/roopak-stage-honour.jpg",
      title: "Teacher Appreciation & Excellence Ceremony",
      subtitle: "Honoring national contributions to mathematics education on stage",
      tag: "Excellence in Education",
    },
    {
      src: "/images/roopak-speaking.jpg",
      title: "Bharat Education Forum Keynote Address",
      subtitle: "Teacher Training Program 2026: Resilient Teachers, Thriving Classrooms",
      tag: "Guest of Honour & Speaker",
    },
    {
      src: "/images/vidyasagar-trophy.jpg",
      title: "Vidyasagar Leadership Award Shield",
      subtitle: "6 September 2026 • In Recognition of Exceptional Leadership & Dedication",
      tag: "Official Citation Shield",
    },
    {
      src: "/images/teacher-appreciation-award.jpg",
      title: "Teacher Appreciation Award Ceremony 2026",
      subtitle: "Honoring Excellence in Education & Vedic Math Pedagogical Innovation",
      tag: "National Recognition",
    },
    {
      src: "/images/awards-excellence.jpg",
      title: "National Academic Honors & Keynote Forum",
      subtitle: "Celebrating Vedic Mathematics Pioneers Transforming Indian Education",
      tag: "Academic Excellence",
    },
  ];

  const allAchievements = [
    {
      icon: Trophy,
      title: "CENTA Teacher Professional Olympiad (TPO) 2019",
      category: "National Rank Holder",
      highlight: true,
      desc: "Top percentile national rank among tens of thousands of educators across India.",
    },
    {
      icon: ShieldCheck,
      title: "Government-Certified Vedic Mathematics Teacher",
      category: "Government Certified",
      highlight: true,
      desc: "Officially accredited for excellence in Vedic arithmetic and foundational numeracy.",
    },
    {
      icon: Star,
      title: "Internationally Certified Vedic Math Teacher",
      category: "Global Certification",
      highlight: true,
      desc: "Globally validated credentials in teaching the 16 Sutras & mental calculation.",
    },
    {
      icon: Award,
      title: "Vidyasagar Leadership Award 2026",
      category: "Shikshak Shakti Council",
      highlight: true,
      desc: "Conferred on Teachers' Day for transformative pedagogy and student empowerment.",
    },
    {
      icon: Star,
      title: "Special Guest – Teachers' Day 2026",
      category: "Contribution to Education",
      highlight: false,
      desc: "Chief Guest honoring educator development initiatives in the capital.",
    },
    {
      icon: Award,
      title: "Teacher Appreciation Award 2026",
      category: "Excellence in Education",
      highlight: false,
      desc: "Honored for pioneering 'Think Without Ink' workshops across state schools.",
    },
    {
      icon: Award,
      title: "Reliance Foundation Teacher Award",
      category: "National Recognition",
      highlight: false,
      desc: "Awarded for pedagogical innovation and classroom transformation.",
    },
    {
      icon: Award,
      title: "Savitri Bai Phule Award",
      category: "Education Leadership",
      highlight: false,
      desc: "Honoring champions of inclusive, fear-free education for every learner.",
    },
    {
      icon: Award,
      title: "Shikshak Shakti Council Award",
      category: "State Level Honor",
      highlight: false,
      desc: "Recognition of outstanding service to educator development forums.",
    },
    {
      icon: Star,
      title: "Guest of Honour & Keynote Speaker",
      category: "College Yatra, School Yatra & Apna Vidyalaya",
      highlight: false,
      desc: "Invited keynotes delivered across 50+ prestigious institutions.",
    },
    {
      icon: ShieldCheck,
      title: "CTET Qualified (Central Teacher Eligibility Test)",
      category: "Govt. Accreditation",
      highlight: true,
      desc: "Dual certification in Primary & Upper Primary Level Pedagogy.",
    },
    {
      icon: Trophy,
      title: "B.Ed. & B.Sc. (Physics Honours) from Delhi University",
      category: "Academic Foundation",
      highlight: false,
      desc: "Rigorous scientific foundation bridging pure physics and speed arithmetic.",
    },
  ];

  return (
    <section id="awards" className="py-24 relative bg-[#030712] overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-amber-500/10 blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/35 text-amber-300 shadow-md backdrop-blur-md"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors & Credentials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight"
          >
            National Recognitions & <span className="text-gold-gradient">Credentials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            A proven track record of pedagogical excellence, government accreditations, and national awards celebrating fear-free mathematical education.
          </motion.p>
        </div>

        {/* Authentic Photo Gallery Cards */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                Ceremony Moments & Stage Honors
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Click any photograph to inspect the high-resolution citation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard maxTilt={8} className="h-full">
                  <div
                    onClick={() => setSelectedImage(img)}
                    className="group relative h-80 rounded-3xl overflow-hidden glass-panel border-white/10 hover:border-amber-400/60 transition-all duration-300 cursor-pointer shadow-xl"
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity"></div>
                    
                    {/* Hover expand icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md shadow-lg">
                      <Maximize2 className="w-4 h-4 text-amber-400" />
                    </div>

                    {/* Tag badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/40 backdrop-blur-md">
                        {img.tag}
                      </span>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                      <h4 className="text-sm sm:text-base font-bold text-white font-serif line-clamp-1 group-hover:text-amber-300 transition-colors">
                        {img.title}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-2">
                        {img.subtitle}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
            Official Accreditations & Key Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allAchievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                  className={`p-5 rounded-2xl flex items-start gap-4 transition-all duration-300 ${
                    item.highlight
                      ? "glass-panel-gold border-amber-400/40 shadow-lg shadow-amber-500/10"
                      : "glass-panel border-white/10 hover:border-white/20"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      item.highlight
                        ? "bg-amber-500/20 text-amber-300 border border-amber-400/40 shadow-md"
                        : "bg-slate-800 text-slate-300 border border-white/10"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        item.highlight ? "text-amber-400" : "text-slate-400"
                      }`}
                    >
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* High-Res Image Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl border border-amber-500/40 p-3 sm:p-4 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-950/80 border border-white/20 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain"
                />
              </div>

              <div className="p-4 sm:p-6 space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-amber-300/90">
                  {selectedImage.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
