// Al-Safwa Dental Clinic - JavaScript functionality with Admin Panel

// Application data
const clinicData = {
  "clinicName": "الصفوة",
  "clinicNameEn": "Al-Safwa Dental Clinic",
  "taglineAr": "ابتسامتك تستحق الأفضل",
  "taglineEn": "Your Smile Deserves the Best",
  "services": [
    {
      "id": 1,
      "nameAr": "طب الأسنان العام",
      "nameEn": "General Dentistry",
      "icon": "🦷",
      "description": "Comprehensive dental care for all ages"
    },
    {
      "id": 2,
      "nameAr": "تبييض الأسنان",
      "nameEn": "Teeth Whitening",
      "icon": "✨",
      "description": "Professional whitening treatments"
    },
    {
      "id": 3,
      "nameAr": "تقويم الأسنان",
      "nameEn": "Orthodontics",
      "icon": "🔧",
      "description": "Modern braces and alignment solutions"
    },
    {
      "id": 4,
      "nameAr": "زراعة الأسنان",
      "nameEn": "Dental Implants",
      "icon": "🔩",
      "description": "Permanent tooth replacement solutions"
    },
    {
      "id": 5,
      "nameAr": "طوارئ الأسنان",
      "nameEn": "Emergency Care",
      "icon": "🚨",
      "description": "24/7 emergency dental services"
    },
    {
      "id": 6,
      "nameAr": "طب أسنان الأطفال",
      "nameEn": "Pediatric Dentistry",
      "icon": "👶",
      "description": "Specialized care for children"
    }
  ],
  "advantages": [
    {
      "id": 1,
      "titleAr": "خبرة +15 سنة",
      "titleEn": "15+ Years Experience",
      "description": "Experienced dental professionals",
      "icon": "👨‍⚕️"
    },
    {
      "id": 2,
      "titleAr": "تقنيات حديثة",
      "titleEn": "Modern Technology",
      "description": "Latest dental equipment and techniques",
      "icon": "🔬"
    },
    {
      "id": 3,
      "titleAr": "رضا العملاء 98%",
      "titleEn": "98% Patient Satisfaction",
      "description": "Highly satisfied patients",
      "icon": "⭐"
    },
    {
      "id": 4,
      "titleAr": "عيادة معقمة",
      "titleEn": "Sterilized Environment",
      "description": "Highest hygiene standards",
      "icon": "🛡️"
    }
  ],
  "contact": {
    "phone": "+966 11 123 4567",
    "email": "info@alsafwa-dental.com",
    "address": "الرياض، المملكة العربية السعودية",
    "addressEn": "Riyadh, Saudi Arabia",
    "hours": "السبت - الخميس: 9 صباحاً - 9 مساءً",
    "hoursEn": "Sat - Thu: 9 AM - 9 PM"
  }
};

// Admin credentials and data storage
const adminCredentials = {
  username: "admin",
  password: "admin123"
};

// In-memory data storage
let visitors = [
  {
    id: 1,
    visitTime: "2025-08-14T05:15:00",
    ip: "192.168.1.100",
    location: "الرياض، السعودية",
    device: "Desktop",
    userAgent: "Chrome 127.0 Windows"
  },
  {
    id: 2,
    visitTime: "2025-08-14T04:45:00",
    ip: "192.168.1.101",
    location: "جدة، السعودية",
    device: "Mobile",
    userAgent: "Chrome Mobile Android"
  },
  {
    id: 3,
    visitTime: "2025-08-14T04:30:00",
    ip: "192.168.1.102",
    location: "الدمام، السعودية",
    device: "Tablet",
    userAgent: "Safari iPad"
  }
];

let reservations = [
  {
    id: 1,
    name: "أحمد محمد",
    email: "ahmed.mohamed@email.com",
    phone: "+966501234567",
    preferredDate: "2025-08-20",
    service: "طب الأسنان العام",
    message: "أحتاج لفحص دوري",
    status: "pending",
    submittedAt: "2025-08-14T10:30:00",
    notes: ""
  },
  {
    id: 2,
    name: "فاطمة علي",
    email: "fatima.ali@email.com",
    phone: "+966502345678",
    preferredDate: "2025-08-22",
    service: "تبييض الأسنان",
    message: "أريد جلسة تبييض",
    status: "confirmed",
    submittedAt: "2025-08-13T15:45:00",
    confirmedAt: "2025-08-13T16:00:00",
    notes: "تم تأكيد الموعد"
  },
  {
    id: 3,
    name: "محمد أحمد",
    email: "mohammed.ahmed@email.com",
    phone: "+966503456789",
    preferredDate: "2025-08-25",
    service: "تقويم الأسنان",
    message: "استشارة لتقويم الأسنان",
    status: "declined",
    submittedAt: "2025-08-12T09:15:00",
    declinedAt: "2025-08-12T10:00:00",
    notes: "التاريخ غير متاح"
  }
];

