import { Lock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Portal = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="min-h-screen flex items-center justify-center px-6">
        <AnimatedSection className="text-center max-w-md">
          <div className="glass-card p-12">
            <Lock className="w-10 h-10 text-champagne mx-auto mb-8" />
            <h1 className="text-2xl md:text-3xl font-display text-cream mb-4">Client Portal</h1>
            <p className="text-sm text-muted-foreground font-body mb-10 leading-relaxed">
              Access your consolidated reports, documents, and communications through our secure portal.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Client Identifier"
                className="w-full bg-muted/50 border border-border/30 rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-champagne/40 transition-colors"
              />
              <input
                type="password"
                placeholder="Passphrase"
                className="w-full bg-muted/50 border border-border/30 rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-champagne/40 transition-colors"
              />
              <MagneticButton className="w-full">
                <Button variant="cta" size="lg" className="w-full py-6">
                  Authenticate
                </Button>
              </MagneticButton>
            </div>
            <p className="text-[10px] text-muted-foreground/50 mt-8 font-body tracking-wider">
              256-BIT ENCRYPTED · ZERO-KNOWLEDGE ARCHITECTURE
            </p>
          </div>
        </AnimatedSection>
      </section>
      <Footer />
    </main>
  );
};

export default Portal;
