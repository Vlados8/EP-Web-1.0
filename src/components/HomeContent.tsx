"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, CheckCircle, Percent, Compass, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackgroundVideo from "@/components/BackgroundVideo";
import BentoGrid from "@/components/BentoGrid";
import StatsSection from "@/components/StatsSection";
import TechShowcase from "@/components/TechShowcase";
import SolarStorageSection from "@/components/SolarStorageSection";
import ProjectsSection from "@/components/ProjectsSection";
import InteractiveForm from "@/components/InteractiveForm";
import Servicegebiet from "@/components/Servicegebiet";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function HomeContent() {
  return (
    <>
      {/* Lenis Smooth Scroll controller */}
      <SmoothScroll />

      {/* Main Premium Navbar */}
      <Navbar />

      <main className="relative min-h-screen bg-slate-950 flex flex-col justify-between overflow-x-hidden selection:bg-emerald-500/30 selection:text-white">
        
        {/* ==================== HERO SECTION (VIDEO CONTAINED HERE) ==================== */}
        <section 
          id="hero" 
          className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950"
        >
          {/* Background video confined strictly to the 100vh Hero viewport */}
          <BackgroundVideo />

          {/* Hero Content Grid */}
          <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
              
              {/* Left Column: High-converting Copy & Actions */}
              <div className="lg:col-span-6 space-y-8 flex flex-col justify-center">
                
                {/* Dynamic tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-semibold text-xs tracking-wider uppercase backdrop-blur-md"
                >
                  <Percent className="w-3.5 h-3.5" />
                  <span>Bis zu 70% Staatliche KfW-Förderung</span>
                </motion.div>

                {/* High-End H1 Header */}
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]"
                    id="main-hero-heading"
                  >
                    Premium-Solar & <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-[0_2px_15px_rgba(52,211,153,0.15)]">
                      Wärmepumpen
                    </span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base md:text-lg text-slate-300 font-medium max-w-xl leading-relaxed"
                  >
                    Die Allianz aus deutscher Ingenieurskunst und modernster Klimatechnik. Sichern Sie sich maximale Autarkie und sparen Sie nachhaltig Heiz- und Stromkosten mit unseren perfekt abgestimmten Komplettsystemen.
                  </motion.p>
                </div>

                {/* Highly-converting CTA Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  {/* Primary Button */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-40 blur-md group-hover:opacity-75 transition duration-500" />
                    <button
                      id="cta-primary-btn"
                      className="relative w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-slate-50 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-98"
                      onClick={() => {
                        const contactSec = document.getElementById("effizienz-rechner");
                        if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Planung starten
                    </button>
                  </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="pt-6 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4 text-xs font-semibold text-slate-400"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>100% Deutsche Fachplanung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>25 Jahre Leistungsgarantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Komplettmontage aus einer Hand</span>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Interactive Solar Home Visual Showcase */}
              <div className="lg:col-span-6 flex items-center justify-center relative min-h-[450px] lg:min-h-[500px]">
                {/* Visual Aura Glow to ground the visual block */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
                
                {/* Sleek Glassmorphic Image Frame with 3D Parallax effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className="relative w-full max-w-md aspect-[4/3] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-3xl group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                  <img 
                    src="/solar_home_hero.png" 
                    alt="Smarter energy home system schematic representation"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-4 left-6 z-15 text-[8px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                    EMPIRE PREMIUM OS GRAPHICS
                  </div>
                </motion.div>

                {/* Overlapping Floating Bento Trust Badges */}
                {/* Floater 1: Solar */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: -30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="absolute -top-6 left-4 z-20 w-64 cursor-default select-none hidden sm:block"
                >
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl flex items-center gap-4 hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Percent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-white">KfW-Fördergarantie</h4>
                      <p className="text-[10px] text-slate-400 leading-normal">Wir beantragen Ihre Förderung komplett risikofrei.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floater 2: Autarky */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
                  className="absolute -bottom-6 right-4 z-20 w-64 cursor-default select-none hidden sm:block"
                >
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl flex items-center gap-4 hover:border-teal-500/30 transition-all duration-300 shadow-xl">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-white">Full-Service Paket</h4>
                      <p className="text-[10px] text-slate-400 leading-normal">Beratung, Montage, Anmeldung und Service vor Ort.</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Floating Scroll Indicator strictly positioned at the bottom-center of Hero viewport */}
          <div className="pb-8 w-full flex justify-center z-10">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="flex flex-col items-center justify-center gap-2 text-slate-500 hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={() => {
                const bentoGridSec = document.getElementById("system-features");
                if (bentoGridSec) bentoGridSec.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="text-[9px] font-bold tracking-widest uppercase">Scrollen für Details</span>
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-slate-950/40 backdrop-blur-md">
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </motion.div>
          </div>

        </section>


        {/* ==================== INFORMATIONAL LAYOUT (SOLID DARK bg-slate-950) ==================== */}
        <div className="relative z-10 w-full bg-slate-950">
          
          {/* Staggered Bento Grid Row below (representing core system features) */}
          <section 
            id="system-features"
            className="py-24 px-6 max-w-7xl mx-auto w-full"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between px-4 max-w-7xl mx-auto mb-12 gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Unsere Kerntechnologien</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mt-1">
                  Intelligente Energiesysteme
                </h2>
              </div>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-medium">
                Unsere Einzelkomponenten sind perfekt aufeinander abgestimmt und kommunizieren intelligent per Funk.
              </p>
            </div>
            
            <BentoGrid />
          </section>

          {/* Animated Statistics Section */}
          <StatsSection />

          {/* Interactive Tech Showcase Section */}
          <TechShowcase />

          {/* Solar Energy Kit & Battery Storage Section */}
          <SolarStorageSection />

          {/* Projects Reference Showcase Section */}
          <ProjectsSection />

          {/* CRM Smart Form & Support Ticket Section */}
          <InteractiveForm />

          {/* Regional Servicegebiet Section */}
          <Servicegebiet />

        </div>

        {/* Premium Full-Width Footer */}
        <Footer />
      </main>
    </>
  );
}
