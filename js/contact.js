// ============================================
// Iksafar Travel - Contact Page
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initGoogleMap();
});

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateContactForm(this)) {
            submitContactForm(this);
        }
    });
}

function validateContactForm(form) {
    const name = form.querySelector('#contactName');
    const email = form.querySelector('#contactEmail');
    const phone = form.querySelector('#contactPhone');
    const message = form.querySelector('#contactMessage');
    let isValid = true;
    
    if (!name.value.trim()) {
        showError(name, 'Please enter your name');
        isValid = false;
    } else {
        clearError(name);
    }
    
    if (!email.value.trim() || !isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(email);
    }
    
    if (phone.value.trim() && !isValidPhone(phone.value)) {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
    } else {
        clearError(phone);
    }
    
    if (!message.value.trim()) {
        showError(message, 'Please enter your message');
        isValid = false;
    } else {
        clearError(message);
    }
    
    return isValid;
}

function submitContactForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show success message
    const successHtml = `
        <div class="contact-success">
            <i class="fas fa-check-circle" style="font-size: 3rem; color: #22c55e;"></i>
            <h3>Message Sent! 📨</h3>
            <p>Thank you for contacting Iksafar Travel. We will get back to you within 24 hours.</p>
            <button onclick="location.reload()" class="btn-primary">Send Another Message</button>
        </div>
    `;
    
    form.innerHTML = successHtml;
    
    // Log for demo (replace with actual API call)
    console.log('Contact form submitted:', data);
    showToast('Message sent successfully! We\'ll contact you soon.', 'success');
}

function initGoogleMap() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;
    
    // For demo, we'll show a static map with address
    const address = 'B 1/6, Ganesh Nagar, Delhi 110045';
    const mapHtml = `
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #e5ddd4; flex-direction: column; padding: 20px;">
            <i class="fas fa-map-marker-alt" style="font-size: 4rem; color: var(--secondary);"></i>
            <h3 style="margin-top: 12px;">${address}</h3>
            <p style="color: var(--text-muted);">📍 Open in Google Maps</p>
            <a href="https://maps.google.com/?q=B+1/6+Ganesh+Nagar+Delhi+110045" target="_blank" class="btn-primary" style="margin-top: 12px;">
                <i class="fas fa-directions"></i> Get Directions
            </a>
        </div>
    `;
    
    mapContainer.innerHTML = mapHtml;
}