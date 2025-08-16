// Translation data with comprehensive multilingual support
const translations = {
  "en": {
    "hero_title": "MIRAI Premium Vehicles",
    "hero_subtitle": "Quality Used Cars, New Vehicles, and More You Can Trust",
    "phone": "Phone",
    "email": "Email", 
    "get_started": "Get Started Today",
    "trusted_brands": "Trusted Automotive Brands",
    "about_title": "About MIRAI Dealership",
    "about_description": "We are MIRAI, a trusted dealership committed to providing quality vehicles and machinery to our customers. With years of experience in the automotive industry, we carefully inspect every vehicle to ensure reliability and customer satisfaction.",
    "leadership_title": "Our Leadership Team",
    "contact_title": "Contact Information",
    "contact_description": "Get in touch with MIRAI for quality vehicles and professional service.",
    "ceo1_name": "Layth Jawad Altufaili",
    "ceo2_name": "Rafid Jawad Altufaili",
    "service_used_cars": "Quality Used Cars",
    "service_certified": "Certified Pre-owned",
    "service_new_cars": "New Cars",
    "service_bikes": "Bikes",
    "service_bicycles": "Bicycles",
    "service_machinery": "Heavy Machinery",
    "service_financing": "Financing Options"
  },
  "ar": {
    "hero_title": "ميراي للمركبات المميزة",
    "hero_subtitle": "سيارات مستعملة عالية الجودة ومركبات جديدة والمزيد يمكنك الوثوق به",
    "phone": "الهاتف",
    "email": "البريد الإلكتروني",
    "get_started": "ابدأ اليوم", 
    "trusted_brands": "علامات تجارية موثوقة للسيارات",
    "about_title": "حول وكالة ميراي",
    "about_description": "نحن ميراي، وكالة موثوقة ملتزمة بتوفير مركبات وآلات عالية الجودة لعملائنا. مع سنوات من الخبرة في صناعة السيارات، نقوم بفحص كل مركبة بعناية لضمان الموثوقية ورضا العملاء.",
    "leadership_title": "فريق القيادة لدينا",
    "contact_title": "معلومات الاتصال",
    "contact_description": "تواصل مع ميراي للحصول على مركبات عالية الجودة وخدمة مهنية.",
    "ceo1_name": "ليث جواد الطفيلي",
    "ceo2_name": "رافد جواد الطفيلي",
    "service_used_cars": "سيارات مستعملة عالية الجودة",
    "service_certified": "مركبات مستعملة معتمدة",
    "service_new_cars": "سيارات جديدة",
    "service_bikes": "دراجات نارية",
    "service_bicycles": "دراجات هوائية",
    "service_machinery": "آلات ثقيلة",
    "service_financing": "خيارات التمويل"
  },
  "ja": {
    "hero_title": "MIRAI プレミアム車両",
    "hero_subtitle": "信頼できる高品質な中古車、新車など",
    "phone": "電話",
    "email": "メール",
    "get_started": "今すぐ始める",
    "trusted_brands": "信頼できる自動車ブランド",
    "about_title": "MIRAIディーラーについて", 
    "about_description": "私たちMIRAIは、お客様に高品質な車両と機械を提供することにコミットした信頼できるディーラーです。自動車業界での長年の経験により、信頼性とお客様の満足度を確保するために、すべての車両を慎重に検査しています。",
    "leadership_title": "リーダーシップチーム",
    "contact_title": "お問い合わせ先",
    "contact_description": "高品質な車両とプロフェッショナルなサービスについては、MIRAIまでお気軽にお問い合わせください。",
    "ceo1_name": "Layth Jawad Altufaili",
    "ceo2_name": "Rafid Jawad Altufaili",
    "service_used_cars": "高品質中古車",
    "service_certified": "認定中古車",
    "service_new_cars": "新車",
    "service_bikes": "バイク",
    "service_bicycles": "自転車",
    "service_machinery": "重機",
    "service_financing": "融資オプション"
  }
};

// Current language state
let currentLanguage = 'en';
let logoAnimationInterval = null;

