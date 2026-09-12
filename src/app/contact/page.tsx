"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Send, CheckCircle2, MessageSquare, Phone, Mail, MapPin, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "School / College Workshop",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#f59e0b", "#fbbf24", "#60a5fa", "#34d399"],
      });
    }, 800);
  };

  const faqs = [
    {
      q: "What age groups or classes are Roopak Sir’s workshops suitable for?",
      a: "Our Vedic Mathematics workshops are specifically optimized for students from Grade 6 to 12, college learners, and candidates preparing for competitive entrance examinations like JEE, CUET, NDA, SSC, and Banking.",
    },
    {
      q: "Can workshops be conducted in on-campus school auditoriums?",
      a: "Yes! Roopak Sir conducts interactive, hands-on bootcamps on-campus across India. We also provide hybrid and interactive live online masterclasses for remote institutions.",
    },
    {
      q: "How does Vedic Mathematics help with school board exams (CBSE / ICSE)?",
      a: "While board exams require step-by-step written proofs, Vedic Math allows students to instantly cross-check answers in 2 seconds, perform complex arithmetic operations in their head, eliminate rough sheet errors, and finish exam papers 20–30 minutes ahead of time.",
    },
    {
      q: "What is included in the Faculty Development Program (FDP)?",
      a: "Mathematics teachers receive comprehensive training on the 16 Vedic Sutras, pedagogical visualization tools to remove student fear, and actionable strategies to integrate mental math into standard CBSE/ICSE curriculum units.",
    },
    {
      q: "How soon does Roopak Sir's team respond to booking requests?",
      a: "All institutional inquiries and workshop requests are answered within 24 hours with custom syllabus options and date availability.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight">
              Connect with <span className="text-gold-gradient">Mr. Roopak Kumar</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Book a school or college bootcamp, request a keynote appearance, or enroll in a mental math masterclass.
            </p>
          </div>
        </section>

        {/* Contact Form & Information Grid */}
        <section className="py-20 bg-[#060911]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Contact info & value props */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Think Without Ink Headquarters
                  </span>
                  <h2 className="text-3xl font-extrabold text-white font-serif">
                    Let's Make Mathematics Easier Together
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Have a question about Vedic Maths classes, workshops, teacher training or upcoming batches?
                    <br/><br/>
                    Connect with Roopak Kumar – Think Without Ink.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <a
                      href="/programs"
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-sm text-center shadow-lg hover:scale-105 transition-all"
                    >
                      Join the Next VIP Batch
                    </a>
                    <a
                      href="https://wa.me/919625190184?text=Hello%20Roopak%20Sir%2C%20I%20have%20a%20query%20regarding%20Vedic%20Maths"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-slate-800 text-white font-bold text-sm text-center border border-white/10 hover:border-amber-400/50 transition-all"
                    >
                      Contact Roopak Sir
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl glass-panel border-white/5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Location & Operations</h4>
                      <p className="text-sm font-semibold text-white">New Delhi, India (Conducting Workshops Pan-India)</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl glass-panel border-white/5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct WhatsApp</h4>
                      <a
                        href="https://wa.me/919625190184?text=Hello%20Roopak%20Sir%2C%20I%20am%20interested%20in%20Think%20Without%20Ink%20Vedic%20Math%20Workshops"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-emerald-400 hover:text-emerald-300 underline transition-colors"
                      >
                        +91 96251 90184
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl glass-panel-gold border-amber-500/30">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Response Guarantee
                  </div>
                  <p className="text-xs text-slate-300">
                    We personally review and respond to all institutional workshop proposals and speaker invitations within 24 hours.
                  </p>
                </div>
              </div>

              {/* Right Column: Full Interactive Booking Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl glass-panel-gold border-amber-500/30 p-6 sm:p-10 shadow-2xl">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                          Booking & Inquiry Form
                        </span>
                        <h3 className="text-2xl font-extrabold text-white font-serif mt-1">
                          Schedule a Session or Send a Message
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Principal Sharma / Rahul"
                            className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder:text-slate-500"
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
                            className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder:text-slate-500"
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
                            className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder:text-slate-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            School / College / Organization
                          </label>
                          <input
                            type="text"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            placeholder="School / University / Individual"
                            className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder:text-slate-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Inquiry Type
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white bg-slate-900 cursor-pointer"
                        >
                          <option value="School / College Workshop">School / College Vedic Math Bootcamp</option>
                          <option value="Teacher Training & FDP">Faculty Development Program (FDP)</option>
                          <option value="Think Without Ink Masterclass">Think Without Ink Student Masterclass</option>
                          <option value="Keynote / Special Guest Invitation">Keynote / Guest of Honour Invitation</option>
                          <option value="1-on-1 Mentorship">1-on-1 Mentorship</option>
                          <option value="Other Inquiry">Other Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Message / Expected Student Count / Preferred Dates
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Share specifics about your requirements, student grade levels, or event schedule..."
                          className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder:text-slate-500 resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all disabled:opacity-50"
                      >
                        {loading ? (
                          <span>Submitting Request...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Workshop Inquiry</span>
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-12 space-y-5 animate-in zoom-in-95 duration-300">
                      <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h4 className="text-3xl font-extrabold text-white font-serif">
                        Inquiry Received, {formData.name || "Learner"}!
                      </h4>
                      <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out regarding <span className="text-amber-300 font-semibold">{formData.inquiryType}</span>. Roopak Sir&apos;s academic coordination team will get in touch with you shortly.
                      </p>

                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                          onClick={() => setSubmitted(false)}
                          className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
                        >
                          Submit Another Inquiry
                        </button>
                        <a
                          href="https://wa.me/919625190184?text=Hello%20Roopak%20Sir%2C%20I%20am%20interested%20in%20Think%20Without%20Ink%20Vedic%20Math%20Workshops"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Direct WhatsApp Connect</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-[#070b14] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white font-serif">
                Everything You Need to Know
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl glass-panel border-white/5 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:text-amber-300 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
