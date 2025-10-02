"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Card = { id: number; title: string; tag: string };

const initialCards: Card[] = [
  { id: 1, title: "Aria • Loves plants • Budget $900", tag: "Clean + Calm" },
  { id: 2, title: "Jay • Night owl • Cat-friendly", tag: "Chill + Creative" },
  { id: 3, title: "Mina • Early bird • Gym", tag: "Active + Focused" },
];

export default function SwipeCards() {
  const [cards] = useState<Card[]>(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwipe = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Reset to beginning
      setCurrentIndex(0);
    }
  };

  const currentCard = cards[currentIndex];

  if (!mounted) {
    return (
      <div className="relative h-72 w-full max-w-md">
        <div className="absolute inset-0 rounded-xl bg-card/60 border border-border backdrop-blur-sm animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative h-72 w-full max-w-md">
      {/* Background cards */}
      {cards.slice(currentIndex + 1, currentIndex + 3).map((card, i) => (
        <motion.div
          key={card.id}
          initial={{ scale: 1 - (i + 1) * 0.05, y: (i + 1) * 10 }}
          animate={{ scale: 1 - (i + 1) * 0.05, y: (i + 1) * 10 }}
          className="absolute inset-0 rounded-xl bg-card/60 border border-border backdrop-blur-sm"
        />
      ))}

      {/* Main card */}
      {currentCard && (
        <motion.div
          key={currentCard.id}
          initial={{ x: 0, rotate: 0, scale: 1 }}
          animate={{ x: 0, rotate: 0, scale: 1 }}
          exit={{ x: 300, rotate: 15, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 select-none rounded-xl bg-card border border-border p-4 shadow-xl cursor-pointer"
          onClick={handleSwipe}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="text-sm text-sky mb-2 font-medium">{currentCard.tag}</div>
          <div className="text-lg font-semibold mb-2">{currentCard.title}</div>
          <div className="mt-4 text-xs text-muted-foreground">
            Click to preview matching
          </div>
          <div className="mt-2 flex gap-1">
            {cards.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all ${
                  i === currentIndex ? "bg-sky w-6" : "bg-muted-foreground/30 w-2"
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Swipe indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
        Click to swipe →
      </div>
    </div>
  );
}