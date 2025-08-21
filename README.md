# Portfolio Studio Website

A modern, professional portfolio website that mirrors the Math Orbia template structure and design. Built with clean HTML, CSS, and JavaScript, ready for Webflow implementation.

## 🚀 Features

### Core Components
- **Top Marquee Banner**: Infinite scrolling "PORTFOLIO STUDIO –" banner
- **Sticky Header**: Navigation with backdrop blur and scroll effects
- **Hero Sections**: Left-aligned content with role labels and dual CTA buttons
- **Project Grids**: Filterable project cards with hover effects
- **Testimonials**: Horizontal scrolling carousel with smooth interactions
- **FAQ Accordion**: Expandable questions with smooth animations
- **Contact Form**: Validated form with notification system
- **Responsive Design**: Mobile-first approach with clean breakpoints

### Interactive Elements
- **Smooth Scrolling**: Effortless navigation between sections
- **Project Filtering**: All/Design/Development tabs with smooth transitions
- **Hover Effects**: Subtle animations on cards, buttons, and links
- **Mobile Navigation**: Clean hamburger menu with smooth animations
- **Form Validation**: Real-time feedback with styled notifications
- **Scroll Animations**: Elements animate in as they come into view

## 📁 File Structure

```
portfolio-studio/
├── index.html              # Homepage with hero, recent work, testimonials
├── about.html              # About page with services and stats
├── projects.html           # Projects page with filter tabs
├── contact.html            # Contact page with form and FAQ
├── project-template.html   # Individual project detail page
├── styles.css              # Complete CSS with variables and components
├── scripts.js              # JavaScript functionality and interactions
└── README.md               # This documentation file
```

## 🎨 Design System

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Scale**: 
  - H1: 3.5rem (56px)
  - H2: 2.5rem (40px)
  - H3: 2rem (32px)
  - H4: 1.5rem (24px)
  - Body: 1rem (16px)

### Color Palette
- **Primary**: #000000 (Black)
- **Secondary**: #666666 (Dark Gray)
- **Background**: #ffffff (White)
- **Background Alt**: #f8f8f8 (Light Gray)
- **Border**: #e5e5e5 (Light Gray)
- **Text**: #000000 (Black)
- **Text Light**: #666666 (Dark Gray)

### Spacing System
- **XS**: 0.5rem (8px)
- **SM**: 1rem (16px)
- **MD**: 1.5rem (24px)
- **LG**: 2rem (32px)
- **XL**: 3rem (48px)
- **XXL**: 4rem (64px)
- **XXXL**: 6rem (96px)

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

## 🛠️ Webflow Implementation

### Section Structure
Each page follows this consistent structure:
1. **Marquee Banner** (Top)
2. **Header Navigation** (Fixed)
3. **Main Content** (Page-specific sections)
4. **Footer** (Multi-column)

### Container Settings
- **Max Width**: 1200px
- **Padding**: 2rem (32px) on desktop, 1rem (16px) on mobile
- **Margin**: 0 auto (centered)

### Grid Systems
- **Work/Project Grid**: `repeat(auto-fit, minmax(350px, 1fr))`
- **Footer Grid**: `repeat(auto-fit, minmax(250px, 1fr))`
- **Services Grid**: `repeat(auto-fit, minmax(300px, 1fr))`

### Class Naming Convention
Follows BEM-style naming for Webflow compatibility:
- **Blocks**: `.hero`, `.work-card`, `.testimonial-card`
- **Elements**: `.hero-content`, `.work-card-image`, `.testimonial-quote`
- **Modifiers**: `.btn--primary`, `.nav-link.active`

## 🔧 Component Mapping

### Navigation
```html
<!-- Webflow Structure -->
<nav class="nav">
  <div class="nav-container">
    <div class="nav-brand">Portfolio Studio</div>
    <ul class="nav-menu">
      <li><a href="#" class="nav-link">Home</a></li>
      <!-- ... other links -->
    </ul>
    <div class="nav-toggle">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>
```

