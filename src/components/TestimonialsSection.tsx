"use client";

import { Quote, Star, Sparkles, Heart } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I was terrified of Board exam mathematics and couldn't complete my pre-boards in time. After attending Roopak Sir's 3-day Vedic Math workshop, my calculation speed doubled. For the first time, I finished my exam with 25 minutes to spare!",
      author: "Aarav Sharma",
      role: "Class 10 CBSE Student (Scored 96% in Maths)",
      tag: "Zero Exam Anxiety",
    },
    {
      quote:
        "“Sir, ab Maths samajh aa gaya!” I used to cry during math homework because no one explained WHY things work. Roopak Sir broke down arithmetic into pure logic and visualization. Now math is my favourite subject!",
      author: "Ananya Deshmukh",
      role: "Class 8 Learner & Think Without Ink Student",
      tag: "Pure Confidence",
    },
    {
      quote:
        "Having Roopak Sir train our school's mathematics faculty completely revitalized our department. His methods bridge ancient Vedic sutras with the modern CBSE curriculum seamlessly. Our students' average test scores rose significantly.",
      author: "Dr. R. K. Mukherjee",
      role: "School Principal & Senior Educator",
      tag: "Faculty Training Impact",
    },
    {
      quote:
        "The speed calculation tricks for quadratic equations and large multiplications saved crucial minutes in my competitive exams. Roopak Sir teaches you how to think without ink literally.",
      author: "Rohan Verma",
      role: "Competitive Exam Aspirant (CUET / JEE)",
      tag: "Competitive Speed",
    },
  ];

  return (
    <section className="py-24 relative bg-[#070b14] border-t border-white/5 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
            <Heart className="w-3.5 h-3.5 text-amber-400" />
            <span>Student & Educator Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight">
            The Voice of Change
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real stories from classrooms and students whose relationship with mathematics was forever transformed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl glass-panel-gold border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-400/30">
                    {t.tag}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-amber-500/20 absolute -top-2 -left-2 -z-10" />
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                    “{t.quote}”
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 font-serif font-bold text-xs">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
