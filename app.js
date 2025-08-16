// Application data for multilingual support
const appData = {
  dealership_info: {
    name: {
      en: "MIRAI - Premium Used Cars",
      ar: "ميراي - سيارات مستعملة مميزة",
      ja: "MIRAI - プレミアム中古車"
    },
    phone: "+817038123707",
    email: "miraiboeki@gmail.com",
    ceo1: "Layth Jawad Altufaili",
    ceo2: "Rafid Jawad Altufaili"
  },
  translations: {
    en: {
      hero_title: "Premium Used Cars",
      hero_subtitle: "Quality Pre-Owned Vehicles You Can Trust",
      phone: "Phone",
      email: "Email",
      get_started: "Get Started Today",
      trusted_brands: "Trusted Automotive Brands",
      services_title: "Our Services",
      about_title: "About Our Dealership",
      about_description: "We are a trusted used car dealership committed to providing quality pre-owned vehicles to our customers. With years of experience in the automotive industry, we carefully inspect every vehicle to ensure reliability and customer satisfaction.",
      leadership_title: "Our Leadership Team",
      contact_title: "Contact Information",
      contact_description: "Get in touch with us for quality used cars and professional service.",
      service_1: "Used Cars",
      service_1_desc: "Quality pre-owned vehicles",
      service_2: "Certified Pre-owned",
      service_2_desc: "Thoroughly inspected vehicles",
      service_3: "New Cars",
      service_3_desc: "Latest model vehicles",
      service_4: "Bikes",
      service_4_desc: "Motorcycles and scooters",
      service_5: "Bicycles",
      service_5_desc: "Eco-friendly transportation",
      service_6: "Heavy Machinery",
      service_6_desc: "Industrial equipment",
      service_7: "Financing Options",
      service_7_desc: "Flexible payment plans"
    },
    ar: {
      hero_title: "سيارات مستعملة مميزة",
      hero_subtitle: "مركبات مستعملة عالية الجودة يمكنك الوثوق بها",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      get_started: "ابدأ اليوم",
      trusted_brands: "علامات تجارية موثوقة للسيارات",
      services_title: "خدماتنا",
      about_title: "حول وكالتنا",
      about_description: "نحن وكالة سيارات مستعملة موثوقة ملتزمة بتوفير مركبات مستعملة عالية الجودة لعملائنا. مع سنوات من الخبرة في صناعة السيارات، نقوم بفحص كل مركبة بعناية لضمان الموثوقية ورضا العملاء.",
      leadership_title: "فريق القيادة لدينا",
      contact_title: "معلومات الاتصال",
      contact_description: "تواصل معنا للحصول على سيارات مستعملة عالية الجودة وخدمة مهنية.",
      service_1: "سيارات مستعملة",
      service_1_desc: "مركبات مستعملة عالية الجودة",
      service_2: "مركبات معتمدة مستعملة",
      service_2_desc: "مركبات مفحوصة بدقة",
      service_3: "سيارات جديدة",
      service_3_desc: "أحدث الموديلات",
      service_4: "دراجات نارية",
      service_4_desc: "دراجات نارية وسكوترات",
      service_5: "دراجات هوائية",
      service_5_desc: "وسائل نقل صديقة للبيئة",
      service_6: "آلات ثقيلة",
      service_6_desc: "معدات صناعية",
      service_7: "خيارات التمويل",
      service_7_desc: "خطط دفع مرنة"
    },
    ja: {
      hero_title: "プレミアム中古車",
      hero_subtitle: "信頼できる高品質な中古車",
      phone: "電話",
      email: "メール",
      get_started: "今すぐ始める",
      trusted_brands: "信頼できる自動車ブランド",
      services_title: "サービス",
      about_title: "当社について",
      about_description: "私たちは、お客様に高品質な中古車を提供することにコミットした信頼できる中古車販売店です。自動車業界での長年の経験により、信頼性とお客様の満足度を確保するために、すべての車両を慎重に検査しています。",
      leadership_title: "リーダーシップチーム",
      contact_title: "お問い合わせ先",
      contact_description: "高品質な中古車とプロフェッショナルなサービスについては、お気軽にお問い合わせください。",
      service_1: "中古車",
      service_1_desc: "高品質な中古車",
      service_2: "認定中古車",
      service_2_desc: "徹底検査済み車両",
      service_3: "新車",
      service_3_desc: "最新モデル車両",
      service_4: "バイク",
      service_4_desc: "オートバイとスクーター",
      service_5: "自転車",
      service_5_desc: "環境に優しい交通手段",
      service_6: "重機",
      service_6_desc: "産業機器",
      service_7: "融資オプション",
      service_7_desc: "柔軟な支払いプラン"
    }
  }
};

