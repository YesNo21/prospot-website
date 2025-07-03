# Sanity Clean Design - Quick Reference

## Essential Design Elements

### 1. Core Color Values
```css
/* Must-have colors */
--black: #000000;
--white: #FFFFFF;
--gray-200: #E5E5E5;  /* Borders */
--gray-500: #737373;  /* Secondary text */
--gray-600: #525252;  /* Body text */
--accent: #0EA5E9;    /* Blue accent */
```

### 2. Typography Classes
```css
/* Hero/Display text */
.title-hero { @apply text-5xl md:text-7xl font-bold tracking-tighter; }

/* Section headings */
.title-section { @apply text-3xl md:text-5xl font-bold tracking-tight; }

/* Card titles */
.title-card { @apply text-xl md:text-2xl font-semibold; }

/* Body text */
.text-body { @apply text-gray-600 leading-relaxed; }

/* Monospace accent */
.font-mono { font-family: ui-monospace, SFMono-Regular, monospace; }
```

### 3. Spacing System
```css
/* Standard spacing */
p-4   /* 16px */
p-6   /* 24px */
p-8   /* 32px */
mb-4  /* 16px bottom margin */
mb-8  /* 32px bottom margin */
gap-6 /* 24px gap */
```

### 4. Key Components

#### Hero Pattern Background
```html
<section class="relative hero-pattern">
  <!-- Content -->
</section>
```

#### Clean Card
```html
<div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all">
  <!-- Card content -->
</div>
```

#### Primary Button
```html
<button class="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 hover:-translate-y-0.5 transition-all">
  Get Started
</button>
```

#### Navigation Bar
```html
<nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
  <!-- Nav content -->
</nav>
```

### 5. Essential Patterns

#### Background Tile Pattern
```css
.hero-pattern::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```

#### Gradient Overlay
```css
.gradient-overlay {
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.9));
}
```

#### Logo Hover Effect
```css
.logo-hover { @apply relative transition-transform hover:scale-105; }
.logo-hover::after {
  content: '+';
  @apply absolute -top-2 -right-2 text-2xl text-blue-500 opacity-0 transition-opacity;
}
.logo-hover:hover::after { @apply opacity-100; }
```

### 6. Responsive Breakpoints
```css
sm: 640px   /* Small screens */
md: 768px   /* Medium screens */
lg: 1024px  /* Large screens */
xl: 1280px  /* Extra large screens */
```

### 7. Animation Timings
```css
duration-200  /* 200ms - standard */
duration-300  /* 300ms - slower */
ease-out      /* Standard easing */
```

## Implementation Checklist

- [ ] Install Tailwind Typography plugin
- [ ] Update global CSS with color variables
- [ ] Add hero pattern background SVG
- [ ] Implement base button styles
- [ ] Create card component with hover effects
- [ ] Add navigation with backdrop blur
- [ ] Use tracking-tighter for large headings
- [ ] Apply generous whitespace (py-20, py-24)
- [ ] Add subtle hover animations
- [ ] Implement responsive text sizing

## Quick Wins

1. **Large, Bold Headlines**
   ```html
   <h1 class="text-7xl font-bold tracking-tighter">Your Headline</h1>
   ```

2. **Clean Cards with Hover**
   ```html
   <div class="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all">
   ```

3. **Monospace Accents**
   ```html
   <span class="font-mono text-sm text-gray-500">PRO FEATURE</span>
   ```

4. **Generous Section Spacing**
   ```html
   <section class="py-20 md:py-24">
   ```

5. **Subtle Background Patterns**
   ```html
   <div class="hero-pattern opacity-5">
   ```

## Common Patterns to Avoid

- ❌ Too many colors - stick to black, white, grays
- ❌ Small typography - go bold and large
- ❌ Cramped spacing - use generous padding
- ❌ Heavy shadows - keep them subtle
- ❌ Complex gradients - simple fades only
- ❌ Busy backgrounds - subtle patterns at low opacity

## CSS Variables to Add

```css
:root {
  /* Colors */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-accent: #0EA5E9;
  
  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, monospace;
  
  /* Spacing */
  --space-unit: 1rem;
  
  /* Transitions */
  --transition: 200ms ease;
}
```

This quick reference provides the essential elements needed to implement the Sanity Clean design aesthetic efficiently in your ProSpot website.