// Logo Animation Functions
function startLogoAnimation() {
  console.log('Starting logo animation...');
  const animatedLogo = document.getElementById('animatedLogo');
  if (!animatedLogo) {
    console.error('Animated logo element not found');
    return;
  }

  function runAnimation() {
    console.log('Running logo drift animation');
    animatedLogo.classList.add('logo-animating');
    
    setTimeout(() => {
      animatedLogo.classList.remove('logo-animating');
      console.log('Logo animation cycle completed');
    }, 4000); // Animation lasts 4 seconds
  }

  // Run animation immediately
  runAnimation();
  
  // Set up interval to repeat every 6 seconds
  if (logoAnimationInterval) {
    clearInterval(logoAnimationInterval);
  }
  
  logoAnimationInterval = setInterval(runAnimation, 6000);
  console.log('Logo animation interval set up');
}

function stopLogoAnimation() {
  if (logoAnimationInterval) {
    clearInterval(logoAnimationInterval);
    logoAnimationInterval = null;
    console.log('Logo animation stopped');
  }
}

// Smooth scroll to contact section
function scrollToContact() {
  console.log('Scrolling to contact section...');
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    console.log('Scroll initiated successfully');
  } else {
    console.error('Contact section not found');
  }
}

// Language management functions
function setLanguage(lang) {
  if (!lang || !translations[lang]) {
    console.error('Invalid language:', lang);
    return;
  }
  
  console.log('Setting language to:', lang);
  currentLanguage = lang;
  
  // Update HTML attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update all translatable elements
  const elements = document.querySelectorAll('[data-key]');
  console.log('Found', elements.length, 'translatable elements');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
      console.log('Updated', key, 'to:', translations[lang][key]);
    }
  });
  
  // Update page title
  document.title = `${translations[lang].hero_title} - ${translations[lang].hero_subtitle}`;
  
  // Add fade transition effect
  document.body.classList.add('fade-transition');
  setTimeout(() => {
    document.body.classList.remove('fade-transition');
    document.body.classList.add('loaded');
  }, 100);
  
  console.log('Language successfully set to:', lang);
}

// Initialize language system
function initLanguageSystem() {
  console.log('Initializing language system...');
  
  const languageSelect = document.getElementById('languageSelect');
  if (!languageSelect) {
    console.error('Language selector not found!');
    return;
  }
  
  console.log('Language selector found, setting up event listener...');
  
  // Set up language change handler
  languageSelect.addEventListener('change', function(e) {
    const selectedLang = e.target.value;
    console.log('Language changed to:', selectedLang);
    setLanguage(selectedLang);
  });
  
  // Set initial language to English
  languageSelect.value = 'en';
  setLanguage('en');
  
  console.log('Language system initialized successfully');
}

