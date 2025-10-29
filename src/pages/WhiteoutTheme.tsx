import { Button } from "@/components/ui/button";
import { Play, ChevronDown, Swords, Mountain, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const WhiteoutTheme = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Heavy snow effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `-5%`,
              opacity: Math.random() * 0.6 + 0.4,
              animation: `fall ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Ice crystals background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                           radial-gradient(circle at 60% 80%, white 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 150px 150px, 120px 120px',
        }} />
      </div>

      {/* Dark gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black" />
      
      {/* Blue aurora glow */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      {/* Minimal top bar */}
      <header className="relative z-30 flex items-center justify-between px-4 md:px-12 py-6">
        <div className="text-2xl md:text-3xl font-black tracking-wider">
          <span className="text-white">NEXO</span>
          <span className="text-cyan-400">.</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Store</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Games</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
        </nav>
      </header>

      {/* Hero - Full viewport */}
      <main className="relative z-20">
        <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-6 pb-20">
          {/* Centered content */}
          <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
            {/* Small tag */}
            <div className="inline-block">
              <div className="text-cyan-400 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
                New Season Available
              </div>
            </div>

            {/* Massive title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
              <div className="text-white/10 mb-2">FROZEN</div>
              <div className="bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                WASTELAND
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Face the eternal winter. Build, survive, conquer. 
              <br className="hidden md:block" />
              Your tribe depends on you.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button 
                asChild
                size="lg"
                className="group bg-white hover:bg-gray-100 text-black font-bold text-base px-10 py-7 rounded-none border-0 shadow-2xl shadow-cyan-500/20"
              >
                <Link to="/products">
                  <Play className="h-5 w-5 fill-current" />
                  ENTER MARKETPLACE
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-white/5 text-white font-semibold text-base px-10 py-7 rounded-none border border-white/20"
              >
                <Link to="/about">
                  WATCH TRAILER
                </Link>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce text-gray-500" />
          </div>
        </section>

        {/* Features - Dark cards */}
        <section className="relative py-24 md:py-32 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { 
                  icon: Swords, 
                  title: "COMBAT", 
                  desc: "Fight for survival against the elements and enemies",
                  color: "from-red-500/20 to-transparent"
                },
                { 
                  icon: Mountain, 
                  title: "EXPLORE", 
                  desc: "Discover frozen ruins and hidden treasures",
                  color: "from-cyan-500/20 to-transparent"
                },
                { 
                  icon: Wind, 
                  title: "ADAPT", 
                  desc: "Weather the storm with strategy and skill",
                  color: "from-blue-500/20 to-transparent"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden"
                >
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{ backgroundImage: `linear-gradient(to bottom right, ${item.color})` }} 
                  />
                  
                  <div className="relative p-8 md:p-12 border border-white/5 bg-black/40 backdrop-blur-sm h-full">
                    <item.icon className="h-10 w-10 md:h-12 md:w-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    <h3 className="text-xl md:text-2xl font-black tracking-wider mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhiteoutTheme;
