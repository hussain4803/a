// Al-Safwa Dental Clinic - Reservation System
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const reservationForm = document.getElementById('reservationForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Smooth scrolling for navigation links only
    document.querySelectorAll('a[href^="#"]:not(.btn)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handler
    reservationForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Hide previous messages
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Get form data
            const formData = new FormData(reservationForm);
            const bookingData = {
                customerName: formData.get('fullName').trim(),
                customerEmail: formData.get('email').trim(),
                customerPhone: formData.get('phone').trim(),
                preferredDate: formData.get('preferredDate') || 'لم يحدد / Not specified',
                serviceNeeded: getServiceName(formData.get('service')) || 'لم يحدد / Not specified',
                additionalNotes: formData.get('notes').trim() || 'لا توجد ملاحظات / No notes',
                bookingId: generateBookingId(),
                serviceDate: formData.get('preferredDate') || new Date().toISOString().split('T')[0],
                totalAmount: 'سيتم تحديده لاحقاً / To be determined'
            };

            // Validate required fields
            if (!bookingData.customerName || !bookingData.customerEmail || !bookingData.customerPhone) {
                throw new Error('يرجى ملء جميع الحقول المطلوبة / Please fill in all required fields');
            }

            // Validate email format
            if (!isValidEmail(bookingData.customerEmail)) {
                throw new Error('يرجى إدخال بريد إلكتروني صالح / Please enter a valid email address');
            }

            // Send confirmation email
            await sendConfirmationEmail(bookingData);
            
            // Show success message
            successMessage.classList.remove('hidden');
            
            // Reset form
            reservationForm.reset();
            
            // Scroll to success message smoothly without interference
            setTimeout(() => {
                successMessage.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 100);
            
        } catch (error) {
            console.error('Booking error:', error);
            
            // Show error message
            errorMessage.classList.remove('hidden');
            
            // Scroll to error message smoothly
            setTimeout(() => {
                errorMessage.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 100);
        } finally {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });

    // Brevo API function (provided by user)
    async function sendConfirmationEmail(bookingData) {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': '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',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: {
                    email: "trollage42069@gmail.com",
                    name: "alsafwa"
                },
                to: [{
                    email: bookingData.customerEmail,
                    name: bookingData.customerName
                }],
                templateId: 123,
                params: {
                    BOOKING_ID: bookingData.bookingId,
                    CUSTOMER_NAME: bookingData.customerName,
                    SERVICE_DATE: bookingData.serviceDate,
                    TOTAL_AMOUNT: bookingData.totalAmount
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`Email sending failed: ${response.status} - ${errorData.message || 'Unknown error'}`);
        }

        return response.json();
    }

    // Utility functions
    function generateBookingId() {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `SF${timestamp}${random}`;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function getServiceName(serviceValue) {
        const services = {
            'general': 'طب الأسنان العام / General Dentistry',
            'cosmetic': 'طب الأسنان التجميلي / Cosmetic Dentistry',
            'orthodontics': 'تقويم الأسنان / Orthodontics',
            'surgery': 'جراحة الفم / Oral Surgery',
            'implants': 'زراعة الأسنان / Dental Implants',
            'whitening': 'تبييض الأسنان / Teeth Whitening'
        };
        return services[serviceValue] || serviceValue;
    }

    // Set minimum date to today for the date input
    const dateInput = document.getElementById('preferredDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // Phone number formatting (basic) - without causing scroll issues
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Prevent default scroll behavior
            e.stopPropagation();
            
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                // Format for Saudi numbers
                if (value.startsWith('966')) {
                    value = '+' + value;
                } else if (value.startsWith('05') || value.startsWith('5')) {
                    if (value.startsWith('5')) {
                        value = '05' + value.substring(1);
                    }
                    value = '+966' + value.substring(1);
                }
            }
            e.target.value = value;
        });
    }

    // Form field validation styling - improved without causing scroll
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
        // Prevent focus/input events from causing scroll issues
        input.addEventListener('focus', function(e) {
            e.stopPropagation();
        });

        input.addEventListener('blur', function(e) {
            e.stopPropagation();
            validateField(this);
        });

        input.addEventListener('input', function(e) {
            e.stopPropagation();
            // Remove error styling on input
            this.style.borderColor = '';
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');
        
        if (isRequired && !value) {
            field.style.borderColor = '#ef4444';
            return false;
        }

        if (field.type === 'email' && value && !isValidEmail(value)) {
            field.style.borderColor = '#ef4444';
            return false;
        }

        if (value) {
            field.style.borderColor = '#10b981';
        }
        return true;
    }

    // Navbar scroll effect
    let ticking = false;
    function updateNavbar() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    // Simplified intersection observer that won't interfere with form
    const fadeElements = document.querySelectorAll('.service-card, .feature, .credential');
    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    // Only observe specific elements, not sections that contain forms
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(element);
    });

    // Service cards hover effect
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Feature cards hover effect
    document.querySelectorAll('.feature').forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(30, 58, 138, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });

        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(30, 58, 138, 0.1)';
        });
    });

    // Auto-hide messages after 8 seconds
    function autoHideMessage(element) {
        setTimeout(() => {
            if (!element.classList.contains('hidden')) {
                element.style.transition = 'opacity 0.5s ease';
                element.style.opacity = '0';
                setTimeout(() => {
                    element.classList.add('hidden');
                    element.style.opacity = '';
                    element.style.transition = '';
                }, 500);
            }
        }, 8000);
    }

    // Monitor for success/error messages
    const messageObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.id === 'successMessage' && !target.classList.contains('hidden')) {
                    autoHideMessage(target);
                }
                if (target.id === 'errorMessage' && !target.classList.contains('hidden')) {
                    autoHideMessage(target);
                }
            }
        });
    });

    messageObserver.observe(successMessage, { attributes: true });
    messageObserver.observe(errorMessage, { attributes: true });

    // Prevent any unwanted scrolling during form interaction
    let formInteracting = false;
    reservationForm.addEventListener('focusin', function() {
        formInteracting = true;
    });

    reservationForm.addEventListener('focusout', function() {
        setTimeout(() => {
            formInteracting = false;
        }, 100);
    });

    // Override any automatic scrolling when user is interacting with form
    const originalScrollTo = window.scrollTo;
    const originalScrollIntoView = Element.prototype.scrollIntoView;

    window.scrollTo = function(...args) {
        if (!formInteracting) {
            originalScrollTo.apply(this, args);
        }
    };

    Element.prototype.scrollIntoView = function(...args) {
        if (!formInteracting || this.id === 'successMessage' || this.id === 'errorMessage') {
            originalScrollIntoView.apply(this, args);
        }
    };

    console.log('Al-Safwa Dental Clinic - Landing Page Loaded Successfully');
});