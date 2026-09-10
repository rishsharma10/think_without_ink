"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Calculator, Check, ArrowRight, RefreshCw, Trophy, Brain } from "lucide-react";
import confetti from "canvas-confetti";

export default function VedicMathLab() {
  const [activeTab, setActiveTab] = useState<"square5" | "multiply11" | "base100" | "multiply99">("square5");

  // Tab 1: Square of number ending in 5
  const [numEnding5, setNumEnding5] = useState(75);

  // Tab 2: Multiply by 11
  const [num11, setNum11] = useState(43);

  // Tab 3: Base 100
  const [baseA, setBaseA] = useState(96);
  const [baseB, setBaseB] = useState(97);

  // Tab 4: Multiply by 99
  const [num99, setNum99] = useState(64);

  // Calculations:
  // Tab 1:
  const tens5 = Math.floor(numEnding5 / 10);
  const leftPart5 = tens5 * (tens5 + 1);
  const ans5 = numEnding5 * numEnding5;

  // Tab 2:
  const digitA = Math.floor(num11 / 10);
  const digitB = num11 % 10;
  const sum11 = digitA + digitB;
  const ans11 = num11 * 11;

  // Tab 3:
  const diffA = baseA - 100;
  const diffB = baseB - 100;
  const leftBase = baseA + diffB;
  const rightBase = diffA * diffB;
  const ansBase = baseA * baseB;

  // Tab 4:
  const left99 = num99 - 1;
  const right99 = 99 - left99;
  const ans99 = num99 * 99;

  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#f59e0b", "#fbbf24", "#38bdf8", "#34d399"],
    });
  };

  return (
    <section id="math-lab" className="py-24 relative bg-[#040711] border-t border-b border-amber-500/20 overflow-hidden">
      
      {/* Background Mental Math Visual Artwork */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-screen pointer-events-none">
        <Image
          src="/images/mental-math-mastery.jpg"
          alt="Mental Math Mastery"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-indigo-500/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300 shadow-md">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight">
            The <span className="text-gold-gradient">Think Without Ink</span> Speed Lab
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Experience the magic of ancient Vedic Sutras. Solve complex arithmetic in 2 seconds flat—no rough paper, zero struggle.
          </p>
        </div>

        {/* Simulator Card with Framer Motion Glass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-3xl glass-panel-gold border-amber-500/40 shadow-2xl overflow-hidden backdrop-blur-2xl"
        >
          {/* Method Selector Tabs */}
          <div className="flex border-b border-white/10 bg-slate-950/80 overflow-x-auto scrollbar-none p-1.5 gap-1">
            {[
              { id: "square5", label: "Squaring (Ends in 5)", icon: Sparkles },
              { id: "multiply11", label: "11× Speed Sutra", icon: Zap },
              { id: "base100", label: "Base 100 Multiplication", icon: Calculator },
              { id: "multiply99", label: "99× Magic Sutra", icon: Brain },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 min-w-[170px] py-3.5 px-4 text-xs font-bold rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {/* METHOD 1: SQUARING ENDING IN 5 */}
              {activeTab === "square5" && (
                <motion.div
                  key="square5"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Sutra: Ekadhikena Purvena (By One More Than the Previous)
                      </span>
                      <h3 className="text-2xl font-bold text-white font-serif mt-1">
                        Squaring Any Number Ending in 5 in 1 Second
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[25, 35, 65, 75, 95, 115].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setNumEnding5(preset)}
                          className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                            numEnding5 === preset
                              ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                              : "bg-slate-900 text-slate-300 border-white/10 hover:border-amber-400/40"
                          }`}
                        >
                          {preset}²
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Live Interactive Problem */}
                  <div className="p-7 rounded-2xl bg-[#080d1a] border border-amber-500/30 text-center space-y-3 shadow-inner">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Calculate Mentally:</div>
                    <div className="text-5xl sm:text-6xl font-black text-white font-mono tracking-wider">
                      <span className="text-amber-400">{tens5}</span>
                      <span className="text-emerald-400">5</span>²
                    </div>
                  </div>

                  {/* Step by Step Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Step 1 • Left Part (Multiply with Next Number)
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">
                        {tens5} × ({tens5} + 1) = {tens5} × {tens5 + 1} = <span className="text-amber-400">{leftPart5}</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Take the first digit ({tens5}) and multiply by its successor ({tens5 + 1}).
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        Step 2 • Right Part (Square the 5)
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">
                        5² = <span className="text-emerald-400">25</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        The suffix is always 25 for numbers ending in 5!
                      </p>
                    </div>
                  </div>

                  {/* Final Combined Result */}
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 border border-amber-400/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                          Mental Calculation Result
                        </div>
                        <div className="text-3xl font-black text-white font-mono">
                          {numEnding5}² = <span className="text-amber-300">{leftPart5}</span><span className="text-emerald-300">25</span> ({ans5})
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={triggerConfetti}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:scale-105 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/30 flex items-center gap-1.5 transition-all"
                    >
                      <span>Brilliant! Try Next</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* METHOD 2: MULTIPLYING BY 11 */}
              {activeTab === "multiply11" && (
                <motion.div
                  key="multiply11"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Sutra: Antyayordashakepi / Digit Splitting
                      </span>
                      <h3 className="text-2xl font-bold text-white font-serif mt-1">
                        Multiply Any 2-Digit Number by 11 Instantly
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[23, 43, 52, 63, 72, 85].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setNum11(preset)}
                          className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                            num11 === preset
                              ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                              : "bg-slate-900 text-slate-300 border-white/10 hover:border-amber-400/40"
                          }`}
                        >
                          {preset} × 11
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Live Problem */}
                  <div className="p-7 rounded-2xl bg-[#080d1a] border border-amber-500/30 text-center space-y-3 shadow-inner">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Calculate Mentally:</div>
                    <div className="text-5xl sm:text-6xl font-black text-white font-mono tracking-wider">
                      <span className="text-amber-400">{digitA}</span>
                      <span className="text-emerald-400">{digitB}</span> × 11
                    </div>
                  </div>

                  {/* Step by Step Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Left Digit
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">
                        {digitA} {sum11 >= 10 ? `+ 1 (carry) = ${digitA + 1}` : ""}
                      </div>
                      <p className="text-xs text-slate-400">First digit goes to the left.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                      <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        Middle (Sum of Digits)
                      </div>
                      <div className="text-2xl font-bold font-mono text-cyan-300">
                        {digitA} + {digitB} = {sum11}
                      </div>
                      <p className="text-xs text-slate-400">Add the two digits and place in the middle.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        Right Digit
                      </div>
                      <div className="text-2xl font-bold font-mono text-emerald-300">
                        {digitB}
                      </div>
                      <p className="text-xs text-slate-400">Last digit remains unchanged on the right.</p>
                    </div>
                  </div>

                  {/* Final Result */}
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 border border-amber-400/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                          Mental Result (Zero Rough Work)
                        </div>
                        <div className="text-3xl font-black text-white font-mono">
                          {num11} × 11 = <span className="text-amber-300">{ans11}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={triggerConfetti}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:scale-105 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/30 flex items-center gap-1.5 transition-all"
                    >
                      <span>Incredible!</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* METHOD 3: BASE 100 */}
              {activeTab === "base100" && (
                <motion.div
                  key="base100"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Sutra: Nikhilam Navatashcaramam Dashatah
                      </span>
                      <h3 className="text-2xl font-bold text-white font-serif mt-1">
                        Multiplying Numbers Close to Base 100
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        [96, 97],
                        [94, 98],
                        [92, 95],
                        [98, 99],
                      ].map(([a, b]) => (
                        <button
                          key={`${a}-${b}`}
                          onClick={() => {
                            setBaseA(a);
                            setBaseB(b);
                          }}
                          className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                            baseA === a && baseB === b
                              ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                              : "bg-slate-900 text-slate-300 border-white/10 hover:border-amber-400/40"
                          }`}
                        >
                          {a} × {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Live Problem */}
                  <div className="p-7 rounded-2xl bg-[#080d1a] border border-amber-500/30 text-center space-y-3 shadow-inner">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Calculate Mentally:</div>
                    <div className="text-5xl sm:text-6xl font-black text-white font-mono tracking-wider">
                      {baseA} × {baseB}
                    </div>
                    <div className="text-xs text-amber-300 font-semibold">
                      Deficit from 100: ({diffA}) and ({diffB})
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Step 1 • Cross Subtraction (Left Part)
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">
                        {baseA} + ({diffB}) = <span className="text-amber-400">{leftBase}</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Cross-subtract the deficit from either number ({baseA} - {Math.abs(diffB)} = {leftBase}).
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        Step 2 • Multiply Deficits (Right Part)
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">
                        ({diffA}) × ({diffB}) = <span className="text-emerald-400">{String(rightBase).padStart(2, "0")}</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Multiply deficits directly with 2 digits on the right.
                      </p>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 border border-amber-400/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                          Mental Result
                        </div>
                        <div className="text-3xl font-black text-white font-mono">
                          {baseA} × {baseB} = <span className="text-amber-300">{leftBase}</span><span className="text-emerald-300">{String(rightBase).padStart(2, "0")}</span> ({ansBase})
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={triggerConfetti}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:scale-105 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/30 flex items-center gap-1.5 transition-all"
                    >
                      <span>Mind Blown!</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* METHOD 4: MULTIPLY BY 99 */}
              {activeTab === "multiply99" && (
                <motion.div
                  key="multiply99"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Sutra: Ekanyunena Purvena (By One Less Than the Previous)
                      </span>
                      <h3 className="text-2xl font-bold text-white font-serif mt-1">
                        Multiply Any 2-Digit Number by 99 in 1 Second
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[34, 47, 64, 82, 91].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setNum99(preset)}
                          className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                            num99 === preset
                              ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                              : "bg-slate-900 text-slate-300 border-white/10 hover:border-amber-400/40"
                          }`}
                        >
                          {preset} × 99
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Live Problem */}
                  <div className="p-7 rounded-2xl bg-[#080d1a] border border-amber-500/30 text-center space-y-3 shadow-inner">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Calculate Mentally:</div>
                    <div className="text-5xl sm:text-6xl font-black text-white font-mono tracking-wider">
                      <span className="text-amber-400">{num99}</span> × 99
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Step 1 • Subtract 1 (Left Part)
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">
                        {num99} - 1 = <span className="text-amber-400">{left99}</span>
                      </div>
                      <p className="text-xs text-slate-400">Reduce the number by 1.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        Step 2 • Complement from 99 (Right Part)
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">
                        99 - {left99} = <span className="text-emerald-400">{String(right99).padStart(2, "0")}</span>
                      </div>
                      <p className="text-xs text-slate-400">Subtract the left part from 99.</p>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 border border-amber-400/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                          Mental Result
                        </div>
                        <div className="text-3xl font-black text-white font-mono">
                          {num99} × 99 = <span className="text-amber-300">{left99}</span><span className="text-emerald-300">{String(right99).padStart(2, "0")}</span> ({ans99})
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={triggerConfetti}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:scale-105 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/30 flex items-center gap-1.5 transition-all"
                    >
                      <span>Instant Magic!</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Bottom callout */}
          <div className="p-4 bg-slate-950/90 border-t border-white/10 text-center text-xs text-slate-400">
            💡 This is just 4 out of 16 Vedic Mathematics Sutras taught in Roopak Sir’s comprehensive workshops.
          </div>

        </motion.div>

      </div>
    </section>
  );
}
