import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heritageImage from "@/assets/heritage-wide.jpg";

const milestones = [
  { year: "1947", event: "Founded in London by Sir Edmund Harrington as a private advisory practice." },
  { year: "1962", event: "Expanded to Zurich, establishing cross-border wealth structuring capabilities." },
  { year: "1978", event: "Launched the Harrington Philanthropy Institute for strategic family giving." },
  { year: "1995", event: "Opened Singapore office, extending reach across Asia-Pacific markets." },
  { year: "2008", event: "Navigated the financial crisis with zero client capital losses." },
  { year: "2020", event: "Introduced next-generation digital governance and reporting platforms." },
];

const Legacy = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="relative h-[50vh] overflow-hidden">
        <div className="glass-image w-full h-full">
          <img src={heritageImage} alt="Heritage" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <AnimatedSection className="text-center px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-4 font-body">Since 1947</p>
            <h1 className="text-4xl md:text-6xl font-display text-cream">Our Legacy</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          {milestones.map((m, i) => (
            <AnimatedSection key={m.year} delay={i * 0.1}>
              <div className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <span className="font-display text-champagne text-lg">{m.year}</span>
                  <div className="w-px flex-1 bg-border/30 mt-3" />
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed pt-1">{m.event}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Legacy;
