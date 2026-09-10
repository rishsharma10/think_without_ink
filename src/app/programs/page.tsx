import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsSection from "@/components/ProgramsSection";
import { Sparkles, School, Users, GraduationCap, ArrowRight, CheckCircle2, ShieldCheck, Clock, Award, BookOpen, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Workshops & Programs | Mr. Roopak Kumar — Think Without Ink",
  description:
    "Explore Vedic Mathematics workshops for schools, Faculty Development Programs (FDP) for teachers, and student speed math masterclasses.",
};

export default function ProgramsPage() {
  const workshopFormats = [
    {
      title: "1-Day Power Bootcamp",
      duration: "4 to 6 Hours",
      audience: "Schools, Colleges & Coaching Centers",
      summary: "High-energy speed math session covering top 6 Vedic sutras, mental multiplication, and squaring shortcuts.",
      image: "/images/roopak-speaking.jpg",
    },
    {
      title: "3-Day Deep Mastery Workshop",
      duration: "3 Consecutive Days (12 Hours total)",
      audience: "Board Exam (Grades 9-12) & Competitive Aspirants",
      summary: "Comprehensive syllabus covering mental division, square roots, cube roots, algebra factorization, and exam time management.",
      image: "/images/roopak-stage-honour.jpg",
    },
    {
      title: "Faculty Development Program (FDP)",
      duration: "1 to 2 Days",
      audience: "Mathematics Teachers, HODs & Educators",
      summary: "Pedagogy training based on 'Resilient Teachers, Thriving Classrooms', showing teachers how to make math joyful and fear-free.",
      image: "/images/roopak-vidyasagar-award.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Transformational Workshops & Courses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight">
              Programs & <span className="text-gold-gradient">Offerings</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Equipping schools, universities, educators, and students with practical speed math tools to accelerate learning and banish math anxiety forever.
            </p>
          </div>
        </section>

        {/* Featured Program Showcase with Visual Split */}
        <section className="py-20 bg-[#070a14] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel-gold border-amber-500/30 shadow-2xl">
                  <Image
                    src="/images/roopak-speaking.jpg"
                    alt="Roopak Sir leading teacher training at Bharat Education Forum"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl glass-panel-gold border-amber-400/30">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      Live Demonstration & Keynote
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Bharat Education Forum: Teacher Training Program
                    </h4>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-400/30">
                  <Award className="w-3.5 h-3.5" />
                  <span>The Flagship Pedagogy</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                  &quot;Resilient Teachers, Thriving Classrooms&quot;
                </h2>

                <p>
                  Roopak Sir’s flagship training model combines psychological empowerment with practical Vedic speed calculations. When teachers master these techniques, they transform boring arithmetic into captivating interactive math games.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>100% Curriculum-Aligned:</strong> Seamlessly enhances CBSE, ICSE, IB, and State Board lessons.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Practical Speed Drills:</strong> Hands-on mental math algorithms that eliminate rough paper dependency.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Accredited Participation Certificates:</strong> Official certificates for participating faculty and students.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Programs Section Component */}
        <ProgramsSection />

        {/* Workshop Formats with Visual Cards */}
        <section className="py-20 bg-[#070b15] border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                Delivery Formats & Workshop Structure
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Customizable to fit your institution&apos;s academic calendar, on-campus or hybrid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workshopFormats.map((fmt, idx) => (
                <div key={idx} className="rounded-3xl glass-panel-gold border-amber-500/25 overflow-hidden flex flex-col justify-between shadow-2xl hover:border-amber-400/50 transition-all duration-300">
                  <div className="relative aspect-[16/10] w-full bg-slate-950">
                    <Image
                      src={fmt.image}
                      alt={fmt.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent"></div>
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-xs text-slate-200 bg-slate-950/80 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{fmt.duration}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                        Format 0{idx + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white font-serif">
                        {fmt.title}
                      </h3>
                      <div className="text-xs text-amber-200/90 font-semibold">
                        🎯 Target: {fmt.audience}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {fmt.summary}
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/30 text-xs font-bold flex items-center justify-center gap-2 transition-all hover:border-amber-400"
                      >
                        <span>Request Dates & Quotation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Contact Box */}
            <div className="p-8 sm:p-10 rounded-3xl glass-panel-gold border-amber-400/40 text-center space-y-4 max-w-4xl mx-auto shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Ready to Schedule a Workshop for Your Institution?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl mx-auto">
                Reach out directly with your proposed dates and student strength. We will customize the syllabus accordingly.
              </p>
              <div className="pt-2 flex justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:scale-105 transition-all"
                >
                  <span>Go to Booking Portal</span>
                  <ArrowRight className="w-4 h-4" />
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
