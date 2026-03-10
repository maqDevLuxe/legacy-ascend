import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Gem, Heart, TrendingUp, Users, BookOpen, Lock, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-estate.jpg";
import heritageImage from "@/assets/heritage-wide.jpg";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Section 1: Hero ─── */
const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Grand heritage estate"
        className="w-full h-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="text-xs tracking-[0.4em] uppercase text-champagne mb-6 font-body"
      >
        Est. 1947 · Family Office Management
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight mb-8 text-cream"
      >
        Stewards of<br />Generational Wealth
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="divider-gold mb-8" />
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10 font-body leading-relaxed">
          Preserving legacies with absolute discretion across generations.
          A single point of trust for the world's most distinguished families.
        </p>
        <MagneticButton>
          <Button variant="luxury" size="lg" className="px-12 py-6">
            Begin a Conversation
          </Button>
        </MagneticButton>
      </motion.div>
    </div>
  </section>
);

/* ─── Section 2: Affiliations ─── */
const AffiliationsSection = () => (
  <section className="section-padding border-y border-border/10">
    <AnimatedSection>
      <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10 font-body">
        Trusted By & Affiliated With
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40">
        {["Rothschild & Co", "UBS", "Credit Suisse", "J.P. Morgan", "Goldman Sachs"].map((name) => (
          <span key={name} className="text-sm md:text-base font-display tracking-widest text-foreground/60">
            {name}
          </span>
        ))}
      </div>
    </AnimatedSection>
  </section>
);

