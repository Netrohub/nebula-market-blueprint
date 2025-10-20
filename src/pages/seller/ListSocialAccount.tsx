import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SellerLayout from "@/components/SellerLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, X, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialPlatforms = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Twitter/X",
  "Facebook",
  "Snapchat",
  "Discord",
  "Twitch",
  "LinkedIn",
];

const ListSocialAccount = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [images, setImages] = useState<string[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToNonRefund, setAgreedToNonRefund] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms || !agreedToNonRefund) {
      toast({
        title: "Terms Required",
        description: "Please agree to all terms and conditions",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Account Listed Successfully",
      description: "Your social media account has been submitted for review",
    });
    
    navigate("/seller/products");
  };

  return (
    <SellerLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30">
            <Instagram className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Social Media Account Listing
            </span>
          </div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            List Social Media Account
          </h1>
          <p className="text-foreground/60">Fill in the details to list your social media account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card className="glass-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Account Information</h2>
            <div className="space-y-5">
              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground">
                  Username *
                </Label>
                <Input
                  id="username"
                  placeholder="Enter username only"
                  className="glass-card border-border/50 focus:border-primary/50"
                  required
                />
              </div>

              {/* Platform */}
              <div className="space-y-2">
                <Label htmlFor="platform" className="text-foreground">
                  Platform *
                </Label>
                <Select required>
                  <SelectTrigger className="glass-card border-border/50 bg-background">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent className="glass-card bg-card border-border z-50">
                    {socialPlatforms.map((platform) => (
                      <SelectItem key={platform} value={platform.toLowerCase().replace(/\//g, "-")}>
                        {platform}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Account Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground">
                  Account Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed description of your account"
                  className="glass-card border-border/50 focus:border-primary/50 min-h-[120px]"
                  required
                />
                <p className="text-xs text-foreground/50">
                  If you want to submit additional details in one of the categories (Snapchat - TikTok - Pubg - Facebook), you must add the exact name of the category. Otherwise, please just describe it briefly, as well as clarify whether or not the account has 2FA. It is recommended to mention some of the account's problems if they exist.
                </p>
              </div>
            </div>
          </Card>

          {/* Configuration Setup */}
          <Card className="glass-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Configuration Setup</h2>
            <p className="text-sm text-foreground/60 mb-6">
              Instructions to wait for buyer to buy and after buyer confirms purchase
            </p>
            <div className="space-y-5">
              {/* Configuration Instructions */}
              <div className="space-y-2">
                <Label htmlFor="configInstructions" className="text-foreground">
                  Setup Instructions *
                </Label>
                <Textarea
                  id="configInstructions"
                  placeholder="Enter instructions (or accounting or banking details)"
                  className="glass-card border-border/50 focus:border-primary/50 min-h-[120px]"
                  required
                />
                <p className="text-xs text-foreground/50">
                  Briefly describe the product, whether it contains an email, phone number, or has a double (2FA)
                </p>
              </div>

              {/* Phone Number (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Phone Number (If Applicable) - Optional
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number (e.g., +1234567890)"
                  className="glass-card border-border/50 focus:border-primary/50"
                />
              </div>

              {/* Seller Type */}
              <div className="space-y-2">
                <Label htmlFor="sellerType" className="text-foreground">
                  Seller Type *
                </Label>
                <Select required>
                  <SelectTrigger className="glass-card border-border/50 bg-background">
                    <SelectValue placeholder="Select seller type" />
                  </SelectTrigger>
                  <SelectContent className="glass-card bg-card border-border z-50">
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="verified">Verified Seller</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Pricing Section */}
          <Card className="glass-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Pricing Information</h2>
            <p className="text-sm text-destructive mb-6">
              If you want to create any external communication outside the platform in an attempt to scam, appeal, or scam, this will expose your account to theft
            </p>
            <div className="space-y-5">
              {/* Original Price */}
              <div className="space-y-2">
                <Label htmlFor="price" className="text-foreground">
                  Price (USD) *
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">$</span>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter your price"
                    className="pl-8 glass-card border-border/50 focus:border-primary/50"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
              </div>

              {/* Discount Price (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="discountPrice" className="text-foreground">
                  Discount Price (Optional)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">$</span>
                  <Input
                    id="discountPrice"
                    type="number"
                    placeholder="Enter discount price (optional)"
                    className="pl-8 glass-card border-border/50 focus:border-primary/50"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>

              {/* Discount Description */}
              <div className="space-y-2">
                <Label htmlFor="discountDesc" className="text-foreground">
                  Discount Description (If applicable)
                </Label>
                <Textarea
                  id="discountDesc"
                  placeholder="Enter the discount code that will be redeemed before the sale price (optional)"
                  className="glass-card border-border/50 focus:border-primary/50 min-h-[80px]"
                />
              </div>

              <p className="text-xs text-foreground/50">
                Please do not include external links in the description field, as this may result in account suspension and possible exposure of your account to theft
              </p>
            </div>
          </Card>

          {/* Special Offer Section */}
          <Card className="glass-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Special Offer</span>
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-foreground/60">
                Get 10% free offers on top 100 users who confirm their bids and provide sales continuity
              </p>
              <div className="p-4 glass-card border border-primary/30 rounded-lg">
                <p className="text-xs text-foreground/60">
                  * You can benefit from a free offer for top 100 bidders (with conditions ( bids + payments from within the platform ) to ensure the verification of the bidder
                </p>
              </div>
            </div>
          </Card>

          {/* Images Upload */}
          <Card className="glass-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Account Screenshots</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden glass-card border border-border/50 group">
                    <img src={image} alt={`Account ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setImages(images.filter((_, i) => i !== index))}
                      className="absolute top-2 right-2 p-1 rounded-full bg-destructive/90 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                
                {images.length < 6 && (
                  <button
                    type="button"
                    className="aspect-square rounded-lg glass-card border-2 border-dashed border-border/50 hover:border-primary/50 transition-colors flex flex-col items-center justify-center gap-2 text-foreground/60 hover:text-primary"
                  >
                    <Upload className="h-8 w-8" />
                    <span className="text-sm">Upload Image</span>
                  </button>
                )}
              </div>
              <p className="text-xs text-foreground/50">
                Upload screenshots showing followers, engagement, profile details (max 6 images)
              </p>
            </div>
          </Card>

          {/* Terms & Conditions */}
          <Card className="glass-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Terms & Conditions</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms1" 
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  className="mt-1"
                />
                <label
                  htmlFor="terms1"
                  className="text-sm text-foreground/70 leading-relaxed cursor-pointer"
                >
                  I pledge to only advertise available products and not to sell prohibited or inappropriate products
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms2"
                  checked={agreedToNonRefund}
                  onCheckedChange={(checked) => setAgreedToNonRefund(checked as boolean)}
                  className="mt-1"
                />
                <label
                  htmlFor="terms2"
                  className="text-sm text-foreground/70 leading-relaxed cursor-pointer"
                >
                  I fully assume legal liability for any lawsuit arising from the date of sale or breach of the legal buyer and seller agreement which guarantees the right to withdraw from the sale of electronic crimes
                </label>
              </div>
            </div>
          </Card>

          {/* Submit Button */}
          <Card className="glass-card p-6">
            <Button 
              type="submit" 
              className="w-full btn-glow h-12 text-base"
              disabled={!agreedToTerms || !agreedToNonRefund}
            >
              Submit Account
            </Button>
          </Card>
        </form>
      </div>
    </SellerLayout>
  );
};

export default ListSocialAccount;
