# The Vibe Coders' Guide to the Singularity

A modern, responsive website for "The Vibe Coders' Guide to the Singularity: Or What to Do When the Robots Take Your Job" - a tactical, subversive survival guide for developers navigating the AI revolution.

## 🚀 Features

### Design & User Experience
- **Cyberpunk Aesthetic**: Dark theme with neon accents (#00FF9C, #FF00FF)
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **Typography**: JetBrains Mono for code/headings, Inter for body text
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### Technical Implementation
- **Static Website**: Pure HTML5, CSS3, and Vanilla JavaScript
- **Performance Optimized**: Lazy loading, minified assets, optimized fonts
- **Modern CSS**: Grid, Flexbox, CSS Variables, clamp() for fluid typography
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

### Content Management
- **Markdown Integration**: Fetches and parses content from GitHub repository
- **Syntax Highlighting**: Code blocks with copy functionality
- **Dynamic TOC**: Auto-generated table of contents with navigation
- **Chapter Navigation**: Seamless browsing through all 12 chapters + appendices

### Interactive Features
- **Theme Toggle**: Dark/light mode with system preference detection
- **Mobile Menu**: Collapsible sidebar navigation
- **Progress Tracking**: Reading progress indicator
- **Download Options**: PDF, EPUB, and source code downloads
- **Search & Navigation**: Smooth scrolling, keyboard shortcuts

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Hosting**: GitHub Pages ready
- **Content Source**: GitHub repository markdown files
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Icons**: Feather Icons (inline SVG)

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── styles/
│   └── main.css            # All styles with CSS custom properties
├── scripts/
│   ├── main.js             # Application coordinator
│   ├── content-loader.js   # Markdown fetching and parsing
│   ├── navigation.js       # TOC generation and navigation
│   ├── theme.js           # Dark/light mode management
│   └── markdown-parser.js  # Markdown to HTML conversion
├── assets/
│   ├── favicon.svg        # Site favicon
│   └── favicon.png        # Fallback favicon
└── README.md              # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vibecoders/singularity-guide.git
   cd singularity-guide
   ```

2. **Serve locally**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000`

### GitHub Pages Deployment

1. **Enable GitHub Pages** in repository settings
2. **Select source**: Deploy from main branch
3. **Custom domain** (optional): Configure in repository settings
4. **HTTPS**: Automatically enabled by GitHub Pages

## 🎨 Customization

### Color Scheme
The design uses CSS custom properties for easy theming:

```css
:root {
  --accent-primary: #00FF9C;    /* Cyan */
  --accent-secondary: #FF00FF;  /* Magenta */
  --accent-tertiary: #00D4FF;   /* Blue */
  --bg-primary: #0D1117;        /* Dark background */
  --text-primary: #F0F6FC;      /* Light text */
}
```

### Typography
Fluid typography using `clamp()` for responsive scaling:

```css
--font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
```

### Layout
CSS Grid and Flexbox for responsive layouts:

```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
}

@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, mobile menu)
- **Tablet**: 768px - 1024px (adjusted sidebar, simplified hero)
- **Desktop**: > 1024px (full layout with sidebar)

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: ARIA labels and live regions
- **High Contrast**: Supports `prefers-contrast: high`
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Focus Management**: Visible focus indicators
- **Skip Links**: Jump to main content

## 🔧 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **CSS Features**: Grid, Flexbox, Custom Properties, clamp()
- **JavaScript**: ES6+ features, async/await, fetch API
- **Progressive Enhancement**: Core functionality works without JavaScript

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: < 100KB total (HTML + CSS + JS)
- **Image Optimization**: Lazy loading, modern formats
- **Font Loading**: `font-display: swap` for faster rendering

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- **CSS**: Use CSS custom properties for theming
- **JavaScript**: Vanilla JS, no frameworks
- **Accessibility**: Test with screen readers
- **Performance**: Optimize images and minimize bundles
- **Browser Testing**: Test across modern browsers

## 📄 License

This project is released under the CC0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: VS Code, GitHub Dark theme, cyberpunk aesthetics
- **Typography**: Google Fonts (Inter, JetBrains Mono)
- **Icons**: Feather Icons
- **Content**: The Vibe Coders Collective

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/vibecoders/singularity-guide/issues)
- **Discussions**: [GitHub Discussions](https://github.com/vibecoders/singularity-guide/discussions)
- **Email**: hello@vibecoders.dev
- **Discord**: [Join our community](https://discord.gg/vibecoders)

---

**Built with ❤️ and excessive amounts of caffeine by the Vibe Coders Collective**

*"Learn to vibe or learn to code (again) - but this time, do it together."*