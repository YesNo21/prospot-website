# Sanity Design System - Implementation Guide for ProSpot

## Quick Start Implementation

This guide provides ready-to-use code snippets to implement the Sanity Clean design system in your ProSpot website.

## 1. Update Global CSS

Replace your current `src/app/globals.css` with this enhanced version:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Color System */
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;
    
    /* Grays */
    --gray-50: 0 0% 98%;
    --gray-100: 0 0% 96%;
    --gray-200: 0 0% 90%;
    --gray-300: 0 0% 83%;
    --gray-400: 0 0% 64%;
    --gray-500: 0 0% 45%;
    --gray-600: 0 0% 32%;
    --gray-700: 0 0% 25%;
    --gray-800: 0 0% 15%;
    --gray-900: 0 0% 9%;
    
    /* Accent */
    --accent: 199 89% 48%;
    --accent-foreground: 0 0% 100%;
    
    /* Semantic Colors */
    --card: 0 0% 100%;
    --card-foreground: 0 0% 0%;
    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 0 0% 0%;
    
    /* Typography */
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace;
    
    /* Spacing */
    --radius: 0.5rem;
  }
  
  .dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --card: 0 0% 9%;
    --card-foreground: 0 0% 100%;
    --border: 0 0% 15%;
  }
  
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-sans);
  }
}

@layer components {
  /* Hero Pattern Background */
  .hero-pattern {
    @apply relative overflow-hidden;
  }
  
  .hero-pattern::before {
    content: '';
    @apply absolute inset-0 opacity-5;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  
  /* Gradient Overlay */
  .gradient-fade {
    @apply relative;
  }
  
  .gradient-fade::after {
    content: '';
    @apply absolute inset-0 pointer-events-none;
    background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.9) 100%);
  }
  
  /* Typography Classes */
  .title-hero {
    @apply text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter;
  }
  
  .title-section {
    @apply text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight;
  }
  
  .title-card {
    @apply text-xl md:text-2xl font-semibold;
  }
  
  /* Prose Styling */
  .prose-clean {
    @apply prose prose-gray max-w-none;
  }
  
  .prose-clean h1 {
    @apply text-4xl font-bold tracking-tight mt-0 mb-8;
  }
  
  .prose-clean h2 {
    @apply text-3xl font-semibold tracking-tight mt-12 mb-6;
  }
  
  .prose-clean h3 {
    @apply text-2xl font-semibold mt-8 mb-4;
  }
  
  .prose-clean p {
    @apply text-gray-600 leading-relaxed mb-6;
  }
  
  .prose-clean a {
    @apply text-blue-600 underline hover:text-blue-700 transition-colors;
  }
  
  /* Card Hover Effect */
  .card-hover {
    @apply transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg;
  }
  
  /* Logo Hover with Plus */
  .logo-hover {
    @apply relative inline-block transition-transform duration-300 hover:scale-105;
  }
  
  .logo-hover::after {
    content: '+';
    @apply absolute -top-2 -right-2 text-2xl text-blue-500 opacity-0 transition-opacity duration-300;
  }
  
  .logo-hover:hover::after {
    @apply opacity-100;
  }
  
  /* Clean Button Styles */
  .btn-clean {
    @apply inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md transition-all duration-200;
  }
  
  .btn-clean-primary {
    @apply btn-clean bg-black text-white hover:bg-gray-800 hover:-translate-y-0.5;
  }
  
  .btn-clean-secondary {
    @apply btn-clean bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300;
  }
  
  /* Navigation Backdrop */
  .nav-backdrop {
    @apply bg-white/80 backdrop-blur-md border-b border-gray-200;
  }
}

