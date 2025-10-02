"use client";

import PageTransition from "@/components/PageTransition";
import FAQ from "@/components/FAQ";
import { MotionDiv } from "@/components/utils/MotionDiv";
import { useState } from "react";
import { Sparkles, Mail, Instagram, Twitter, MessageCircle, CheckCircle2 } from "lucide-react";

const benefits = [
  "Free to join and browse matches",
  "AI-powered compatibility matching",
  "Verified profiles & safety features",
  "In-app chat & video calls",
  "No ads or spam ever",
];

export default function GetStartedPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

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
              <Sparkles className="w-3 h-3" />
              <span>Join 10,000+ happy roommates</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Join the <span className="text-sky">Waitlist</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Be first to access MatchPod in your city. We&apos;re rolling out to new markets every week. 
              Sign up now and skip the line. 🚀
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Signup Form */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-sky/20 to-violet-500/10 rounded-3xl blur-2xl opacity-50" />
            <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur p-8 md:p-10">
              {!submitted ? (
                <>
                  <h2 className="text-3xl font-bold mb-6">Get Early Access</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Chen"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-sky transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-sky transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City/Location</label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="New York, NY"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-sky transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full"
                    >
                      <div className="absolute inset-0 bg-sky/20 blur-xl rounded-full group-hover:bg-sky/30 transition-all" />
                      <div className="relative bg-sky text-midnight px-6 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-sky/30 hover:shadow-sky/50 flex items-center justify-center gap-2">
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-5 h-5" />
                            Join Waitlist
                          </>
                        )}
                      </div>
                    </button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                    We&apos;ll never spam you or sell your data.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-sky/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-sky" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">You&apos;re on the list! 🎉</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    We&apos;ll email you at <span className="text-sky font-semibold">{email}</span> when 
                    MatchPod launches in {city}.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    In the meantime, follow us on social media for updates and housing tips.
                  </p>
                </div>
              )}
            </div>
          </MotionDiv>

          {/* Benefits & Info */}
          <div className="space-y-8">
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">What You Get</h2>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <MotionDiv
                    key={benefit}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-sky/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-sky" />
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="rounded-2xl border border-border bg-card/40 backdrop-blur p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Why Join Now?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-sky">•</span>
                  <span>Early access before public launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky">•</span>
                  <span>Priority matching with verified users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky">•</span>
                  <span>Exclusive founding member perks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky">•</span>
                  <span>Shape the product with your feedback</span>
                </li>
              </ul>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="rounded-2xl border border-border bg-card/40 backdrop-blur p-8"
            >
              <h3 className="text-2xl font-bold mb-6">
                <MessageCircle className="inline-block w-6 h-6 mr-2 text-sky" />
                Contact Us
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:team@matchpod.app"
                  className="flex items-center gap-3 text-muted-foreground hover:text-sky transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>team@matchpod.app</span>
                </a>
                <a
                  href="https://instagram.com/matchpod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-sky transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@matchpod</span>
                </a>
                <a
                  href="https://twitter.com/matchpod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-sky transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span>@matchpod</span>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Based remotely • Operating globally
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card/20 backdrop-blur border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Frequently Asked <span className="text-sky">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We&apos;ve got answers.
            </p>
          </MotionDiv>
          <FAQ />
        </div>
      </section>
    </PageTransition>
  );
}