// Language state management
let currentLanguage = 'en';
const languageConfig = {
  en: { flag: '🇺🇸', name: 'English', dir: 'ltr', fontClass: '' },
  ar: { flag: '🇸🇦', name: 'العربية', dir: 'rtl', fontClass: 'arabic-font' },
  ja: { flag: '🇯🇵', name: '日本語', dir: 'ltr', fontClass: 'japanese-font' }
};

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('MIRAI Application initialized');
  
  // Initialize language switcher
  initLanguageSwitcher();
  
  // Apply initial language
  switchLanguage(currentLanguage);
  
  // Initialize other features
  initializeAccessibility();
  initializeImageHandling();
  initializeLogoImage();
});

function initLanguageSwitcher() {
  const languageButton = document.getElementById('languageButton');
  const languageMenu = document.getElementById('languageMenu');
  const languageOptions = document.querySelectorAll('.language-option');
  
  if (!languageButton || !languageMenu) {
    console.error('Language switcher elements not found');
    return;
  }
  
  console.log('Initializing language switcher...');
  
  // Toggle dropdown on button click
  languageButton.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const dropdown = languageButton.parentElement;
    const isActive = dropdown.classList.contains('active');
    
    if (isActive) {
      closeLanguageDropdown();
    } else {
      openLanguageDropdown();
    }
  });
  
  // Handle language option clicks
  languageOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const selectedLanguage = this.getAttribute('data-lang');
      console.log('Language option clicked:', selectedLanguage);
      
      if (selectedLanguage && appData.translations[selectedLanguage]) {
        switchLanguage(selectedLanguage);
        closeLanguageDropdown();
      }
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
      closeLanguageDropdown();
    }
  });
  
  // Close dropdown on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeLanguageDropdown();
    }
  });
  
  console.log('Language switcher initialized successfully');
}

function openLanguageDropdown() {
  const dropdown = document.querySelector('.language-dropdown');
  const menu = document.getElementById('languageMenu');
  const button = document.getElementById('languageButton');
  
  console.log('Opening language dropdown');
  
  if (dropdown && menu && button) {
    dropdown.classList.add('active');
    menu.classList.add('active');
    button.setAttribute('aria-expanded', 'true');
  }
}

function closeLanguageDropdown() {
  const dropdown = document.querySelector('.language-dropdown');
  const menu = document.getElementById('languageMenu');
  const button = document.getElementById('languageButton');
  
  console.log('Closing language dropdown');
  
  if (dropdown && menu && button) {
    dropdown.classList.remove('active');
    menu.classList.remove('active');
    button.setAttribute('aria-expanded', 'false');
  }
}

function switchLanguage(language) {
  if (!appData.translations[language]) {
    console.error('Translation not found for language:', language);
    return;
  }
  
  console.log('Switching to language:', language);
  
  // Update current language
  currentLanguage = language;
  
  // Update UI direction and font class
  updateDocumentDirection(language);
  
  // Update language button
  updateLanguageButton(language);
  
  // Translate all text content
  translateContent(language);
  
  // Add fade transition effect
  addFadeTransition();
}

function updateDocumentDirection(language) {
  const config = languageConfig[language];
  const html = document.documentElement;
  const body = document.body;
  
  // Set direction
  html.setAttribute('dir', config.dir);
  html.setAttribute('lang', language);
  
  // Update font class
  body.className = body.className.replace(/\b(arabic-font|japanese-font)\b/g, '');
  if (config.fontClass) {
    body.classList.add(config.fontClass);
  }
}

function updateLanguageButton(language) {
  const config = languageConfig[language];
  const languageButton = document.getElementById('languageButton');
  
  if (languageButton && config) {
    const flagElement = languageButton.querySelector('.language-flag');
    const textElement = languageButton.querySelector('.language-text');
    
    if (flagElement) flagElement.textContent = config.flag;
    if (textElement) textElement.textContent = config.name;
    
    console.log('Language button updated for:', language);
  }
}

