"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Navigation } from "lucide-react";

export default function Servicegebiet() {
  const cities = [
    { name: "Bremen (Zentrale)", primary: true },
    { name: "Bremerhaven", primary: false },
    { name: "Oldenburg", primary: false },
    { name: "Osnabrück", primary: false },
    { name: "Delmenhorst", primary: false },
    { name: "Wilhelmshaven", primary: false },
    { name: "Cuxhaven", primary: false },
    { name: "Verden (Aller)", primary: false },
    { name: "Achim", primary: false },
    { name: "Rotenburg (Wümme)", primary: false },
    { name: "Nienburg (Weser)", primary: false },
    { name: "Cloppenburg", primary: false },
    { name: "Vechta", primary: false },
    { name: "Weyhe & Stuhr", primary: false }
  ];

  return (
    <section 
      id="servicegebiet"
      className="relative z-10 py-24 md:py-32 px-6 max-w-7xl mx-auto w-full border-t border-white/5 bg-slate-950"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: High-Tech Pulse Radar Visualizer */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[350px] bg-slate-900/10 rounded-[2.5rem] border border-white/5 p-8 overflow-hidden backdrop-blur-3xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[280px] h-[280px] rounded-full bg-emerald-500/5 blur-[80px]" />
          </div>

          {/* Pulse Radar Casing */}
          <div className="relative w-[280px] h-[280px] flex items-center justify-center rounded-full border border-white/5 bg-slate-950/40">
            
            {/* expanding pulsed rings (3 layers) */}
            <motion.div
              animate={{
                scale: [1, 2.4],
                opacity: [0.35, 0],
              }}
              transition={{
                duration: 4.0,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute w-24 h-24 rounded-full border border-emerald-500/20 pointer-events-none"
            />

            <motion.div
              animate={{
                scale: [1, 2.4],
                opacity: [0.35, 0],
              }}
              transition={{
                duration: 4.0,
                repeat: Infinity,
                delay: 1.33,
                ease: "easeOut",
              }}
              className="absolute w-24 h-24 rounded-full border border-teal-500/20 pointer-events-none"
            />

            <motion.div
              animate={{
                scale: [1, 2.4],
                opacity: [0.35, 0],
              }}
              transition={{
                duration: 4.0,
                repeat: Infinity,
                delay: 2.66,
                ease: "easeOut",
              }}
              className="absolute w-24 h-24 rounded-full border border-cyan-500/20 pointer-events-none"
            />

            {/* Target Crosshairs for CAD blueprint feel */}
            <div className="absolute inset-x-0 h-[1px] bg-slate-500/10 pointer-events-none" />
            <div className="absolute inset-y-0 w-[1px] bg-slate-500/10 pointer-events-none" />

            {/* 100km Range Ring */}
            <div className="absolute w-[200px] h-[200px] border border-dashed border-emerald-500/10 rounded-full flex items-center justify-center">
              <span className="text-[7px] text-slate-600 tracking-widest font-black uppercase absolute top-2">
                100 KM RADIUS LIMIT
              </span>
            </div>

            {/* Central Node representing Bremen (Zentrale) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.4)] animate-bounce">
                <MapPin className="w-3 h-3 text-emerald-400" />
              </div>
              <span className="text-[10px] font-black text-white bg-slate-950/90 border border-white/10 px-3 py-1 rounded-full shadow tracking-wider uppercase">
                Bremen (HQ)
              </span>
            </div>

            {/* Sub-Target marker representing Bremerhaven */}
            <div className="absolute top-16 right-16 flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)] animate-pulse" />
            </div>

            {/* Sub-Target marker representing Oldenburg */}
            <div className="absolute bottom-16 left-12 flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-pulse" />
            </div>

          </div>

          {/* Floating Range Badge HUD */}
          <div className="absolute bottom-6 left-6 z-20 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 shadow-md">
            <Navigation className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>100 km Aktionsradius</span>
          </div>
        </div>

        {/* Right Column: SEO Copys & Regional Cities Tags Grid */}
        <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Vor-Ort in Ihrer Region</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mt-2">
              Unser Einzugsgebiet: <br />
              Regional & Schnell
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-4 leading-relaxed font-medium">
              Mit Sitz in Bremen montieren wir Photovoltaikanlagen, Stromspeicher und Wärmepumpen im Umkreis von 100 km. Kurze Anfahrtswege garantieren schnellen Vor-Ort-Service, zuverlässige meistergeführte Wartungen und direkte Erreichbarkeit.
            </p>
          </div>

          {/* City tags grid */}
          <div className="flex flex-wrap gap-2.5">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide border backdrop-blur-md shadow-md transition-all duration-300 ${
                  city.primary
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/5 scale-105"
                    : "bg-slate-900/40 border-white/5 text-slate-300 hover:border-emerald-500/20 hover:text-white"
                }`}
              >
                {city.name}
              </div>
            ))}
          </div>

          {/* Trust guarantee badge */}
          <div className="flex items-center gap-3 border-t border-white/5 pt-6 text-xs font-semibold text-slate-400">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Alle Städte liegen innerhalb unseres direkten Werkskundendienst-Bereichs.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
