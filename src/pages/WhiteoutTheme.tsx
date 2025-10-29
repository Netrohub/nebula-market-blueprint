import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake, Shield, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const WhiteoutTheme = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Icy background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(200,70%,15%)] via-[hsl(195,60%,25%)] to-[hsl(200,70%,15%)]" />
      
      {/* Animated snow particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-[fall_linear_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Frost overlay effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[hsl(195,80%,50%,0.05)] to-transparent opacity-40" />
      
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12 border-b border-white/10 backdrop-blur-md bg-[hsl(200,70%,15%,0.5)]">
        <div className="flex items-center gap-2">
          <Snowflake className="h-8 w-8 text-[hsl(195,80%,70%)]" />
          <span className="text-xl md:text-2xl font-black text-white">
            NEXO<span className="text-[hsl(40,90%,55%)]">SURVIVAL</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#" className="hover:text-[hsl(195,80%,70%)] transition-colors">Home</a>
          <a href="#" className="hover:text-[hsl(195,80%,70%)] transition-colors">Features</a>
          <a href="#" className="hover:text-[hsl(195,80%,70%)] transition-colors">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[hsl(195,80%,70%,0.3)]">
            <Snowflake className="h-4 w-4 text-[hsl(195,80%,70%)] animate-pulse" />
            <span className="text-sm font-medium text-[hsl(195,80%,70%)]">
              An Epic Journey Through Ice and Snow
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-[0_0_30px_rgba(148,209,240,0.5)]">
              Survive the{" "}
              <span className="text-[hsl(195,80%,70%)]">Frozen</span>{" "}
              Wasteland
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Build your shelter, gather resources, and lead your people through the harsh winter. Only the strongest will survive.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              asChild 
              size="lg" 
              className="gap-2 text-base px-8 py-6 bg-[hsl(195,80%,50%)] hover:bg-[hsl(195,80%,60%)] text-white font-bold shadow-[0_0_30px_rgba(56,189,248,0.4)] border-0"
            >
              <Link to="/products">
                <Shield className="h-5 w-5" />
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="gap-2 text-base px-8 py-6 bg-white/5 hover:bg-white/10 text-white font-bold backdrop-blur-sm border border-white/20"
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <div className="p-2 rounded-lg bg-[hsl(195,80%,50%,0.15)] border border-[hsl(195,80%,70%,0.3)]">
                <Shield className="h-4 w-4 text-[hsl(195,80%,70%)]" />
              </div>
              <span>Protected Trades</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <div className="p-2 rounded-lg bg-[hsl(40,90%,55%,0.15)] border border-[hsl(40,90%,55%,0.3)]">
                <Flame className="h-4 w-4 text-[hsl(40,90%,55%)]" />
              </div>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <div className="p-2 rounded-lg bg-[hsl(195,80%,50%,0.15)] border border-[hsl(195,80%,70%,0.3)]">
                <Snowflake className="h-4 w-4 text-[hsl(195,80%,70%)]" />
              </div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Build & Survive", icon: Shield, desc: "Construct shelters and defend against the cold" },
            { title: "Gather Resources", icon: Snowflake, desc: "Collect materials to keep your people alive" },
            { title: "Lead Your Tribe", icon: Flame, desc: "Make tough decisions in harsh conditions" },
          ].map((feature, i) => (
            <div 
              key={i}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[hsl(195,80%,70%,0.5)] transition-all hover:bg-white/10 group"
            >
              <feature.icon className="h-8 w-8 text-[hsl(195,80%,70%)] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(195,80%,50%,0.15)] rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(200,70%,40%,0.15)] rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default WhiteoutTheme;
