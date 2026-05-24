"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, FileSignature, ShieldCheck, CheckSquare, Coins } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function AgbContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="relative min-h-screen bg-slate-950 flex flex-col justify-between overflow-x-hidden selection:bg-emerald-500/30 selection:text-white pt-32 pb-16">
        
        {/* Background Glowing Aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-emerald-500/5 blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto w-full px-6 flex-1 flex flex-col justify-center mb-24 md:mb-36">
          
          {/* Header Title */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-4 mb-16"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Vertragsbedingungen</span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Allgemeine Geschäftsbedingungen
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Main Info Blocks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            
            {/* Box 1: Scope */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">1. Geltungsbereich</h3>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-medium">
                <p>
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Lieferung, Planung, Montage und Inbetriebnahme von Photovoltaikanlagen, Speichersystemen und Wärmepumpen zwischen der <strong>Empire Premium Bau UG</strong> (nachfolgend „Auftragnehmer“) und dem Kunden (nachfolgend „Auftraggeber“).
                </p>
                <p>
                  Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Offer & Agreement */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FileSignature className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">2. Angebot und Vertragsschluss</h3>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-medium">
                <p>
                  Die Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.
                </p>
                <p>
                  Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch den Beginn der Ausführung der Arbeiten zustande.
                </p>
              </div>
            </motion.div>

            {/* Box 3: Pricing & Payments */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Coins className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">3. Preise und Zahlungsbedingungen</h3>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-medium">
                <p>
                  Es gelten die im individuellen Vertrag vereinbarten Preise. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer, sofern keine Steuerbefreiung oder Nullsteuersatz (z. B. § 12 Abs. 3 UStG für PV-Anlagen) greift.
                </p>
                <p>
                  Sofern nicht anders vereinbart, sind Zahlungen gemäß dem im Angebot definierten Zahlungsplan (z.B. nach Baufortschritt oder Materiallieferung) ohne Abzug fällig.
                </p>
              </div>
            </motion.div>

            {/* Box 4: Installation requirements */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">4. Voraussetzungen beim Auftraggeber</h3>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-medium">
                <p>
                  Der Auftraggeber stellt sicher, dass die baulichen und technischen Voraussetzungen für die Montage der Anlage auf seinem Grundstück bzw. Gebäude gegeben sind (statische Eignung des Daches, Zustand der Elektroinstallation, etc.).
                </p>
                <p>
                  Die Einholung eventuell erforderlicher behördlicher Genehmigungen liegt im Verantwortungsbereich des Auftraggebers, sofern nicht ausdrücklich etwas anderes vereinbart ist.
                </p>
              </div>
            </motion.div>

            {/* Box 5: Warranty */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">5. Gewährleistung und Garantien</h3>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-medium">
                <p>
                  Es gelten die gesetzlichen Gewährleistungsvorschriften. Eventuelle Herstellergarantien der verwendeten Komponenten (z.B. PV-Module, Wechselrichter, Speicher, Wärmepumpen) werden direkt zwischen dem Hersteller und dem Auftraggeber vereinbart; der Auftragnehmer übernimmt hierfür keine eigenständige Garantiehaftung.
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>

        <Footer />
      </main>
    </>
  );
}
