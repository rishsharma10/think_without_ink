import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQClient from "@/components/FAQClient";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Think Without Ink — Roopak Kumar",
  description:
    "Comprehensive FAQs about Vedic Mathematics workshops, school bootcamps, teacher training (FDP), and speed math masterclasses with Mr. Roopak Kumar.",
};

const faqData = [
  {
    category: "schools",
    categoryName: "Schools & Principals",
    q: "How can our school organize a Vedic Mathematics workshop with Roopak Sir?",
    a: "Schools can book 1-day or 3-day bootcamps by reaching out through our booking portal or direct WhatsApp. Roopak Sir’s team coordinates syllabus requirements, auditorium logistics, and custom scheduling to match your academic timetable.",
  },
  {
    category: "schools",
    categoryName: "Schools & Principals",
    q: "Can Roopak Sir be invited as a Special Guest / Keynote Speaker for Annual Functions or Science/Math Fests?",
    a: "Yes! Roopak Sir is frequently invited as a Guest of Honour and Keynote Speaker (e.g. at Bharat Education Forum, Shikshak Shakti Council, College Yatra). His addresses combine inspirational life stories with engaging live math demonstrations for audiences.",
  },
  {
    category: "teachers",
    categoryName: "Teachers & Faculty",
    q: "What is the focus of the Faculty Development Program (FDP)?",
    a: "The FDP focuses on 'Resilient Teachers, Thriving Classrooms'—equipping math faculty with visual pedagogical tools, the 16 Vedic Sutras, strategies to integrate mental math into CBSE/ICSE lesson plans, and methods to eradicate student math anxiety.",
  },
  {
    category: "teachers",
    categoryName: "Teachers & Faculty",
    q: "Does Vedic Mathematics clash with school board marking schemes (CBSE / ICSE)?",
    a: "Not at all. In board exams, students write traditional descriptive steps while using Vedic methods as a mental super-weapon to execute inner calculations 5x faster, prevent calculation blunders, and verify answers instantly without rough work.",
  },
  {
    category: "students",
    categoryName: "Students & Aspirants",
    q: "Which grade levels benefit the most from Think Without Ink?",
    a: "Students from Grade 6 to Grade 12, as well as competitive exam aspirants (JEE, CUET, NDA, SSC, Banking, Olympiads) benefit tremendously. The methods build strong foundational arithmetic and rapid mental algebra skills.",
  },
  {
    category: "students",
    categoryName: "Students & Aspirants",
    q: "I am weak in mathematics. Will I be able to keep up with the workshop?",
    a: "Absolutely! Think Without Ink was created specifically for students who feel anxious about math. Roopak Sir starts from foundational intuition, ensuring every single student experiences quick wins and gains immediate confidence.",
  },
  {
    category: "parents",
    categoryName: "Parents & Guardians",
    q: "How quickly will my child show improvement in calculation speed?",
    a: "Most students show an immediate 2x to 5x improvement in arithmetic and squaring speed within the very first 2-hour session of the workshop. Their confidence and attitude toward homework changes noticeably within a week.",
  },
  {
    category: "parents",
    categoryName: "Parents & Guardians",
    q: "Are practice materials or worksheets provided after the workshop?",
    a: "Yes. All workshop participants receive curated speed drill sheets, formula cheat-sheets, and access to continuous practice resources to ensure long-term mastery.",
  },
];

export default function FAQPage() {
  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Knowledge Base</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight">
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Find detailed answers to questions regarding workshops, pedagogy, curriculum alignment, and booking details.
            </p>
          </div>
        </section>

        {/* Categories & FAQs */}
        <section className="py-20 bg-[#060911]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <FAQClient faqData={faqData} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