/* ─── Section 3: Core Offerings ─── */
const CoreOfferingsSection = () => {
  const offerings = [
    { icon: TrendingUp, title: "Wealth Structuring", desc: "Multi-jurisdictional tax optimization, trust administration, and bespoke asset allocation strategies." },
    { icon: Gem, title: "Lifestyle Stewardship", desc: "From art acquisitions to estate management—every detail curated to your family's standard." },
    { icon: Heart, title: "Philanthropic Advisory", desc: "Legacy-aligned giving strategies, foundation governance, and impact measurement frameworks." },
  ];

  return (
    <section className="section-padding">
      <AnimatedSection className="text-center mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">Our Pillars</p>
        <h2 className="text-3xl md:text-5xl font-display text-cream">Core Offerings</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offerings.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.15}>
            <div className="glass-card p-10 h-full group hover:border-champagne/20 transition-colors duration-500">
              <item.icon className="w-8 h-8 text-champagne mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl mb-4 text-cream">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

/* ─── Section 4: Next-Gen Succession ─── */
const SuccessionSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <AnimatedSection>
        <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">The Next Chapter</p>
        <h2 className="text-3xl md:text-4xl font-display text-cream mb-6">Next-Generation Succession Planning</h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-6">
          We prepare heirs not merely to inherit wealth, but to steward it.
          Our bespoke programs cultivate financial literacy, governance acumen,
          and the emotional intelligence required to sustain a legacy.
        </p>
        <div className="space-y-4">
          {["Family Constitution Development", "Heir Education Programs", "Governance Framework Design"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <span className="text-sm text-foreground/80 font-body">{item}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="glass-card p-8">
          <div className="space-y-6">
            {[
              { gen: "G1 · Founder", status: "Legacy Established" },
              { gen: "G2 · Steward", status: "Active Management" },
              { gen: "G3 · Visionary", status: "In Preparation" },
            ].map((g, i) => (
              <div key={g.gen} className="flex justify-between items-center border-b border-border/20 pb-4 last:border-0">
                <div>
                  <p className="font-display text-cream text-sm">{g.gen}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">{g.status}</p>
                </div>
                <div className="w-24 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-champagne rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${100 - i * 30}%` }}
                    transition={{ duration: 1.2, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Section 5: Consolidated Reporting ─── */
const ReportingSection = () => (
  <section className="section-padding">
    <AnimatedSection className="text-center mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">Total Visibility</p>
      <h2 className="text-3xl md:text-4xl font-display text-cream">Consolidated Reporting</h2>
    </AnimatedSection>
    <AnimatedSection delay={0.2}>
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Total AUM", value: "$4.2B" },
            { label: "Asset Classes", value: "14" },
            { label: "Jurisdictions", value: "8" },
            { label: "Entities", value: "23" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl md:text-3xl font-display text-champagne">{item.value}</p>
              <p className="text-xs text-muted-foreground mt-2 font-body tracking-wider uppercase">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border/20 pt-8">
          <div className="flex justify-between text-xs text-muted-foreground font-body mb-3">
            <span>Portfolio Performance YTD</span>
            <span className="text-champagne">+12.4%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(43, 60%, 50%), hsl(40, 40%, 75%))" }}
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

/* ─── Section 6: Concierge & Lifestyle ─── */
const ConciergeSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <AnimatedSection delay={0.1}>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: "✈", title: "Private Aviation" },
            { icon: "🏛", title: "Art Advisory" },
            { icon: "⚖", title: "Legal Coordination" },
            { icon: "🏠", title: "Estate Management" },
          ].map((s) => (
            <div key={s.title} className="glass-card p-6 text-center group hover:border-champagne/20 transition-colors duration-500">
              <span className="text-2xl mb-3 block">{s.icon}</span>
              <p className="text-xs font-body tracking-wider uppercase text-foreground/80">{s.title}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">Beyond Finance</p>
        <h2 className="text-3xl md:text-4xl font-display text-cream mb-6">Concierge & Lifestyle Management</h2>
        <p className="text-muted-foreground font-body leading-relaxed">
          From securing private viewings at the world's finest galleries to coordinating
          multi-property estates across continents—we anticipate every need before it arises.
          Your family's lifestyle, orchestrated with invisible precision.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Section 7: Private Equity Access ─── */
const PrivateEquitySection = () => (
  <section className="section-padding">
    <AnimatedSection className="text-center mb-16">
      <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">Exclusive Access</p>
      <h2 className="text-3xl md:text-4xl font-display text-cream">Private Equity & Co-Investment</h2>
    </AnimatedSection>
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
      {[
        { title: "Direct Co-Investments", desc: "Participate alongside top-tier GPs in pre-vetted opportunities.", min: "$5M+" },
        { title: "Fund Access", desc: "Entry to oversubscribed funds typically closed to outside capital.", min: "$10M+" },
        { title: "Real Assets", desc: "Curated real estate, infrastructure, and natural resource positions.", min: "$2M+" },
      ].map((item, i) => (
        <AnimatedSection key={item.title} delay={i * 0.15}>
          <div className="glass-card p-8 h-full flex flex-col justify-between group hover:border-champagne/20 transition-colors duration-500">
            <div>
              <h3 className="font-display text-lg text-cream mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">{item.desc}</p>
            </div>
            <p className="text-xs tracking-widest uppercase text-champagne font-body">Min. {item.min}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

/* ─── Section 8: Full-width Heritage Image ─── */
const HeritageImageSection = () => (
  <section className="relative h-[60vh] overflow-hidden">
    <div className="glass-image w-full h-full">
      <img
        src={heritageImage}
        alt="Heritage château at dusk"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
      <AnimatedSection className="text-center px-6">
        <p className="text-xs tracking-[0.4em] uppercase text-champagne mb-4 font-body">Three Quarters of a Century</p>
        <h2 className="text-3xl md:text-5xl font-display text-cream">A Heritage of Trust</h2>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Section 9: Generations Served Counters ─── */
const CounterItem = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-display text-champagne">
        {count}{suffix}
      </p>
      <p className="text-xs text-muted-foreground mt-3 font-body tracking-[0.2em] uppercase">{label}</p>
    </div>
  );
};

const CountersSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
      <CounterItem value={76} label="Years of Service" suffix="+" />
      <CounterItem value={4} label="Generations Served" />
      <CounterItem value={120} label="Family Clients" suffix="+" />
      <CounterItem value={42} label="Billion AUM" suffix="B" />
    </div>
  </section>
);

/* ─── Section 10: Wealth Journals ─── */
const JournalsSection = () => {
  const articles = [
    { title: "The Art of Multigenerational Governance", date: "March 2026", tag: "Governance" },
    { title: "Navigating Philanthropic Complexity", date: "February 2026", tag: "Philanthropy" },
    { title: "Private Markets: A 2026 Outlook", date: "January 2026", tag: "Investment" },
  ];

  return (
    <section className="section-padding">
      <AnimatedSection className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">Insights</p>
        <h2 className="text-3xl md:text-4xl font-display text-cream">Wealth Journals</h2>
      </AnimatedSection>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <AnimatedSection key={a.title} delay={i * 0.15}>
            <div className="glass-card p-8 h-full group cursor-pointer hover:border-champagne/20 transition-all duration-500">
              <span className="text-[10px] tracking-widest uppercase text-champagne font-body bg-champagne/10 px-3 py-1 rounded-sm">
                {a.tag}
              </span>
              <h3 className="font-display text-lg text-cream mt-6 mb-3 group-hover:text-champagne transition-colors duration-300">
                {a.title}
              </h3>
              <p className="text-xs text-muted-foreground font-body">{a.date}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

/* ─── Section 11: Discretion Framework ─── */
const DiscretionSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <AnimatedSection>
        <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">Absolute Privacy</p>
        <h2 className="text-3xl md:text-4xl font-display text-cream mb-6">Our Discretion Framework</h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-8">
          Privacy is not a feature—it is the foundation upon which every relationship is built.
          Our multi-layered confidentiality protocols exceed the standards of Swiss private banking.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="space-y-4">
          {[
            { icon: Shield, title: "Zero Digital Footprint", desc: "No client data stored on networked systems." },
            { icon: Lock, title: "Compartmented Access", desc: "Need-to-know basis across all team members." },
            { icon: Users, title: "Vetted Personnel", desc: "Every team member undergoes enhanced vetting." },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6 flex items-start gap-4 group hover:border-champagne/20 transition-colors duration-500">
              <item.icon className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-display text-sm text-cream mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground font-body">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Section 12: Anonymous Feedback ─── */
const FeedbackSection = () => (
  <section className="section-padding">
    <AnimatedSection className="max-w-2xl mx-auto text-center">
      <MessageSquare className="w-8 h-8 text-champagne mx-auto mb-6" />
      <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">Confidential</p>
      <h2 className="text-3xl md:text-4xl font-display text-cream mb-6">Anonymous Feedback</h2>
      <p className="text-muted-foreground font-body text-sm mb-10 leading-relaxed">
        Your candid observations help us refine our service. All submissions are entirely anonymous.
      </p>
      <div className="glass-card p-8 text-left">
        <textarea
          placeholder="Share your thoughts in confidence..."
          className="w-full bg-transparent text-foreground font-body text-sm placeholder:text-muted-foreground/50 resize-none h-32 focus:outline-none"
        />
        <div className="flex justify-end mt-4">
          <MagneticButton>
            <Button variant="luxury" size="sm">Submit Anonymously</Button>
          </MagneticButton>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

/* ─── Section 13: Contact Partners CTA ─── */
const ContactCTASection = () => (
  <section className="section-padding bg-secondary/30">
    <AnimatedSection className="text-center max-w-2xl mx-auto">
      <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">By Invitation</p>
      <h2 className="text-3xl md:text-5xl font-display text-cream mb-6">
        Begin a Privileged Dialogue
      </h2>
      <p className="text-muted-foreground font-body text-sm mb-10 leading-relaxed">
        Each engagement begins with a confidential conversation with a senior partner.
        We accept a limited number of new families each year.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <MagneticButton>
          <Button variant="cta" size="lg" className="px-12 py-6">
            Request Introduction
          </Button>
        </MagneticButton>
        <MagneticButton>
          <Button variant="luxury" size="lg" className="px-12 py-6">
            Learn More
          </Button>
        </MagneticButton>
      </div>
    </AnimatedSection>
  </section>
);

/* ─── Main Page ─── */
const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <AffiliationsSection />
      <CoreOfferingsSection />
      <SuccessionSection />
      <ReportingSection />
      <ConciergeSection />
      <PrivateEquitySection />
      <HeritageImageSection />
      <CountersSection />
      <JournalsSection />
      <DiscretionSection />
      <FeedbackSection />
      <ContactCTASection />
      <Footer />
    </main>
  );
};

export default Index;