// Brand logo management
function initBrandLogos() {
  console.log('Initializing brand logos...');
  const brandLogos = document.querySelectorAll('.brand-logo');
  console.log('Found', brandLogos.length, 'brand logo images');
  
  brandLogos.forEach((img, index) => {
    console.log('Processing logo', index + 1, 'with src:', img.src);
    
    // Handle successful image load
    img.addEventListener('load', function() {
      console.log(`Successfully loaded brand logo ${index + 1}`);
      this.style.opacity = '1';
      this.classList.add('loaded');
    });
    
    // Handle image load errors
    img.addEventListener('error', function() {
      console.error(`Failed to load brand logo ${index + 1}:`, this.src);
      // Create a fallback display
      const brandName = this.alt || `Brand ${index + 1}`;
      this.style.display = 'none';
      
      // Create text fallback
      const fallback = document.createElement('div');
      fallback.className = 'brand-fallback';
      fallback.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 70px;
        background: #f0f0f0;
        border: 2px dashed #ccc;
        border-radius: 8px;
        font-size: 12px;
        font-weight: bold;
        color: #666;
        text-align: center;
        line-height: 1.2;
      `;
      fallback.textContent = brandName;
      this.parentNode.appendChild(fallback);
    });
    
    // Force immediate visibility for loaded images
    if (img.complete && img.naturalHeight !== 0) {
      img.style.opacity = '1';
      img.classList.add('loaded');
    }
  });
}

// Initialize MIRAI logo
function initMiraiLogo() {
  console.log('Initializing MIRAI logo...');
  const miraiLogo = document.querySelector('.mirai-logo');
  
  if (miraiLogo) {
    miraiLogo.addEventListener('load', function() {
      console.log('MIRAI logo loaded successfully');
      this.style.opacity = '1';
      this.classList.add('loaded');
    });

    miraiLogo.addEventListener('error', function() {
      console.error('Failed to load MIRAI logo:', this.src);
      this.alt = 'MIRAI';
    });

    // Force immediate visibility if already loaded
    if (miraiLogo.complete && miraiLogo.naturalHeight !== 0) {
      miraiLogo.style.opacity = '1';
      miraiLogo.classList.add('loaded');
    }
  } else {
    console.error('MIRAI logo element not found');
  }
}

// Intersection Observer for animations
function observeBrandLogos() {
  const brandItems = document.querySelectorAll('.brand-item');
  console.log('Setting up animations for', brandItems.length, 'brand items');
  
  if (brandItems.length === 0) {
    console.log('No brand items found for animation');
    return;
  }
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 50);
      }
    });
  }, observerOptions);
  
  // Set up initial animation states
  brandItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
  });
}

// Contact link handlers
function initContactLinks() {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  
  console.log('Found', phoneLinks.length, 'phone links and', emailLinks.length, 'email links');
  
  phoneLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Phone link clicked:', this.href);
    });
  });
  
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Email link clicked:', this.href);
    });
  });
}

// Enhanced scroll button handling
function initScrollButton() {
  console.log('Initializing scroll button...');
  
  // Find all buttons that should scroll to contact
  const scrollButtons = document.querySelectorAll('button[onclick="scrollToContact()"], [data-key="get_started"]');
  
  console.log('Found', scrollButtons.length, 'scroll buttons');
  
  scrollButtons.forEach(button => {
    // Remove onclick attribute and add proper event listener
    button.removeAttribute('onclick');
    
    button.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Scroll button clicked');
      scrollToContact();
    });
    
    console.log('Added event listener to scroll button');
  });
}

// Service items hover effects
function initServiceItems() {
  const serviceItems = document.querySelectorAll('.service-item');
  console.log('Found', serviceItems.length, 'service items');
  
  serviceItems.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Page visibility API for logo animation control
function handleVisibilityChange() {
  if (document.hidden) {
    stopLogoAnimation();
    console.log('Page hidden - stopping logo animation');
  } else {
    startLogoAnimation();
    console.log('Page visible - starting logo animation');
  }
}

// Initialize page visibility monitoring
function initVisibilityMonitoring() {
  if (typeof document.hidden !== "undefined") {
    document.addEventListener("visibilitychange", handleVisibilityChange, false);
    console.log('Page visibility monitoring initialized');
  }
}

// Main DOMContentLoaded handler
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded - Starting MIRAI dealership initialization...');
  
  try {
    // Initialize all systems
    initLanguageSystem();
    initMiraiLogo();
    initBrandLogos();
    initContactLinks();
    initScrollButton();
    initServiceItems();
    initVisibilityMonitoring();
    
    // Start logo animation after a brief delay
    setTimeout(() => {
      startLogoAnimation();
    }, 1000);
    
    // Set up brand animations after a brief delay
    setTimeout(() => {
      observeBrandLogos();
    }, 500);
    
    console.log('All systems initialized successfully');
    
  } catch (error) {
    console.error('Error during initialization:', error);
  }
});

// Handle page unload to clean up intervals
window.addEventListener('beforeunload', function() {
  stopLogoAnimation();
  console.log('Page unloading - cleaned up animations');
});

// Make functions globally available
window.scrollToContact = scrollToContact;
window.setLanguage = setLanguage;

// Expose app functionality
window.miraiDealership = {
  setLanguage: setLanguage,
  scrollToContact: scrollToContact,
  getCurrentLanguage: () => currentLanguage,
  availableLanguages: Object.keys(translations),
  startLogoAnimation: startLogoAnimation,
  stopLogoAnimation: stopLogoAnimation
};

console.log('MIRAI dealership application loaded successfully');
console.log('Available functions:', Object.keys(window.miraiDealership));