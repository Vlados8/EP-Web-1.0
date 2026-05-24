"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileLock2, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function DatenschutzContent() {
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
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Datensicherheit</span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Datenschutz
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
            
            {/* Box 1: General Info */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">1. Datenschutz auf einen Blick</h3>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-medium">
                <p>
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang erhoben und streng vertraulich behandelt.
                </p>
                <p>
                  Die nachfolgende Erklärung gibt Ihnen einen Überblick darüber, wie wir diesen Schutz gewährleisten und welche Art von Daten zu welchem Zweck erhoben werden.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Responsible Party */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Info className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">2. Verantwortliche Stelle</h3>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-2 font-medium">
                <p className="font-extrabold text-white">Empire Premium Bau UG</p>
                <p>Hastedter Heerstraße 63</p>
                <p>28207 Bremen, Deutschland</p>
                <p className="pt-2">E-Mail: info@empire-premium-bau.de</p>
                <p>Telefon: +49 176 61951823</p>
              </div>
            </motion.div>

            {/* Box 3: Data Collection */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">3. Datenerfassung auf unserer Website</h3>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-medium">
                <h4 className="text-white font-extrabold text-xs uppercase tracking-wider">Server-Log-Files</h4>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Files, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit). Diese Daten sind nicht bestimmten Personen zuordenbar.
                </p>
                <h4 className="text-white font-extrabold text-xs uppercase tracking-wider">Kontaktformular / Projekt-Planer</h4>
                <p>
                  Wenn Sie uns per Kontaktformular oder über unseren Projekt-Planer Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </motion.div>

            {/* Box 4: Your Rights */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FileLock2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">4. Ihre Rechte</h3>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-medium">
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
                <p>
                  Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                </p>
              </div>
            </motion.div>

            {/* Box 5: SSL Encryption */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">5. SSL- bzw. TLS-Verschlüsselung</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </motion.div>

          </motion.div>

        </div>

        <Footer />
      </main>
    </>
  );
}
