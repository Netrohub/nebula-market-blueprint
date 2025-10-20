import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  SlidersHorizontal,
  Grid3x3,
  List,
  ChevronDown
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const products = [
  {
    id: "p1",
    name: "Premium Instagram Account - 50K",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    category: "Social Media",
    rating: 4.9,
    reviews: 145,
    featured: true,
  },
  {
    id: "p2",
    name: "Steam Account - 200+ Games",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    category: "Gaming",
    rating: 4.8,
    reviews: 234,
    featured: true,
  },
  {
    id: "p3",
    name: "TikTok Creator Account - Verified",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    category: "Social Media",
    rating: 4.9,
    reviews: 189,
    featured: false,
  },
  {
    id: "p4",
    name: "YouTube Channel - 10K Subscribers",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    category: "Social Media",
    rating: 4.7,
    reviews: 156,
    featured: false,
  },
  {
    id: "p5",
    name: "PlayStation Plus - 3 Years Premium",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
    category: "Gaming",
    rating: 4.8,
    reviews: 298,
    featured: false,
  },
  {
    id: "p6",
    name: "Twitter Verified Account",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80",
    category: "Social Media",
    rating: 4.9,
    reviews: 167,
    featured: true,
  },
  {
    id: "p7",
    name: "Discord Server - 5K Members",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80",
    category: "Social Media",
    rating: 4.6,
    reviews: 123,
    featured: false,
  },
  {
    id: "p8",
    name: "Epic Games - Fortnite Rare Account",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    category: "Gaming",
    rating: 4.8,
    reviews: 342,
    featured: false,
  },
  {
    id: "p9",
    name: "Spotify Premium Family - 2 Years",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=800&q=80",
    category: "Digital Services",
    rating: 4.7,
    reviews: 234,
    featured: false,
  },
];

const categories = [
  "All Products",
  "Social Media",
  "Gaming",
  "Digital Services",
  "Software",
  "Entertainment",
];

const priceRanges = [
  "All Prices",
  "Under $100",
  "$100 - $300",
  "$300 - $500",
  "Over $500",
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Starfield />
      <Navbar />
      
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative py-12 overflow-hidden border-b border-border/30">
          <div className="absolute inset-0 gradient-nebula opacity-40" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 text-center">
                All Products
              </h1>
              <p className="text-center text-foreground/60 mb-8">
                Browse thousands of verified digital products and accounts
              </p>

              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/70" />
                <Input
                  type="search"
                  placeholder="Search for products, accounts, or services..."
                  className="w-full pl-12 pr-4 h-12 glass-card border-primary/30 focus:border-primary/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Filter Bar */}
            <div className="mb-8 glass-card p-4 rounded-lg">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant="outline" size="sm" className="glass-card border-primary/30">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px] glass-card border-primary/30">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className="glass-card">
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase().replace(" ", "-")}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all-prices">
                    <SelectTrigger className="w-[180px] glass-card border-primary/30">
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent className="glass-card">
                      {priceRanges.map((range) => (
                        <SelectItem key={range} value={range.toLowerCase().replace(" ", "-")}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-3">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px] glass-card border-primary/30">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="glass-card">
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="hidden md:flex gap-2">
                    <Button size="icon" variant="outline" className="glass-card border-primary/50">
                      <Grid3x3 className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Social Media
                  <button className="ml-2 hover:text-primary/70">×</button>
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  $300 - $500
                  <button className="ml-2 hover:text-primary/70">×</button>
                </Badge>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-foreground/60">
                Showing <span className="text-foreground font-semibold">{products.length}</span> of{" "}
                <span className="text-foreground font-semibold">1,247</span> products
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button size="lg" className="btn-glow">
                Load More Products
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
