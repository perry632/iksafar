// ============================================
// Iksafar Travel - Booking Form
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initBookingForm();
    initBookingSteps();
    initDatePicker();
});

function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateBookingForm(this)) {
            submitBooking(this);
        }
    });
}

function initBookingSteps() {
    const steps = document.querySelectorAll('.booking-step');
    const nextBtns = document.querySelectorAll('.step-next');
    const prevBtns = document.querySelectorAll('.step-prev');
    let currentStep = 1;
    
    function showStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle('active', index + 1 === step);
        });
        
        // Update progress
        document.querySelectorAll('.step-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index + 1 <= step);
            dot.classList.toggle('completed', index + 1 < step);
        });
        
        document.querySelector('.step-indicator').textContent = `Step ${step} of ${steps.length}`;
    }
    
    nextBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentStepEl = steps[currentStep - 1];
            if (validateStep(currentStepEl)) {
                if (currentStep < steps.length) {
                    currentStep++;
                    showStep(currentStep);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });
    });
    
    prevBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
    
    showStep(1);
}

function validateStep(step) {
    const inputs = step.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') || input.dataset.required === 'true') {
            if (!input.value.trim()) {
                showError(input, 'This field is required');
                isValid = false;
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                showError(input, 'Please enter a valid email address');
                isValid = false;
            } else if (input.type === 'tel' && !isValidPhone(input.value)) {
                showError(input, 'Please enter a valid phone number');
                isValid = false;
            } else {
                clearError(input);
            }
        }
    });
    
    return isValid;
}

function validateBookingForm(form) {
    const steps = form.querySelectorAll('.booking-step');
    let isValid = true;
    
    steps.forEach(step => {
        if (!validateStep(step)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function submitBooking(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Add package details
    const packageId = new URLSearchParams(window.location.search).get('package');
    if (packageId) {
        data.packageId = parseInt(packageId);
        const pkg = IKSafarData.getPackageById(data.packageId);
        if (pkg) {
            data.packageName = pkg.name;
            data.packagePrice = pkg.price;
        }
    }
    
    // Save to localStorage
    StorageManager.saveBookingData(data);
    
    // Show success message
    showBookingSuccess(data);
}

function showBookingSuccess(data) {
    const form = document.getElementById('booking-form');
    if (!form) return;
    
    const successHtml = `
        <div class="booking-success">
            <i class="fas fa-check-circle" style="font-size: 4rem; color: #22c55e;"></i>
            <h2>Booking Confirmed! 🎉</h2>
            <p>Thank you for booking with Iksafar Travel!</p>
            <div class="booking-details">
                <p><strong>Package:</strong> ${data.packageName || 'N/A'}</p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Travel Date:</strong> ${data.travelDate}</p>
                <p><strong>Number of Guests:</strong> ${data.guests}</p>
                <p><strong>Total Price:</strong> ₹${(data.packagePrice || 0) * (data.guests || 1)}</p>
            </div>
            <p style="margin-top: 20px;">We will contact you within 24 hours to confirm your booking.</p>
            <div style="margin-top: 20px;">
                <a href="index.html" class="btn-primary">Go to Homepage</a>
                <a href="packages.html" class="btn-outline">Browse More Packages</a>
            </div>
        </div>
    `;
    
    form.innerHTML = successHtml;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initDatePicker() {
    const dateInput = document.getElementById('travelDate');
    if (!dateInput) return;
    
    // Set min date to today
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
}

// ---------- Validation Helpers ----------
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[0-9]{10}$/.test(phone.replace(/\s/g, ''));
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    
    input.classList.add('error');
    
    let errorEl = formGroup.querySelector('.form-error');
    if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'form-error';
        formGroup.appendChild(errorEl);
    }
    errorEl.textContent = message;
}

function clearError(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    
    input.classList.remove('error');
    const errorEl = formGroup.querySelector('.form-error');
    if (errorEl) {
        errorEl.remove();
    }
}