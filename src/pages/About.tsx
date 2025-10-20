import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Award, Users, TrendingUp, Globe } from "lucide-react";

const stats = [
  { label: "Active Users", value: "50K+", icon: Users },
  { label: "Products Sold", value: "1M+", icon: TrendingUp },
  { label: "Countries", value: "120+", icon: Globe },
  { label: "Success Rate", value: "99.8%", icon: Award },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Your safety is our top priority. We use industry-leading security measures to protect every transaction.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant delivery of digital products. No waiting, no delays - get what you paid for immediately.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Every product and seller is verified. We maintain the highest standards in the marketplace.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by gamers, for gamers. We listen to our community and constantly improve based on your feedback.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Starfield />
      <Navbar />
      
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden border-b border-border/30">
          <div className="absolute inset-0 gradient-nebula opacity-60" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="badge-glow border-0 mb-4">
                About Us
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Empowering Digital Commerce
              </h1>
              <p className="text-xl text-foreground/60 leading-relaxed">
                NXOLand is the premier marketplace for digital gaming assets. We connect buyers and sellers in a secure, transparent environment where trust and quality come first.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="glass-card p-6 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-sm text-foreground/60">{stat.label}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-cosmic opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  Our Story
                </h2>
                <p className="text-foreground/60 text-lg">
                  Building the future of digital marketplaces
                </p>
              </div>

              <Card className="glass-card p-8 md:p-12 space-y-6 text-foreground/70 leading-relaxed">
                <p className="text-lg">
                  Founded in 2024, NXOLand was born from a simple observation: the digital gaming marketplace was fragmented, insecure, and lacked the trust that modern commerce demands.
                </p>
                <p className="text-lg">
                  We set out to create a platform where gamers could buy and sell digital assets with complete confidence. By implementing cutting-edge security measures, rigorous verification processes, and a community-first approach, we've built a marketplace that serves over 50,000 active users across 120+ countries.
                </p>
                <p className="text-lg">
                  Today, NXOLand is more than just a marketplace - it's a community. A place where gamers connect, trade grows, and digital commerce thrives in a safe, transparent environment.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Our Values
              </h2>
              <p className="text-foreground/60 text-lg">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="glass-card p-8 group hover:scale-[1.02] transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                        <p className="text-foreground/60 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                To create the world's most trusted digital marketplace where gamers can buy, sell, and trade with absolute confidence, knowing their transactions are secure, their assets are verified, and their community values integrity above all else.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
