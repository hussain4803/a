// MIRAI Car Dealership Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle brand logos and prevent clicking
    const brandLogos = document.querySelectorAll('.brand-logo');
    const brandItems = document.querySelectorAll('.brand-item');
    
    // Make brand logos and their containers non-clickable
    brandLogos.forEach(logo => {
        logo.style.pointerEvents = 'none';
        logo.style.cursor = 'default';
        
        // Prevent any click events
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        
        // Enhanced image loading error handling
        logo.addEventListener('error', function() {
            console.log('Brand logo failed to load:', this.src);
            
            // Create fallback element
            const fallback = document.createElement('div');
            fallback.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: center;
                width: 120px;
                height: 80px;
                background: linear-gradient(135deg, #dc2626 0%, #fbbf24 100%);
                border-radius: 8px;
                color: white;
                font-weight: 600;
                font-size: 14px;
                text-align: center;
                opacity: 0.9;
                pointer-events: none;
            `;
            fallback.textContent = this.alt || 'Brand Logo';
            
            // Replace the broken image with fallback
            this.style.display = 'none';
            this.parentElement.appendChild(fallback);
        });
        
        // Check if image loads successfully
        logo.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for smooth loading
        logo.style.opacity = '0.8';
    });
    
    // Make brand item containers non-clickable
    brandItems.forEach(item => {
        item.style.cursor = 'default';
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });
    
    // Add smooth scroll behavior for any internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation for sections on scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initialize sections with fade-in effect (except hero)
    sections.forEach((section, index) => {
        if (!section.classList.contains('hero')) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            sectionObserver.observe(section);
        }
    });
    
    // Staggered animation for brand items
    brandItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        // Delay animation based on index
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Enhanced hover effects for contact links
    const contactLinks = document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease-out';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Add click feedback
        link.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        link.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.05)';
        });
    });
    
    // Parallax effect for hero section
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            const rate = scrolled * -0.2;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Add typing animation to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid transparent';
        
        let charIndex = 0;
        const typingSpeed = 100;
        
        function typeChar() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText[charIndex];
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else {
                // Add blinking cursor effect briefly
                heroTitle.style.borderRight = '3px solid white';
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1500);
            }
        }
        
        // Start typing animation after a brief delay
        setTimeout(typeChar, 500);
    }
    
    // Add smooth animation for leadership cards
    const leaderCards = document.querySelectorAll('.leader-card');
    leaderCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, (index + 1) * 200);
    });
    
    // Add subtle animation to contact sections
    const contactSections = document.querySelectorAll('.hero-contact, .about-contact, .final-contact');
    contactSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 800);
    });
    
    // Performance optimization: Intersection Observer for images
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // For brand logos, add fallback handling
                if (img.classList.contains('brand-logo')) {
                    // Check if image is already loaded or broken
                    if (img.complete && img.naturalHeight === 0) {
                        // Image is broken, trigger error handler
                        img.dispatchEvent(new Event('error'));
                    } else if (img.complete) {
                        // Image loaded successfully
                        img.style.opacity = '1';
                    }
                } else {
                    img.style.opacity = '1';
                }
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    // Observe all images for lazy loading effect
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.transition = 'opacity 0.5s ease-out';
        imageObserver.observe(img);
    });
    
    // Add comprehensive click prevention for all brand-related elements
    const preventBrandClicks = function(e) {
        const target = e.target;
        if (target.closest('.brand-item') || target.classList.contains('brand-logo')) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
    };
    
    // Apply click prevention at document level
    document.addEventListener('click', preventBrandClicks, true);
    document.addEventListener('mousedown', preventBrandClicks, true);
    document.addEventListener('mouseup', preventBrandClicks, true);
    
    // Add enhanced visual feedback for interactive elements
    const interactiveElements = document.querySelectorAll('a:not(.brand-logo):not(.brand-item a)');
    interactiveElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #fbbf24';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Smooth reveal animation for section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(-20px)';
        title.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    titleObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        titleObserver.observe(title);
    });
    
    // Pre-load and validate brand images
    const brandImageUrls = [
        'https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png',
        'https://tse1.mm.bing.net/th/id/OIP.XbOJhzTZXYdpsGK1SLhdigHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3',
        'https://logos-world.net/wp-content/uploads/2020/05/Mazda-Logo.png',
        'https://logos-world.net/wp-content/uploads/2021/03/Honda-Emblem.png',
        'https://toppng.com/uploads/preview/mitsubishi-logo-11530961040zbn1z0puwo.png',
        'https://th.bing.com/th/id/R.35647c0cec927537fa43ed1836a446c2?rik=7Lzu71WwPczowA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fhyundai-logo-png-hyundai-car-logo-png-brand-image-1749.png&ehk=UI8O%2bS7ci5lpalKI9Rf1u%2bMYvCgw%2bVwAeupMAcxmk2g%3d&risl=&pid=ImgRaw&r=0',
        'https://tse3.mm.bing.net/th/id/OIP.8ve11m9d8nMrpaYWXgul5QHaFD?rs=1&pid=ImgDetMain&o=7&rm=3',
        'https://logos-world.net/wp-content/uploads/2020/04/Nissan-Logo-2001-present.png',
        'https://tse3.mm.bing.net/th/id/OIP.v3QEEwzyLJwAQYcnEkHi5QHaCV?rs=1&pid=ImgDetMain&o=7&rm=3'
    ];
    
    // Console message for developers
    console.log('🚗 MIRAI Car Dealership - Website Loaded Successfully');
    console.log('📧 Contact: miraiboeki@gmail.com');
    console.log('📱 Layth: +817038123707');
    console.log('📱 Rafid: +818048083366');
    console.log('🏢 Brand logos loaded with fallback support');
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle viewport changes for responsive adjustments
const handleResize = debounce(() => {
    // Recalculate any dynamic positioning if needed
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = 'translateY(0)';
    }
}, 250);

window.addEventListener('resize', handleResize);

// Global error handling for external resources
window.addEventListener('error', function(e) {
    if (e.target && e.target.tagName === 'IMG' && e.target.classList.contains('brand-logo')) {
        console.warn('Brand logo loading error:', e.target.src);
        
        // Ensure fallback is created if not already done
        if (!e.target.nextElementSibling || !e.target.nextElementSibling.textContent.includes('Brand')) {
            const fallback = document.createElement('div');
            fallback.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: center;
                width: 120px;
                height: 80px;
                background: linear-gradient(135deg, #dc2626 0%, #fbbf24 100%);
                border-radius: 8px;
                color: white;
                font-weight: 600;
                font-size: 14px;
                text-align: center;
                opacity: 0.9;
                pointer-events: none;
            `;
            fallback.textContent = e.target.alt || 'Brand Logo';
            
            e.target.style.display = 'none';
            e.target.parentElement.appendChild(fallback);
        }
    }
}, true);