"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Target, Heart, Award, ShieldCheck, Cpu, Calendar, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function UeberUnsContent() {
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

  const milestones = [
    {
      year: "2019",
      title: "Gründung & Vision",
      description: "Gründung der Empire Premium Bau UG mit dem klaren Ziel, hochqualitativen, zukunftsfähigen Hoch- und Ausbausatz im Bremer Raum zu etablieren.",
      icon: Calendar,
    },
    {
      year: "2022",
      title: "Ausrichtung Green-Tech",
      description: "Erweiterung der Kompetenzen auf erneuerbare Energiesysteme. Die Synergie aus Photovoltaikanlagen und Wärmepumpen wird zur Kernphilosophie.",
      icon: TrendingUp,
    },
    {
      year: "2025",
      title: "Die Marke EMPIRE PREMIUM.",
      description: "Launches des EMPIRE PREMIUM Komplettsystem-OS, das Solarenergie, Wärmepumpen und Batteriespeicher unter einer vollautomatisierten Steuerung vereint.",
      icon: Users,
    },
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
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Unsere Mission</span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Über uns
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Premium Hero Image Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative w-full aspect-[21/9] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl mb-12 group"
          >
            {/* Visual ambient overlay */}
            <div className="absolute inset-0 bg-slate-950/20 z-10 group-hover:bg-slate-950/10 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-15" />
            
            {/* The generated high-fidelity illustration */}
            <img 
              src="/about_us_hero.png" 
              alt="Kraftwerk clean energy systems illustration" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000"
            />
            
            <div className="absolute bottom-6 left-6 z-20 space-y-1">
              <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                EMPIRE PREMIUM COMPLIANCE
              </span>
              <h4 className="text-sm font-extrabold text-white">Meistergeführter Komplettanbieter aus Bremen</h4>
            </div>
          </motion.div>

          {/* Main Info Blocks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            
            {/* Box 1: Story / Vision */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">Wer wir sind</h3>
              </div>
              <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-medium">
                <p>
                  <strong>Empire Premium</strong> steht für die intelligente Symbiose aus modernster Solartechnik und hocheffizienten Wärmepumpensystemen. Mit Sitz in Bremen sind wir Ihr starker und zuverlässiger Partner für meisterhaft geplante Energiewenden im gesamten norddeutschen Raum.
                </p>
                <p>
                  Wir glauben daran, dass nachhaltige Energieversorgung keine Kompromisse erfordern darf. Deshalb entwickeln wir schlüsselfertige Komplettsysteme, die Energieautarkie komfortabel, verlässlich und ökonomisch rentabel machen.
                </p>
              </div>
            </motion.div>

            {/* Metrics Impact HUD Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { name: "Installierte Anlagen", value: "450+" },
                { name: "CO2 Eingespart", value: "8.000 t" },
                { name: "Energieautarkie", value: "bis 100%" },
                { name: "Zufriedene Kunden", value: "98%" }
              ].map((metric, mIdx) => (
                <div 
                  key={mIdx}
                  className="rounded-xl border border-white/5 bg-slate-950/30 p-4 text-center hover:border-emerald-500/10 transition-colors"
                >
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-slate-500 mb-1">{metric.name}</span>
                  <span className="text-xl md:text-2xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">{metric.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Timeline Milestones Section */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-lg font-black text-white uppercase tracking-widest pl-2 border-l-2 border-emerald-500">
                Unsere Meilensteine
              </h3>
              
              <div className="relative border-l border-white/5 pl-6 ml-4 space-y-8">
                {milestones.map((stone, sIdx) => {
                  const Icon = stone.icon;
                  return (
                    <div key={sIdx} className="relative group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border border-emerald-500/30 bg-slate-950 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors shadow">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                            {stone.year}
                          </span>
                          <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {stone.title}
                          </h4>
                        </div>
                        <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-semibold">
                          {stone.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Grid for Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Value 1: Quality */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">Premium Engineering</h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">
                  Wir verbauen ausschließlich zertifizierte Tier-1 PV-Module, hochinnovative Wechselrichter und marktführende Wärmepumpen namhafter Hersteller. Qualität steht für uns an oberster Stelle.
                </p>
              </motion.div>

              {/* Value 2: Autarky */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">Maximale Autarkie</h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">
                  Unser oberstes Ziel ist es, Ihr Gebäude zu einem autarken Kraftwerk zu machen. Durch die intelligente Funkkoppelung von Solarerzeugung und Wärmegewinnung senken wir Ihre Betriebskosten nachhaltig.
                </p>
              </motion.div>

              {/* Value 3: Customer-First */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">Service aus einer Hand</h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">
                  Von der statischen Vorprüfung des Daches und der fundierten Fachberatung über die Installation und Netzmeldung bis hin zum Kundendienst erhalten Sie bei uns alles schlüsselfertig.
                </p>
              </motion.div>

              {/* Value 4: Future-Proof */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">Smart Home Koppelung</h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">
                  Unsere intelligenten Speicher und Heizsysteme kommunizieren stufenlos per Smart-Energy-OS, um überschüssigen Solarstrom sofort thermisch oder in Batteriepacks zu sichern.
                </p>
              </motion.div>

            </div>

            {/* Box 3: Execution strength */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 md:p-8 backdrop-blur-2xl hover:border-emerald-500/20 transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">Unser Qualitätsversprechen</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Als meistergeführtes Unternehmen sichern wir Ihnen höchste fachliche Standards zu. Unsere hauseigenen Montageteams garantieren eine termingerechte, saubere und technisch einwandfreie Installation aller Module und Wärmeanlagen. Wir bringen die Energiewende sicher auf Ihr Dach und in Ihren Heizungskeller!
              </p>
            </motion.div>

          </motion.div>

        </div>

        <Footer />
      </main>
    </>
  );
}
