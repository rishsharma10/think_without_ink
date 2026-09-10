"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  category: string;
  categoryName: string;
  q: string;
  a: string;
}

interface FAQClientProps {
  faqData: FAQItem[];
}

export default function FAQClient({ faqData }: FAQClientProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "schools" | "students" | "parents" | "teachers">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredFaqs = activeCategory === "all" 
    ? faqData 
    : faqData.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { id: "all", label: "All Questions" },
          { id: "schools", label: "Schools & Principals" },
          { id: "teachers", label: "Teachers & FDP" },
          { id: "students", label: "Students & Aspirants" },
          { id: "parents", label: "Parents" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveCategory(tab.id as any);
              setOpenFaq(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === tab.id
                ? "bg-amber-500 text-slate-950 shadow-md"
                : "glass-panel text-slate-300 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* FAQs Accordion */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <div
              key={index}
              className="rounded-2xl glass-panel-gold border-amber-500/20 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full p-5 sm:p-6 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:text-amber-300 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    {faq.categoryName}
                  </span>
                  <span>{faq.q}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions banner */}
      <div className="p-8 rounded-3xl glass-panel border-white/10 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
          Have a Question That Isn&apos;t Answered Here?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300">
          Contact Roopak Sir&apos;s team directly. We are happy to help you design a tailored program.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25"
          >
            <span>Go to Contact & Booking Portal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
