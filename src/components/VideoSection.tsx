"use client";

import { useState } from "react";
import { Play, Sparkles, ExternalLink, Award, Users, BookOpen } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "YmCJAIu7GWg";

  return (
    <section id="media" className="py-24 relative bg-[#070b14] border-t border-b border-white/5 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-amber-500/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/30 text-red-400">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Featured Keynote & Session</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight">
            Watch Roopak Sir in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Witness the energy, clarity, and transformational teaching methods that inspire students and educators alike.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden glass-panel-gold border-amber-500/30 shadow-2xl bg-black aspect-[16/9] group">
            
            {!isPlaying ? (
              <div 
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full flex items-center justify-center cursor-pointer"
              >
                {/* Thumbnail background using maxresdefault or highres fallback */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="Mr. Roopak Kumar Keynote Video"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Big Animated Play Button */}
                <div className="relative z-10 flex flex-col items-center gap-3 p-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-400 p-[2px] shadow-2xl shadow-amber-500/40">
                    <div className="w-full h-full rounded-full bg-slate-950/90 flex items-center justify-center pl-1">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300 fill-amber-300" />
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/90 text-white border border-white/10 backdrop-blur-md">
                    Click to Play Full Video
                  </span>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 z-10 pointer-events-none">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-400/30">
                      Live Educational Session
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                      Inspiring Math & Vedic Calculations with Roopak Sir
                    </h3>
                  </div>
                  <a
                    href={`https://youtu.be/${videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="pointer-events-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-300 transition-colors"
                  >
                    <span>Open in YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Mr. Roopak Kumar - Vedic Math & Education Session"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

          </div>

          {/* Highlights beneath video */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-2xl glass-panel border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-300 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Interactive Pedagogy</h4>
                <p className="text-[11px] text-slate-400">Engaging every student in real-time mental problem solving</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-panel border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Guest of Honour</h4>
                <p className="text-[11px] text-slate-400">Featured across College Yatra, School Yatra & Apna Vidyalaya</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-panel border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Zero Math Phobia</h4>
                <p className="text-[11px] text-slate-400">Rebuilding belief from the ground up with Vedic clarity</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
