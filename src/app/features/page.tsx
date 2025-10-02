"use client";

import PageTransition from "@/components/PageTransition";
import SwipeCards from "@/components/SwipeCards";
import { MotionDiv } from "@/components/utils/MotionDiv";
import { motion } from "framer-motion";
import { 
  Brain, 
  Shield, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  DollarSign,
  Home,
  Calendar,
  Bell,
  Award,
  Lock,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const mainFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    desc: "Our algorithm analyzes 40+ lifestyle factors to find your perfect match.",
    details: [
      "Personality compatibility scoring",
      "Lifestyle habit matching",
      "Schedule alignment analysis",
      "Budget & financial compatibility",
    ],
    gradient: "from-sky/20 to-violet-500/10",
  },
  {
    icon: Shield,
    title: "Trust & Safety First",
    desc: "Verified profiles, background checks, and community ratings keep you safe.",
    details: [
      "Photo & identity verification",
      "Community reputation system",
      "Report & block features",
      "Safety guidelines & tips",
    ],
    gradient: "from-violet-500/20 to-sky/10",
  },
  {
    icon: MessageSquare,
    title: "Smart Communication",
    desc: "Chat, video call, and schedule meetups—all within the app.",
    details: [
      "In-app messaging",
      "Video call scheduling",
      "Ice-breaker questions",
      "Meet-up coordination",
    ],
    gradient: "from-sky/20 to-emerald-500/10",
  },
];

const additionalFeatures = [
  {
    icon: TrendingUp,
    title: "Compatibility Score",
    desc: "See your match percentage before you swipe",
  },
  {
    icon: Users,
    title: "Group Matching",
    desc: "Find multiple roommates at once for shared apartments",
  },
  {
    icon: DollarSign,
    title: "Budget Transparency",
    desc: "Set rent range and split preferences upfront",
  },
  {
    icon: Home,
    title: "Location Filters",
    desc: "Search by neighborhood, commute time, or landmarks",
  },
  {
    icon: Calendar,
    title: "Move-in Timeline",
    desc: "Match with people on your schedule",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Get alerts for high-compatibility matches",
  },
  {
    icon: Award,
    title: "Verified Badges",
    desc: "See who's completed profile verification",
  },
  {
    icon: Lock,
    title: "Privacy Controls",
    desc: "Control who sees your profile and info",
  },
];

const matchingFactors = [
  { label: "Sleep Schedule", value: 95 },
  { label: "Cleanliness Level", value: 90 },
  { label: "Social Vibe", value: 88 },
  { label: "Pet Compatibility", value: 92 },
  { label: "Budget Range", value: 85 },
  { label: "Location Preferences", value: 80 },
];

export default function FeaturesPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-sky/10 rounded-full blur-[120px] animate-pulse" />
        
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/5 px-4 py-1.5 text-xs text-sky mb-6 backdrop-blur">
                <Sparkles className="w-3 h-3" />
                <span>Powered by AI • Built for Gen-Z</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                Smart matching, <span className="text-sky">explained</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We analyze lifestyle signals like pets, budget, cleanliness, schedules, and social vibe. 
                Our algorithm ranks compatibility and surfaces your best matches—no guesswork.
              </p>
              
              <ul className="space-y-4">
                {[
                  "40+ lifestyle factors analyzed",
                  "Real-time swipe feedback",
                  "Trust-first verified profiles",
                  "95% match success rate",
                ].map((item, i) => (
                  <MotionDiv
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-sky/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-sky" />
                    </div>
                    <p className="text-lg">{item}</p>
                  </MotionDiv>
                ))}
              </ul>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <SwipeCards />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="bg-card/20 backdrop-blur border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Core <span className="text-sky">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to find your perfect roommate, all in one place.
            </p>
          </MotionDiv>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, i) => (
              <MotionDiv
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-0 group-hover:opacity-100`} />
                <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur p-8 hover:bg-card/80 transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-sky/10 flex items-center justify-center mb-6 group-hover:bg-sky/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-sky" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.desc}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Matching Factors Visualization */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              What we <span className="text-sky">analyze</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our AI considers dozens of compatibility factors to ensure you match with roommates 
              who truly fit your lifestyle. Here are the key categories we analyze:
            </p>
            <Link 
              href="/get-started" 
              className="inline-flex items-center gap-2 text-sky hover:underline text-lg font-semibold"
            >
              See your compatibility score
              <Sparkles className="w-5 h-5" />
            </Link>
          </MotionDiv>

          <div className="space-y-6">
            {matchingFactors.map((factor, i) => (
              <MotionDiv
                key={factor.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{factor.label}</span>
                  <span className="text-sky font-bold">{factor.value}%</span>
                </div>
                <div className="h-3 bg-card/60 rounded-full overflow-hidden border border-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${factor.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-sky to-violet-500 rounded-full"
                  />
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="bg-card/20 backdrop-blur border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              And there&apos;s <span className="text-sky">more</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;re constantly shipping new features to make your roommate search easier.
            </p>
          </MotionDiv>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, i) => (
              <MotionDiv
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:bg-card/80 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-sky" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky/10 via-transparent to-violet-500/10" />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center relative">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Experience the <span className="text-sky">future</span> of roommate matching
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Stop settling for incompatible roommates. Let AI find your perfect match.
            </p>
            <Link href="/get-started" className="group relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-sky/20 blur-2xl rounded-full group-hover:bg-sky/30 transition-all" />
              <div className="relative bg-sky text-midnight px-10 py-5 rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-xl shadow-sky/40 hover:shadow-sky/60">
                Try MatchPod Free
              </div>
            </Link>
          </MotionDiv>
        </div>
      </section>
    </PageTransition>
  );
}
