"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, CheckCircle2, ArrowUpRight, Zap, MapPin } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: "project-berlin",
      title: "Villa Grunewald",
      location: "Berlin-Grunewald",
      image: "/project_solar_install.png", // Premium solar installation photo
      autarky: "92% Autarkie",
      specs: [
        "Photovoltaik: 18.4 kWp TOPCon",
        "Wärmepumpe: 24 kW Kaskade",
        "Speicher: 19.2 kWh Lithium",
      ],
      description:
        "Vollständige energetische Sanierung einer denkmalgeschützten Villa. Integration von fast unsichtbaren Solardachziegeln und intelligenter Lastverschiebung für Heizung und E-Mobilität.",
    },
    {
      id: "project-schwarzwald",
      title: "Landhaus Schwarzwald",
      location: "Freiburg im Breisgau",
      image: "/project_heatpump_install.png", // Premium heat pump installation photo
      autarky: "98% Autarkie",
      specs: [
        "Photovoltaik: 12.2 kWp N-Type",
        "Wärmepumpe: 16 kW Erdwärme",
        "Speicher: 15.0 kWh LFP-Speicher",
      ],
      description:
        "Off-Grid-fähiges Passivhaus in Alleinlage. Zuverlässige, autarke Wärme- und Stromversorgung über Geothermie und Speicher kaskadiert – selbst im schneereichen Schwarzwaldwinter.",
    },
  ];

  return (
    <section
      id="referenzen"
      className="relative z-10 py-24 md:py-32 px-6 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      {/* Decorative Blur Background Glimmer */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Erfolgsgeschichten</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Ausgewählte <br />
            Referenzprojekte.
          </h2>
        </div>
        <p className="text-slate-400 text-sm md:text-base font-medium max-w-sm leading-relaxed">
          Echte Einblicke in vollendete Energiewenden. Maßgeschneidert geplant, meisterhaft installiert.
        </p>
      </div>

      {/* Projects Double Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/45 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between"
          >
            {/* Upper half: Image wrapper with zoom-hover effect */}
            <div className="relative aspect-[16/10] overflow-hidden w-full">
              {/* Overlay radial vignette inside image */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-black/35 pointer-events-none" />
              
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                priority={idx === 0}
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Floating Autarky indicator badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-950/80 text-emerald-400 font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_15px_rgba(16,185,129,0.25)]">
                <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
                {proj.autarky}
              </div>

              {/* Location Tag */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/70 text-slate-300 font-semibold text-xs border border-white/5 backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {proj.location}
              </div>
            </div>

            {/* Lower half: Text Info Area */}
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                  {proj.title}
                </h3>
                <div className="p-2 rounded-full border border-white/5 bg-slate-900/40 text-slate-400 group-hover:text-white group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                {proj.description}
              </p>

              {/* Tech Specs HUD list */}
              <div className="pt-6 border-t border-white/5 space-y-3">
                <span className="block text-[8px] font-black uppercase tracking-widest text-slate-500">Systemarchitektur</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {proj.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/45 px-3 py-2 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="font-semibold truncate">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
