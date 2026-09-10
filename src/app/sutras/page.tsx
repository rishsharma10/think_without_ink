import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, BookOpen, Calculator, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "The 16 Vedic Sutras & 13 Sub-Sutras | Think Without Ink",
  description:
    "Complete reference guide to the 16 core Sutras and 13 Sub-Sutras of Vedic Mathematics with formulas, Sanskrit names, and practical calculation examples.",
};

export default function SutrasPage() {
  const allSutras = [
    {
      no: 1,
      sanskrit: "Ekādhikena Pūrveṇa",
      english: "By one more than the previous one",
      algebraic: "N5² = (N × (N+1)) | 25",
      domain: "Squares of 5s, recurring fractions, decimal conversions",
      explanation:
        "Multiply the preceding digit(s) by their successor (N + 1) and append 25 to get the square of any number ending in 5 in under 2 seconds.",
    },
    {
      no: 2,
      sanskrit: "Nikhilaṁ Navataścaramaṁ Daśataḥ",
      english: "All from 9 and the last from 10",
      algebraic: "(100 - a)(100 - b) = (100 - (a+b)) | (a × b)",
      domain: "Base multiplication, rapid subtractions from 1000/10000",
      explanation:
        "Allows instant subtraction from powers of 10 and lightning speed multiplication of large numbers situated close to bases like 100, 1,000, or 10,000.",
    },
    {
      no: 3,
      sanskrit: "Ūrdhva-Tiryagbhyām",
      english: "Vertically and crosswise",
      algebraic: "(ax + b)(cx + d) = acx² + (ad + bc)x + bd",
      domain: "Universal 2D/3D multiplication, algebra polynomial products",
      explanation:
        "The master multiplication algorithm of Vedic mathematics. Multiplies any pair of numbers regardless of their length using cross-multiplication in a single visual line.",
    },
    {
      no: 4,
      sanskrit: "Parāvartya Yojayet",
      english: "Transpose and adjust",
      algebraic: "Division by (x - a) ➔ Synthetic adjustment",
      domain: "Synthetic division, polynomial factorization, linear equations",
      explanation:
        "Transposes signs of divisors to transform long, cumbersome polynomial divisions into simple mental additions.",
    },
    {
      no: 5,
      sanskrit: "Śūnyaṁ Sāmyasamuccaye",
      english: "When the collection is equal, it is zero",
      algebraic: "If sum of terms on LHS = RHS, then root x = 0",
      domain: "Algebraic equations, linear roots, cyclic sums",
      explanation:
        "Instantly solves complicated symmetrical algebraic expressions by observing that when sums of constants or terms balance, the common factor or variable equates to zero.",
    },
    {
      no: 6,
      sanskrit: "Ānurūpye Śūnyamanyat",
      english: "If one is in ratio, the other is zero",
      algebraic: "If a₁/a₂ = b₁/b₂ then other variable = 0",
      domain: "Simultaneous linear systems with 2 variables",
      explanation:
        "Provides direct one-look solutions to simultaneous equations where one set of coefficients exists in equal ratio.",
    },
    {
      no: 7,
      sanskrit: "Saṅkalana-Vyavakalanābhyām",
      english: "By addition and by subtraction",
      algebraic: "Add equations & subtract equations to decouple x and y",
      domain: "Interchanged coefficient linear equations (e.g. 23x+37y=83)",
      explanation:
        "Solves complex simultaneous equations where coefficients are interchanged by creating simple sum and difference equations.",
    },
    {
      no: 8,
      sanskrit: "Pūraṇāpūraṇābhyām",
      english: "By the completion or non-completion",
      algebraic: "x² + 2ax + a² = (x + a)² completion",
      domain: "Completing the square, solving quadratic and cubic equations",
      explanation:
        "Simplifies non-factorable quadratics by completing squares or adding complementary terms mentally.",
    },
    {
      no: 9,
      sanskrit: "Calana-Kalanābhyām",
      english: "Differences and Similarities",
      algebraic: "Roots through differential elimination",
      domain: "Roots of quadratic and cubic equations, calculus fundamentals",
      explanation:
        "Uses the differential rate of change between terms to locate polynomial roots without quadratic formula drills.",
    },
    {
      no: 10,
      sanskrit: "Yāvadūnam",
      english: "Whatever the extent of deficiency",
      algebraic: "N² = (N - d) | d² where d = 100 - N",
      domain: "Squaring and cubing numbers near 10, 100, 1000",
      explanation:
        "Reduces squaring of numbers near base powers to subtracting the deficit from the number and suffixing the square of the deficit.",
    },
    {
      no: 11,
      sanskrit: "Vyaṣṭisamaṣṭiḥ",
      english: "Part and Whole",
      algebraic: "Breaking complex polynomials into distinct cyclic parts",
      domain: "Higher-order algebraic factoring and symmetry",
      explanation:
        "Enables factorization of homogeneous symmetrical polynomials by decomposing global expressions into localized components.",
    },
    {
      no: 12,
      sanskrit: "Śeṣāṇyaṅkena Carameṇa",
      english: "The remainders by the last digit",
      algebraic: "Fraction expansion 1/7, 1/19, 1/29 into recurring decimals",
      domain: "Decimal expansions without long division",
      explanation:
        "Converts reciprocal fractions into full repeating decimal cycles using simple progressive single-digit multiplications.",
    },
    {
      no: 13,
      sanskrit: "Sopāntyadvayamantyam",
      english: "The ultimate and twice the penultimate",
      algebraic: "Special rational expressions: 1/(AB) + 1/(CD)",
      domain: "Complex rational equations & fraction balancing",
      explanation:
        "Directly resolves rational fraction equations where numerators are unities and denominators are arithmetic progressions.",
    },
    {
      no: 14,
      sanskrit: "Ekanyūnena Pūrveṇa",
      english: "By one less than the previous one",
      algebraic: "N × 99...9 = (N - 1) | (99...9 - (N - 1))",
      domain: "Instant multiplication by 9, 99, 999, 9999",
      explanation:
        "Subtract 1 from the multiplicand, then append the 9s complement of the result. Calculates answers up to 10 digits in 2 seconds.",
    },
    {
      no: 15,
      sanskrit: "Guṇitasamuccayaḥ",
      english: "The product of the sum is the sum of the product",
      algebraic: "Sc(f × g) = Sc(f) × Sc(g)",
      domain: "Verification, digital sum validation, casting out nines",
      explanation:
        "Instant error checking: the sum of coefficients in a polynomial product equals the product of sums of coefficients in the factors.",
    },
    {
      no: 16,
      sanskrit: "Guṇakasamuccayaḥ",
      english: "The factors of the sum is the sum of the factors",
      algebraic: "Factor verification in quadratic and cubic equations",
      domain: "Algebraic factor checking and factorization validation",
      explanation:
        "Ensures total algebraic precision by cross-verifying whether proposed polynomial factor sets equal the composite expression.",
    },
  ];

  const subSutras = [
    "Anurupyena (Proportionately)",
    "Sisyate Sesasamjnah (The remainder remains constant)",
    "Adyamadyenantyamantyena (First by first and last by last)",
    "Kevalaih Saptakam Gunyat (For 7 the multiplicand is 143)",
    "Vestanam (By Osculation)",
    "Yavadunam Tavadunam (Lessen by the deficiency)",
    "Yavadunam Tavadunikrtya Varganca Yojayet (Whatever the deficiency lessen by that amount and set up the square)",
    "Antyayordasake'pi (Last totaling 10)",
    "Antyayoreva (Only the end terms)",
    "Samuccayagunitah (The sum of the coefficients multiplied)",
    "Lopana Sthapanabhyam (By Elimination and Retention)",
    "Vilokanam (By Mere Observation)",
    "Gunitasiddhir (The product of the sum is verified)",
  ];

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="relative py-16 bg-radial-gradient bg-grid-pattern border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Comprehensive Reference Guide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight">
              The 16 Sutras & <span className="text-gold-gradient">13 Sub-Sutras</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Explore the complete directory of mathematical aphorisms that power the Think Without Ink speed mental calculation curriculum.
            </p>
          </div>
        </section>

        {/* 16 Sutras Grid */}
        <section className="py-20 bg-[#060911]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allSutras.map((sutra) => (
                <div
                  key={sutra.no}
                  className="p-6 sm:p-8 rounded-3xl glass-panel-gold border-amber-500/25 space-y-4 shadow-xl hover:border-amber-400/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                        Main Sutra 0{sutra.no}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">Vedic Science</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white font-serif">
                        {sutra.sanskrit}
                      </h3>
                      <p className="text-xs sm:text-sm text-amber-200/90 italic mt-0.5">
                        “{sutra.english}”
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-500/20 text-xs font-mono text-amber-300">
                      <span className="text-slate-400 font-sans">Formula: </span>
                      {sutra.algebraic}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {sutra.explanation}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
                    <span><strong className="text-slate-200">Domain:</strong> {sutra.domain}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-Sutras (Upa-Sutras) Section */}
            <div className="mt-16 p-8 sm:p-10 rounded-3xl glass-panel border-white/10 space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Supplementary Principles
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                  The 13 Sub-Sutras (Upa-Sutras)
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Complementary corollaries used for specialized polynomial equations, division, and factoring.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
                {subSutras.map((upa, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-200 flex items-center gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                      {idx + 1}
                    </span>
                    <span>{upa}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center pt-6">
              <Link
                href="/vedic-math-lab"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 hover:scale-105 transition-all"
              >
                <span>Try Live Speed Math Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