// Global variables
let isFormSubmitting = false;
let isAdminLoggedIn = false;
let currentAdminSection = 'overview';
let nextVisitorId = visitors.length + 1;
let nextReservationId = reservations.length + 1;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing app...');
  initializeApp();
  trackVisitor();
});

// Main initialization function
function initializeApp() {
  console.log('Initializing application...');
  renderServices();
  renderAdvantages();
  initializeForm();
  initializeScrollAnimations();
  initializeInteractionEffects();
  initializeAdmin();
  addDynamicStyles();
  console.log('Application initialized successfully');
}

// Track visitor when they visit the main site
function trackVisitor() {
  const visitor = {
    id: nextVisitorId++,
    visitTime: new Date().toISOString(),
    ip: `192.168.1.${Math.floor(Math.random() * 100) + 100}`,
    location: getRandomLocation(),
    device: getRandomDevice(),
    userAgent: getRandomUserAgent()
  };
  visitors.unshift(visitor);
  console.log('New visitor tracked:', visitor);
}

// Helper functions for visitor data
function getRandomLocation() {
  const locations = ['الرياض، السعودية', 'جدة، السعودية', 'الدمام، السعودية', 'مكة، السعودية', 'المدينة، السعودية'];
  return locations[Math.floor(Math.random() * locations.length)];
}

function getRandomDevice() {
  const devices = ['Desktop', 'Mobile', 'Tablet'];
  return devices[Math.floor(Math.random() * devices.length)];
}

function getRandomUserAgent() {
  const userAgents = ['Chrome 127.0 Windows', 'Chrome Mobile Android', 'Safari iPad', 'Firefox Windows', 'Edge Windows'];
  return userAgents[Math.floor(Math.random() * userAgents.length)];
}

// Render services section
function renderServices() {
  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid) return;

  servicesGrid.innerHTML = '';
  
  clinicData.services.forEach((service, index) => {
    const serviceCard = createServiceCard(service, index);
    servicesGrid.appendChild(serviceCard);
  });
}

// Create service card element
function createServiceCard(service, index) {
  const card = document.createElement('div');
  card.className = 'service-card';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', `${index * 100}`);
  
  card.innerHTML = `
    <span class="service-icon">${service.icon}</span>
    <h3 class="service-title">
      <span>${service.nameAr}</span>
      <span>${service.nameEn}</span>
    </h3>
    <p class="service-description">${service.description}</p>
  `;
  
  return card;
}

// Render advantages section
function renderAdvantages() {
  const advantagesGrid = document.getElementById('advantages-grid');
  if (!advantagesGrid) return;

  advantagesGrid.innerHTML = '';
  
  clinicData.advantages.forEach((advantage, index) => {
    const advantageCard = createAdvantageCard(advantage, index);
    advantagesGrid.appendChild(advantageCard);
  });
}

// Create advantage card element
function createAdvantageCard(advantage, index) {
  const card = document.createElement('div');
  card.className = 'advantage-card';
  card.setAttribute('data-aos', 'zoom-in');
  card.setAttribute('data-aos-delay', `${index * 150}`);
  
  card.innerHTML = `
    <span class="advantage-icon">${advantage.icon}</span>
    <h3 class="advantage-title">
      <span>${advantage.titleAr}</span>
      <span>${advantage.titleEn}</span>
    </h3>
    <p class="advantage-description">${advantage.description}</p>
  `;
  
  return card;
}

// Smooth scroll to section function
function scrollToSection(sectionId) {
  console.log('Scrolling to section:', sectionId);
  const section = document.getElementById(sectionId);
  if (!section) {
    console.error('Section not found:', sectionId);
    return;
  }
  
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}

// Form initialization and validation
function initializeForm() {
  console.log('Initializing form...');
  const form = document.getElementById('reservation-form');
  if (!form) {
    console.error('Reservation form not found');
    return;
  }
  
  form.addEventListener('submit', handleFormSubmission);
  console.log('Form submit handler attached');
  
  // Add real-time validation
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearFieldError(input));
  });
  
  // Set minimum date to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
  
  console.log('Form initialized successfully');
}

