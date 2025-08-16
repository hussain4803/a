// MIRAI Car Dealership Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for any anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effects for sections
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

    // Initialize sections with fade-in effect
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });

    // Make hero section visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }

    // Ensure brand logos are not clickable and add hover effect
    const brandLogos = document.querySelectorAll('.brand-logo');
    brandLogos.forEach(logo => {
        // Remove any potential click handlers and prevent navigation
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        
        // Ensure parent elements are also not clickable
        const parentBrandItem = logo.closest('.brand-item');
        if (parentBrandItem) {
            parentBrandItem.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        }
        
        // Add image loading error handling
        logo.addEventListener('error', function() {
            this.alt = this.alt + ' (Logo unavailable)';
            this.style.opacity = '0.5';
        });
    });

    // Add loading animation for brand logos
    const brandItems = document.querySelectorAll('.brand-item');
    brandItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        
        // Stagger the animation
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Enhanced contact link interactions
    const contactLinks = document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease-out';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add subtle parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            const rate = scrolled * -0.3;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            heroTitle.textContent += originalText[charIndex];
            charIndex++;
            
            if (charIndex >= originalText.length) {
                clearInterval(typingInterval);
                // Add cursor blink effect briefly
                heroTitle.style.borderRight = '3px solid white';
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        }, 150);
    }

    // Logo fade-in effect
    const heroLogo = document.querySelector('.hero-logo');
    if (heroLogo) {
        heroLogo.style.opacity = '0';
        heroLogo.style.transform = 'scale(0.8)';
        heroLogo.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        setTimeout(() => {
            heroLogo.style.opacity = '0.95';
            heroLogo.style.transform = 'scale(1)';
        }, 500);
    }

    // Leadership cards animation
    const leaderCards = document.querySelectorAll('.leader-card');
    leaderCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px) scale(0.95)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        // Stagger the animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 200 + 800);
    });

    // Console greeting message
    console.log('🚗 Welcome to MIRAI Car Dealership! 🚗');
    console.log('Premium Used & New Cars | Contact: miraiboeki@gmail.com');

    // Performance optimization: Lazy load images that are not initially visible
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Utility function to handle any form submissions (if added later)
function handleFormSubmission(formData) {
    // This function can be extended later if contact forms are added
    console.log('Form submission handler ready');
}

// Error handling for external resources
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        e.target.style.opacity = '0.5';
        e.target.alt = e.target.alt + ' (Loading error)';
    }
}, true);

// Smooth scroll behavior for better user experience
if ('scrollBehavior' in document.documentElement.style) {
    // Browser supports smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
} else {
    // Fallback for browsers that don't support smooth scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetOffset = target.offsetTop;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
}