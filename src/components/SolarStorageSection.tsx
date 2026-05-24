"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Cpu, BatteryCharging, Zap, Compass, Activity, ArrowRightLeft } from "lucide-react";
import TiltCard from "./TiltCard";

export default function SolarStorageSection() {
  return (
    <section
      id="solar"
      className="relative z-10 py-24 md:py-32 px-6 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Header Area */}
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Komplettsystem-Komponenten</span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Das Empire Premium <br />
          Komplettpaket.
        </h2>
        <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">
          Solarstrom erzeugen, wandeln und speichern – perfekt aufeinander abgestimmt für maximale Energieautarkie und Ausfallsicherheit Ihres Zuhauses.
        </p>
      </div>

      {/* 3-Column Bento Grid featuring custom TiltCards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Solar Panels */}
        <TiltCard
          floatDelay={0}
          floatDuration={5.4}
          floatRange={10}
          className="flex flex-col justify-between min-h-[500px] bg-slate-950/40 border-slate-800/80 relative"
        >
          {/* Info Header */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
                Energieerzeugung
              </span>
              <Sun className="w-5 h-5 text-emerald-400 animate-spin-slow" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              Monokristalline Solarzellen
            </h3>
            
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
              N-Type TOPCon Premium-Solarzellen mit herausragendem Schwachlichtverhalten und maximaler mechanischer Belastbarkeit. 25 Jahre Produkt- und Leistungsgarantie.
            </p>
          </div>

          {/* Interactive Mechanical Vector (Photons hitting solar grid + active busbars) */}
          <div 
            style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
            className="my-6 w-full h-32 bg-slate-900/50 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center shadow-inner"
          >
            {/* Silicon Cell grid lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 opacity-20 border border-white/5 pointer-events-none">
              {[...Array(18)].map((_, i) => (
                <div key={i} className="border-r border-b border-white/10" />
              ))}
            </div>

            {/* Glowing electrical busbar collector lines */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-emerald-500/20" />
            
            {/* Falling Photon particles */}
            <div className="absolute inset-0 flex justify-around items-start pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`photon-${i}`}
                  animate={{
                    y: [0, 128],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.0,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeIn",
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                />
              ))}
            </div>

            {/* Pulsing horizontal current flows along the busbar */}
            <motion.div
              animate={{
                x: [-150, 200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-0.5 w-16 bg-gradient-to-r from-transparent via-emerald-400 to-transparent top-1/2 -translate-y-1/2"
            />
            
            {/* Ambient collector glow */}
            <motion.div
              animate={{ opacity: [0.1, 0.35, 0.1] }}
              transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-32 h-10 bg-emerald-500/15 blur-lg rounded-full top-1/2 -translate-y-1/2"
            />
            
            <span className="relative z-10 text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-950/90 px-2.5 py-1 rounded border border-white/5 shadow">
              PV-MODUL INTERNALS
            </span>
          </div>

          {/* Floating 3D Status HUD Badge */}
          <div
            style={{ transform: "translateZ(35px)" }}
            className="absolute bottom-20 left-6 z-20 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider backdrop-blur-md"
          >
            PV STATUS: GENERATING
          </div>

          {/* Specs Footer */}
          <div className="border-t border-white/5 pt-5 grid grid-cols-2 gap-4">
            <div>
              <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500">Nennleistung</span>
              <span className="text-lg md:text-xl font-extrabold text-white">440 Wp</span>
            </div>
            <div>
              <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500">Wirkungsgrad</span>
              <span className="text-lg md:text-xl font-extrabold text-emerald-400">22.8%</span>
            </div>
          </div>
        </TiltCard>

        {/* Card 2: Hybrid Inverter */}
        <TiltCard
          floatDelay={0.4}
          floatDuration={6.0}
          floatRange={12}
          className="flex flex-col justify-between min-h-[500px] bg-slate-950/40 border-slate-800/80 relative"
        >
          {/* Info Header */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
                Energieumwandlung
              </span>
              <Cpu className="w-5 h-5 text-teal-400" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
              Smarter Hybrid-Wechselrichter
            </h3>
            
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
              Das integrierte Gehirn Ihres Kraftwerks. Wandelt Solarstrom verlustarm um und regelt Energieflüsse zwischen Haus, Speicher und Netz in Echtzeit.
            </p>
          </div>

          {/* Interactive Mechanical Vector (Pulsing multi-directional current lines) */}
          <div 
            style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
            className="my-6 w-full h-32 bg-slate-900/50 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center shadow-inner"
          >
            {/* Conversion Hub vector node */}
            <div className="absolute w-10 h-10 rounded-full border border-teal-500/25 flex items-center justify-center bg-slate-950/60 z-10 shadow-inner">
              <ArrowRightLeft className="w-4 h-4 text-teal-400 animate-pulse" />
            </div>

            {/* Input Node (Solar DC) */}
            <div className="absolute left-6 w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-emerald-400" />
            </div>
            {/* Output Node (Grid AC) */}
            <div className="absolute right-6 w-3 h-3 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-cyan-400" />
            </div>

            {/* Pulsing power paths */}
            <svg className="w-40 h-12 text-slate-800" viewBox="0 0 100 40">
              <path d="M5,20 L40,20 L50,20 L60,20 L95,20" fill="none" className="stroke-white/10 stroke-[2]" />
              {/* Solar DC Flow to Hub */}
              <motion.path
                d="M5,20 L45,20"
                fill="none"
                className="stroke-emerald-400 stroke-[2]"
                strokeDasharray="8 20"
                animate={{ strokeDashoffset: [-60, 0] }}
                transition={{ duration: 2.0, repeat: Infinity, ease: "linear" }}
              />
              {/* Hub AC Flow to Grid */}
              <motion.path
                d="M55,20 L95,20"
                fill="none"
                className="stroke-cyan-400 stroke-[2]"
                strokeDasharray="8 20"
                animate={{ strokeDashoffset: [-60, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            <span className="absolute z-10 text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-950/90 px-2.5 py-1 rounded border border-white/5 bottom-2 shadow">
              REALTIME CONVERSION
            </span>
          </div>

          {/* Floating 3D Status HUD Badge */}
          <div
            style={{ transform: "translateZ(35px)" }}
            className="absolute bottom-20 left-6 z-20 bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider backdrop-blur-md"
          >
            INVERTER: OS v4.2 ACTIVE
          </div>

          {/* Specs Footer */}
          <div className="border-t border-white/5 pt-5 grid grid-cols-2 gap-4">
            <div>
              <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500">Max. Wirkungsgrad</span>
              <span className="text-lg md:text-xl font-extrabold text-white">98.4%</span>
            </div>
            <div>
              <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500">Nennleistung</span>
              <span className="text-lg md:text-xl font-extrabold text-teal-400">10 kW</span>
            </div>
          </div>
        </TiltCard>

        {/* Card 3: Storage Battery */}
        <TiltCard
          floatDelay={0.8}
          floatDuration={5.6}
          floatRange={8}
          className="flex flex-col justify-between min-h-[500px] bg-slate-950/40 border-slate-800/80 relative"
        >
          {/* Info Header */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
                Energiespeicherung
              </span>
              <BatteryCharging className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              Modularer Lithium-Speicher
            </h3>
            
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
              Sichere Kobaltfreie LFP-Speicherzellen mit dreiphasiger Notstromfähigkeit unter 10ms. Modular erweiterbar von 5 bis 20 kWh für perfekte Skalierbarkeit.
            </p>
          </div>

          {/* Interactive Mechanical Vector (Active breathing cell stack tower) */}
          <div 
            style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
            className="my-6 w-full h-32 bg-slate-900/50 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center shadow-inner"
          >
            {/* Battery tower outline casing */}
            <div className="w-12 h-20 border border-white/10 rounded-lg p-1.5 flex flex-col justify-end gap-1 relative z-10 bg-slate-950/90 shadow-md">
              {/* Glowing charge cell stacks */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`cell-${i}`}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    backgroundColor: ["#0ea5e9", "#10b981", "#0ea5e9"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                  className="h-3 w-full rounded bg-cyan-400 shadow-[0_0_8px_rgba(14,165,233,0.35)]"
                />
              ))}
            </div>

            {/* Glowing discharge magnetic induction ring backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-cyan-500/10 blur-md pointer-events-none animate-pulse-slow" />

            <span className="absolute z-10 text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-950/90 px-2.5 py-1 rounded border border-white/5 bottom-2 shadow">
              LFP CELL STACK
            </span>
          </div>

          {/* Floating 3D Status HUD Badge */}
          <div
            style={{ transform: "translateZ(35px)" }}
            className="absolute bottom-20 left-6 z-20 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider backdrop-blur-md"
          >
            BATTERY SOC: 78% (CHARGING)
          </div>

          {/* Specs Footer */}
          <div className="border-t border-white/5 pt-5 grid grid-cols-2 gap-4">
            <div>
              <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500">Nennkapazität</span>
              <span className="text-lg md:text-xl font-extrabold text-white">12.8 kWh</span>
            </div>
            <div>
              <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500">Zelllebensdauer</span>
              <span className="text-lg md:text-xl font-extrabold text-cyan-400">10.000+ Z.</span>
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}
