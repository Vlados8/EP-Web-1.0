"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Shield, Zap, Leaf, Award } from "lucide-react";

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

// Reusable animated count-up number component
function AnimatedNumber({ value, suffix, trigger }: { value: number; suffix: string; trigger: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds animation duration
    const startTime = performance.now();

    function updateNumber(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic function for natural deceleration
      const easeProgress = progress * (2 - progress);
      
      const nextValue = Math.floor(easeProgress * (end - start) + start);
      setCurrent(nextValue);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }

    requestAnimationFrame(updateNumber);
  }, [value, trigger]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Detects when the statistics section enters the screen (triggers once)
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  const stats: StatItem[] = [
    {
      id: "stat-installations",
      target: 450,
      suffix: "+",
      label: "Installierte Anlagen",
      description: "Erfolgreich in Betrieb genommene Solar- und Heizkomplexe in ganz Deutschland.",
      icon: Award,
      color: "from-emerald-400 to-teal-400",
    },
    {
      id: "stat-satisfaction",
      target: 98,
      suffix: "%",
      label: "Zufriedene Kunden",
      description: "Erstklassige Bewertungen für Planung, Montageservice und Systemleistung.",
      icon: Users,
      color: "from-teal-400 to-cyan-400",
    },
    {
      id: "stat-energy",
      target: 12,
      suffix: " MWh",
      label: "Generierter Strom",
      description: "Tägliche grüne Energieproduktion unserer vernetzten Photovoltaik-Systeme.",
      icon: Zap,
      color: "from-cyan-400 to-emerald-400",
    },
    {
      id: "stat-co2",
      target: 8,
      suffix: " T.",
      label: "CO₂ Eingespart",
      description: "Jährliche CO₂-Kompensation pro Haushalt im Durchschnitt mit unseren Wärmepumpen.",
      icon: Leaf,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="stats-section"
      className="relative z-10 py-24 md:py-32 px-6 max-w-7xl mx-auto w-full"
    >
      {/* Decorative dynamic ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      {/* Grid Layout for Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/45 p-6 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:border-emerald-500/25 hover:shadow-[0_15px_35px_rgba(16,185,129,0.08)] group"
            >
              {/* Internal subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

              {/* Icon & Brand Indicator */}
              <div className="flex justify-between items-center mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Number presentation */}
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 select-all">
                <AnimatedNumber value={stat.target} suffix={stat.suffix} trigger={isInView} />
              </h3>

              {/* Label */}
              <h4 className="text-sm font-bold text-slate-200 tracking-wide uppercase mb-3">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
