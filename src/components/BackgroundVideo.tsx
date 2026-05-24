"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const playTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);

  // Playback monitoring logic for cinematic loop pause & fade transition
  useEffect(() => {
    const video = videoRef.current;
    if (!video || autoplayBlocked) return;

    const handleEnded = () => {
      handleVideoFreeze();
    };

    const handleTimeUpdate = () => {
      // If we approach the final 0.08 seconds, trigger the freeze
      if (video.duration && video.currentTime >= video.duration - 0.08 && !isFrozen) {
        handleVideoFreeze();
      }
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [isFrozen, autoplayBlocked]);

  // Attempt to trigger autoPlay and detect if browser blocks it
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsVideoLoaded(true);
        })
        .catch((error) => {
          console.warn("Autoplay was prevented by browser policies:", error);
          setAutoplayBlocked(true);
          setIsVideoLoaded(true);
        });
    }
  }, []);

  // Cleanup timeouts on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
    };
  }, []);

  const handleVideoFreeze = () => {
    const video = videoRef.current;
    if (!video) return;

    // Clear any existing timeouts to prevent overlapping triggers
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);

    // Pause on final frame
    video.pause();
    setIsFrozen(true);

    // After 7 seconds of freeze, start the slow fade-out transition (duration: 3 seconds)
    fadeTimeoutRef.current = setTimeout(() => {
      setIsFadingOut(true);
    }, 7000);

    // After 10 seconds total, reset the video to 0s, fade back in, and resume play
    playTimeoutRef.current = setTimeout(() => {
      if (video) {
        video.currentTime = 0;
        
        // Reset states
        setIsFrozen(false);
        setIsFadingOut(false);
        
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setAutoplayBlocked(true);
          });
        }
      }
    }, 10000);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handlePlayManual = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setAutoplayBlocked(false);
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none bg-slate-950">
      {/* Background radial gradient overlay - premium visual contrast */}
      <div className="absolute inset-0 z-[5] bg-radial-vignette mix-blend-multiply opacity-80" />
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />

      {/* Responsive Background Video */}
      {!autoplayBlocked ? (
        <video
          ref={videoRef}
          src="/beck.mp4"
          muted={isMuted}
          playsInline
          autoPlay
          // Omit native loop since we manually control the timing to freeze/fade
          className={`w-full h-full object-cover transition-opacity ease-in-out ${
            isFadingOut 
              ? "duration-[3000ms] opacity-0" // Slow fade out to black
              : isVideoLoaded 
                ? "duration-[1500ms] opacity-45" // Normal fade in
                : "opacity-0"
          }`}
          poster="/Forst-Kader.png"
        />
      ) : (
        /* Fallback high-res poster if autoplay is blocked */
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-35"
          style={{ backgroundImage: `url('/End-Kader.png')` }}
        />
      )}

      {/* Control Actions (Mute & Manual Play fallback) */}
      <div className="absolute bottom-6 right-6 z-[25] flex gap-3">
        {autoplayBlocked && (
          <button
            onClick={handlePlayManual}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 backdrop-blur-md hover:bg-emerald-500/25 transition-all duration-300"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Video abspielen
          </button>
        )}
        <button
          onClick={toggleMute}
          className="p-3 text-white/80 rounded-full border border-white/10 bg-slate-900/40 backdrop-blur-md hover:bg-slate-800/60 hover:text-emerald-400 transition-all duration-300"
          aria-label={isMuted ? "Unmute background video" : "Mute background video"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
