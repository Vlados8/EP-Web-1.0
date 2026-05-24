"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  floatDelay?: number;
  floatDuration?: number;
  floatRange?: number;
}

export default function TiltCard({
  children,
  className = "",
  floatDelay = 0,
  floatDuration = 5,
  floatRange = 12,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Set up motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring configuration for silky smooth movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.8 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  // Motion values for glare position
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card bounds (normalized from -0.5 to 0.5)
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);

    // Glare position in pixels relative to card
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

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Floating animation (Antigravity physics)
      animate={{
        y: [0, -floatRange, 0],
      }}
      transition={{
        duration: floatDuration,
        ease: "easeInOut",
        repeat: Infinity,
        delay: floatDelay,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/45 p-6 backdrop-blur-xl transition-all duration-300 ease-out shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${
        isHovered
          ? "border-emerald-500/35 shadow-[0_20px_50px_rgba(16,185,129,0.15)] bg-slate-900/60"
          : "hover:shadow-emerald-500/5"
      } ${className}`}
    >
      {/* Glare effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.35 : 0,
          background: `radial-gradient(circle 180px at ${glareX.get()}px ${glareY.get()}px, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.05) 50%, rgba(255,255,255,0) 80%)`,
        }}
      />

      {/* Render children in a 3D plane */}
      <div style={{ transform: "translateZ(30px)" }} className="h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
