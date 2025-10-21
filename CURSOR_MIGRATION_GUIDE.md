# Nexo Marketplace Design System - Complete Migration Guide for Cursor AI

## 🎯 Objective
Replace the existing project's design with the Nexo Marketplace "Stellar Dark Theme" design system. This is a complete UI overhaul featuring glassmorphism effects, cosmic animations, and a modern dark theme.

---

## 📋 Phase 1: Review the Design System

### Critical Files to Analyze First:

1. **`src/index.css`** - Contains all design tokens:
   - CSS custom properties for colors (HSL format)
   - Gradient definitions
   - Glassmorphism effects
   - Animations (float, twinkle, drift, border-rotate)
   - Shadow and glow effects
   - Scrollbar styling

2. **`tailwind.config.ts`** - Tailwind configuration:
   - Extended color palette using CSS variables
   - Custom animations
   - Border radius tokens
   - Typography settings

3. **`src/components/Starfield.tsx`** - Animated background component
4. **`src/components/ParticleField.tsx`** - Additional cosmic effects

---

## 🎨 Phase 2: Design System Key Concepts

### Color System (ALL COLORS ARE HSL)
```css
/* Primary colors */
--background: 222.2 84% 4.9%  /* Deep space black */;
--foreground: 210 40% 98%     /* White text */;
--primary: 217.2 91.2% 59.8%  /* Cosmic blue */;
--secondary: 217.2 32.6% 17.5% /* Dark blue-gray */;
--accent: 217.2 91.2% 59.8%   /* Accent blue */;

/* Gradients */
--gradient-primary: linear-gradient(135deg, hsl(217.2 91.2% 59.8%) 0%, hsl(280 91.2% 59.8%) 100%);
--gradient-radial: radial-gradient(circle at 50% 50%, hsl(217.2 91.2% 59.8% / 0.15), transparent 50%);
--gradient-cosmic: radial-gradient(ellipse at top, hsl(217.2 91.2% 59.8% / 0.3), transparent 60%);
--gradient-stellar: linear-gradient(180deg, hsl(222.2 84% 4.9%) 0%, hsl(217.2 32.6% 17.5%) 100%);
```

### Core CSS Classes
```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
}

.btn-glow {
  position: relative;
  transition: all 0.3s ease;
}

.btn-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 40px -10px hsl(var(--primary) / 0.5);
}

.gradient-primary {
  background: var(--gradient-primary);
}
```

### Animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes twinkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes drift {
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(100vw) translateY(-100vh); }
}
```

---

## 🔧 Phase 3: Implementation Steps

### Step 1: Replace Global Styles

**Replace your entire `index.css` or global CSS file with:**
```css
/* Copy the ENTIRE content from src/index.css */
/* This includes: */
/* - @tailwind directives */
/* - :root CSS variables */
/* - body and base element styling */
/* - .glass-card, .btn-glow, .gradient-* classes */
/* - Animation keyframes */
/* - Scrollbar styling */
/* - RTL and emoji support */
```

### Step 2: Update Tailwind Configuration

**Replace/merge your `tailwind.config.ts`:**
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        drift: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(100vw) translateY(-100vh)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
        drift: "drift 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### Step 3: Add Required Fonts

**Update your `index.html` head section:**
```html
<head>
  <!-- Existing meta tags -->
  
  <!-- Add Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>
```

### Step 4: Create the Starfield Background Component

**Create `src/components/Starfield.tsx`:**
```tsx
import { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Twinkle effect
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.3) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-cosmic" />
    </>
  );
};

export default Starfield;
```

### Step 5: Update Layout Structure

**Example layout pattern (apply to all pages):**
```tsx
import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Animated background */}
      <Starfield />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content with proper z-index */}
      <main className="flex-1 relative z-10">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};
```

### Step 6: Apply Glass Card Styling

**Replace existing card components:**
```tsx
// OLD
<div className="bg-white shadow-lg rounded-lg p-6">
  Content
</div>

// NEW
<div className="glass-card p-6 hover:border-primary/40 transition-all">
  Content
</div>
```

**Or use shadcn Card component with glass styling:**
```tsx
import { Card } from "@/components/ui/card";

<Card className="glass-card p-6">
  Content
</Card>
```

### Step 7: Update Button Styles

**Replace existing buttons:**
```tsx
// Primary buttons
<Button className="btn-glow">
  Click Me
</Button>

// Outline buttons with glass effect
<Button variant="outline" className="glass-card border-border/50">
  Secondary Action
</Button>