function translateContent(language) {
  const translations = appData.translations[language];
  
  // Translate elements with data-key attributes
  const elementsToTranslate = document.querySelectorAll('[data-key]');
  
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
  
  // Update page title
  updatePageTitle(language);
  
  console.log(`Content translated to ${language}`);
}

function updatePageTitle(language) {
  const translations = appData.translations[language];
  if (translations.hero_title) {
    document.title = `MIRAI - ${translations.hero_title}`;
  }
}

function addFadeTransition() {
  const body = document.body;
  body.classList.add('fade-transition');
  
  setTimeout(() => {
    body.classList.add('active');
  }, 50);
  
  setTimeout(() => {
    body.classList.remove('fade-transition');
  }, 300);
}

// MIRAI Logo Image Initialization
function initializeLogoImage() {
  const logoImage = document.querySelector('.logo-image');
  const logoFallback = document.querySelector('.logo-text-fallback');
  
  if (logoImage) {
    // Handle image loading
    logoImage.addEventListener('load', function() {
      console.log('MIRAI logo image loaded successfully');
      this.style.opacity = '1';
    });
    
    logoImage.addEventListener('error', function() {
      console.error('Failed to load MIRAI logo image:', this.src);
      this.style.display = 'none';
      if (logoFallback) {
        logoFallback.style.display = 'block';
      }
    });
    
    // Set initial opacity for loading effect
    logoImage.style.opacity = '0.8';
    logoImage.style.transition = 'opacity 0.3s ease';
    
    console.log('Logo image initialized');
  }
}

// Smooth scroll to contact section - Fixed implementation
function scrollToContact() {
  console.log('scrollToContact called');
  
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    console.log('Contact section found, scrolling...');
    
    try {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } catch (e) {
      // Fallback for browsers that don't support smooth scrolling
      contactSection.scrollIntoView(true);
    }
    
  } else {
    console.error('Contact section not found with id "contact"');
  }
}

// Initialize accessibility features
function initializeAccessibility() {
  // Add focus indicators for better accessibility
  const focusableElements = document.querySelectorAll('button, input, textarea, select, a[href]');
  
  focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
      this.style.outline = '2px solid #D32F2F';
      this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
      this.style.outline = '';
      this.style.outlineOffset = '';
    });
  });
  
  // Handle phone number clicks for better mobile experience
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Phone link clicked:', this.href);
    });
  });
  
  console.log('Accessibility features initialized');
}

// Initialize image handling with fallbacks
function initializeImageHandling() {
  const brandLogos = document.querySelectorAll('.brand-logo');
  
  brandLogos.forEach((img, index) => {
    // Handle logo loading
    img.addEventListener('load', function() {
      console.log(`Successfully loaded brand logo ${index + 1}`);
      this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
      console.error(`Failed to load brand logo ${index + 1}:`, this.src);
      // The onerror inline handler will handle the fallback
    });
    
    // Set initial opacity for loading effect
    img.style.opacity = '0.8';
    img.style.transition = 'opacity 0.3s ease';
  });
  
  console.log('Image handling initialized for', brandLogos.length, 'logos');
}

// Handle keyboard navigation for language switcher
document.addEventListener('keydown', function(e) {
  const activeElement = document.activeElement;
  
  if (activeElement && activeElement.classList.contains('language-button')) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activeElement.click();
    }
  }
  
  if (activeElement && activeElement.classList.contains('language-option')) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activeElement.click();
    }
  }
});

// Handle smooth scrolling for internal links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

// Performance optimization
function optimizePerformance() {
  // Handle reduced motion preferences
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log('Reduced motion detected, disabling animations');
    const animatedElements = document.querySelectorAll('.brand-item');
    animatedElements.forEach(element => {
      element.style.animation = 'none';
      element.style.transition = 'none';
    });
  }
  
  // Handle page visibility changes
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      console.log('Page hidden');
    } else {
      console.log('Page visible');
    }
  });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', function() {
  optimizePerformance();
});

// Make scrollToContact available globally
window.scrollToContact = scrollToContact;

// Global error handler
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
});

console.log('MIRAI application scripts loaded successfully');