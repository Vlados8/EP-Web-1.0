"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Award, MapPin, Heart, Clock, Zap, Send, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function KarriereContent() {
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

  const positions = [
    {
      title: "Anlagenmechaniker für Sanitär-, Heizungs- und Klimatechnik (m/w/d)",
      location: "Bremen & Umland",
      type: "Vollzeit (unbefristet)",
      description: "Fachgerechte Montage, Installation und Inbetriebnahme von modernen Wärmepumpensystemen (Luft-Wasser & Sole-Wasser) sowie deren hydraulischer Abgleich bei unseren Privat- und Gewerbekunden.",
      skills: ["Abgeschlossene Ausbildung als Anlagenmechaniker SHK", "Kenntnisse im Bereich Wärmepumpen & Heizungsbau", "Führerschein Klasse B"],
    },
    {
      title: "Elektroniker für Energie- und Gebäudetechnik / Solarteur (m/w/d)",
      location: "Bremen & Umland",
      type: "Vollzeit (unbefristet)",
      description: "AC-seitiger Anschluss von hochwertigen Photovoltaikanlagen, Hybrid-Wechselrichtern und Batteriespeichern (Pylontech/BYD). Umbau und Sanierung von Zählerschränken.",
      skills: ["Ausbildung zum Elektroniker für Energie- und Gebäudetechnik", "Erfahrung in der PV-Anlagenmontage (AC-seitig)", "Sicherer Umgang mit VDE-Normen"],
    },
  ];

  const benefits = [
    {
      title: "Attraktives Gehalt & Boni",
      description: "Übertarifliche Bezahlung, Urlaubs- & Weihnachtsgeld sowie monatliche steuerfreie Sachbezüge.",
      icon: Award,
      color: "from-emerald-400 to-teal-400"
    },
    {
      title: "Modernstes Werkzeug & Fuhrpark",
      description: "Top-ausgestattete Neufahrzeuge, hochwertige Hilti- & Wiha-Werkzeuge und Premium-Arbeitskleidung.",
      icon: Zap,
      color: "from-teal-400 to-cyan-400"
    },
    {
      title: "Flexible Arbeitszeiten",
      description: "Keine Wochenendarbeit, pünktlicher Feierabend und 30 Tage bezahlter Jahresurlaub.",
      icon: Clock,
      color: "from-emerald-500 to-cyan-500"
    },
    {
      title: "Familiärer Teamspirit",
      description: "Regelmäßige Teamevents, flache Hierarchien und ein absolut faires Miteinander auf Augenhöhe.",
      icon: Heart,
      color: "from-teal-500 to-emerald-500"
    }
  ];

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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-4 mb-12"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Join our Team</span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Karriere
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Premium Career Hero Image Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative w-full aspect-[21/9] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl mb-16 group"
          >
            {/* Visual ambient overlay */}
            <div className="absolute inset-0 bg-slate-950/20 z-10 group-hover:bg-slate-950/10 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-15" />
            
            {/* The generated high-fidelity illustration */}
            <img 
              src="/career_hero.png" 
              alt="Kraftwerk engineers teamwork illustration" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000"
            />
            
            <div className="absolute bottom-6 left-6 z-20 space-y-1">
              <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                EMPIRE PREMIUM RECRUITING
              </span>
              <h4 className="text-sm font-extrabold text-white">Werde Teil der intelligentesten Energiewende Deutschlands</h4>
            </div>
          </motion.div>

          {/* Main Info Blocks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-16"
          >
            
            {/* Box 1: Intro Culture */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">Gestalte die Energiewende mit uns</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Bei <strong>Empire Premium</strong> arbeiten wir täglich daran, Norddeutschland energieautark zu machen. Wir sind ein dynamisches, meistergeführtes Handwerksunternehmen mit flachen Hierarchien, moderner technischer Ausstattung und einem tollen Teamspirit. Bei uns zählt jeder Kopf! Wir bieten Dir einen sicheren, krisenfesten Arbeitsplatz mit echter Perspektive.
              </p>
            </motion.div>

            {/* Benefits HUD Grid */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-lg font-black text-white uppercase tracking-widest pl-2 border-l-2 border-emerald-500">
                Deine Benefits bei uns
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, bIdx) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={bIdx}
                      className="rounded-2xl border border-white/5 bg-slate-950/30 p-6 backdrop-blur-md hover:border-emerald-500/10 transition-colors group flex items-start gap-4"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${benefit.color} bg-opacity-10 text-white shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm md:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {benefit.title}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* List of open roles */}
            <div className="space-y-6">
              <h3 className="text-lg font-black text-white uppercase tracking-widest pl-2 border-l-2 border-emerald-500">Offene Stellen</h3>
              
              {positions.map((pos, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                    <h4 className="text-base md:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {pos.title}
                    </h4>
                    <div className="flex gap-2 text-[10px] font-bold">
                      <span className="bg-slate-900 border border-white/5 px-2.5 py-1 rounded text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-400" /> {pos.location}
                      </span>
                      <span className="bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded text-emerald-400">
                        {pos.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
                    {pos.description}
                  </p>

                  <div className="space-y-2">
                    <span className="block text-[9px] uppercase font-bold tracking-wider text-slate-500">Das bringst Du mit:</span>
                    <div className="flex flex-wrap gap-2">
                      {pos.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="bg-slate-900/60 border border-white/5 text-slate-400 text-xs px-3 py-1 rounded-full font-medium">
                          ✓ {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fast application cta via Email */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-emerald-500/10 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="text-center space-y-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                  <Mail className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">Direktbewerbung per E-Mail</h3>
                  <p className="text-slate-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed font-medium">
                    Wir verzichten auf komplizierte Bewerbungsprozesse und Formulare! Senden Sie uns einfach Ihren Lebenslauf oder eine kurze Vorstellung Ihrer Person ganz unkompliziert per E-Mail zu. Wir melden uns garantiert innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs font-bold uppercase tracking-wider">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-40 blur-md group-hover:opacity-75 transition duration-500" />
                    <a 
                      href="mailto:info@empire-premium-bau.de?subject=Bewerbung bei Empire Premium"
                      className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold shadow-lg hover:shadow-emerald-500/10 active:scale-95 transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Jetzt per E-Mail bewerben
                    </a>
                  </div>
                  <a 
                    href="tel:+4917661951823" 
                    className="px-6 py-3.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-slate-900/40 active:scale-95 transition-all"
                  >
                    Anrufen: +49 176 61951823
                  </a>
                </div>
                
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                  Garantiert vertrauliche Behandlung Ihrer Bewerbungsunterlagen nach DSGVO.
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
