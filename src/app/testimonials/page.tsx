import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Sparkles, Heart, Star, Quote, ArrowRight, CheckCircle2, TrendingUp, Users, Award, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Transformations & Testimonials | Think Without Ink — Roopak Kumar",
  description:
    "Read real student transformations, school principal reviews, and parent feedback on Mr. Roopak Kumar’s Vedic Mathematics workshops.",
};

export default function TestimonialsPage() {
  const detailedStories = [
    {
      student: "Aarav Sharma",
      class: "Class 10 CBSE (Pre-Board Score: 58% ➔ Board Exam: 96%)",
      headline: "“From Pre-Board Panic to Scoring 96% with 25 Minutes Left Over”",
      story:
        "I was always terrified of large numbers, long multiplications, and algebraic factorization. My pre-board scores suffered because I spent 15-20 minutes on rough work alone. After attending Roopak Sir’s 3-day Vedic Math Bootcamp, I mastered Ekadhikena Purvena and Base 100 multiplication. I was able to cross-check all my answers mentally. In my actual CBSE Class 10 board exams, I finished 25 minutes early and scored 96%!",
      tags: ["CBSE Board Exam", "Math Speed", "Zero Rough Work"],
    },
    {
      student: "Ananya Deshmukh",
      class: "Class 8 Learner (Delhi)",
      headline: "“Sir, ab Maths samajh aa gaya! Math went from my nightmare to my favourite subject.”",
      story:
        "Every evening used to end in tears during homework time. Formulas felt like arbitrary rules to memorize. Roopak Sir explained the visual logic behind every number pattern. When he showed us how to square 85 in one second, my mind was blown. Now I teach speed tricks to my friends and look forward to math class every day.",
      tags: ["Fear-Free Math", "Conceptual Clarity", "Young Learner"],
    },
    {
      student: "Dr. R. K. Mukherjee",
      class: "Principal & Senior Academician",
      headline: "“Roopak Sir’s FDP energized our entire Mathematics Department.”",
      story:
        "Having Roopak Sir conduct a Faculty Development Program for our 18 mathematics teachers was one of our best academic decisions. His methods do not replace the CBSE syllabus—they supercharge it. Our teachers now have practical tools to make algebra and arithmetic intuitive and exciting.",
      tags: ["School Leadership", "Faculty Training", "CBSE Curriculum"],
    },
    {
      student: "Rohan Verma",
      class: "CUET & JEE Aspirant",
      headline: "“Saved at least 15 crucial minutes in the quantitative section.”",
      story:
        "In competitive examinations, accuracy without speed is useless. Roopak Sir’s techniques for quadratic equations, digital root validation, and large division gave me a decisive competitive edge over thousands of candidates. Think Without Ink literally saved my exam score.",
      tags: ["Competitive Exams", "JEE / CUET", "Speed Calculation"],
    },
    {
      student: "Meera & Rajesh Nambiar",
      class: "Parents of Class 9 Student",
      headline: "“The change in our son’s confidence was visible within a single weekend.”",
      story:
        "Our son had developed severe math anxiety since middle school. Roopak Sir’s warmth, patience, and inspiring life story motivated him deeply. Hearing a teacher say 'You can do it' and proving it with simple 2-second tricks restored his self-belief completely.",
      tags: ["Parent Perspective", "Confidence Rebuilt", "Emotional Growth"],
    },
    {
      student: "Siddharth Goel",
      class: "Class 12 Science Stream",
      headline: "“Mental calculations feel like a superpower during physics & chemistry numericals too!”",
      story:
        "What people don't realize is that Vedic Math doesn't just help in pure mathematics—it speeds up physical chemistry calculations and physics numericals tremendously. Roopak Sir is truly a master educator.",
      tags: ["Class 12", "Physics & Chemistry", "Mental Agility"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header Banner */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Heart className="w-3.5 h-3.5 text-amber-400" />
              <span>Real Transformations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight">
              From &quot;I Am Weak in Maths&quot; to <span className="text-gold-gradient">&quot;I CAN DO IT!&quot;</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Read how Mr. Roopak Kumar has impacted over 10,000 students, educators, and parents across schools and competitive platforms.
            </p>
          </div>
        </section>

        {/* Detailed Case Studies */}
        <section className="py-20 bg-[#060911]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailedStories.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl glass-panel-gold border-amber-500/25 flex flex-col justify-between space-y-6 shadow-2xl hover:border-amber-400/50 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-amber-300 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white font-serif leading-snug">
                      {item.headline}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                      “{item.story}”
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.student}</h4>
                      <p className="text-xs text-amber-300 font-medium mt-0.5">{item.class}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-500/15 border border-amber-500/40 text-center max-w-4xl mx-auto shadow-2xl space-y-4">
              <Quote className="w-8 h-8 text-amber-400 mx-auto" />
              <p className="text-xl sm:text-2xl font-serif font-extrabold text-white italic">
                “Every student who says ‘Sir, ab Maths samajh aa gaya!’ becomes a reminder that I chose the right path. Although I could not become an Air Force officer, I can still create a ripple effect—by empowering lakhs of young minds to become confident, capable and courageous.”
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                — Roopak Kumar, Founder Think Without Ink
              </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 hover:scale-105 transition-all"
              >
                <span>Bring This Transformation to Your School</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
