"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowRight, Brain, Award, BookOpen, PlayCircle, Phone, Home, Calculator, Mail, Users } from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: BookOpen },
    { name: "Philosophy", href: "/philosophy", icon: Brain },
    { name: "Vedic Math Lab", href: "/vedic-math-lab", icon: Calculator },
    { name: "Awards", href: "/awards", icon: Award },
    { name: "Programs", href: "/programs", icon: Sparkles },
    { name: "Workshops", href: "/workshops", icon: Users },
    { name: "Media", href: "/media", icon: PlayCircle },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c16]/95 backdrop-blur-xl border-b border-amber-500/15 shadow-xl shadow-black/50 py-3"
          : "bg-[#060911]/80 backdrop-blur-md py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                      : "text-slate-300 hover:text-amber-300 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Tablet & Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenContact ? (
              <button
                onClick={onOpenContact}
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 rounded-full transition-all duration-300 group-hover:opacity-90"></span>
                <span className="relative flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0a0f1d] text-xs font-semibold text-amber-200 group-hover:bg-transparent group-hover:text-slate-950 transition-all duration-300">
                  <span>Book Session</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            ) : (
              <Link
                href="/contact"
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 rounded-full transition-all duration-300 group-hover:opacity-90"></span>
                <span className="relative flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0a0f1d] text-xs font-semibold text-amber-200 group-hover:bg-transparent group-hover:text-slate-950 transition-all duration-300">
                  <span>Book Session</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/contact"
              className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 md:hidden"
              aria-label="Contact"
            >
              <Phone className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#090e1a]/98 backdrop-blur-2xl border-b border-amber-500/20 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold"
                      : "text-slate-200 hover:text-amber-300 hover:bg-amber-500/10"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-slate-950" : "text-amber-400"}`} />
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
            >
              <span>Book Workshop / Invite Roopak Sir</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