@layer utilities {
  /* Text Utilities */
  .text-balance {
    text-wrap: balance;
  }
  
  /* Animation Utilities */
  .animate-in {
    animation: animateIn 0.5s ease-out;
  }
  
  @keyframes animateIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

## 2. Tailwind Configuration

Update your `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "hsl(var(--gray-50))",
          100: "hsl(var(--gray-100))",
          200: "hsl(var(--gray-200))",
          300: "hsl(var(--gray-300))",
          400: "hsl(var(--gray-400))",
          500: "hsl(var(--gray-500))",
          600: "hsl(var(--gray-600))",
          700: "hsl(var(--gray-700))",
          800: "hsl(var(--gray-800))",
          900: "hsl(var(--gray-900))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
```

## 3. Component Examples

### Hero Section Component

```tsx
// src/components/hero-section.tsx
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function HeroSection({ title, subtitle, children }: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center hero-pattern">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="title-hero mb-6 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-slide-up animation-delay-100">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="animate-slide-up animation-delay-200">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
```

### Clean Card Component

```tsx
// src/components/ui/clean-card.tsx
import { cn } from "@/lib/utils";

interface CleanCardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function CleanCard({ className, children, hover = true }: CleanCardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-200 rounded-lg p-6",
        hover && "card-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
```

### Enhanced Navigation

```tsx
// src/components/clean-navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function CleanNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-backdrop">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="logo-hover">
            <span className="text-xl font-bold">ProSpot</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === item.href
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-clean-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

### Feature Grid

```tsx
// src/components/feature-grid.tsx
import { CleanCard } from "./ui/clean-card";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureGridProps {
  features: Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <CleanCard key={index} className="group">
          {feature.icon && (
            <div className="mb-4 text-3xl group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
          )}
          <h3 className="title-card mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </CleanCard>
      ))}
    </div>
  );
}
```

## 4. Page Layout Example

```tsx
// src/app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { FeatureGrid } from "@/components/feature-grid";
import { CleanCard } from "@/components/ui/clean-card";

const features = [
  {
    title: "Professional Sports Websites",
    description: "Build stunning websites for teams, leagues, and sports organizations.",
    icon: "🏆",
  },
  {
    title: "Event Management",
    description: "Manage tournaments, games, and sporting events with ease.",
    icon: "📅",
  },
  {
    title: "Team Collaboration",
    description: "Connect players, coaches, and fans in one platform.",
    icon: "👥",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Build Professional Sports Websites"
        subtitle="The all-in-one platform for creating stunning sports websites, managing events, and engaging your community."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-clean-primary">
            Start Free Trial
          </button>
          <button className="btn-clean-secondary">
            View Demo
          </button>
        </div>
      </HeroSection>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="title-section mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ProSpot provides all the tools you need to create professional sports websites and manage your organization.
            </p>
          </div>
          
          <FeatureGrid features={features} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CleanCard className="text-center py-12">
            <h2 className="title-section mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of sports organizations using ProSpot.
            </p>
            <button className="btn-clean-primary">
              Start Your Free Trial
            </button>
          </CleanCard>
        </div>
      </section>
    </main>
  );
}
```

## 5. Animation Utilities

Add these utility classes to your components for smooth animations:

```css
/* Add to globals.css */
@layer utilities {
  .animation-delay-100 {
    animation-delay: 100ms;
  }
  
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  
  .animation-delay-300 {
    animation-delay: 300ms;
  }
  
  .animation-delay-400 {
    animation-delay: 400ms;
  }
  
  .animation-delay-500 {
    animation-delay: 500ms;
  }
}
```

## 6. Responsive Utilities

```tsx
// Responsive text utilities
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
  Responsive Heading
</h1>

// Responsive spacing
<div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
  Content with responsive padding
</div>

// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
  Grid items
</div>
```

## Next Steps

1. Install required dependencies:
   ```bash
   pnpm add @tailwindcss/typography
   ```

2. Update your existing components to use the new design system classes

3. Create a style guide page at `/style-guide` to showcase all components

4. Consider adding:
   - Loading states with skeleton screens
   - Error states with clean error messages
   - Success states with subtle animations
   - Form components matching the design system

This implementation guide provides a solid foundation for implementing the Sanity Clean design aesthetic in your ProSpot website while maintaining flexibility for your specific needs.