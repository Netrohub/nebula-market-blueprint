import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 glass-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-xl font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NXOLand
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/products" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/games" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group">
                Games
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/leaderboard" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group">
                Leaderboard
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" />
              <Input
                type="search"
                placeholder="Search game accounts, social accounts..."
                className="w-full pl-10 bg-muted/50 border-border/50 focus:border-primary/50 focus:bg-muted/70 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary/10 hover:text-primary transition-colors">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full gradient-primary text-[10px] font-bold text-primary-foreground shadow-lg">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/10 hover:text-primary transition-colors">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
