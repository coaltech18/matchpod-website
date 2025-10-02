"use client";

import PageTransition from "@/components/PageTransition";
import ThreePod from "@/components/ThreePod";
import SwipeCards from "@/components/SwipeCards";
import Link from "next/link";
import { MotionDiv } from "@/components/utils/MotionDiv";
import { Heart, Shield, Zap, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Vibe-First Matching",
    desc: "Find roommates who match your energy, not just your budget.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    desc: "Verified profiles and community ratings for peace of mind.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Swipe, match, and chat—find your pod in minutes, not months.",
  },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "95%", label: "Match Success" },
  { value: "4.9★", label: "User Rating" },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Student @ NYU",
    text: "Found my dream roommate in 3 days. We vibe so well—it&apos;s like living with a bestie!",
    avatar: "AC",
  },
  {
    name: "Jordan Kim",
    role: "Designer @ Remote",
    text: "MatchPod saved me from toxic roommate situations. The lifestyle matching is *chef&apos;s kiss*.",
    avatar: "JK",
  },
  {
    name: "Sam Rivera",
    role: "Engineer @ Startup",
    text: "Clean UI, smart algorithm, no BS. This is what Gen-Z housing needed.",
    avatar: "SR",
  },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 grid md:grid-cols-2 items-center gap-12">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/5 px-4 py-1.5 text-xs text-sky mb-6 backdrop-blur">
              <Sparkles className="w-3 h-3" />
              <span>Built for Gen‑Z • Lifestyle‑based matching</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Find Your Space. <span className="text-sky bg-gradient-to-r from-sky to-violet-400 bg-clip-text text-transparent">Find Your People.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-prose mb-8 leading-relaxed">
              MatchPod helps you discover compatible roommates through lifestyle, habits, and vibe—
              not just location and price. Say goodbye to awkward living situations. 🚀
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="group relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-sky/20 blur-xl rounded-full group-hover:bg-sky/30 transition-all" />
                <div className="relative bg-sky text-midnight px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all shadow-lg shadow-sky/30 hover:shadow-sky/50 flex items-center gap-2">
                  Get Started Free
                  <Sparkles className="w-5 h-5" />
                </div>
              </Link>
              
              <Link href="/how-it-works" className="inline-flex items-center justify-center rounded-full border-2 border-sky text-sky px-8 py-4 font-semibold text-lg hover:bg-sky/10 transition-all">
                See How It Works
              </Link>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[32px] bg-gradient-to-tr from-sky/20 via-violet-500/10 to-transparent blur-3xl" />
            <div className="relative rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-4 shadow-2xl">
              <ThreePod />
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card/20 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-sky mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why MatchPod <span className="text-sky">just hits different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re not another boring roommate finder. We&apos;re built different. 💯
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky/10 to-violet-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur p-8 hover:bg-card/80 transition-all">
                <div className="w-14 h-14 rounded-xl bg-sky/10 flex items-center justify-center mb-6 group-hover:bg-sky/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-sky" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Swipe Demo Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Swipe through <span className="text-sky">your vibe</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Preview how matching feels — fast, fluid, and focused on what matters to you. 
              No more endless scrolling through incompatible profiles.
            </p>
            <ul className="space-y-4">
              {[
                "Lifestyle preferences (pets, cleanliness, schedules)",
                "Budget compatibility & financial transparency",
                "Personality matching with verified profiles",
                "Location preferences & commute optimization",
              ].map((item, i) => (
                <MotionDiv
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-sky/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-sky" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </MotionDiv>
              ))}
            </ul>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <SwipeCards />
          </MotionDiv>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-card/20 backdrop-blur border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Loved by <span className="text-sky">Gen-Z</span>
            </h2>
            <p className="text-xl text-muted-foreground">Real stories from real people finding their perfect pod.</p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <MotionDiv
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:bg-card/80 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-sky/20 flex items-center justify-center font-bold text-sky">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
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
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to find your <span className="text-sky">perfect match</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of Gen-Z finding their ideal roommates. It&apos;s free, fast, and actually fun.
            </p>
            <Link href="/get-started" className="group relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-sky/20 blur-2xl rounded-full group-hover:bg-sky/30 transition-all" />
              <div className="relative bg-sky text-midnight px-10 py-5 rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-xl shadow-sky/40 hover:shadow-sky/60 flex items-center gap-3">
                Start Matching Now
                <Sparkles className="w-6 h-6" />
              </div>
            </Link>
          </MotionDiv>
        </div>
      </section>
    </PageTransition>
  );
}
