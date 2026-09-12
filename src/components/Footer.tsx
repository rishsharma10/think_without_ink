"use client";

import Link from "next/link";
import { Award, ShieldCheck, ArrowUp, Sparkles, Mail, Phone } from "lucide-react";

interface FooterProps {
  onOpenContact?: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050811] border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex flex-col group shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-cursive text-amber-400 group-hover:text-amber-300 transition-colors">
                  Think Without Ink
                </span>
                <span className="inline-block px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-md hidden sm:inline-block">
                  Vedic Math
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium sm:ml-1">By Roopak Kumar</p>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Making Mathematics Simple, Fast & Fearless. Empowering students, educators, and institutions with ancient Vedic wisdom and modern logical mastery.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-amber-500/20 max-w-sm">
              <p className="text-xs text-amber-200/90 italic">
                “Your circumstances may shape your beginning, but they do not have to decide your destination.”
              </p>
              <p className="text-[11px] text-slate-400 font-semibold mt-1">— Roopak Kumar</p>
            </div>
          </div>

          {/* Dedicated Pages Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Home Landing Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors">
                  About & Inspiring Story
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="hover:text-amber-300 transition-colors">
                  The 5 Pillars of Learning
                </Link>
              </li>
              <li>
                <Link href="/vedic-math-lab" className="hover:text-amber-300 transition-colors">
                  Vedic Speed Math Lab & Sutras
                </Link>
              </li>
              <li>
                <Link href="/awards" className="hover:text-amber-300 transition-colors">
                  Awards, Honors & Gallery
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-amber-300 transition-colors">
                  Online VIP Vedic Maths Batch
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:text-amber-300 transition-colors">
                  Workshops & Teacher Training
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-amber-300 transition-colors">
                  Student Transformation Stories
                </Link>
              </li>
              <li>
                <Link href="/sutras" className="hover:text-amber-300 transition-colors">
                  16 Vedic Sutras Encyclopedia
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-amber-300 transition-colors">
                  Keynote Speech & Media
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Contact & Booking Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Credential Highlights & Action */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Credentials & Accreditations
            </h4>
            
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Govt. & Internationally Certified Vedic Math Teacher</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>CENTA TPO 2019 National Rank Holder</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Vidyasagar Leadership Awardee</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Book a School / Faculty Session</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Mr. Roopak Kumar • <span className="text-slate-300 font-semibold">Think Without Ink</span>. All rights reserved.
            <span className="mx-2">•</span>
            <Link href="/privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link>
            <span className="mx-2">•</span>
            <Link href="/terms" className="hover:text-amber-300 transition-colors">Terms of Service</Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://youtu.be/YmCJAIu7GWg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-red-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-red-500" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube Keynote</span>
            </a>
            <a
              href="https://www.instagram.com/thinkwithout_ink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-pink-400 transition-colors"
            >
              <svg className="w-4 h-4 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>Instagram</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-amber-300 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
