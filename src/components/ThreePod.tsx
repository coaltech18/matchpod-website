"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThreePod() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[420px] w-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-sky/20 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="h-[420px] w-full flex items-center justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotateY: [0, 360],
        }}
        transition={{
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
          rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
        }}
      >
        {/* Main pod */}
        <div className="relative w-48 h-48">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-sky/20 blur-2xl animate-pulse" />
          
          {/* Main sphere */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-sky via-sky/80 to-violet-500/60 shadow-2xl">
            {/* Inner highlight */}
            <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-white/30 blur-sm" />
            
            {/* Wireframe overlay */}
            <div className="absolute inset-0 rounded-full border-2 border-sky/40 opacity-30" />
            <div className="absolute inset-2 rounded-full border border-sky/20 opacity-50" />
            <div className="absolute inset-4 rounded-full border border-sky/10 opacity-70" />
          </div>
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-sky/60 rounded-full"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}