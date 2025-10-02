"use client";

import PageTransition from "@/components/PageTransition";
import { MotionDiv } from "@/components/utils/MotionDiv";
import { UserPlus, Sliders, Heart, MessageCircle, Home, Shield, Zap } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: UserPlus,
    title: "Sign up",
    desc: "Create your MatchPod profile in under 3 minutes. Add your photos, intro, and what makes you, you.",
    details: [
      "Quick onboarding process",
      "Photo verification for safety",
      "Connect social profiles (optional)",
    ],
  },
  {
    icon: Sliders,
    title: "Set Preferences",
    desc: "Tell us your lifestyle, budget, pet situation, cleanliness level, and vibe. The more specific, the better!",
    details: [
      "Budget range & split preferences",
      "Sleep schedule & noise tolerance",
      "Pet preferences & allergies",
      "Social vibe & guest policies",
    ],
  },
  {
    icon: Heart,
    title: "Get Matches",
    desc: "Our smart algorithm surfaces compatible pods tailored to your lifestyle. Swipe right on profiles that vibe.",
    details: [
      "AI-powered compatibility scoring",
      "Lifestyle & personality matching",
      "Location-based recommendations",
      "Real-time availability updates",
    ],
  },
  {
    icon: MessageCircle,
    title: "Chat & Connect",
    desc: "Matched! Now vibe-check through chat before committing. Ask questions, schedule video calls, meet up.",
    details: [
      "In-app messaging",
      "Video call scheduling",
      "Safety guidelines & tips",
      "Community ratings & reviews",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Find your roommate in days, not months. Most users match within 72 hours.",
  },
  {
    icon: Shield,
    title: "Safe & Verified",
    desc: "All profiles are verified. Report bad actors. We take safety seriously.",
  },
  {
    icon: Home,
    title: "Better Matches",
    desc: "95% compatibility rate. Our algorithm considers 40+ lifestyle factors.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky/10 rounded-full blur-[100px] animate-pulse" />
        
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/5 px-4 py-1.5 text-xs text-sky mb-6 backdrop-blur">
              <Zap className="w-3 h-3" />
              <span>Simple, fast, effective</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              How <span className="text-sky">MatchPod</span> Works
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Finding your perfect roommate shouldn&apos;t be complicated. 
              Here&apos;s how we make it easy, safe, and actually enjoyable.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Steps Section */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12">
          {steps.map((step, i) => (
            <MotionDiv
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                {/* Step Number & Icon */}
                <div className="relative flex flex-col items-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-sky/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-sky/20 to-violet-500/10 border border-sky/30 flex items-center justify-center backdrop-blur">
                      <step.icon className="w-10 h-10 text-sky" />
                    </div>
                  </div>
                  <div className="mt-4 text-4xl font-extrabold text-sky/30">
                    0{i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block w-px h-24 bg-gradient-to-b from-border to-transparent mt-4" />
                  )}
                </div>

                {/* Step Content */}
                <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-8 hover:bg-card/60 transition-all">
                  <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail, j) => (
                      <MotionDiv
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-sky mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </MotionDiv>
                    ))}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card/20 backdrop-blur border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Why choose <span className="text-sky">MatchPod</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;re not like other roommate finders. Here&apos;s what makes us different.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <MotionDiv
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky/10 to-violet-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-sky/10 flex items-center justify-center mb-6 group-hover:bg-sky/20 transition-colors">
                    <benefit.icon className="w-8 h-8 text-sky" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
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
              Ready to <span className="text-sky">get started</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join MatchPod today and find your perfect roommate in less time than it takes to binge a Netflix series.
            </p>
            <Link href="/get-started" className="group relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-sky/20 blur-2xl rounded-full group-hover:bg-sky/30 transition-all" />
              <div className="relative bg-sky text-midnight px-10 py-5 rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-xl shadow-sky/40 hover:shadow-sky/60">
                Create Your Profile
              </div>
            </Link>
          </MotionDiv>
        </div>
      </section>
    </PageTransition>
  );
}