// Gradient buttons
<Button className="gradient-primary text-white">
  Special Action
</Button>
```

---

## 🎯 Phase 4: Component-Specific Patterns

### Hero Section Pattern
```tsx
<section className="relative py-20 overflow-hidden">
  {/* Background glows */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
  
  <div className="container mx-auto px-4 relative z-10">
    <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent">
      Your Headline
    </h1>
    <p className="text-xl text-foreground/70 mb-8 max-w-2xl">
      Your description
    </p>
    <Button className="btn-glow">
      Get Started
    </Button>
  </div>
</section>
```

### Card Grid Pattern
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card key={item.id} className="glass-card p-6 card-hover group">
      <div className="aspect-video rounded-lg overflow-hidden mb-4">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-foreground/60">{item.description}</p>
    </Card>
  ))}
</div>
```

### Badge with Glow
```tsx
<Badge className="badge-glow">
  Featured
</Badge>
```

### Status Badges (from dispute system)
```tsx
<Badge 
  variant="outline" 
  className="bg-green-500/20 text-green-400 border-green-500/30"
>
  Active
</Badge>

<Badge 
  variant="outline" 
  className="bg-blue-500/20 text-blue-400 border-blue-500/30"
>
  In Progress
</Badge>

<Badge 
  variant="outline" 
  className="bg-orange-500/20 text-orange-400 border-orange-500/30"
>
  Warning
</Badge>
```

---

## 🚨 Critical Rules to Follow

### 1. **NEVER Use Direct Colors**
```tsx
// ❌ WRONG
<div className="bg-white text-black border-gray-300">

// ✅ CORRECT
<div className="bg-background text-foreground border-border">
```

### 2. **Always Use Glass Card for Containers**
```tsx
// ❌ WRONG
<div className="bg-gray-900 rounded-lg p-6">

// ✅ CORRECT
<div className="glass-card p-6">
```

### 3. **Use Semantic Color Tokens**
```tsx
// Available tokens:
bg-background, text-foreground
bg-primary, text-primary-foreground
bg-secondary, text-secondary-foreground
bg-accent, text-accent-foreground
bg-muted, text-muted-foreground
bg-card, text-card-foreground
border-border, ring-ring
```

### 4. **Apply Proper Z-Index Layering**
```tsx
<div className="relative">
  <Starfield /> {/* z-0 by default */}
  <Navbar /> {/* relative z-10 */}
  <main className="relative z-10"> {/* content layer */}
    {/* page content */}
  </main>
  <Footer /> {/* relative z-10 */}
</div>
```

### 5. **Use Gradient Text for Headings**
```tsx
<h1 className="text-5xl font-black bg-gradient-primary bg-clip-text text-transparent">
  Important Headline
</h1>
```

### 6. **Add Hover Effects**
```tsx
// Cards
<Card className="glass-card transition-all hover:border-primary/40 hover:shadow-lg">

// Buttons
<Button className="btn-glow">

// Links
<Link className="text-primary hover:text-primary/80 transition-colors">
```

---

## 📦 Required Dependencies

Ensure these are installed:
```json
{
  "@radix-ui/react-*": "latest",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.0",
  "lucide-react": "^0.400.0",
  "react-router-dom": "^6.20.0",
  "tailwind-merge": "^2.2.0",
  "tailwindcss-animate": "^1.0.7"
}
```

---

## 🎬 Phase 5: Migration Checklist

### Global Setup
- [ ] Replace `index.css` with new design system
- [ ] Update `tailwind.config.ts`
- [ ] Add Google Fonts to `index.html`
- [ ] Create `Starfield.tsx` component
- [ ] Create `ParticleField.tsx` (optional, for extra effects)

### Layout Updates
- [ ] Add `Starfield` to all page layouts
- [ ] Update `Navbar` with glass-card styling
- [ ] Update `Footer` with glass-card styling
- [ ] Ensure proper z-index layering (z-0 for bg, z-10 for content)

### Component Updates
- [ ] Replace all card backgrounds with `.glass-card`
- [ ] Update all buttons with `.btn-glow` or glass styling
- [ ] Replace direct colors with semantic tokens
- [ ] Add gradient text to main headings
- [ ] Update badges with proper status colors
- [ ] Add hover effects to interactive elements

### Page-Specific
- [ ] Hero sections: Add background glows and gradient text
- [ ] Product/item grids: Apply glass cards and hover effects
- [ ] Forms: Use glass-card inputs with proper focus states
- [ ] Modals/dialogs: Apply glass-card styling
- [ ] Tables: Use glass-card with proper borders

### Final Polish
- [ ] Test all animations (float, twinkle, drift)
- [ ] Verify responsive design on mobile/tablet
- [ ] Check dark mode consistency
- [ ] Test RTL support (if needed)
- [ ] Validate all colors are HSL-based
- [ ] Remove any old color variables or unused CSS

---

## 🎨 Example Page Migration

### Before:
```tsx
const OldPage = () => (
  <div className="bg-gray-900 min-h-screen">
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">Logo</div>
    </nav>
    
    <main className="container mx-auto py-12">
      <h1 className="text-white text-4xl mb-8">Welcome</h1>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-white mb-2">Card 1</h3>
          <p className="text-gray-400">Description</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Action
          </button>
        </div>
      </div>
    </main>
  </div>
);
```

### After:
```tsx
import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewPage = () => (
  <div className="min-h-screen flex flex-col relative">
    <Starfield />
    <Navbar />
    
    <main className="flex-1 relative z-10 container mx-auto py-12">
      {/* Hero with glows */}
      <div className="relative mb-16">
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        
        <h1 className="text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-6">
          Welcome
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card p-6 card-hover group">
          <h3 className="text-xl font-bold mb-2">Card 1</h3>
          <p className="text-foreground/60 mb-4">Description</p>
          <Button className="btn-glow">
            Action
          </Button>
        </Card>
        {/* More cards... */}
      </div>
    </main>
  </div>
);
```

---

## 🔍 Testing Checklist

After migration, verify:
- [ ] Starfield animation runs smoothly
- [ ] Glass cards have backdrop blur effect
- [ ] Buttons glow on hover
- [ ] Gradient text renders correctly
- [ ] All colors use HSL tokens
- [ ] No white/black direct colors remain
- [ ] Responsive design works on mobile
- [ ] Animations don't cause performance issues
- [ ] Dark theme is consistent throughout
- [ ] Hover states work on all interactive elements

---

## 💡 Pro Tips

1. **Start with layout**: Get Starfield and basic structure working first
2. **Use global search**: Find and replace all instances of direct colors
3. **Test incrementally**: Migrate one page at a time
4. **Keep old styles**: Comment out old CSS instead of deleting initially
5. **Use browser devtools**: Inspect elements to verify glass-card styles are applied
6. **Check contrast**: Ensure text is readable on glass backgrounds

---

## 📚 Reference Examples

Check these files in the Lovable project for complete examples:
- `src/pages/Index.tsx` - Homepage with hero and animations
- `src/pages/disputes/DisputeDetail.tsx` - Complex page with cards and forms
- `src/components/ProductCard.tsx` - Card component example
- `src/components/Navbar.tsx` - Navigation with glass styling
- `src/components/Footer.tsx` - Footer with gradient effects

---

## 🆘 Common Issues & Solutions

### Issue: Glass effect not showing
**Solution**: Ensure backdrop-filter is supported and `.glass-card` class is applied

### Issue: Colors look wrong
**Solution**: Verify all colors in `index.css` are in HSL format, check CSS variable names match

### Issue: Animations laggy
**Solution**: Reduce number of stars in Starfield, simplify blur effects

### Issue: Text not readable
**Solution**: Use `text-foreground` instead of direct colors, adjust opacity with `/60` or `/70`

### Issue: Z-index conflicts
**Solution**: Starfield (z-0), Navigation (z-10), Main content (z-10), Modals (z-50)

---

## ✅ Final Migration Command for Cursor

Use this prompt in Cursor after providing this guide:

```
I need you to migrate my existing project to use the Nexo Marketplace design system following the CURSOR_MIGRATION_GUIDE.md.

Priority order:
1. Update index.css and tailwind.config.ts with the new design tokens
2. Add Starfield component and integrate it into all layouts
3. Replace all direct color usage (bg-white, text-black, etc.) with semantic tokens
4. Apply .glass-card styling to all card-like components
5. Update all buttons with .btn-glow or glass styling
6. Add gradient text to major headings
7. Ensure proper z-index layering throughout

Critical rules:
- ALL colors must use HSL format and semantic tokens
- NEVER use direct colors like bg-white, text-black
- ALL containers should use .glass-card
- ALL interactive elements need hover effects
- Starfield must be on z-0, content on z-10

Start with Phase 1 and work through each phase systematically.
Ask me before deleting any old code.
```

---

**This guide contains everything Cursor needs to completely replicate the Nexo Marketplace design system in your project. Good luck! 🚀**
