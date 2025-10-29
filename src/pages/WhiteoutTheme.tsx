import { Button } from "@/components/ui/button";
import { Play, ChevronDown, Swords, Mountain, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const WhiteoutTheme = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Snow effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `-5%`,
              animation: `fall ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Blue glow effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-30 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-black tracking-wider">
            <span className="text-white">NEXO</span>
            <span className="text-cyan-400">.</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">STORE</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">GAMES</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">ABOUT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-20">
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
              <span className="text-cyan-400 text-xs uppercase tracking-widest font-semibold">
                New Season Available
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-b from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                FROZEN
              </span>
              <span className="block text-white mt-2">
                WASTELAND
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Face the eternal winter. Build, survive, conquer. Your tribe depends on you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button 
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 shadow-lg shadow-cyan-500/30"
              >
                <Link to="/products">
                  <Play className="h-4 w-4 fill-current" />
                  ENTER MARKETPLACE
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                className="bg-white/5 hover:bg-white/10 text-white font-semibold px-8 border border-white/20"
              >
                <Link to="/about">
                  WATCH TRAILER
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Swords, 
                  title: "COMBAT", 
                  desc: "Fight for survival against the elements and enemies"
                },
                { 
                  icon: Mountain, 
                  title: "EXPLORE", 
                  desc: "Discover frozen ruins and hidden treasures"
                },
                { 
                  icon: Wind, 
                  title: "ADAPT", 
                  desc: "Weather the storm with strategy and skill"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-8 bg-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <item.icon className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
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
