"use client";

import { motion } from "framer-motion";

interface MatchPodLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function MatchPodLogo({ size = "md", showText = true, className = "" }: MatchPodLogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl"
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} relative`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* House Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full"
        >
          {/* House base */}
          <rect
            x="4"
            y="12"
            width="16"
            height="8"
            rx="1"
            fill="hsl(var(--sky))"
            className="drop-shadow-lg"
          />
          {/* House roof */}
          <path
            d="M2 12L12 4L22 12"
            stroke="hsl(var(--sky))"
            strokeWidth="2"
            fill="none"
            className="drop-shadow-lg"
          />
          {/* Keyhole */}
          <circle
            cx="9"
            cy="15"
            r="1.5"
            fill="hsl(var(--midnight))"
          />
          <rect
            x="8.5"
            y="16.5"
            width="1"
            height="2"
            rx="0.5"
            fill="hsl(var(--midnight))"
          />
        </svg>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-sky/20 blur-md -z-10" />
      </motion.div>
      
      {showText && (
        <motion.span
          className={`font-bold tracking-wide text-foreground ${textSizeClasses[size]}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          MatchPod
        </motion.span>
      )}
    </div>
  );
}
