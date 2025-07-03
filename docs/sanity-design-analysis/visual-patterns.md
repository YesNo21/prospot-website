# Sanity Clean Template - Visual Pattern Library

## Key Visual Patterns from the Template

### 1. Tile/Grid Background Pattern

The template uses a subtle repeating tile pattern for texture:

```css
/* SVG Pattern Background */
.pattern-background {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
}

/* Alternative: Dots Pattern */
.dots-pattern {
  background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Alternative: Grid Pattern */
.grid-pattern {
  background-image: 
    linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

### 2. Logo Hover Effect with Plus Symbol

```tsx
// React Component
export function LogoWithPlus() {
  return (
    <div className="relative inline-block group">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
      </div>
      <span className="absolute -top-1 -right-1 text-xl text-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        +
      </span>
    </div>
  );
}
```

### 3. Gradient Text Effect

```css
.gradient-text {
  background: linear-gradient(135deg, #000000 0%, #434343 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Animated gradient */
.animated-gradient-text {
  background: linear-gradient(
    135deg,
    #000000 0%,
    #434343 25%,
    #000000 50%,
    #434343 75%,
    #000000 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 4. Clean Card Variations

```tsx
// Minimal Card
export function MinimalCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
      {children}
    </div>
  );
}

// Ghost Card
export function GhostCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-transparent rounded-lg p-6 transition-all duration-200 hover:border-gray-200 hover:bg-gray-50">
      {children}
    </div>
  );
}

// Elevated Card
export function ElevatedCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      {children}
    </div>
  );
}
```

### 5. Typography Hierarchy

```css
/* Display Text */
.text-display {
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.05em;
  font-weight: 800;
}

/* Hero Text */
.text-hero {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1;
  letter-spacing: -0.04em;
  font-weight: 700;
}

/* Section Title */
.text-section {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 600;
}

/* Card Title */
.text-card {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: 600;
}

/* Body Text */
.text-body {
  font-size: 1rem;
  line-height: 1.7;
  color: rgb(71, 71, 71);
}

/* Small Text */
.text-small {
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgb(115, 115, 115);
}

/* Mono Text */
.text-mono {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace;
  font-size: 0.875rem;
  letter-spacing: 0;
}
```

### 6. Button Variations

```tsx
// Button Collection
export function ButtonExamples() {
  return (
    <div className="space-y-4">
      {/* Primary Button */}
      <button className="px-6 py-3 bg-black text-white rounded-md font-medium transition-all duration-200 hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-md">
        Primary Action
      </button>

      {/* Secondary Button */}
      <button className="px-6 py-3 bg-white text-black border border-gray-300 rounded-md font-medium transition-all duration-200 hover:bg-gray-50 hover:border-gray-400">
        Secondary Action
      </button>

      {/* Ghost Button */}
      <button className="px-6 py-3 text-black rounded-md font-medium transition-all duration-200 hover:bg-gray-100">
        Ghost Action
      </button>

      {/* Text Button */}
      <button className="text-black font-medium underline-offset-4 transition-all duration-200 hover:underline">
        Text Link
      </button>

      {/* Icon Button */}
      <button className="p-2 rounded-full transition-all duration-200 hover:bg-gray-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
}
```

### 7. Section Layouts

```tsx
// Full Width Section with Pattern
export function PatternSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-background opacity-5" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Your content here */}
      </div>
    </section>
  );
}

// Split Section
export function SplitSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-section mb-6">Your Title Here</h2>
            <p className="text-body mb-8">Your description text goes here.</p>
            <button className="btn-primary">Learn More</button>
          </div>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {/* Image or content */}
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 8. Navigation Styles

```tsx
// Clean Navigation Bar
export function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <LogoWithPlus />
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Products
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Solutions
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Pricing
            </a>
          </div>
          
          {/* CTA */}
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

### 9. Loading States

```tsx
// Skeleton Loader
export function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-3 bg-gray-200 rounded w-full mb-2" />
      <div className="h-3 bg-gray-200 rounded w-5/6" />
    </div>
  );
}

// Spinner
export function Spinner() {
  return (
    <div className="inline-flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
    </div>
  );
}
```

### 10. Form Elements

```tsx
// Clean Input
export function CleanInput() {
  return (
    <input
      type="text"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
      placeholder="Enter text..."
    />
  );
}

// Clean Textarea
export function CleanTextarea() {
  return (
    <textarea
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
      rows={4}
      placeholder="Enter message..."
    />
  );
}

// Clean Select
export function CleanSelect() {
  return (
    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  );
}
```

## Color Usage Guidelines

### Primary Palette
- **Black (#000000)**: Primary text, buttons, emphasis
- **White (#FFFFFF)**: Backgrounds, reverse text
- **Gray Scale**: Supporting text, borders, subtle backgrounds

### Accent Colors (when needed)
- **Blue (#0EA5E9)**: Links, interactive elements
- **Green (#10B981)**: Success states
- **Red (#EF4444)**: Error states
- **Yellow (#F59E0B)**: Warning states

### Usage Rules
1. **High Contrast**: Maintain WCAG AA compliance
2. **Minimal Color**: Use color sparingly for emphasis
3. **Consistent Grays**: Use the defined gray scale
4. **White Space**: Let content breathe with generous spacing

## Animation Guidelines

### Timing Functions
```css
/* Standard easings */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* Durations */
--duration-fast: 150ms;
--duration-base: 200ms;
--duration-slow: 300ms;
```

### Animation Principles
1. **Subtle**: Keep animations minimal and purposeful
2. **Consistent**: Use the same timing across similar elements
3. **Performance**: Prefer transform and opacity animations
4. **Accessibility**: Respect prefers-reduced-motion

This visual pattern library captures the essence of the Sanity Clean template's design system, providing you with ready-to-use components and patterns that maintain the clean, professional aesthetic throughout your ProSpot website.