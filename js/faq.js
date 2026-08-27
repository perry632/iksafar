// ============================================
// Iksafar Travel - FAQ Page JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    loadFAQ();
    initFAQSearch();
    initFAQCategories();
});

let allFAQItems = [];
let currentCategory = 'all';

function loadFAQ() {
    const container = document.getElementById('faq-accordion');
    if (!container) return;
    
    // Get FAQ data from IKSafarData
    allFAQItems = IKSafarData.faq || [
        {
            id: 1,
            category: "Booking",
            question: "How do I book a package?",
            answer: "You can book directly through our website using the booking form, or call us at 8882911056. Our team will assist you with the booking process."
        },
        {
            id: 2,
            category: "Pricing",
            question: "What is included in the package price?",
            answer: "Each package includes accommodation, meals, guide services, and transportation as mentioned in the inclusions section. Please check individual package pages for details."
        },
        {
            id: 3,
            category: "Customization",
            question: "Can I customize my package?",
            answer: "Yes! All packages can be customized based on your preferences and budget. Contact us to create your perfect itinerary."
        },
        {
            id: 4,
            category: "Insurance",
            question: "Is travel insurance included?",
            answer: "Travel insurance is not included in the package price. We strongly recommend purchasing travel insurance separately for your safety."
        },
        {
            id: 5,
            category: "Cancellation",
            question: "What is the cancellation policy?",
            answer: "Cancellation policies vary by package. Generally, cancellations made 30 days before departure get full refund, 15-30 days get 50% refund, and less than 15 days no refund."
        },
        {
            id: 6,
            category: "Discounts",
            question: "Do you offer group discounts?",
            answer: "Yes! We offer attractive discounts for groups of 10 or more. Contact us for a customized quote."
        },
        {
            id: 7,
            category: "Payment",
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, debit cards, UPI, bank transfers, and cash payments."
        },
        {
            id: 8,
            category: "Safety",
            question: "Is it safe to travel with Iksafar Travel?",
            answer: "Safety is our top priority. We work with verified partners, provide trained guides, and have 24/7 emergency support."
        },
        {
            id: 9,
            category: "Booking",
            question: "How far in advance should I book?",
            answer: "We recommend booking at least 30-45 days in advance for the best availability and prices, especially during peak season."
        },
        {
            id: 10,
            category: "Customization",
            question: "Can I change my itinerary after booking?",
            answer: "Yes, itinerary changes can be made subject to availability and additional charges. Please contact us at least 15 days before departure."
        }
    ];
    
    // Load categories
    loadCategories();
    
    // Display FAQ items
    displayFAQItems(allFAQItems);
}

function displayFAQItems(items) {
    const container = document.getElementById('faq-accordion');
    const noResults = document.getElementById('faq-no-results');
    
    if (!container) return;
    
    if (items.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    if (noResults) noResults.style.display = 'none';
    
    let html = '';
    items.forEach((item, index) => {
        html += `
            <div class="accordion-item" data-category="${item.category}" data-id="${item.id}">
                <button class="accordion-header" data-index="${index}">
                    <span>${item.question}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="accordion-body">
                    <div class="accordion-body-inner">
                        ${item.answer}
                        ${item.category ? `<span class="faq-item-category">${item.category}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Add click events for accordion
    container.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all siblings
            const parent = item.parentElement;
            parent.querySelectorAll('.accordion-item').forEach(sibling => {
                sibling.classList.remove('active');
            });
            
            if (!isActive) {
                item.classList.add('active');
                // Scroll to the answer
                setTimeout(() => {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        });
    });
}

function loadCategories() {
    const container = document.getElementById('faq-categories');
    if (!container) return;
    
    // Get unique categories
    const categories = [...new Set(allFAQItems.map(item => item.category))];
    
    // Keep the "All" button
    let html = `<button class="faq-category-btn active" data-category="all">All Questions</button>`;
    
    categories.forEach(cat => {
        const count = allFAQItems.filter(item => item.category === cat).length;
        html += `
            <button class="faq-category-btn" data-category="${cat}">
                ${cat} <span class="category-count">(${count})</span>
            </button>
        `;
    });
    
    container.innerHTML = html;
    
    // Add click events
    container.querySelectorAll('.faq-category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            container.querySelectorAll('.faq-category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            currentCategory = category;
            
            // Filter items
            const searchInput = document.getElementById('faq-search');
            const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';
            
            filterFAQ(category, searchQuery);
        });
    });
}

function initFAQSearch() {
    const searchInput = document.getElementById('faq-search');
    const clearBtn = document.getElementById('faq-search-clear');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        // Show/hide clear button
        if (clearBtn) {
            clearBtn.style.display = query.length > 0 ? 'flex' : 'none';
        }
        
        filterFAQ(currentCategory, query);
    });
    
    // Clear button
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            this.style.display = 'none';
            filterFAQ(currentCategory, '');
            searchInput.focus();
        });
    }
}

function initFAQCategories() {
    // Categories are loaded in loadFAQ()
    // This function is kept for compatibility
}

function filterFAQ(category, searchQuery) {
    let filtered = [...allFAQItems];
    
    // Filter by category
    if (category !== 'all') {
        filtered = filtered.filter(item => item.category === category);
    }
    
    // Filter by search query
    if (searchQuery) {
        filtered = filtered.filter(item => 
            item.question.toLowerCase().includes(searchQuery) ||
            item.answer.toLowerCase().includes(searchQuery) ||
            (item.category && item.category.toLowerCase().includes(searchQuery))
        );
    }
    
    displayFAQItems(filtered);
}

// Make functions globally accessible
window.filterFAQ = filterFAQ;