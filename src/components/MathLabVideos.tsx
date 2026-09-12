"use client";

import { Play, Sparkles } from "lucide-react";

export default function MathLabVideos() {
  const videos = [
    {
      id: "g6I-awLUErg", 
      title: "Vedic Math Multiplication Trick in 2 Seconds",
      thumb: "https://img.youtube.com/vi/g6I-awLUErg/hqdefault.jpg",
    },
    {
      id: "gnp2OgJH6AA", 
      title: "Calculate Squares instantly",
      thumb: "https://img.youtube.com/vi/gnp2OgJH6AA/hqdefault.jpg",
    },
    {
      id: "qL-gVMafZw8", 
      title: "Algebraic Equations made simple",
      thumb: "https://img.youtube.com/vi/qL-gVMafZw8/hqdefault.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#060911] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Maths Tricks & Methods</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Watch & Learn Innovative Teaching Methods
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Explore how complex mathematical problems can be solved in seconds using ancient Vedic sutras and innovative techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" key={video.id} className="group relative rounded-2xl overflow-hidden glass-panel-gold border-amber-500/30 shadow-2xl bg-black aspect-video cursor-pointer block">
              <img
                src={video.thumb}
                alt={video.title}
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-amber-500 to-yellow-400 p-[2px] shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-slate-950/90 flex items-center justify-center pl-1">
                    <Play className="w-5 h-5 text-amber-300 fill-amber-300" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h3 className="text-sm font-bold truncate group-hover:text-amber-300 transition-colors">{video.title}</h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Video Tutorial</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