// Handle form submission
async function handleFormSubmission(e) {
  e.preventDefault();
  console.log('Form submission started');
  
  if (isFormSubmitting) {
    console.log('Form already submitting, ignoring');
    return;
  }
  
  const form = e.target;
  const formData = new FormData(form);
  
  // Log form data
  console.log('Form data:', {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    date: formData.get('date'),
    service: formData.get('service'),
    message: formData.get('message')
  });
  
  // Validate all fields
  if (!validateForm(form)) {
    console.log('Form validation failed');
    return;
  }
  
  // Show loading state
  setFormLoadingState(true);
  
  try {
    console.log('Creating reservation...');
    
    // Create reservation object
    const reservation = {
      id: nextReservationId++,
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      preferredDate: formData.get('date') || 'غير محدد',
      service: formData.get('service') || 'غير محدد',
      message: formData.get('message') || '',
      status: 'pending',
      submittedAt: new Date().toISOString(),
      notes: ''
    };
    
    console.log('New reservation:', reservation);
    
    // Add to reservations array
    reservations.unshift(reservation);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Reservation added successfully');
    
    // Show success message
    showSuccessModal();
    
    // Reset form
    form.reset();
    
  } catch (error) {
    console.error('Form submission error:', error);
    showErrorMessage('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.');
  } finally {
    setFormLoadingState(false);
  }
}

// Validate entire form
function validateForm(form) {
  let isValid = true;
  const requiredFields = form.querySelectorAll('[required]');
  
  requiredFields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  
  console.log('Form validation result:', isValid);
  return isValid;
}

// Validate individual field
function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  let isValid = true;
  let errorMessage = '';
  
  clearFieldError(field);
  
  if (field.required && !value) {
    errorMessage = 'هذا الحقل مطلوب';
    isValid = false;
  }
  
  switch (fieldName) {
    case 'name':
      if (value && value.length < 2) {
        errorMessage = 'الاسم يجب أن يكون أكثر من حرفين';
        isValid = false;
      }
      break;
      
    case 'email':
      if (value && !isValidEmail(value)) {
        errorMessage = 'يرجى إدخال بريد إلكتروني صحيح';
        isValid = false;
      }
      break;
      
    case 'phone':
      if (value && !isValidPhone(value)) {
        errorMessage = 'يرجى إدخال رقم هاتف صحيح';
        isValid = false;
      }
      break;
  }
  
  if (!isValid) {
    showFieldError(field, errorMessage);
  }
  
  return isValid;
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
  return phoneRegex.test(phone);
}

