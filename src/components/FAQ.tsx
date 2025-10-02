"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Item = { q: string; a: string };

const items: Item[] = [
  { 
    q: "Is MatchPod free to use?", 
    a: "Yes! MatchPod is completely free during our beta phase. We're focused on building the best product first. In the future, we may introduce premium features, but core matching and messaging will always be free." 
  },
  { 
    q: "How does the matching algorithm work?", 
    a: "Our AI analyzes 40+ lifestyle factors including sleep schedule, cleanliness preferences, pet situations, budget, social habits, and more. We calculate a compatibility score and show you matches that align with your lifestyle and preferences. The more information you provide, the better your matches!" 
  },
  { 
    q: "Is MatchPod safe? How do you verify users?", 
    a: "Safety is our #1 priority. We require photo verification, offer optional background checks, and have a community rating system. You can report suspicious profiles, and we have a dedicated trust & safety team. We also provide safety guidelines for meeting potential roommates." 
  },
  { 
    q: "Which cities is MatchPod available in?", 
    a: "We're currently in beta in New York, Los Angeles, San Francisco, Chicago, Boston, and Austin. We're expanding to more cities every month. Join our waitlist to get notified when we launch in your area!" 
  },
  { 
    q: "Can I find groups of roommates or just one person?", 
    a: "Both! You can search for individual roommates or match with groups looking to fill multiple rooms. Our group matching feature helps coordinate compatibility across everyone involved." 
  },
  { 
    q: "What if I don't like my matches?", 
    a: "You can adjust your preferences anytime to get different matches. Our algorithm learns from your swipes to improve recommendations. You can also expand your search radius or adjust deal-breaker criteria." 
  },
  { 
    q: "Do I need to have a place already to use MatchPod?", 
    a: "Nope! You can use MatchPod whether you're looking for roommates for a place you already have, or if you're searching for both a place and roommates together. Just specify your situation in your profile." 
  },
  { 
    q: "How long does it typically take to find a match?", 
    a: "Most users find compatible matches within 72 hours of signing up. The actual time to move in together varies, but our average is about 2-3 weeks from first match to lease signing." 
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set first item as open after hydration
    setOpen(0);
  }, []);
  
  if (!mounted) {
    return (
      <div className="space-y-3">
        {items.map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card/60 backdrop-blur p-4 animate-pulse">
            <div className="h-6 bg-muted-foreground/20 rounded mb-2" />
            <div className="h-4 bg-muted-foreground/10 rounded w-3/4" />
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={it.q}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-border bg-card/60 backdrop-blur hover:bg-card/80 transition-all overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left px-6 py-4 font-semibold flex items-center justify-between group"
            >
              <span className="pr-4">{it.q}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-sky group-hover:text-sky/80 transition-colors flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {it.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
