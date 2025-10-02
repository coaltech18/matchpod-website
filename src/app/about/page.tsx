"use client";

import PageTransition from "@/components/PageTransition";
import { MotionDiv } from "@/components/utils/MotionDiv";
import { Heart, Target, Lightbulb, Users, Rocket, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

const timeline = [
  { 
    year: "2024", 
    title: "The Idea", 
    desc: "Founded by college roommates who experienced toxic living situations. We knew there had to be a better way.",
    icon: Lightbulb,
  },
  { 
    year: "2025 Q1", 
    title: "Alpha Launch", 
    desc: "Early users help shape the vibe-first experience. 1,000+ successful matches in beta phase.",
    icon: Rocket,
  },
  { 
    year: "2025 Q3", 
    title: "Public Launch", 
    desc: "Rolling out to major college cities across North America with 10K+ active users.",
    icon: Globe,
  },
  { 
    year: "2026", 
    title: "Global Expansion", 
    desc: "Expanding internationally and adding group housing, subletting, and roommate swaps.",
    icon: Target,
  },
];

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    desc: "We understand housing struggles. Every feature is designed with Gen-Z's real needs in mind.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "Your feedback shapes our product. We build features that our community actually wants.",
  },
  {
    icon: Sparkles,
    title: "Innovation Always",
    desc: "We leverage cutting-edge AI and design trends to stay ahead of the curve.",
  },
];

const team = [
  {
    name: "Alex Rivera",
    role: "Co-Founder & CEO",
    bio: "Former product @ Tinder. Studied CS @ Stanford. Passionate about solving Gen-Z housing.",
    avatar: "AR",
  },
  {
    name: "Jordan Lee",
    role: "Co-Founder & CTO",
    bio: "Ex-ML engineer @ Google. MIT grad. Built the matching algorithm from scratch.",
    avatar: "JL",
  },
  {
    name: "Sam Chen",
    role: "Head of Design",
    bio: "Previously @ Airbnb design team. RISD alum. Obsessed with beautiful, functional UX.",
    avatar: "SC",
  },
];

const stats = [
  { value: "10K+", label: "Happy Users" },
  { value: "95%", label: "Match Success" },
  { value: "4.9★", label: "App Rating" },
  { value: "72hrs", label: "Avg. Match Time" },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-sky/10 rounded-full blur-[120px] animate-pulse" />
        
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/5 px-4 py-1.5 text-xs text-sky mb-6 backdrop-blur">
              <Heart className="w-3 h-3" />
              <span>Built by roommates, for roommates</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Why <span className="text-sky">MatchPod</span> Exists
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Housing shouldn&apos;t be chaos. We&apos;re building a trust-first, vibe-aware way to find 
              your people and your place—with modern design and safety in mind.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky/10 to-violet-500/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-0 group-hover:opacity-100" />
            <div className="relative rounded-3xl border border-border bg-card/40 backdrop-blur p-10 hover:bg-card/60 transition-all h-full">
              <div className="w-14 h-14 rounded-xl bg-sky/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-sky" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To make finding compatible roommates as easy as swiping right. 
                We believe everyone deserves to live with people who match their vibe, 
                lifestyle, and budget—without the stress and guesswork.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-sky/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-0 group-hover:opacity-100" />
            <div className="relative rounded-3xl border border-border bg-card/40 backdrop-blur p-10 hover:bg-card/60 transition-all h-full">
              <div className="w-14 h-14 rounded-xl bg-sky/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-sky" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where housing is accessible, safe, and social. 
                We&apos;re building the future of shared living—where finding roommates 
                is actually fun, and everyone can afford to live in cities they love.
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card/20 backdrop-blur border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-sky mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-sky">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From late-night dorm room conversations to a platform serving thousands.
          </p>
        </MotionDiv>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky via-border to-transparent" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <MotionDiv
                key={t.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-sky/30 rounded-xl blur-lg" />
                    <div className="relative w-16 h-16 rounded-xl bg-sky/10 border border-sky/30 flex items-center justify-center backdrop-blur">
                      <t.icon className="w-7 h-7 text-sky" />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6 hover:bg-card/60 transition-all">
                  <div className="text-sm text-sky font-semibold mb-2">{t.year}</div>
                  <div className="text-2xl font-bold mb-2">{t.title}</div>
                  <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-card/20 backdrop-blur border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              What We <span className="text-sky">Stand For</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <MotionDiv
                key={value.title}
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
                    <value.icon className="w-8 h-8 text-sky" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Meet the <span className="text-sky">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re a small team of designers, engineers, and product people who are obsessed with solving Gen-Z housing.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <MotionDiv
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/40 backdrop-blur p-8 hover:bg-card/60 transition-all text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-sky/30 to-violet-500/20 flex items-center justify-center font-bold text-2xl text-sky mb-4 border-2 border-sky/30">
                {member.avatar}
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <div className="text-sm text-sky mb-3">{member.role}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </MotionDiv>
          ))}
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
              Join the <span className="text-sky">movement</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Be part of the Gen-Z housing revolution. Find your people, find your place.
            </p>
            <Link href="/get-started" className="group relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-sky/20 blur-2xl rounded-full group-hover:bg-sky/30 transition-all" />
              <div className="relative bg-sky text-midnight px-10 py-5 rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-xl shadow-sky/40 hover:shadow-sky/60 flex items-center gap-3">
                Get Started Today
                <Sparkles className="w-6 h-6" />
              </div>
            </Link>
          </MotionDiv>
        </div>
      </section>
    </PageTransition>
  );
}
