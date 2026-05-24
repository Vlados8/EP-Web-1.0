"use client";

import React from "react";
import { Zap, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl py-16 px-6 md:px-12 w-full select-none">
      {/* Decorative Blur Ambient Glimmer */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[150px] rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-white/5">
        
        {/* Column 1: Brand & Logo */}
        <div className="lg:col-span-2 space-y-6">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-2 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
              <Zap className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="text-lg font-black text-white tracking-widest uppercase">
              Empire Premium<span className="text-emerald-400 font-extrabold">.</span>
            </span>
          </a>
          
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm font-medium">
            Wir definieren den Maßstab für nachhaltige Energieautarkie in Deutschland. Intelligente Komplettsysteme für Strom, Wärme und Speicherung – meisterhaft engineered.
          </p>

          {/* Core Contacts HUD */}
          <div className="space-y-2.5 pt-2">
            <a href="mailto:info@empire-premium-bau.de" className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>info@empire-premium-bau.de</span>
            </a>
            <a href="tel:+4917661951823" className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+49 176 61951823</span>
            </a>
          </div>
        </div>

        {/* Column 2: Solutions */}
        <div className="space-y-4">
          <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-white/5 pb-2">
            Lösungen
          </h4>
          <nav className="flex flex-col gap-2.5">
            {[
              { name: "Photovoltaik", href: "/#solar" },
              { name: "Wärmepumpen", href: "/#heatpump" },
              { name: "Smart Home", href: "/#system-features" },
              { name: "Heimspeicher", href: "/#solar" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 3: Company */}
        <div className="space-y-4">
          <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-white/5 pb-2">
            Unternehmen
          </h4>
          <nav className="flex flex-col gap-2.5">
            {[
              { name: "Über uns", href: "/ueber-uns" },
              { name: "Karriere", href: "/karriere" },
              { name: "Referenzen", href: "/#referenzen" },
              { name: "Support & Wartung", href: "/support" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 4: Offices Coordinates */}
        <div className="space-y-4">
          <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-white/5 pb-2">
            Standort
          </h4>
          <div className="space-y-4 text-xs font-semibold text-slate-400">
            <div className="space-y-1">
              <span className="block font-black text-white text-[10px] uppercase tracking-wider text-emerald-400">
                Hauptsitz Bremen
              </span>
              <p>Hastedter Heerstraße 63</p>
              <p>28207 Bremen</p>
              <p>Deutschland</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom area: Copyright + Scroll to top */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Copyrights and Terms */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <span>© {new Date().getFullYear()} Empire Premium Bau UG.</span>
          <a href="/impressum" className="hover:text-emerald-400 transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-emerald-400 transition-colors">Datenschutz</a>
          <a href="/agb" className="hover:text-emerald-400 transition-colors">AGB</a>
        </div>

        {/* Action Button: Scroll back to top */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-2 px-4 py-2 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-white rounded-lg border border-white/5 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300"
          aria-label="Scroll back to top of the page"
        >
          <span>Nach oben</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
