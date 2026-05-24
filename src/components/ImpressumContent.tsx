"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, User, Phone, Mail, FileText, ShieldAlert, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function ImpressumContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <>
      {/* Lenis Smooth Scroll controller */}
      <SmoothScroll />

      {/* Main Premium Navbar */}
      <Navbar />

      <main className="relative min-h-screen bg-slate-950 flex flex-col justify-between overflow-x-hidden selection:bg-emerald-500/30 selection:text-white pt-32 pb-16">
        
        {/* Background Glowing Aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto w-full px-6 flex-1 flex flex-col justify-center mb-24 md:mb-36">
          
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-4 mb-16"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Rechtliche Hinweise</span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Impressum
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Impressum Content Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {/* Grid for main corporate specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1: Company details */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-wider">Angaben gemäß § 5 TMG</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed font-semibold">
                  Empire Premium Bau UG<br />
                  Hastedter Heerstraße 63<br />
                  28207 Bremen<br />
                  Deutschland
                </p>
              </motion.div>

              {/* Box 2: CEO Representative */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <User className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-wider">Vertreten durch</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed font-semibold">
                  Arkadi Saribekian<br />
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Geschäftsführer</span>
                </p>
              </motion.div>

              {/* Box 3: Contact */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-wider">Kontakt</h3>
                </div>
                <div className="space-y-2 text-slate-300 text-sm font-semibold">
                  <a href="tel:+4917661951823" className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-emerald-500" /> +49 176 61951823
                  </a>
                  <a href="mailto:info@empire-premium-bau.de" className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-emerald-500" /> info@empire-premium-bau.de
                  </a>
                </div>
              </motion.div>

              {/* Box 4: Commercial Register */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-wider">Registereintrag</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed font-semibold">
                  Eintragung im Handelsregister.<br />
                  Registergericht: Amtsgericht Bremen<br />
                  Registernummer: HRB 40235
                </p>
              </motion.div>

            </div>

            {/* Box 5: VAT ID (Full Width) */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">Umsatzsteuer-ID</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-semibold">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <span className="text-emerald-400 font-extrabold tracking-widest text-base">DE36937652</span>
              </p>
            </motion.div>

            {/* Box 6: Disclaimer / Haftungsausschluss (Full Width) */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-red-500/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-red-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">Haftungsausschluss</h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed font-semibold italic">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </motion.div>

          </motion.div>

        </div>

        {/* Premium Full-Width Footer */}
        <Footer />
      </main>
    </>
  );
}