### Project Cards
```html
<!-- Webflow Structure -->
<article class="project-card" data-category="design">
  <div class="project-card-image">
    <img src="..." alt="Project Name">
  </div>
  <div class="project-card-content">
    <h3 class="project-card-title">Project Name</h3>
    <div class="project-card-meta">
      <span class="project-card-category">Design</span>
      <span class="project-card-year">2024</span>
    </div>
  </div>
</article>
```

### Testimonials
```html
<!-- Webflow Structure -->
<div class="testimonials-strip">
  <div class="testimonial-card">
    <blockquote class="testimonial-quote">Quote text...</blockquote>
    <div class="testimonial-author">
      <div class="testimonial-name">Name</div>
      <div class="testimonial-title">Title</div>
    </div>
  </div>
  <!-- ... more cards -->
</div>
```

## 📱 Responsive Behavior

### Mobile Navigation
- Hamburger menu with smooth animations
- Full-screen overlay navigation
- Touch-friendly interactions

### Grid Adaptations
- Single column layout on mobile
- Reduced spacing and padding
- Optimized typography scales

### Touch Interactions
- Smooth scrolling testimonials
- Touch-friendly buttons and forms
- Optimized hover states for mobile

## 🎯 Performance Features

### Optimizations
- **Throttled Scroll Events**: 60fps performance
- **Intersection Observer**: Efficient scroll animations
- **CSS Variables**: Consistent theming
- **Reduced Motion Support**: Accessibility compliance

### Loading Strategy
- **Progressive Enhancement**: Core functionality without JavaScript
- **Lazy Loading**: Images and animations load on demand
- **Smooth Transitions**: Hardware-accelerated animations

## ♿ Accessibility

### Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus States**: Visible focus indicators
- **Reduced Motion**: Respects user preferences

### Standards Compliance
- **WCAG 2.1 AA**: Color contrast and text sizing
- **Section 508**: Federal accessibility requirements
- **ADA Compliance**: Americans with Disabilities Act

## 🚀 Deployment

### Static Hosting
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Repository hosting
- **AWS S3**: Cloud hosting

### Webflow Migration
1. **Import HTML**: Copy HTML structure to Webflow
2. **Apply CSS**: Use Webflow Designer to match styles
3. **Configure Interactions**: Set up hover states and animations
4. **Test Responsiveness**: Verify mobile behavior
5. **Optimize Performance**: Compress images and assets

## 🔄 Customization

### Brand Updates
- **Company Name**: Replace "Portfolio Studio" throughout
- **Contact Information**: Update email, phone, location
- **Social Links**: Connect to actual social media accounts
- **Project Content**: Replace with real portfolio items

### Color Scheme
Modify CSS variables in `:root`:
```css
:root {
  --color-primary: #your-brand-color;
  --color-secondary: #your-secondary-color;
  /* ... other colors */
}
```

### Typography
Update font imports and CSS variables:
```css
:root {
  --font-family: 'Your Font', sans-serif;
  /* ... other typography settings */
}
```

## 📊 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+

## 🧪 Testing

### Functionality
- [ ] Navigation and routing
- [ ] Form validation and submission
- [ ] Project filtering
- [ ] FAQ accordion
- [ ] Mobile responsiveness
- [ ] Touch interactions

### Performance
- [ ] Page load speed
- [ ] Scroll performance
- [ ] Animation smoothness
- [ ] Mobile performance

### Accessibility
- [ ] Screen reader compatibility
- [ ] Keyboard navigation
- [ ] Color contrast
- [ ] Focus management

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For implementation questions or customization requests:
1. Check the Webflow implementation notes above
2. Review the component mapping section
3. Test responsive behavior across devices
4. Verify accessibility compliance

## 🔮 Future Enhancements

- **CMS Integration**: Dynamic content management
- **Blog Section**: Company updates and insights
- **Portfolio Filtering**: Advanced category and tag systems
- **Dark Mode**: Theme toggle functionality
- **Multi-language**: Internationalization support
- **Analytics**: Performance and user behavior tracking

---

**Built with ❤️ for modern web development and Webflow integration**
