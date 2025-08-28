# Matchpod Website

A stunning, immersive 5-page website for the Matchpod mobile app that builds trust and drives downloads. Built with vanilla HTML, CSS, JavaScript, Three.js, and Anime.js.

## Features

- **Dark, Elegant Design**: Premium dark theme with the specified color palette
- **3D Background**: Mesmerizing plexus network of glowing particles using Three.js
- **Smooth Animations**: Scroll-triggered animations with Anime.js and CSS
- **Responsive Design**: Fully responsive across all devices
- **5 Separate Pages**: Each page tells a part of the Matchpod story
- **Interactive Navigation**: Smooth navigation between pages with visual indicators

## Technology Stack

- **Vanilla HTML5** with modern CSS3
- **JavaScript ES6+** for interactivity
- **Three.js** for 3D background effects
- **Anime.js** for smooth animations
- **Font Awesome** for icons
- **Google Fonts** (Inter) for typography

## Color Palette

- Background: `#121826`
- Text Primary: `#F3F4F6`
- Text Secondary: `#A9B4C2`
- Primary: `#8A4FFF`
- Highlight: `#F5B851`

## Pages

1. **index.html** - Home: Introduction and mission statement
2. **problem.html** - Problem: Articulates user frustrations with current market
3. **solution.html** - Solution: Presents Matchpod ideology as the solution
4. **how-it-works.html** - How It Works: Step-by-step user journey
5. **features.html** - Features: Key app features and final call-to-action

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML/CSS/JS

### Installation

1. Clone or download the repository
2. Open any of the HTML files in your browser
3. Navigate between pages using the navigation dots on the right

### Local Development

For local development, you can use any simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it installed)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
├── index.html              # Home page
├── problem.html            # Problem page
├── solution.html           # Solution page
├── how-it-works.html       # How it works page
├── features.html           # Features page
└── README.md              # Project documentation
```

## Features by Page

### Home Page (index.html)
- Calm, rotating 3D particle background
- Hero section with mission statement
- Call-to-action buttons
- Smooth fade-in animations

### Problem Page (problem.html)
- Chaotic, agitated 3D background
- Three problem cards with icons
- Hover effects and animations
- Yellow/orange color scheme

### Solution Page (solution.html)
- Harmonious, balanced 3D background
- Three solution pillars
- Purple color scheme
- Gradient text effects

### How It Works Page (how-it-works.html)
- Organized, flowing 3D background
- Vertical timeline with steps
- Interactive timeline elements
- Responsive design

### Features Page (features.html)
- Logo-forming 3D background
- Feature chips display
- Final call-to-action section
- App store download buttons

## 3D Background Evolution

Each page features a unique 3D particle system that evolves with the narrative:

1. **Home**: Calm, slow rotation with purple particles
2. **Problem**: Chaotic, fast movement with orange particles
3. **Solution**: Harmonious, balanced movement with purple particles
4. **How It Works**: Organized, structured movement with orange particles
5. **Features**: Particles converge to form logo shape with purple particles

## Customization

### Colors
Update the CSS custom properties in the `:root` selector of each HTML file.

### Content
Modify the HTML content in each file to match your specific messaging.

### 3D Background
Adjust particle parameters in the JavaScript section of each file to change the visual effect.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance with:
- Efficient Three.js rendering
- Optimized animations
- Responsive design
- Minimal external dependencies

## Deployment

Simply upload all HTML files to any web hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any traditional web hosting

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.
