import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono-custom",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thinkwithoutink.in"),
  title: "Mr. Roopak Kumar | Think Without Ink — Vedic Mathematics Educator",
  description:
    "Government & Internationally Certified Vedic Mathematics Teacher, CENTA National Ranker, and Founder of Think Without Ink. Making Mathematics Simple, Fast & Fearless for students, schools & educators.",
  keywords: [
    "Roopak Kumar",
    "Think Without Ink",
    "Vedic Mathematics",
    "Vedic Math Teacher",
    "Mental Math",
    "Speed Mathematics",
    "CENTA National Ranker",
    "Vidyasagar Leadership Award",
    "Teacher Training Program",
    "Fast Math Tricks",
  ],
  authors: [{ name: "Roopak Kumar" }],
  creator: "Roopak Kumar",
  openGraph: {
    title: "Mr. Roopak Kumar | Think Without Ink — Vedic Mathematics Expert",
    description:
      "From Setbacks to a Mission: Making Mathematics Simple, Fast & Fearless. Discover Vedic Math workshops, teacher training, and mental agility programs.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/roopak-speaking.jpg",
        width: 1200,
        height: 630,
        alt: "Mr. Roopak Kumar presenting at Bharat Education Forum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr. Roopak Kumar | Think Without Ink",
    description: "Making Mathematics Simple, Fast & Fearless through Vedic Mathematics.",
    images: ["/images/roopak-speaking.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased min-h-screen bg-[#05070e] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
