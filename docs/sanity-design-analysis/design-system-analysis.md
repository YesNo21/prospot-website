# Sanity Next.js Clean Template - Design System Analysis

## Overview
This document analyzes the design patterns and styling approaches used in the Sanity Next.js Clean template based on the provided HTML and research. The template exemplifies a modern, minimalist design philosophy with a focus on content-first presentation.

## Core Design Principles

### 1. Minimalist Aesthetic
- **Clean, uncluttered layouts** with generous whitespace
- **High contrast** black and white color scheme
- **Subtle textures** using tile/grid patterns for depth
- **Typography-focused** design that prioritizes readability

### 2. Content-First Approach
- Design choices deliberately excluded from CMS fields
- Layout and styling handled by the design system
- Content editors focus purely on content creation
- Responsive design that adapts to content needs

## Color Palette

### Primary Colors
```css
/* Core Colors */
--color-black: #000000;
--color-white: #FFFFFF;
--color-gray-50: #FAFAFA;
--color-gray-100: #F5F5F5;
--color-gray-200: #E5E5E5;
--color-gray-300: #D4D4D4;
--color-gray-400: #A3A3A3;
--color-gray-500: #737373;
--color-gray-600: #525252;
--color-gray-700: #404040;
--color-gray-800: #262626;
--color-gray-900: #171717;
```

### Accent Colors
```css
/* Brand/Accent (appears to be blue/teal) */
--color-accent: #0EA5E9; /* Sky blue - estimated from demo */
--color-accent-hover: #0284C7;
```

## Typography System

### Font Families
```css
/* Typography Stack */
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
```

### Type Scale
```css
/* Desktop Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
--text-7xl: 4.5rem;    /* 72px */
--text-8xl: 6rem;      /* 96px */
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Letter Spacing
```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
```

## Spacing System

### Base Spacing Scale
```css
/* 4px base unit */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

## Layout Patterns

### Container System
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
```

### Grid System
```css
/* Base Grid */
.grid {
  display: grid;
  gap: 1.5rem;
}

/* Responsive Columns */
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
```

## Component Patterns

### 1. Hero Section
```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background-image: url('/images/tile-1-black.png');
  background-repeat: repeat;
  opacity: 0.1;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8));
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 64rem;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;
  margin-bottom: 1.5rem;
}
```

### 2. Card Component
```css
.card {
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: #d4d4d4;
}
```

### 3. Button Styles
```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  cursor: pointer;
}

.button-primary {
  background: black;
  color: white;
}

.button-primary:hover {
  background: #171717;
  transform: translateY(-1px);
}

.button-secondary {
  background: white;
  color: black;
  border: 1px solid #e5e5e5;
}

.button-secondary:hover {
  background: #fafafa;
  border-color: #d4d4d4;
}
```

### 4. Navigation
```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e5e5e5;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 2rem;
}

.nav-link {
  color: #737373;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: black;
}
```

## Unique Visual Treatments

### 1. Tile Background Pattern
```css
.tile-background {
  background-image: url('/images/tile-1-black.png');
  background-repeat: repeat;
  background-size: 64px 64px;
  opacity: 0.05;
}
```

### 2. Gradient Overlays
```css
.gradient-overlay {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.9) 100%
  );
}
```

### 3. Logo Hover Effect
```css
.logo-container {
  position: relative;
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.05);
}

.logo-plus {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 1.5rem;
  color: #0EA5E9;
}

.logo-container:hover .logo-plus {
  opacity: 1;
}
```

### 4. Prose Typography
```css
.prose {
  color: #262626;
  max-width: 65ch;
  line-height: 1.75;
}

.prose h1 { font-size: 2.25rem; margin-top: 0; margin-bottom: 2rem; }
.prose h2 { font-size: 1.875rem; margin-top: 3rem; margin-bottom: 1.5rem; }
.prose h3 { font-size: 1.5rem; margin-top: 2.5rem; margin-bottom: 1rem; }
.prose p { margin-top: 0; margin-bottom: 1.25rem; }
.prose a { color: #0EA5E9; text-decoration: underline; }
.prose a:hover { color: #0284C7; }
```

## Animation & Transitions

### Standard Transitions
```css
/* Default transition timing */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;

/* Common transitions */
.transition-colors { transition: color var(--transition-base), background-color var(--transition-base); }
.transition-transform { transition: transform var(--transition-base); }
.transition-all { transition: all var(--transition-base); }
```

### Hover States
```css
/* Scale on hover */
.hover-scale:hover { transform: scale(1.05); }

/* Lift on hover */
.hover-lift:hover { transform: translateY(-2px); }

/* Opacity on hover */
.hover-opacity:hover { opacity: 0.8; }
```

## Responsive Design Patterns

### Breakpoints
```css
/* Mobile First Breakpoints */
--screen-sm: 640px;   /* Small devices */
--screen-md: 768px;   /* Medium devices */
--screen-lg: 1024px;  /* Large devices */
--screen-xl: 1280px;  /* Extra large devices */
--screen-2xl: 1536px; /* 2X large devices */
```

### Responsive Typography
```css
/* Fluid Typography */
.text-responsive {
  font-size: clamp(1rem, 2vw, 1.25rem);
}

.heading-responsive {
  font-size: clamp(2rem, 5vw, 4rem);
}

.hero-responsive {
  font-size: clamp(3rem, 10vw, 6rem);
}
```

## Implementation Guidelines

### 1. File Structure
```
src/
├── styles/
│   ├── globals.css      # Global styles and CSS variables
│   ├── components/      # Component-specific styles
│   └── utilities/       # Utility classes
├── components/
│   ├── ui/             # Reusable UI components
│   └── layout/         # Layout components
```

### 2. CSS Architecture
- Use CSS Modules or Tailwind CSS for component styling
- Define global CSS variables in `:root`
- Keep component styles scoped and modular
- Use utility classes for common patterns

### 3. Performance Considerations
- Optimize images and use next/image
- Lazy load non-critical assets
- Use CSS containment for complex components
- Minimize CSS bundle size

### 4. Accessibility
- Maintain color contrast ratios (WCAG AA)
- Use semantic HTML elements
- Include focus states for all interactive elements
- Support keyboard navigation

## Key Takeaways

1. **Simplicity First**: The design prioritizes clarity and readability
2. **Flexible System**: Components are designed to adapt to content
3. **Performance Focused**: Lightweight styling with minimal dependencies
4. **Modern Patterns**: Uses contemporary CSS features and practices
5. **Accessibility**: Built with inclusive design principles

This design system provides a solid foundation for building clean, modern web applications while maintaining flexibility for customization and extension.