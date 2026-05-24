"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Wrench, Send, CheckCircle2, ChevronRight, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function SupportContent() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  // --- Support Form States ---
  const [formStep, setFormStep] = useState<"idle" | "form" | "success" | "loading">("idle");
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [priority, setPriority] = useState("normal");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !subject || !description || !userName || !userEmail) {
      setFormError("Bitte füllen Sie alle erforderlichen Felder aus.");
      return;
    }
    setFormError("");
    setFormStep("loading");

    // Simulate technical support submitting pipeline
    setTimeout(() => {
      setFormStep("success");
    }, 1500);
  };

  const handleReset = () => {
    setTopic("");
    setSubject("");
    setDescription("");
    setUserName("");
    setUserEmail("");
    setPriority("normal");
    setFormError("");
    setFormStep("idle");
  };

  const supportChannels = [
    {
      title: "24/7 Notfall-Hotline",
      detail: "+49 176 61951823",
      description: "Soforthilfe bei kritischen Systemfehlern, Inverterausfall oder Batteriespeicher-Störungen.",
      icon: Phone,
      color: "from-emerald-400 to-teal-400",
      link: "tel:+4917661951823"
    },
    {
      title: "E-Mail Kundenservice",
      detail: "info@empire-premium-bau.de",
      description: "Für allgemeine technische Fragen, Garantieanfragen oder administrative Anliegen.",
      icon: Mail,
      color: "from-teal-400 to-cyan-400",
      link: "mailto:info@empire-premium-bau.de"
    },
    {
      title: "Jährliche Wartungsverträge",
      detail: "Optimierte Systemleistung",
      description: "Fachgerechte Überprüfung von Solaranlage und Wärmepumpe zur Aufrechterhaltung aller Gewährleistungen.",
      icon: Wrench,
      color: "from-emerald-500 to-cyan-500"
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
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Kundendienst & Service</span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Support & Wartung
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Premium Support Hero Image Banner */}
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
              src="/support_hero.png" 
              alt="Holographic clean energy support diagnostic banner" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000"
            />
            
            <div className="absolute bottom-6 left-6 z-20 space-y-1">
              <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                EMPIRE PREMIUM MONITORING
              </span>
              <h4 className="text-sm font-extrabold text-white">Präventiver 24/7-Schutz für Ihre Energieautarkie</h4>
            </div>
          </motion.div>

          {/* Main Info Blocks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-16"
          >
            
            {/* Grouped Support Channels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportChannels.map((channel, cIdx) => {
                const Icon = channel.icon;
                return (
                  <motion.div
                    key={cIdx}
                    variants={itemVariants}
                    className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${channel.color} bg-opacity-10 text-white`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-white uppercase tracking-wider">{channel.title}</h4>
                        {channel.link ? (
                          <a href={channel.link} className="text-xs md:text-sm font-extrabold text-emerald-400 hover:underline block break-all">
                            {channel.detail}
                          </a>
                        ) : (
                          <span className="text-xs md:text-sm font-extrabold text-slate-300 block">{channel.detail}</span>
                        )}
                        <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed font-semibold pt-1">
                          {channel.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Interactive Technical Ticket Submission */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-emerald-500/10 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <AnimatePresence mode="wait">
                {formStep === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                      <Wrench className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-white">Technisches Ticket erstellen</h3>
                      <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed font-medium">
                        Haben Sie eine Frage zur Steuerung oder möchten Sie uns eine Störung melden? Nutzen Sie unser Express-Ticketsystem für eine priorisierte Bearbeitung!
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs font-bold uppercase tracking-wider">
                      <button 
                        onClick={() => setFormStep("form")}
                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold shadow-lg hover:shadow-emerald-500/10 active:scale-95 transition-all flex items-center gap-1"
                      >
                        Support-Ticket öffnen <ChevronRight className="w-4 h-4" />
                      </button>
                      <a href="tel:+4917661951823" className="px-6 py-3.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-slate-900/40 active:scale-95 transition-all">
                        Hotline anrufen
                      </a>
                    </div>
                  </motion.div>
                )}

                {formStep === "form" && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 max-w-lg mx-auto"
                  >
                    <div className="text-center">
                      <h3 className="text-lg md:text-xl font-bold text-white">Support-Details angeben</h3>
                      <p className="text-slate-500 text-xs mt-1">Ihr Ticket wird direkt an das zuständige Regionalteam übergeben.</p>
                    </div>

                    {formError && (
                      <div className="p-3 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-xs font-semibold flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4" /> <span>{formError}</span>
                      </div>
                    )}

                    <div className="space-y-4">
                      {/* Topic Category selection */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 pl-1">Art des Anliegens *</label>
                        <select
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          className="bg-slate-900/80 border border-white/5 rounded-xl px-4 py-3 text-xs w-full text-white outline-none focus:border-emerald-500/30 transition-colors"
                        >
                          <option value="" disabled className="bg-slate-950">Bitte auswählen...</option>
                          <option value="Solaranlage" className="bg-slate-950">Wechselrichter / Solaranlage</option>
                          <option value="Batteriespeicher" className="bg-slate-950">Hausspeicher / Batterie</option>
                          <option value="Waermepumpe" className="bg-slate-950">Wärmepumpe / Heizungsgerät</option>
                          <option value="SmartEnergy" className="bg-slate-950">Smart Home OS / App-Steuerung</option>
                          <option value="Inspektion" className="bg-slate-950">Jährliche Wartung anfragen</option>
                        </select>
                      </div>

                      {/* Subject input */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 pl-1">Betreff *</label>
                        <input
                          type="text"
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="z.B. Wechselrichter zeigt Fehlercode E103"
                          className="bg-slate-900/80 border border-white/5 rounded-xl px-4 py-3 text-xs w-full text-white outline-none focus:border-emerald-500/30 transition-colors"
                        />
                      </div>

                      {/* Priority selector */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 pl-1">Dringlichkeit *</label>
                        <select
                          value={priority}
                          onChange={(e) => setPriority(e.target.value)}
                          className="bg-slate-900/80 border border-white/5 rounded-xl px-4 py-3 text-xs w-full text-white outline-none focus:border-emerald-500/30 transition-colors"
                        >
                          <option value="niedrig" className="bg-slate-950">Niedrig (Administrative Frage)</option>
                          <option value="normal" className="bg-slate-950">Normal (Fehlermeldung, Anlage läuft)</option>
                          <option value="hoch" className="bg-slate-950">Hoch (Anlage gestört / Teilausfall)</option>
                          <option value="dringend" className="bg-slate-950">Dringend (Kritischer Komplettausfall)</option>
                        </select>
                      </div>

                      {/* Description textarea */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 pl-1">Beschreibung des Fehlers / Anliegens *</label>
                        <textarea
                          required
                          rows={4}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Bitte beschreiben Sie das Problem so detailliert wie möglich..."
                          className="bg-slate-900/80 border border-white/5 rounded-xl px-4 py-3 text-xs w-full text-white outline-none focus:border-emerald-500/30 transition-colors resize-none"
                        />
                      </div>

                      {/* User Contact Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 pl-1">Name, Vorname *</label>
                          <input
                            type="text"
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Max Mustermann"
                            className="bg-slate-900/80 border border-white/5 rounded-xl px-4 py-3 text-xs w-full text-white outline-none focus:border-emerald-500/30 transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5 text-left">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 pl-1">E-Mail Adresse *</label>
                          <input
                            type="email"
                            required
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            placeholder="name@beispiel.de"
                            className="bg-slate-900/80 border border-white/5 rounded-xl px-4 py-3 text-xs w-full text-white outline-none focus:border-emerald-500/30 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-xs uppercase tracking-widest shadow hover:shadow-emerald-500/10 active:scale-98 transition-all"
                      >
                        Support-Ticket absenden
                      </button>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-3.5 rounded-xl border border-white/10 text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest active:scale-98 transition-all"
                      >
                        Abbrechen
                      </button>
                    </div>
                  </motion.form>
                )}

                {formStep === "loading" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center space-y-4"
                  >
                    <div className="w-10 h-10 border-2 border-emerald-500/30 border-t-emerald-400 rounded-full animate-spin mx-auto" />
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest animate-pulse">Ticket wird im CRM angelegt...</p>
                  </motion.div>
                )}

                {formStep === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8 space-y-6 max-w-md mx-auto"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white tracking-tight">Support-Ticket registriert!</h3>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">
                        Vielen Dank, {userName.split(" ")[0]}! Ihre Störungsmeldung wurde erfolgreich an unsere technische Regionalleitung übergeben. Ein Techniker prüft Ihre Angaben und wird sich innerhalb der nächsten 2 Stunden zur Klärung der nächsten Schritte bei Ihnen melden.
                      </p>
                    </div>
                    <button 
                      onClick={handleReset}
                      className="px-6 py-3 rounded-xl border border-emerald-500/20 text-emerald-400 hover:text-white hover:bg-emerald-500/5 text-xs font-bold uppercase tracking-widest active:scale-95 transition-all"
                    >
                      Schließen
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </motion.div>

        </div>

        <Footer />
      </main>
    </>
  );
}
