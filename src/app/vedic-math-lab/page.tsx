"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VedicMathLab from "@/components/VedicMathLab";
import { Sparkles, Calculator, Zap, BookOpen, Trophy, ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

export default function VedicMathLabPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const sutrasList = [
    {
      no: 1,
      sanskrit: "Ekādhikena Pūrveṇa",
      english: "By one more than the previous one",
      application: "Squaring numbers ending in 5, fractions conversion & recurring decimals",
      example: "75² = (7 × 8) | 25 = 5625 in 1 sec",
    },
    {
      no: 2,
      sanskrit: "Nikhilaṁ Navataścaramaṁ Daśataḥ",
      english: "All from 9 and the last from 10",
      application: "Speed multiplication near powers of 10 (base 100, 1000) & instant subtractions",
      example: "96 × 97 = (96-3) | (-4 × -3) = 9312",
    },
    {
      no: 3,
      sanskrit: "Ūrdhva-Tiryagbhyām",
      english: "Vertically and crosswise",
      application: "Universal multiplication for 2-digit, 3-digit, 4-digit numbers and algebraic polynomials",
      example: "23 × 14 = (2×1) | (2×4 + 3×1) | (3×4) = 322",
    },
    {
      no: 4,
      sanskrit: "Parāvartya Yojayet",
      english: "Transpose and adjust",
      application: "Fast division and solving linear / quadratic equations without factoring",
      example: "Dividing polynomials & numbers near 100",
    },
    {
      no: 5,
      sanskrit: "Śūnyaṁ Sāmyasamuccaye",
      english: "When the collection is equal, it is zero",
      application: "Solving symmetric algebraic equations instantly by inspection",
      example: "Solving (x+1) + (x+2) = (x+3) forms in seconds",
    },
    {
      no: 6,
      sanskrit: "Ānurūpye Śūnyamanyat",
      english: "If one is in ratio, the other is zero",
      application: "Solving simultaneous equations with proportional coefficients",
      example: "Instant elimination in linear systems",
    },
    {
      no: 7,
      sanskrit: "Saṅkalana-Vyavakalanābhyām",
      english: "By addition and by subtraction",
      application: "Solving systems of equations where x and y coefficients are transposed",
      example: "Solving 37x + 23y = 83 & 23x + 37y = 97 in 2 steps",
    },
    {
      no: 8,
      sanskrit: "Pūraṇāpūraṇābhyām",
      english: "By the completion or non-completion",
      application: "Completing squares and cubes in algebra and mental arithmetic",
      example: "Rapid factorisation of cubic equations",
    },
    {
      no: 9,
      sanskrit: "Calana-Kalanābhyām",
      english: "Differences and Similarities",
      application: "Finding roots of quadratic polynomials and calculus fundamentals",
      example: "Differential inspection for roots",
    },
    {
      no: 10,
      sanskrit: "Yāvadūnam",
      english: "Whatever the extent of deficiency",
      application: "Squaring and cubing numbers near 10, 100, 1000",
      example: "94² = (94 - 6) | 6² = 8836",
    },
    {
      no: 11,
      sanskrit: "Vyaṣṭisamaṣṭiḥ",
      english: "Part and Whole",
      application: "Factorising polynomials into simple binomials",
      example: "Instant identification of algebraic factors",
    },
    {
      no: 12,
      sanskrit: "Śeṣāṇyaṅkena Carameṇa",
      english: "The remainders by the last digit",
      application: "Expressing fractions into recurring decimal sequences",
      example: "1/7, 1/19 decimal expansions without long division",
    },
    {
      no: 13,
      sanskrit: "Sopāntyadvayamantyam",
      english: "The ultimate and twice the penultimate",
      application: "Instant solution of special linear equation patterns",
      example: "Solving reciprocal and rational equations",
    },
    {
      no: 14,
      sanskrit: "Ekanyūnena Pūrveṇa",
      english: "By one less than the previous one",
      application: "Multiplication of numbers by 9, 99, 999, 9999",
      example: "54 × 99 = (54-1) | (99-53) = 5346",
    },
    {
      no: 15,
      sanskrit: "Guṇitasamuccayaḥ",
      english: "The product of the sum is the sum of the product",
      application: "Checking correctness of calculations & algebraic factorisation instantly",
      example: "Digital root validation (Casting out nines)",
    },
    {
      no: 16,
      sanskrit: "Guṇakasamuccayaḥ",
      english: "The factors of the sum is the sum of the factors",
      application: "Splitting quadratic expressions into factors",
      example: "Mental factoring of 2x² + 7x + 3 in seconds",
    },
  ];

  const quizQuestions = [
    {
      question: "Using Ekādhikena Pūrveṇa, what is 85²?",
      options: ["7025", "7225", "7425", "6825"],
      correct: 1,
      explanation: "Take 8 × 9 = 72, suffix 25 → 7225.",
    },
    {
      question: "What is 53 × 11 solved mentally in 2 seconds?",
      options: ["583", "563", "593", "573"],
      correct: 0,
      explanation: "Place 5 on left, 3 on right, middle is 5+3=8 → 583.",
    },
    {
      question: "Using Base 100 Sutra, what is 98 × 95?",
      options: ["9310", "9210", "9410", "9320"],
      correct: 0,
      explanation: "Deficits (-2, -5) → 98 - 5 = 93, (-2 × -5) = 10 → 9310.",
    },
  ];

  const handleSelectQuizOption = (optIndex: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optIndex);
    if (optIndex === quizQuestions[quizIndex].correct) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header Banner */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive Mental Math Laboratory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight">
              Vedic Mathematics <span className="text-gold-gradient">Speed Lab</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Master the ancient science of Indian mathematics. Perform multi-digit multiplication, squares, roots, and algebra with speed, accuracy, and zero anxiety.
            </p>
          </div>
        </section>

        {/* The Interactive Speed Lab Component */}
        <VedicMathLab />

        {/* Mental Math Speed Quiz Game */}
        <section className="py-20 bg-[#060911] border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-400/30">
                <Trophy className="w-3.5 h-3.5" />
                <span>Test Your Vedic Speed</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white font-serif">
                3-Question Vedic Math Lightning Quiz
              </h2>
              <p className="text-sm text-slate-400">
                Calculate in your head without paper. Can you score 3/3?
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl glass-panel-gold border-amber-500/30 shadow-2xl">
              {!quizFinished ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-white/10">
                    <span>Question {quizIndex + 1} of {quizQuestions.length}</span>
                    <span className="font-semibold text-amber-400">Score: {quizScore}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                    {quizQuestions[quizIndex].question}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {quizQuestions[quizIndex].options.map((opt, optIdx) => {
                      const isSelected = selectedOption === optIdx;
                      const isCorrect = optIdx === quizQuestions[quizIndex].correct;
                      
                      let btnStyle = "glass-panel hover:border-amber-400/50 text-slate-200";
                      if (selectedOption !== null) {
                        if (isCorrect) btnStyle = "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold";
                        else if (isSelected) btnStyle = "bg-red-500/20 border-red-400 text-red-300";
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectQuizOption(optIdx)}
                          className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {selectedOption !== null && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>

                  {selectedOption !== null && (
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-300 space-y-1 animate-in fade-in">
                      <span className="font-bold text-amber-300">Vedic Solution: </span>
                      <span>{quizQuestions[quizIndex].explanation}</span>
                    </div>
                  )}

                  {selectedOption !== null && (
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={handleNextQuiz}
                        className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20"
                      >
                        <span>{quizIndex === quizQuestions.length - 1 ? "See Results" : "Next Question"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif">
                    Quiz Completed!
                  </h3>
                  <p className="text-base text-amber-300 font-bold">
                    You scored {quizScore} out of {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </p>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Imagine solving 100s of sums like this in seconds during board exams or competitive tests!
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleResetQuiz}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Retake Quiz</span>
                    </button>
                    <Link
                      href="/programs"
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md"
                    >
                      <span>Join Full Masterclass</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Complete 16 Vedic Sutras Directory */}
        <section className="py-20 bg-[#070b14] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Ancient Indian Wisdom</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                The 16 Vedic Mathematics Sutras
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Discovered by Swami Bharati Krishna Tirtha Maharaja, these 16 core aphorisms govern all mathematical operations with unprecedented speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {sutrasList.map((sutra) => (
                <div
                  key={sutra.no}
                  className="p-6 rounded-2xl glass-panel-gold border-amber-500/20 hover:border-amber-400/50 transition-all space-y-3 shadow-lg"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                      Sutra 0{sutra.no}
                    </span>
                    <span className="text-[11px] text-slate-400 font-serif">Vedic Sanskrit</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-serif">
                      {sutra.sanskrit}
                    </h3>
                    <p className="text-xs text-amber-200/90 italic mt-0.5">
                      “{sutra.english}”
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="text-slate-300">
                      <span className="font-semibold text-slate-100">Application:</span> {sutra.application}
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#090e1a] border border-amber-500/20 font-mono text-amber-300 text-[11px]">
                      <span className="text-slate-400 font-sans">Example: </span>{sutra.example}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="p-8 rounded-3xl glass-panel border-white/10 text-center space-y-4 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white font-serif">
                Master All 16 Sutras & Sub-Sutras with Roopak Sir
              </h3>
              <p className="text-sm text-slate-300">
                Book a comprehensive multi-day bootcamp for your school or enroll in the Think Without Ink mentorship program.
              </p>
              <div className="pt-2 flex justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25"
                >
                  <span>Book Workshop for Your School</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
