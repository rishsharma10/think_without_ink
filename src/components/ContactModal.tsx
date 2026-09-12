"use client";

import { useState } from "react";
import { X, Sparkles, Send, CheckCircle2, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export default function ContactModal({ isOpen, onClose, defaultProgram }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: defaultProgram || "School / College Workshop",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Construct WhatsApp message
    const message = `Hello Roopak Sir,%0A%0AI am inquiring about: *${formData.inquiryType}*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Organization:* ${formData.organization}%0A%0A*Message:* ${formData.message}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/919625190184?text=${message}`, "_blank");
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#f59e0b", "#fbbf24", "#60a5fa", "#34d399"],
      });
    }, 800);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full bg-[#090e1a] rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl my-8"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-900 to-[#090e1a] border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Think Without Ink Connect</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            Invite Roopak Sir or Book a Session
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Let&apos;s empower your students and teachers with the speed and joy of Vedic Mathematics.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Principal Sharma / Rahul"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 96251 90184"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@school.edu.in / personal"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    School / Organization / Class
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="School / College / Individual"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Program / Inquiry Type
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white bg-slate-900 cursor-pointer"
                >
                  <option value="School / College Workshop">School / College Vedic Math Bootcamp</option>
                  <option value="Teacher Training & FDP">Teacher Training & Faculty Development (FDP)</option>
                  <option value="Think Without Ink Masterclass">Think Without Ink Student Masterclass</option>
                  <option value="Keynote / Special Guest Invitation">Keynote / Guest of Honour Invitation</option>
                  <option value="1-on-1 Mentorship">1-on-1 Mentorship</option>
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Additional Details / Dates / Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about expected student strength, preferred dates, or specific topics..."
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white placeholder:text-slate-500 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Workshop Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white font-serif">
                Thank You, {formData.name || "Learner"}!
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your inquiry for <span className="text-amber-300 font-semibold">{formData.inquiryType}</span> has been received. Roopak Sir&apos;s team will connect with you within 24 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
                >
                  Close Window
                </button>

                <a
                  href={`https://wa.me/919625190184?text=Hello%20Roopak%20Sir%2C%20I%20am%20interested%20in%20Think%20Without%20Ink%20Vedic%20Math%20Workshops`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
