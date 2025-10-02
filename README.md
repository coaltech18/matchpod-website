# MatchPod - Find Your Space. Find Your People.

A modern, immersive Gen-Z roommate matching platform built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## 🚀 Features

- **AI-Powered Matching**: Smart algorithm analyzes 40+ lifestyle factors
- **3D Immersive Experience**: Interactive Three.js animations
- **Smooth Page Transitions**: Framer Motion animations throughout
- **Swipeable Card Interface**: React Spring gesture-based interactions
- **Fully Responsive**: Mobile-first design that works everywhere
- **Modern Gen-Z Aesthetic**: Sky blue (#99e0ff) and Midnight (#030f18) color palette

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Three.js + Drei
- **UI Components**: shadcn/ui
- **Gestures**: @use-gesture/react + React Spring

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── how-it-works/         # How It Works page
│   ├── features/             # Features page
│   ├── about/                # About page
│   ├── get-started/          # Get Started/Waitlist page
│   ├── layout.tsx            # Root layout with Navbar & Footer
│   └── globals.css           # Global styles & CSS variables
├── components/
│   ├── Navbar.tsx            # Modern responsive navbar
│   ├── MatchPodLogo.tsx      # Animated logo component
│   ├── PageTransition.tsx    # Page transition wrapper
│   ├── ThreePod.tsx          # 3D pod/orb component
│   ├── SwipeCards.tsx        # Swipeable card demo
│   ├── FAQ.tsx               # Collapsible FAQ component
│   └── utils/
│       └── MotionDiv.tsx     # Framer Motion div wrapper
└── ...
```

## 🎨 Design System

### Color Palette
- **Midnight**: `#030f18` - Primary background
- **Sky**: `#99e0ff` - Primary accent/CTA color
- **Violet**: `#6C63FF` - Secondary accent
- **Aqua**: `#20E3D2` - Tertiary accent

### Typography
- Primary: Geist Sans (Variable font)
- Monospace: Geist Mono (Variable font)

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

1. **Home** (`/`)
   - Hero section with 3D pod animation
   - Feature highlights
   - Swipe card demo
   - Testimonials
   - CTA sections

2. **How It Works** (`/how-it-works`)
   - Step-by-step process explanation
   - Benefits overview
   - Visual timeline

3. **Features** (`/features`)
   - Core features deep dive
   - Matching algorithm visualization
   - Additional features grid

4. **About** (`/about`)
   - Mission & vision
   - Company timeline
   - Team profiles
   - Core values

5. **Get Started** (`/get-started`)
   - Waitlist signup form
   - Benefits list
   - FAQ section
   - Contact information

## 🎭 Animations & Interactions

- **Page Transitions**: Smooth fade & slide effects on route changes
- **Scroll Animations**: Elements fade in as you scroll
- **Hover Effects**: Scale, glow, and color transitions
- **3D Interactions**: Auto-rotating pod with OrbitControls
- **Swipe Gestures**: Card swipe with physics-based animations
- **Mobile Menu**: Animated slide-in navigation

## 🔧 Configuration

### Tailwind CSS
Custom color tokens are defined in `tailwind.config.ts` and CSS variables in `src/app/globals.css`.

### TypeScript
Strict mode enabled with path aliases configured for clean imports.

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first approach.

## 🎯 Performance

- Next.js 15 App Router for optimal performance
- Lazy loading for 3D components
- Optimized images and fonts
- CSS-in-JS with zero runtime overhead

## 🤝 Contributing

This is a startup project. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

Private - All rights reserved by MatchPod

## 📧 Contact

- Email: team@matchpod.app
- Instagram: @matchpod
- Twitter: @matchpod

---

**Built with ❤️ for Gen-Z by MatchPod**