// Show field error
function showFieldError(field, message) {
  field.classList.add('error');
  const errorElement = document.getElementById(`${field.name}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

// Clear field error
function clearFieldError(field) {
  field.classList.remove('error');
  const errorElement = document.getElementById(`${field.name}-error`);
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.classList.remove('show');
  }
}

// Set form loading state
function setFormLoadingState(isLoading) {
  isFormSubmitting = isLoading;
  const submitBtn = document.querySelector('.submit-btn');
  if (!submitBtn) return;
  
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoader = submitBtn.querySelector('.btn-loader');
  
  if (isLoading) {
    submitBtn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnLoader) btnLoader.classList.remove('hidden');
  } else {
    submitBtn.disabled = false;
    if (btnText) btnText.style.display = 'block';
    if (btnLoader) btnLoader.classList.add('hidden');
  }
}

// Show success modal
function showSuccessModal() {
  console.log('Showing success modal');
  const modal = document.getElementById('success-modal');
  if (!modal) {
    console.error('Success modal not found');
    return;
  }
  
  modal.classList.remove('hidden');
  
  setTimeout(() => {
    closeModal();
  }, 5000);
}

// Close modal
function closeModal() {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Show error message
function showErrorMessage(message) {
  const notification = document.createElement('div');
  notification.className = 'error-notification';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ef4444;
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
    z-index: 1001;
    animation: slideInRight 0.3s ease;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease forwards';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Admin Panel Functions

// Initialize admin functionality
function initializeAdmin() {
  console.log('Initializing admin functionality...');
  
  const adminLoginForm = document.getElementById('admin-login-form');
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', handleAdminLogin);
    console.log('Admin login form handler attached');
  }
  
  // Initialize admin menu navigation
  const adminMenuItems = document.querySelectorAll('.admin-menu-item');
  adminMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const section = e.target.dataset.section;
      if (section) {
        showAdminSection(section);
      }
    });
  });
  
  // Initialize search and filter functionality
  initializeAdminSearch();
  console.log('Admin functionality initialized');
}

// Show admin login modal
function showAdminLogin() {
  console.log('Showing admin login modal');
  const modal = document.getElementById('admin-login-modal');
  if (modal) {
    modal.classList.remove('hidden');
    console.log('Admin login modal displayed');
  } else {
    console.error('Admin login modal not found');
  }
}

// Close admin login modal
function closeAdminLogin() {
  const modal = document.getElementById('admin-login-modal');
  if (modal) {
    modal.classList.add('hidden');
    // Clear form
    const form = document.getElementById('admin-login-form');
    if (form) form.reset();
    // Clear error message
    const errorMsg = document.getElementById('admin-error-message');
    if (errorMsg) errorMsg.classList.add('hidden');
  }
}

// Handle admin login
function handleAdminLogin(e) {
  e.preventDefault();
  console.log('Admin login attempt');
  
  const username = document.getElementById('admin-username').value;
  const password = document.getElementById('admin-password').value;
  const errorMsg = document.getElementById('admin-error-message');
  
  console.log('Login credentials:', { username, password: '***' });
  
  if (username === adminCredentials.username && password === adminCredentials.password) {
    console.log('Admin login successful');
    isAdminLoggedIn = true;
    closeAdminLogin();
    showAdminPanel();
  } else {
    console.log('Admin login failed');
    if (errorMsg) {
      errorMsg.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
      errorMsg.classList.remove('hidden');
    }
  }
}

// Show admin panel
function showAdminPanel() {
  console.log('Showing admin panel');
  const mainSite = document.getElementById('main-site');
  const adminPanel = document.getElementById('admin-panel');
  
  if (mainSite && adminPanel) {
    mainSite.classList.remove('active');
    adminPanel.classList.add('active');
    renderAdminOverview();
    console.log('Admin panel displayed');
  }
}

// Show main site
function showMainSite() {
  console.log('Showing main site');
  const mainSite = document.getElementById('main-site');
  const adminPanel = document.getElementById('admin-panel');
  
  if (mainSite && adminPanel) {
    adminPanel.classList.remove('active');
    mainSite.classList.add('active');
  }
}

// Show admin section
function showAdminSection(sectionName) {
  console.log('Showing admin section:', sectionName);
  
  // Update menu items
  document.querySelectorAll('.admin-menu-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeMenuItem = document.querySelector(`[data-section="${sectionName}"]`);
  if (activeMenuItem) {
    activeMenuItem.classList.add('active');
  }
  
  // Update sections
  document.querySelectorAll('.admin-section').forEach(section => {
    section.classList.remove('active');
  });
  const activeSection = document.getElementById(`${sectionName}-section`);
  if (activeSection) {
    activeSection.classList.add('active');
  }
  
  currentAdminSection = sectionName;
  
  // Render section content
  switch (sectionName) {
    case 'overview':
      renderAdminOverview();
      break;
    case 'visitors':
      renderVisitorsSection();
      break;
    case 'reservations':
      renderReservationsSection();
      break;
  }
}

// Render admin overview
function renderAdminOverview() {
  const statsGrid = document.getElementById('stats-grid');
  if (!statsGrid) return;
  
  const stats = [
    {
      icon: '👥',
      value: visitors.length,
      label: 'إجمالي الزوار'
    },
    {
      icon: '📅',
      value: reservations.length,
      label: 'إجمالي الحجوزات'
    },
    {
      icon: '⏳',
      value: reservations.filter(r => r.status === 'pending').length,
      label: 'حجوزات معلقة'
    },
    {
      icon: '✅',
      value: reservations.filter(r => r.status === 'confirmed').length,
      label: 'حجوزات مؤكدة'
    },
    {
      icon: '❌',
      value: reservations.filter(r => r.status === 'declined').length,
      label: 'حجوزات مرفوضة'
    }
  ];
  
  statsGrid.innerHTML = stats.map(stat => `
    <div class="stat-card">
      <span class="stat-icon">${stat.icon}</span>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

// Render visitors section
function renderVisitorsSection() {
  const tbody = document.getElementById('visitors-tbody');
  if (!tbody) return;
  
  tbody.innerHTML = visitors.map(visitor => `
    <tr>
      <td>${visitor.id}</td>
      <td>${formatDateTime(visitor.visitTime)}</td>
      <td>${visitor.location}</td>
      <td>${visitor.device}</td>
      <td>${visitor.userAgent}</td>
    </tr>
  `).join('');
}

// Render reservations section
function renderReservationsSection() {
  const tbody = document.getElementById('reservations-tbody');
  if (!tbody) return;
  
  tbody.innerHTML = reservations.map(reservation => `
    <tr>
      <td>${reservation.id}</td>
      <td>${reservation.name}</td>
      <td>${reservation.email}</td>
      <td>${reservation.phone}</td>
      <td>${reservation.preferredDate}</td>
      <td>${reservation.service}</td>
      <td><span class="status-badge status-${reservation.status}">${getStatusText(reservation.status)}</span></td>
      <td>
        <div class="action-buttons">
          <button class="btn-sm btn-view" onclick="viewReservation(${reservation.id})">عرض</button>
          ${reservation.status === 'pending' ? `
            <button class="btn-sm btn-confirm" onclick="confirmReservation(${reservation.id})">تأكيد</button>
            <button class="btn-sm btn-decline" onclick="declineReservation(${reservation.id})">رفض</button>
          ` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

// Get status text in Arabic
function getStatusText(status) {
  const statusTexts = {
    pending: 'معلق',
    confirmed: 'مؤكد',
    declined: 'مرفوض'
  };
  return statusTexts[status] || status;
}

// Format date time
function formatDateTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString('ar-SA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// View reservation details
function viewReservation(id) {
  const reservation = reservations.find(r => r.id === id);
  if (!reservation) return;
  
  const modal = document.getElementById('reservation-modal');
  const details = document.getElementById('reservation-details');
  const actions = document.getElementById('reservation-actions');
  
  details.innerHTML = `
    <div class="detail-item">
      <span class="detail-label">الرقم:</span>
      <span class="detail-value">${reservation.id}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">الاسم:</span>
      <span class="detail-value">${reservation.name}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">البريد الإلكتروني:</span>
      <span class="detail-value">${reservation.email}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">الهاتف:</span>
      <span class="detail-value">${reservation.phone}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">التاريخ المفضل:</span>
      <span class="detail-value">${reservation.preferredDate}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">الخدمة:</span>
      <span class="detail-value">${reservation.service}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">الرسالة:</span>
      <span class="detail-value">${reservation.message || 'لا توجد رسالة'}</span>
    </div>
    <div class="detail-item">
      <span class="detail-label">الحالة:</span>
      <span class="detail-value"><span class="status-badge status-${reservation.status}">${getStatusText(reservation.status)}</span></span>
    </div>
    <div class="detail-item">
      <span class="detail-label">تاريخ الإرسال:</span>
      <span class="detail-value">${formatDateTime(reservation.submittedAt)}</span>
    </div>
    ${reservation.notes ? `
    <div class="detail-item">
      <span class="detail-label">الملاحظات:</span>
      <span class="detail-value">${reservation.notes}</span>
    </div>
    ` : ''}
  `;
  
  actions.innerHTML = `
    ${reservation.status === 'pending' ? `
      <button class="btn--primary" onclick="confirmReservation(${reservation.id}); closeReservationModal();">تأكيد</button>
      <button class="btn--secondary" onclick="declineReservation(${reservation.id}); closeReservationModal();">رفض</button>
    ` : ''}
    <button class="btn--secondary" onclick="closeReservationModal()">إغلاق</button>
  `;
  
  modal.classList.remove('hidden');
}

// Close reservation modal
function closeReservationModal() {
  const modal = document.getElementById('reservation-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Confirm reservation
function confirmReservation(id) {
  const reservation = reservations.find(r => r.id === id);
  if (reservation) {
    reservation.status = 'confirmed';
    reservation.confirmedAt = new Date().toISOString();
    reservation.notes = 'تم تأكيد الموعد';
    renderReservationsSection();
    renderAdminOverview();
    console.log(`Reservation ${id} confirmed`);
  }
}

// Decline reservation
function declineReservation(id) {
  const reservation = reservations.find(r => r.id === id);
  if (reservation) {
    reservation.status = 'declined';
    reservation.declinedAt = new Date().toISOString();
    reservation.notes = 'تم رفض الموعد';
    renderReservationsSection();
    renderAdminOverview();
    console.log(`Reservation ${id} declined`);
  }
}

// Initialize admin search functionality
function initializeAdminSearch() {
  const visitorsSearch = document.getElementById('visitors-search');
  const reservationsSearch = document.getElementById('reservations-search');
  const statusFilter = document.getElementById('status-filter');
  
  if (visitorsSearch) {
    visitorsSearch.addEventListener('input', filterVisitors);
  }
  
  if (reservationsSearch) {
    reservationsSearch.addEventListener('input', filterReservations);
  }
  
  if (statusFilter) {
    statusFilter.addEventListener('change', filterReservations);
  }
}

// Filter visitors
function filterVisitors() {
  const searchTerm = document.getElementById('visitors-search').value.toLowerCase();
  const tbody = document.getElementById('visitors-tbody');
  
  const filteredVisitors = visitors.filter(visitor => 
    visitor.location.toLowerCase().includes(searchTerm) ||
    visitor.device.toLowerCase().includes(searchTerm) ||
    visitor.userAgent.toLowerCase().includes(searchTerm)
  );
  
  tbody.innerHTML = filteredVisitors.map(visitor => `
    <tr>
      <td>${visitor.id}</td>
      <td>${formatDateTime(visitor.visitTime)}</td>
      <td>${visitor.location}</td>
      <td>${visitor.device}</td>
      <td>${visitor.userAgent}</td>
    </tr>
  `).join('');
}

// Filter reservations
function filterReservations() {
  const searchTerm = document.getElementById('reservations-search').value.toLowerCase();
  const statusFilter = document.getElementById('status-filter').value;
  
  let filteredReservations = reservations;
  
  // Filter by search term
  if (searchTerm) {
    filteredReservations = filteredReservations.filter(reservation =>
      reservation.name.toLowerCase().includes(searchTerm) ||
      reservation.email.toLowerCase().includes(searchTerm) ||
      reservation.phone.includes(searchTerm) ||
      reservation.service.toLowerCase().includes(searchTerm)
    );
  }
  
  // Filter by status
  if (statusFilter) {
    filteredReservations = filteredReservations.filter(reservation =>
      reservation.status === statusFilter
    );
  }
  
  const tbody = document.getElementById('reservations-tbody');
  tbody.innerHTML = filteredReservations.map(reservation => `
    <tr>
      <td>${reservation.id}</td>
      <td>${reservation.name}</td>
      <td>${reservation.email}</td>
      <td>${reservation.phone}</td>
      <td>${reservation.preferredDate}</td>
      <td>${reservation.service}</td>
      <td><span class="status-badge status-${reservation.status}">${getStatusText(reservation.status)}</span></td>
      <td>
        <div class="action-buttons">
          <button class="btn-sm btn-view" onclick="viewReservation(${reservation.id})">عرض</button>
          ${reservation.status === 'pending' ? `
            <button class="btn-sm btn-confirm" onclick="confirmReservation(${reservation.id})">تأكيد</button>
            <button class="btn-sm btn-decline" onclick="declineReservation(${reservation.id})">رفض</button>
          ` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

// Initialize scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('[data-aos]');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// Initialize interaction effects
function initializeInteractionEffects() {
  const buttons = document.querySelectorAll('.cta-button, .btn, .carousel-btn');
  buttons.forEach(button => {
    button.addEventListener('click', createRippleEffect);
  });
  
  const cards = document.querySelectorAll('.service-card, .advantage-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Create ripple effect on button click
function createRippleEffect(e) {
  const button = e.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.cssText = `
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple 0.6s linear;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    pointer-events: none;
  `;
  
  button.style.position = 'relative';
  button.style.overflow = 'hidden';
  button.appendChild(ripple);
  
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
}

// Add CSS animations dynamically
function addDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    
    [data-aos] {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    [data-aos].animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    [data-aos="fade-up"].animate-in {
      transform: translateY(0);
    }
    
    [data-aos="zoom-in"] {
      transform: scale(0.8);
    }
    
    [data-aos="zoom-in"].animate-in {
      transform: scale(1);
    }
    
    [data-aos="fade-left"] {
      transform: translateX(30px);
    }
    
    [data-aos="fade-left"].animate-in {
      transform: translateX(0);
    }
    
    [data-aos="fade-right"] {
      transform: translateX(-30px);
    }
    
    [data-aos="fade-right"].animate-in {
      transform: translateX(0);
    }
  `;
  document.head.appendChild(style);
}

// Export functions for global access (ensure they are available)
window.scrollToSection = scrollToSection;
window.closeModal = closeModal;
window.showAdminLogin = showAdminLogin;
window.closeAdminLogin = closeAdminLogin;
window.showMainSite = showMainSite;
window.viewReservation = viewReservation;
window.closeReservationModal = closeReservationModal;
window.confirmReservation = confirmReservation;
window.declineReservation = declineReservation;

console.log('All functions exported to global scope');