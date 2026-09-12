import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Calendar, Users, MapPin, ArrowRight, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Vedic Maths Workshops & Teacher Training | Think Without Ink",
  description:
    "Join Roopak Kumar, a Government Certified Vedic Maths Teacher, for interactive Mathematics Workshops and Teacher Training events across India.",
  keywords: "Roopak Kumar Vedic Maths, Think Without Ink, Vedic Maths Teacher, Vedic Mathematics, Vedic Maths Workshops, Teacher Training Mathematics",
};

export default function WorkshopsPage() {
  const verifiedEvents = [
    {
      id: "bharat-education-forum",
      title: "Think Without Ink – Teacher Training Session",
      event: "Bharat Education Forum – Teacher Training Program 2026",
      speaker: "Roopak Kumar",
      focus: "Vedic Mathematics, mental agility and innovative approaches to teaching mathematics.",
      description: "An engaging mathematics session designed to help educators explore practical techniques for developing mental calculation skills and making mathematics more engaging for learners.",
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero Header */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight">
              Workshops & Events
            </h1>

            <h2 className="text-2xl sm:text-3xl text-amber-400 font-bold font-serif">
              Transforming the Way We Think About Mathematics
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              &quot;Roopak Kumar, a Government Certified Vedic Maths Teacher and Mathematics Educator, conducts engaging workshops and teacher-training sessions designed to make mathematics more intuitive, interactive and enjoyable.
              <br/><br/>
              Through Think Without Ink, his sessions introduce practical techniques that encourage mental agility, faster calculations and a more confident approach to mathematics.&quot;
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-[#060911]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {verifiedEvents.map((workshop) => (
                <div key={workshop.id} className="group rounded-3xl overflow-hidden glass-panel-gold border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col lg:col-span-2">
                  
                  {/* Workshop Image */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
                    <Image
                      src="/images/roopak-speaking.jpg"
                      alt="Think Without Ink Teacher Training Session"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-transparent to-transparent opacity-80"></div>
                  </div>
                  
                  <div className="p-8 md:p-10 flex-1 flex flex-col space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {workshop.event}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif group-hover:text-amber-300 transition-colors">
                      {workshop.title}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed">
                      {workshop.description}
                    </p>
                    
                    <div className="space-y-2 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-slate-200">
                        <Users className="w-4 h-4 text-emerald-400" />
                        <span><strong>Speaker/Trainer:</strong> {workshop.speaker}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-slate-200">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span><strong>Focus:</strong> {workshop.focus}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#05070e] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white font-serif">
              Host a Workshop at Your Institution
            </h2>
            <div className="pt-4 flex justify-center">
              <a
                href="https://wa.me/919625190184?text=Hello%20Roopak%20Sir%2C%20I%20am%20interested%20in%20hosting%20a%20Think%20Without%20Ink%20Workshop"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
              >
                <span>WhatsApp Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
