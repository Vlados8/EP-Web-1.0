"use client";

import React from "react";
import TiltCard from "./TiltCard";
import { Sun, ShieldCheck, ThermometerSnowflake, Cpu, Zap, Activity, Wrench } from "lucide-react";

export default function BentoGrid() {
  const cards = [
    {
      id: "card-autarky",
      title: "100% Autarkie",
      tag: "Solar & Speicher",
      description:
        "Erzeugen Sie Ihren eigenen Ökostrom mit Premium-Photovoltaik. Gekoppelt mit intelligenten Speichersystemen für Tag und Nacht.",
      metric: "Kompensation",
      metricValue: "95%+",
      icon: Sun,
      color: "from-emerald-400 to-teal-400",
      floatDelay: 0,
      floatDuration: 5.2,
      floatRange: 10,
    },
    {
      id: "card-heatpump",
      title: "Intelligente Wärmepumpen",
      tag: "Heizung der Zukunft",
      description:
        "Nutzen Sie Erdwärme oder Luftenergie mit Spitzen-Effizienz. Vollintegriert mit Ihrer Solaranlage für maximalen Ertrag.",
      metric: "Einsparung",
      metricValue: "bis zu 75%",
      icon: ThermometerSnowflake,
      color: "from-teal-400 to-cyan-400",
      floatDelay: 0.6,
      floatDuration: 6.0,
      floatRange: 12,
    },
    {
      id: "card-smart",
      title: "Eco-Home Vernetzung",
      tag: "Intelligente Steuerung",
      description:
        "Unser Smart-Energy-OS verteilt den Strom automatisch an Wärmepumpe, Hausspeicher und Wallbox. Vollautark gesteuert.",
      metric: "Echtzeit-Optimierung",
      metricValue: "< 1s",
      icon: Cpu,
      color: "from-emerald-500 to-cyan-500",
      floatDelay: 1.2,
      floatDuration: 5.6,
      floatRange: 8,
    },
    {
      id: "card-support",
      title: "Premium Support & Wartung",
      tag: "24/7 Sicherheit",
      description:
        "Rund-um-die-Uhr Überwachung Ihrer Energiesysteme. Schnelle Hilfe bei Störungen und jährliche Wartung durch echte Experten aus der Region.",
      metric: "Reaktionszeit",
      metricValue: "< 2 Std.",
      icon: Wrench,
      color: "from-cyan-400 to-teal-400",
      floatDelay: 1.8,
      floatDuration: 5.8,
      floatRange: 9,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4 z-10 relative">
      {cards.map((card) => {
        const IconComponent = card.icon;
        return (
          <TiltCard
            key={card.id}
            floatDelay={card.floatDelay}
            floatDuration={card.floatDuration}
            floatRange={card.floatRange}
            className="flex flex-col justify-between min-h-[320px] group/card border-slate-800/80 bg-slate-950/40"
          >
            {/* Header Area */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
                  {card.tag}
                </span>
                <div className={`p-2.5 rounded-2xl bg-gradient-to-br ${card.color} bg-opacity-10 text-slate-950 group-hover/card:scale-110 transition-transform duration-300 shadow-md`}>
                  {/* We render the icon with dynamic white inside or emerald style */}
                  <IconComponent className="w-5 h-5 text-white stroke-[1.75]" />
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight group-hover/card:text-emerald-400 transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                {card.description}
              </p>
            </div>

            {/* Bottom Metric Area */}
            <div className="mt-6 pt-5 border-t border-white/5 flex items-end justify-between">
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  {card.metric}
                </p>
                <p className={`text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${card.color}`}>
                  {card.metricValue}
                </p>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                <Activity className="w-3 h-3 animate-pulse" /> AKTIV
              </div>
            </div>
          </TiltCard>
        );
      })}
    </div>
  );
}
