import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Sparkles, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Cosmic gradient background */}
      <div className="absolute inset-0 gradient-nebula opacity-80" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-4">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to NXOLand Marketplace
            </span>
          </div>
          
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              Your Digital Gaming{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                Marketplace
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Buy and sell game accounts, social media profiles, and digital products in a secure, trusted marketplace powered by cutting-edge technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="gap-2 btn-glow text-base px-8 py-6">
              <ShoppingBag className="h-5 w-5" />
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 glass-card border-primary/30 hover:border-primary/50 text-base px-8 py-6">
              Become a Seller
            </Button>
          </div>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <span>Secure Transactions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                <Zap className="h-4 w-4 text-accent" />
              </div>
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
