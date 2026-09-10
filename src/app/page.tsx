"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StoryTimeline from "@/components/StoryTimeline";
import PhilosophySection from "@/components/PhilosophySection";
import VedicMathLab from "@/components/VedicMathLab";
import AwardsGallery from "@/components/AwardsGallery";
import VideoSection from "@/components/VideoSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);

  const handleOpenContact = (programName?: string) => {
    setSelectedProgram(programName);
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
    setSelectedProgram(undefined);
  };

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 flex flex-col">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenContact={() => handleOpenContact()} />
        <StoryTimeline />
        <PhilosophySection />
        <VedicMathLab />
        <AwardsGallery />
        <VideoSection />
        <ProgramsSection onOpenContact={(prog) => handleOpenContact(prog)} />
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Interactive Contact & Booking Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
        defaultProgram={selectedProgram}
      />
    </div>
  );
}
