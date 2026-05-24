"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Zap, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Photovoltaik", href: "/#solar" },
    { name: "Wärmepumpen", href: "/#heatpump" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Referenzen", href: "/#referenzen" },
    { name: "Karriere", href: "/karriere" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/70 border-b border-white/10 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Dynamic Top Meta Contact Bar (fades out on scroll for clean viewport) */}
        <div 
          className={`w-full border-b border-white/5 transition-all duration-300 ease-in-out ${
            scrolled 
              ? "h-0 opacity-0 pointer-events-none overflow-hidden" 
              : "py-2.5 bg-slate-950/20 backdrop-blur-sm"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-black tracking-wider text-slate-400 uppercase">
            {/* Contacts left */}
            <div className="flex items-center gap-6">
              <a 
                href="mailto:info@empire-premium-bau.de" 
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>info@empire-premium-bau.de</span>
              </a>
              <a 
                href="tel:+4917661951823" 
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+49 176 61951823</span>
              </a>
            </div>
            
            {/* Status right */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Erreichbar: Mo-Fr 08:00 - 18:00</span>
            </div>
          </div>
        </div>

        {/* Main Navbar Row */}
        <div 
          className={`w-full transition-all duration-500 ${
            scrolled ? "py-4" : "py-6"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo Brand */}
            <a href="/" className="flex items-center gap-3 group z-50">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/60 border border-white/10 p-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)] overflow-hidden transition-all duration-300 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                <img 
                  src="/ep_logo_solid.png" 
                  alt="Empire Premium Logo" 
                  className="w-full h-full object-contain filter brightness-110 contrast-105 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-xl font-black text-white tracking-widest uppercase">
                Empire Premium<span className="text-emerald-400 animate-pulse font-extrabold">.</span>
              </span>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300 group py-1.5"
                >
                  {link.name}
                  {/* sliding line hover indicator */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => {
                  const formElement = document.getElementById("effizienz-rechner");
                  if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative overflow-hidden group px-6 py-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:bg-emerald-500/25 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                {/* Sliding shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative flex items-center gap-1.5">
                  Kostenlose Analyse <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-50 p-2 text-slate-300 hover:text-white rounded-lg border border-white/5 bg-slate-900/50 backdrop-blur-md transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 right-0 h-screen bg-slate-950/98 backdrop-blur-2xl z-40 flex flex-col justify-center px-8 border-b border-white/10"
            >
              <div className="flex flex-col gap-8 text-center">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-2xl font-bold text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                  className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center"
                >
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      const formElement = document.getElementById("effizienz-rechner");
                      if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-base shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                  >
                    Kostenlose Analyse <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
