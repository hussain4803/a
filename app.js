// Enhanced Dental Clinic App JavaScript with Pink-Purple Cursor and Section Transitions
class DentalClinicApp {
    constructor() {
        this.bookings = JSON.parse(localStorage.getItem('clinicBookings')) || [];
        this.pageViews = parseInt(localStorage.getItem('pageViews')) || 0;
        this.isAdminLoggedIn = false;
        this.scrollProgress = 0;
        this.init();
    }

    init() {
        this.setupCustomCursor();
        this.setupEnhancedScrollAnimations();
        this.setupSectionTransitions();
        this.setupEventListeners();
        this.trackPageView();
        this.setMinDate();
        this.checkAdminAccess();
        this.setupParallaxEffects();
        this.fixDropdownInteraction();
    }

    // Fix dropdown interaction issues
    fixDropdownInteraction() {
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            select.style.pointerEvents = 'auto';
            select.style.cursor = 'pointer';
            
            // Ensure dropdown can be opened
            select.addEventListener('mousedown', (e) => {
                e.stopPropagation();
            });
            
            select.addEventListener('click', (e) => {
                e.stopPropagation();
                select.focus();
            });
        });
    }

    // Enhanced Custom Cursor Implementation with Pink-Purple Theme
    setupCustomCursor() {
        const cursor = document.querySelector('.custom-cursor');
        const cursorGlow = document.querySelector('.cursor-glow');
        
        if (!cursor || !cursorGlow) return;
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let glowX = 0, glowY = 0;

        // Track mouse movement with enhanced responsiveness
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor animation with trail effect
        const animateCursor = () => {
            // Main cursor follows quickly
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            
            // Glow follows slowly for trail effect
            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorGlow.style.left = (glowX - 20) + 'px';
            cursorGlow.style.top = (glowY - 20) + 'px';

            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Enhanced hover effects with pink-purple theme
        const hoverElements = document.querySelectorAll('button, a, .service-card, .feature-card, .contact-item, select, input, .booking-details, .clinic-image');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorGlow.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorGlow.classList.remove('hover');
            });
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorGlow.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            cursorGlow.style.opacity = '1';
        });
    }

    // Enhanced Section Transitions with Staggered Animations
    setupSectionTransitions() {
        const sections = document.querySelectorAll('section');
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('section-visible');
                        this.animateSectionContent(entry.target);
                    }, index * 100); // Stagger section appearances
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // Animate section content with staggered timing
    animateSectionContent(section) {
        const sectionHeader = section.querySelector('.section-header');
        const animatableElements = section.querySelectorAll('.feature-card, .service-card, .contact-item, .about-text, .about-image, .booking-form-container, .booking-info, .contact-info, .contact-image');

        // Animate section header first
        if (sectionHeader) {
            setTimeout(() => {
                sectionHeader.classList.add('animate-in');
            }, 100);
        }

        // Animate other elements with stagger
        animatableElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate-in');
            }, 200 + (index * 150)); // Stagger delay
        });

        // Special handling for form groups in booking section
        const bookingForm = section.querySelector('.booking-form');
        if (bookingForm) {
            setTimeout(() => {
                bookingForm.classList.add('animate-in');
            }, 300);
        }
    }

    // Enhanced Scroll Animations with Intersection Observer
    setupEnhancedScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
                    
                    // Add special animations based on element type
                    if (entry.target.classList.contains('service-card')) {
                        entry.target.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
                    }
                    if (entry.target.classList.contains('contact-item')) {
                        entry.target.style.transform = 'translateY(0) scale(1.02)';
                        setTimeout(() => {
                            entry.target.style.transform = 'translateY(0) scale(1)';
                        }, 300);
                    }
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.feature-card, .service-card, .contact-item, .section-header');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
            observer.observe(el);
        });
    }

    // Setup Parallax Effects
    setupParallaxEffects() {
        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            // Hero background parallax
            const heroBackground = document.querySelector('.hero-background');
            if (heroBackground && scrolled < window.innerHeight) {
                heroBackground.style.transform = `translateY(${rate}px) scale(1.1)`;
            }

            // Section backgrounds parallax
            const sections = document.querySelectorAll('.about-section, .contact-section');
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const parallaxRate = scrolled * -0.3;
                    section.style.transform = `translateY(${parallaxRate * 0.1}px)`;
                }
            });

            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }

    // Event Listeners
    setupEventListeners() {
        // Booking form submission - Fixed
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.handleBookingSubmission(e);
            });
        }

        // Enhanced Admin access key combination (Ctrl+Alt+A)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
                e.preventDefault();
                this.showAdminLogin();
            }
        });

        // Admin login form - Fixed
        const adminLoginForm = document.getElementById('adminLoginForm');
        if (adminLoginForm) {
            adminLoginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.handleAdminLogin(e);
            });
        }

        // Modal close events with enhanced animation
        document.querySelectorAll('.modal-close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModals();
            });
        });

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModals();
                }
            });
        });

        // Check for admin URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('admin') === 'true') {
            this.showAdminLogin();
        }

        // Enhanced scroll progress indicator
        window.addEventListener('scroll', this.updateScrollProgress.bind(this));
    }

    // Update scroll progress for enhanced animations
    updateScrollProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.pageYOffset;
        this.scrollProgress = scrollTop / documentHeight;
    }

    // Enhanced smooth scrolling to sections
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            // Add momentum-based smooth scrolling
            const targetPosition = section.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = Math.min(Math.abs(distance) * 0.5, 1200); // Dynamic duration with max limit
            let start = null;

            const animation = (currentTime) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = this.easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            requestAnimationFrame(animation);
        }
    }

    // Enhanced easing function for smooth scrolling
    easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    // Track page views
    trackPageView() {
        this.pageViews++;
        localStorage.setItem('pageViews', this.pageViews.toString());
    }

    // Set minimum date for appointment booking
    setMinDate() {
        const dateInput = document.getElementById('appointmentDate');
        if (dateInput) {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.min = tomorrow.toISOString().split('T')[0];
        }
    }

    // Generate unique booking ID
    generateBookingId() {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `SF${timestamp}${random}`.slice(-10);
    }

    // Handle booking form submission with enhanced animation - FIXED
    async handleBookingSubmission(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');

        // Validate form first
        if (!this.validateBookingForm(form)) {
            return;
        }

        // Show enhanced loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        submitBtn.style.transform = 'scale(0.95)';
        
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        if (btnText) btnText.style.display = 'none';
        if (btnLoader) {
            btnLoader.style.display = 'inline';
            btnLoader.classList.remove('hidden');
        }

        try {
            // Simulate API call delay with progress indication
            await this.simulateApiCall(2000);

            // Get form data
            const formData = new FormData(form);
            const bookingData = {
                id: this.generateBookingId(),
                name: formData.get('patientName'),
                phone: formData.get('patientPhone'),
                email: formData.get('patientEmail'),
                service: formData.get('serviceType'),
                date: formData.get('appointmentDate'),
                time: formData.get('appointmentTime'),
                notes: formData.get('notes') || '',
                status: 'pending',
                createdAt: new Date().toISOString(),
                timestamp: Date.now()
            };

            // Save booking
            this.bookings.push(bookingData);
            localStorage.setItem('clinicBookings', JSON.stringify(this.bookings));

            // Reset form with animation
            form.style.transform = 'scale(0.95)';
            setTimeout(() => {
                form.reset();
                form.style.transform = 'scale(1)';
                this.setMinDate();
            }, 200);
            
            // Show success modal with confetti
            this.showBookingSuccess(bookingData);

        } catch (error) {
            console.error('Booking error:', error);
            alert('حدث خطأ في الحجز، يرجى المحاولة مرة أخرى / Booking error, please try again');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.style.transform = 'scale(1)';
            
            if (btnText) btnText.style.display = 'inline';
            if (btnLoader) {
                btnLoader.style.display = 'none';
                btnLoader.classList.add('hidden');
            }
        }
    }

    // Enhanced form validation with visual feedback
    validateBookingForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.showFieldError(field, 'هذا الحقل مطلوب / This field is required');
                isValid = false;
            } else {
                this.clearFieldError(field);
            }
        });

        // Validate email format
        const emailField = form.querySelector('[type="email"]');
        if (emailField && emailField.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value)) {
                this.showFieldError(emailField, 'يرجى إدخال بريد إلكتروني صحيح / Please enter a valid email');
                isValid = false;
            }
        }

        // Validate phone number
        const phoneField = form.querySelector('[type="tel"]');
        if (phoneField && phoneField.value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(phoneField.value)) {
                this.showFieldError(phoneField, 'يرجى إدخال رقم هاتف صحيح / Please enter a valid phone number');
                isValid = false;
            }
        }

        return isValid;
    }

    // Show field error with enhanced animation
    showFieldError(field, message) {
        this.clearFieldError(field);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: var(--danger);
            font-size: 0.8rem;
            margin-top: 0.25rem;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            display: block;
        `;
        
        field.style.borderColor = 'var(--danger)';
        field.style.transform = 'scale(1.02)';
        field.parentNode.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.style.opacity = '1';
            errorDiv.style.transform = 'translateY(0)';
        }, 10);
        
        setTimeout(() => {
            field.style.transform = 'scale(1)';
        }, 300);
    }

    // Clear field error with animation
    clearFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.style.opacity = '0';
            existingError.style.transform = 'translateY(-10px)';
            setTimeout(() => existingError.remove(), 300);
        }
        field.style.borderColor = '';
        field.style.transform = 'scale(1)';
    }

    // Simulate API call with progress
    simulateApiCall(delay) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    // Show booking success modal with enhanced animation - FIXED
    showBookingSuccess(bookingData) {
        const modal = document.getElementById('successModal');
        const bookingId = document.getElementById('bookingId');
        const confirmation = document.getElementById('bookingConfirmation');

        if (!modal || !bookingId || !confirmation) return;

        bookingId.textContent = bookingData.id;
        confirmation.innerHTML = `
            <p>شكراً لك ${bookingData.name}، تم حجز موعدك بنجاح!</p>
            <p>Thank you ${bookingData.name}, your appointment has been booked successfully!</p>
            <p><strong>التاريخ / Date:</strong> ${bookingData.date}</p>
            <p><strong>الوقت / Time:</strong> ${bookingData.time}</p>
            <p><strong>الخدمة / Service:</strong> ${this.getServiceName(bookingData.service)}</p>
            <p>سنتواصل معك قريباً لتأكيد الموعد.</p>
            <p>We will contact you soon to confirm your appointment.</p>
        `;

        this.showModal(modal);
    }

    // Get service name for display
    getServiceName(serviceValue) {
        const services = {
            'general': 'طب الأسنان العام / General Dentistry',
            'cosmetic': 'طب الأسنان التجميلي / Cosmetic Dentistry',
            'orthodontics': 'تقويم الأسنان / Orthodontics',
            'implants': 'زراعة الأسنان / Dental Implants',
            'whitening': 'تبييض الأسنان / Teeth Whitening',
            'root-canal': 'علاج العصب / Root Canal'
        };
        return services[serviceValue] || serviceValue;
    }

    // Show modal with enhanced animation
    showModal(modal) {
        if (!modal) return;
        
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('show'), 10);
        
        // Add confetti effect for success modal
        if (modal.id === 'successModal') {
            this.createConfettiEffect();
        }
    }

    // Create confetti effect for successful booking - FIXED
    createConfettiEffect() {
        const colors = ['#e91e63', '#9c27b0', '#0066cc', '#28a745', '#ffc107'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: -10px;
                left: ${Math.random() * 100}vw;
                z-index: 10001;
                border-radius: 50%;
                pointer-events: none;
                animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
                transform: rotate(${Math.random() * 360}deg);
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 5000);
        }
    }

    // Close all modals with enhanced animation
    closeModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('show');
            setTimeout(() => modal.classList.add('hidden'), 400);
        });
    }

    // Check admin access via URL parameter
    checkAdminAccess() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('admin') === 'true') {
            setTimeout(() => this.showAdminLogin(), 500);
        }
    }

    // Show admin login modal
    showAdminLogin() {
        const modal = document.getElementById('adminLoginModal');
        this.showModal(modal);
    }

    // Close admin login
    closeAdminLogin() {
        const modal = document.getElementById('adminLoginModal');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.classList.add('hidden'), 400);
        }
    }

    // Handle admin login with enhanced security feedback - FIXED
    async handleAdminLogin(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const username = document.getElementById('adminUsername')?.value;
        const password = document.getElementById('adminPassword')?.value;
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');

        if (!username || !password || !submitBtn) return;

        // Show enhanced loading state
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'جاري التحقق... / Verifying...';
        submitBtn.style.transform = 'scale(0.95)';

        try {
            // Simulate authentication delay
            await this.simulateApiCall(1500);

            if (username.trim() === 'admin' && password.trim() === 'safwa2024') {
                this.isAdminLoggedIn = true;
                submitBtn.style.background = 'var(--success)';
                submitBtn.textContent = 'تم بنجاح / Success!';
                
                setTimeout(() => {
                    this.closeAdminLogin();
                    setTimeout(() => this.showAdminPanel(), 400);
                }, 1000);
            } else {
                submitBtn.style.background = 'var(--danger)';
                submitBtn.textContent = 'خطأ / Error';
                setTimeout(() => {
                    alert('اسم المستخدم أو كلمة المرور غير صحيحة / Invalid username or password');
                }, 500);
            }
        } catch (error) {
            console.error('Admin login error:', error);
            submitBtn.style.background = 'var(--danger)';
            submitBtn.textContent = 'خطأ / Error';
        } finally {
            // Reset button after delay
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.style.transform = 'scale(1)';
                submitBtn.style.background = '';
                submitBtn.textContent = originalText;
            }, 2000);
        }
    }

    // Show admin panel with enhanced animation
    showAdminPanel() {
        this.updateAdminStats();
        this.updateBookingsTable();
        
        const adminPanel = document.getElementById('adminPanel');
        if (adminPanel) {
            adminPanel.classList.remove('hidden');
            setTimeout(() => adminPanel.classList.add('show'), 10);
        }
    }

    // Close admin panel
    closeAdmin() {
        const adminPanel = document.getElementById('adminPanel');
        if (adminPanel) {
            adminPanel.classList.remove('show');
            setTimeout(() => {
                adminPanel.classList.add('hidden');
                this.isAdminLoggedIn = false;
            }, 400);
        }
    }

    // Update admin statistics
    updateAdminStats() {
        const totalBookings = this.bookings.length;
        const today = new Date().toISOString().split('T')[0];
        const todayBookings = this.bookings.filter(booking => 
            booking.date === today
        ).length;

        const totalElement = document.getElementById('totalBookings');
        const todayElement = document.getElementById('todayBookings');
        const viewsElement = document.getElementById('pageViews');

        if (totalElement) totalElement.textContent = totalBookings;
        if (todayElement) todayElement.textContent = todayBookings;
        if (viewsElement) viewsElement.textContent = this.pageViews;
    }

    // Update bookings table with enhanced visual feedback
    updateBookingsTable() {
        const tbody = document.getElementById('bookingsTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        if (this.bookings.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;">لا توجد حجوزات / No bookings found</td></tr>';
            return;
        }

        const sortedBookings = [...this.bookings].sort((a, b) => 
            new Date(b.createdAt) - new Date(a.createdAt)
        );

        sortedBookings.forEach((booking, index) => {
            const row = document.createElement('tr');
            row.style.opacity = '0';
            row.style.transform = 'translateY(20px)';
            row.innerHTML = `
                <td>${booking.id}</td>
                <td>${booking.name}</td>
                <td>${booking.phone}</td>
                <td>${this.getServiceName(booking.service)}</td>
                <td>${booking.date} ${booking.time}</td>
                <td>
                    <span class="status-badge status-${booking.status}">
                        ${this.getStatusText(booking.status)}
                    </span>
                </td>
                <td>
                    <button class="btn btn--sm" onclick="app.updateBookingStatus('${booking.id}', 'confirmed')" style="margin: 2px; padding: 4px 8px; font-size: 0.8rem;">
                        تأكيد
                    </button>
                    <button class="btn btn--sm btn--secondary" onclick="app.updateBookingStatus('${booking.id}', 'completed')" style="margin: 2px; padding: 4px 8px; font-size: 0.8rem;">
                        مكتمل
                    </button>
                    <button class="btn btn--sm" style="background: var(--danger); color: white; margin: 2px; padding: 4px 8px; font-size: 0.8rem;" onclick="app.deleteBooking('${booking.id}')">
                        حذف
                    </button>
                </td>
            `;
            tbody.appendChild(row);
            
            // Animate row appearance
            setTimeout(() => {
                row.style.transition = 'all 0.3s ease';
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Get status text
    getStatusText(status) {
        const statusTexts = {
            'pending': 'في الانتظار / Pending',
            'confirmed': 'مؤكد / Confirmed',
            'completed': 'مكتمل / Completed'
        };
        return statusTexts[status] || status;
    }

    // Update booking status with visual feedback
    updateBookingStatus(bookingId, newStatus) {
        const bookingIndex = this.bookings.findIndex(b => b.id === bookingId);
        if (bookingIndex !== -1) {
            this.bookings[bookingIndex].status = newStatus;
            this.bookings[bookingIndex].updatedAt = new Date().toISOString();
            localStorage.setItem('clinicBookings', JSON.stringify(this.bookings));
            this.updateAdminStats();
            this.updateBookingsTable();
            
            // Show success feedback
            this.showStatusUpdateFeedback(newStatus);
        }
    }

    // Show status update feedback
    showStatusUpdateFeedback(status) {
        const feedback = document.createElement('div');
        feedback.textContent = `تم تحديث الحالة إلى ${this.getStatusText(status)} / Status updated to ${this.getStatusText(status)}`;
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--success);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 10000;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
            pointer-events: none;
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.opacity = '1';
            feedback.style.transform = 'translateY(0)';
        }, 10);
        
        setTimeout(() => {
            feedback.style.opacity = '0';
            feedback.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (feedback.parentNode) {
                    feedback.remove();
                }
            }, 300);
        }, 3000);
    }

    // Delete booking with confirmation
    deleteBooking(bookingId) {
        if (confirm('هل أنت متأكد من حذف هذا الحجز؟ / Are you sure you want to delete this booking?')) {
            this.bookings = this.bookings.filter(b => b.id !== bookingId);
            localStorage.setItem('clinicBookings', JSON.stringify(this.bookings));
            this.updateAdminStats();
            this.updateBookingsTable();
            
            // Show delete feedback
            this.showStatusUpdateFeedback('محذوف / Deleted');
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new DentalClinicApp();

    // Add enhanced form input event listeners
    const formInputs = document.querySelectorAll('#bookingForm input, #bookingForm select, #bookingForm textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (window.app) {
                window.app.clearFieldError(input);
            }
        });

        input.addEventListener('blur', () => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                if (window.app) {
                    window.app.showFieldError(input, 'هذا الحقل مطلوب / This field is required');
                }
            }
        });

        // Enhanced focus effects
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', () => {
            setTimeout(() => {
                if (input.style.borderColor !== 'var(--danger)') {
                    input.style.transform = 'scale(1)';
                }
            }, 200);
        });
    });
});

// Global functions
function scrollToSection(sectionId) {
    if (window.app) {
        window.app.scrollToSection(sectionId);
    }
}

function closeAdmin() {
    if (window.app) {
        window.app.closeAdmin();
    }
}

function closeAdminLogin() {
    if (window.app) {
        window.app.closeAdminLogin();
    }
}

// Enhanced ripple effect for buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn') || e.target.closest('.btn')) {
        const button = e.target.matches('.btn') ? e.target : e.target.closest('.btn');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(233, 30, 99, 0.6) 0%, rgba(156, 39, 176, 0.4) 100%);
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            pointer-events: none;
            z-index: 1;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
    }
});

// Add enhanced CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    .field-error {
        color: var(--danger) !important;
        font-size: 0.8rem !important;
        margin-top: 0.25rem !important;
        display: block !important;
    }
    
    /* Fix dropdown interaction */
    select.form-control {
        pointer-events: auto !important;
        -webkit-appearance: menulist !important;
        -moz-appearance: menulist !important;
        appearance: menulist !important;
    }
`;
document.head.appendChild(style);

// Enhanced image loading with fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            img.addEventListener('load', () => {
                setTimeout(() => img.style.opacity = '1', 100);
            });
        }
    });
});

// Smooth scroll polyfill with enhanced easing
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target && window.app) {
                    window.app.scrollToSection(targetId);
                }
            });
        });
    };
    
    smoothScrollPolyfill();
}