"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, Wind, Thermometer, Activity } from "lucide-react";

export default function TechShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Set up motion values for 3D tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // High-fidelity spring setup
  const springConfig = { damping: 20, stiffness: 120, mass: 1 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-18, 18]), springConfig);

  // Glare position values
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize coordinates (-0.5 to 0.5)
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);

    glareX.set(event.clientX - rect.left);
    glareY.set(event.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const features = [
    {
      id: "feat-inverter",
      title: "Modulierende Inverter-Technologie",
      description:
        "Passt die Kompressorleistung stufenlos an den Heizbedarf Ihres Hauses an. Das spart bis zu 30% Strom im Vergleich zu starren On/Off-Anlagen.",
      icon: Cpu,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      id: "feat-silent",
      title: "Flüsterleise Aero-Ventilatoren",
      description:
        "Speziell geformte Lüfterblätter nach dem Vorbild von Eulenflügeln minimieren Luftwirbel. Mit nur 32 dB(A) im Nachtmodus absolut schlafzimmertauglich.",
      icon: Wind,
      color: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    },
    {
      id: "feat-thermal",
      title: "Thermodynamischer Kältekreislauf",
      description:
        "Maximaler Wärmeübergang durch umweltfreundliches Kältemittel R290. Erzielt Spitzen-Vorlauftemperaturen von bis zu 75 °C selbst bei arktischen Außentemperaturen von -25 °C.",
      icon: Thermometer,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  return (
    <section
      id="heatpump"
      className="relative z-10 py-24 md:py-32 px-6 max-w-7xl mx-auto w-full border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Tech Details */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">German Engineering</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mt-2">
              Technologische <br />
              Überlegenheit.
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-4 max-w-lg leading-relaxed font-medium">
              Unsere Systeme integrieren modernste Sensorik und Materialwissenschaft. Entwickelt für jahrzehntelangen, störungsfreien Betrieb unter extremsten Bedingungen.
            </p>
          </div>

          {/* Feature list */}
          <div className="space-y-6">
            {features.map((feat) => {
              const IconComponent = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-slate-950/20 hover:bg-slate-950/50 hover:border-emerald-500/15 transition-all duration-300 group"
                >
                  <div className={`p-3 h-fit rounded-xl border ${feat.color} group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive 3D Mockup Box */}
        <div className="lg:col-span-6 flex justify-center items-center relative min-h-[550px]">
          
          {/* Subtle Radial Blur Ambient background aura */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[100px] opacity-70 animate-pulse-slow" />
          </div>

          {/* 3D Tilting Product Card */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className={`relative w-full max-w-lg aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/50 p-8 backdrop-blur-2xl transition-all duration-300 shadow-[0_16px_50px_rgba(0,0,0,0.5)] select-none cursor-grab active:cursor-grabbing ${
              isHovered ? "border-emerald-400/30 shadow-[0_20px_60px_rgba(16,185,129,0.12)]" : ""
            }`}
          >
            {/* Dynamic Glare Reflector */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.35 : 0,
                background: `radial-gradient(circle 220px at ${glareX.get()}px ${glareY.get()}px, rgba(16, 185, 129, 0.35) 0%, rgba(16,185,129,0.05) 50%, rgba(255,255,255,0) 80%)`,
              }}
            />

            {/* Parallax Layer 1: Holographic grid vector (translateZ -25px) */}
            <div 
              style={{ transform: "translateZ(-25px)" }} 
              className="absolute inset-0 opacity-15 border-[4px] border-dashed border-emerald-500/10 rounded-[2rem] m-4 pointer-events-none flex items-center justify-center"
            >
              <div className="absolute w-[360px] h-[360px] border border-dashed border-teal-500/5 rounded-full" />
              {/* Vertical CAD measurement lines */}
              <div className="absolute h-full w-[1px] bg-slate-500/10 left-1/4" />
              <div className="absolute h-full w-[1px] bg-slate-500/10 left-3/4" />
              <div className="absolute w-full h-[1px] bg-slate-500/10 top-1/4" />
              <div className="absolute w-full h-[1px] bg-slate-500/10 top-3/4" />
            </div>

            {/* Parallax Layer 2: Main Schematic & Flows (translateZ 10px) */}
            <div 
              style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }} 
              className="relative w-full h-full flex flex-col justify-between items-center"
            >
              {/* Product Header Spec HUD */}
              <div className="w-full flex justify-between items-start border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    AERO-KRAFT HUD DIAGNOSE
                  </span>
                  <h4 className="text-sm font-extrabold text-white">Systemkompressor R290</h4>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400 bg-emerald-400/5 border border-emerald-400/20 px-2 py-0.5 rounded-md">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> 3D SYSTEM OK
                </div>
              </div>

              {/* Product Mechanical Body (CAD 3D isometric SVG blueprint visualizer) */}
              <div className="my-4 relative w-full h-[260px] rounded-3xl border border-white/5 flex items-center justify-center shadow-inner overflow-hidden">
                {/* Tech Scanlines inside */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-10" />

                {/* 3D Isometric System Drawing SVG */}
                <svg className="w-full h-full text-emerald-400" viewBox="0 0 240 200">
                  {/* Isometric Ambient Coordinates */}
                  <g opacity="0.08" stroke="currentColor" strokeWidth="0.75" fill="none">
                    <path d="M10,40 L230,150 M10,70 L230,180 M10,100 L230,210" />
                    <path d="M230,40 L10,150 M230,70 L10,180 M230,100 L10,210" />
                  </g>

                  {/* 3D Cabinet Chassis */}
                  {/* Back face outline */}
                  <path d="M 60,65 L 110,45 L 110,115 L 60,135 Z" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="1" />
                  {/* Top face cover (Sleek cabinet lid) */}
                  <path d="M 60,65 L 110,45 L 160,65 L 110,85 Z" fill="rgba(15,23,42,0.7)" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" />
                  
                  {/* Left front face panel (translucent cabinet chassis casing) */}
                  <path d="M 60,65 L 110,85 L 110,155 L 60,135 Z" fill="rgba(15,23,42,0.6)" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" />
                  {/* Right front face panel (translucent cabinet chassis casing) */}
                  <path d="M 110,85 L 160,65 L 160,135 L 110,155 Z" fill="rgba(15,23,42,0.45)" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" />

                  {/* Silk Screen Brand Logo in perspective on the front left panel */}
                  <text 
                    x="65" 
                    y="78" 
                    fill="rgba(52,211,153,0.45)" 
                    fontSize="4.5" 
                    fontWeight="900" 
                    letterSpacing="0.5" 
                    transform="rotate(21.8, 65, 78)"
                  >
                    EMPIRE PREMIUM.
                  </text>

                  {/* Evaporator Copper Ventilation Slats (louvers on the Right Side Panel) */}
                  <g fill="rgba(15,23,42,0.85)" stroke="rgba(52,211,153,0.25)" strokeWidth="0.8">
                    {/* Louvre 1 */}
                    <path d="M 120,83 L 150,71 L 150,75 L 120,87 Z" />
                    {/* Louvre 2 */}
                    <path d="M 120,93 L 150,81 L 150,85 L 120,97 Z" />
                    {/* Louvre 3 */}
                    <path d="M 120,103 L 150,91 L 150,95 L 120,107 Z" />
                    {/* Louvre 4 */}
                    <path d="M 120,113 L 150,101 L 150,105 L 120,117 Z" />
                    {/* Louvre 5 */}
                    <path d="M 120,123 L 150,111 L 150,115 L 120,127 Z" />
                  </g>

                  {/* Evaporator Copper Coils (drawn deep inside the louvers structure) */}
                  <g stroke="rgba(248,113,113,0.3)" strokeWidth="1.2" fill="none">
                    <path d="M 115,85 Q 112,89 115,93 M 115,103 Q 112,107 115,111" />
                    <path d="M 155,79 Q 158,83 155,87 M 155,99 Q 158,103 155,107" />
                  </g>

                  {/* Compressor Cylinder Tank (Visible inside left panel - heat pump mechanical engine) */}
                  <rect x="84" y="105" width="14" height="30" rx="3" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.5)" strokeWidth="1" transform="skewY(21.8)" />
                  <ellipse cx="91" cy="105" rx="7" ry="2.5" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="1" transform="skewY(21.8)" />

                  {/* Flowing Heat streams (Red) entering the Evaporator loops from right */}
                  <g fill="#f87171">
                    {/* Particle 1 */}
                    <circle r="1.5">
                      <animateMotion path="M 195,50 L 140,75 C 135,77 125,81 120,83" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    {/* Particle 2 */}
                    <circle r="1.5">
                      <animateMotion path="M 195,75 L 140,100 C 135,102 125,106 120,108" dur="2.6s" repeatCount="indefinite" begin="0.8s" />
                    </circle>
                  </g>

                  {/* Heat Pump Copper Pipes connecting Evaporator to the House Grid (exiting the side) */}
                  <g fill="none" strokeWidth="2.2">
                    {/* Pipe 1 (Warm Outlet - Copper color) */}
                    <path d="M 130,147 C 130,165 110,175 75,175" stroke="#d97706" opacity="0.85" />
                    {/* Pipe 2 (Cold Return - Copper color) */}
                    <path d="M 140,143 C 140,160 120,170 85,170" stroke="#d97706" opacity="0.85" />
                  </g>

                  {/* Deep Recessed Circular Fan Opening (3D Fan Bezel rings) */}
                  <ellipse cx="85" cy="115" rx="16" ry="24" fill="rgba(2,6,23,0.9)" stroke="rgba(52,211,153,0.6)" strokeWidth="2.2" />
                  {/* Metallic Inner Shroud ring */}
                  <ellipse cx="85" cy="115" rx="13" ry="19.5" fill="none" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />

                  {/* 3D Owl-wing Fan Blades (Centered inside the deep circular bezel, rotating) */}
                  <g transform="translate(85, 115)">
                    <g className="origin-center animate-spin" style={{ animationDuration: "5s" }}>
                      {/* Blade 1 */}
                      <path d="M 0,0 C -4,-12 4,-12 0,0 Z" fill="rgba(52,211,153,0.6)" stroke="rgba(52,211,153,0.8)" strokeWidth="0.8" />
                      {/* Blade 2 */}
                      <path d="M 0,0 C 12,-4 12,4 0,0 Z" fill="rgba(52,211,153,0.6)" stroke="rgba(52,211,153,0.8)" strokeWidth="0.8" />
                      {/* Blade 3 */}
                      <path d="M 0,0 C 4,12 -4,12 0,0 Z" fill="rgba(52,211,153,0.6)" stroke="rgba(52,211,153,0.8)" strokeWidth="0.8" />
                      {/* Blade 4 */}
                      <path d="M 0,0 C -12,4 -12,-4 0,0 Z" fill="rgba(52,211,153,0.6)" stroke="rgba(52,211,153,0.8)" strokeWidth="0.8" />
                      <circle cx="0" cy="0" r="2.5" fill="#fff" />
                    </g>
                  </g>

                  {/* Steel protective mesh grille overlay over the recessed fan circle */}
                  <g stroke="rgba(52,211,153,0.25)" strokeWidth="0.6" fill="none">
                    {/* Concentric rings */}
                    <ellipse cx="85" cy="115" rx="8" ry="12" />
                    {/* Radial spokes */}
                    <path d="M 85,91 L 85,139" />
                    <path d="M 69,115 L 101,115" />
                  </g>

                  {/* Flowing Cold discharge streams (Blue) coming out of the fan face to the left */}
                  <g fill="#22d3ee">
                    {/* Particle 1 */}
                    <circle r="1.5">
                      <animateMotion path="M 75,110 L 30,90 L 5,80" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    {/* Particle 2 */}
                    <circle r="1.5">
                      <animateMotion path="M 75,120 L 30,100 L 5,90" dur="2.1s" repeatCount="indefinite" begin="0.5s" />
                    </circle>
                  </g>
                </svg>

              </div>

              {/* Parallax Layer 3: Floating Overlay Specification HUD Panel (translateZ 45px) */}
              <div 
                style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}
                className="w-full grid grid-cols-3 gap-3 border-t border-white/5 pt-4 text-center"
              >
                <div className="bg-slate-900/50 p-2.5 rounded-xl border border-white/5 flex flex-col justify-center">
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500">Heizleistung</span>
                  <span className="text-xs md:text-sm font-extrabold text-white">16 kW</span>
                </div>
                <div className="bg-slate-900/50 p-2.5 rounded-xl border border-white/5 flex flex-col justify-center">
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500">Wirkungsgrad</span>
                  <span className="text-xs md:text-sm font-extrabold text-emerald-400">COP 5.4</span>
                </div>
                <div className="bg-slate-900/50 p-2.5 rounded-xl border border-white/5 flex flex-col justify-center">
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500">Lautstärke</span>
                  <span className="text-xs md:text-sm font-extrabold text-teal-400">32 dB(A)</span>
                </div>
              </div>

            </div>

            {/* Parallax Layer 4: Extra Floating diagnostic badges (translateZ 60px) */}
            <div
              style={{ transform: "translateZ(60px)" }}
              className="absolute bottom-20 left-4 z-30 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider backdrop-blur-md flex items-center gap-1 shadow-md"
            >
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
              <span>COMPRESSOR FREQ: 42 Hz</span>
            </div>

            <div
              style={{ transform: "translateZ(60px)" }}
              className="absolute top-20 right-4 z-30 bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider backdrop-blur-md flex items-center gap-1 shadow-md"
            >
              <span>PRESSURE: 2.4 MPa</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
