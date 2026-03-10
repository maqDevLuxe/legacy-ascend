import { Shield, TrendingUp, Gem, Heart, Scale, Globe, BookOpen, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { icon: TrendingUp, title: "Wealth Structuring", desc: "Multi-jurisdictional tax optimization, trust and foundation administration, and bespoke asset allocation across all asset classes." },
  { icon: Shield, title: "Risk Management", desc: "Comprehensive risk assessment and mitigation strategies tailored to complex family structures and cross-border holdings." },
  { icon: Gem, title: "Lifestyle Management", desc: "Art advisory, property acquisitions, private aviation, yacht management, and luxury asset curation." },
  { icon: Heart, title: "Philanthropic Advisory", desc: "Foundation governance, impact investing frameworks, and strategic giving aligned with family values." },
  { icon: Scale, title: "Legal & Compliance", desc: "Coordination of international legal counsel, regulatory compliance, and family governance documentation." },
  { icon: Globe, title: "Global Mobility", desc: "Residency and citizenship planning, cross-border tax structuring, and international relocation support." },
  { icon: BookOpen, title: "Next-Gen Education", desc: "Financial literacy programs, internship placements, and leadership development for rising generations." },
  { icon: Users, title: "Family Governance", desc: "Family constitution development, council facilitation, and conflict resolution frameworks." },
];

const Services = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <AnimatedSection className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">What We Do</p>
          <h1 className="text-4xl md:text-6xl font-display text-cream mb-6">Our Services</h1>
          <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            A comprehensive suite of advisory services designed for families of extraordinary means and complexity.
          </p>
        </AnimatedSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="glass-card p-10 h-full group hover:border-champagne/20 transition-colors duration-500">
                <s.icon className="w-7 h-7 text-champagne mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-xl text-cream mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Services;
