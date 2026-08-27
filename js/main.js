// ============================================
// Iksafar Travel - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initMobileMenu();
    initSearch();
    initBackToTop();
    initWishlistButtons();
    initStatsCounter();
    initLoadMore();
    initDropdowns();
    initAccordion();

    loadFeaturedPackages();
    loadDestinations();
    loadTestimonials();
});

// ---------- Theme ----------
function initTheme() {
    const theme = StorageManager.getTheme();
    document.documentElement.setAttribute('data-theme', theme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        const icon = toggleBtn.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

        toggleBtn.addEventListener('click', function() {
            const newTheme = StorageManager.toggleTheme();
            const icon = this.querySelector('i');
            icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        });
    }
}

// ---------- Mobile Menu ----------
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('main-nav');
    const body = document.body;

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
                body.style.overflow = '';
            });
        });

        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
                body.style.overflow = '';
            }
        });
    }
}

// ---------- Search ----------
function initSearch() {
    const searchToggle = document.getElementById('search-toggle');
    const searchClose = document.getElementById('search-close');
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchToggle && searchBar) {
        searchToggle.addEventListener('click', function() {
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }

    if (searchClose && searchBar) {
        searchClose.addEventListener('click', function() {
            searchBar.classList.remove('active');
            searchInput.value = '';
            if (searchResults) searchResults.innerHTML = '';
        });
    }

    if (searchInput && searchResults) {
        let timeoutId;
        searchInput.addEventListener('input', function() {
            clearTimeout(timeoutId);
            const query = this.value.trim();

            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }

            timeoutId = setTimeout(() => {
                performSearch(query, searchResults);
            }, 300);
        });

        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchBar.classList.remove('active');
                this.value = '';
                searchResults.innerHTML = '';
            }
        });
    }
}

function performSearch(query, resultsContainer) {
    const results = IKSafarData.searchPackages(query);

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-empty">
                <i class="fas fa-search" style="font-size: 2rem; display: block; margin-bottom: 12px;"></i>
                No packages found for "${query}"
            </div>
        `;
        return;
    }

    let html = '<ul class="search-list">';
    results.slice(0, 10).forEach(pkg => {
        html += `
            <li>
                <a href="package-detail.html?id=${pkg.id}">
                    <div class="search-item">
                        <span class="search-name">${pkg.name}</span>
                        <span class="search-region">${pkg.region}</span>
                        <span class="search-price">₹${pkg.price.toLocaleString()}</span>
                    </div>
                </a>
            </li>
        `;
    });
    if (results.length > 10) {
        html += `<li><a href="packages.html?search=${encodeURIComponent(query)}" class="search-view-all">View all ${results.length} results</a></li>`;
    }
    html += '</ul>';

    resultsContainer.innerHTML = html;
    StorageManager.addRecentSearch(query);
}

// ---------- Back to Top ----------
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ---------- Wishlist ----------
function initWishlistButtons() {
    attachWishlistEvents();
}

function attachWishlistEvents() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.removeEventListener('click', handleWishlistClick);
        btn.addEventListener('click', handleWishlistClick);
    });
}

function handleWishlistClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const btn = this;
    const packageId = parseInt(btn.dataset.id);
    if (!packageId) return;

    const icon = btn.querySelector('i');
    const isInWishlist = StorageManager.isInWishlist(packageId);

    if (isInWishlist) {
        StorageManager.removeFromWishlist(packageId);
        icon.className = 'far fa-heart';
        showToast('Removed from wishlist', 'info');
    } else {
        StorageManager.addToWishlist(packageId);
        icon.className = 'fas fa-heart';
        showToast('Added to wishlist ❤️', 'success');
    }
}

// ---------- Stats Counter ----------
function initStatsCounter() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                if (target && !el.dataset.counted) {
                    el.dataset.counted = 'true';
                    animateCounter(el, target);
                }
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target) {
    const duration = 2000;
    const start = 0;
    const step = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 16);
}

// ---------- Load More ----------
function initLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', function() {
        const hiddenItems = document.querySelectorAll('.package-card.hidden');
        if (hiddenItems.length) {
            hiddenItems.forEach(item => item.classList.remove('hidden'));
            this.style.display = 'none';
        }
    });
}

// ---------- Dropdowns ----------
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        if (link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('open');
                }
            });
        }
    });
}

// ---------- Accordion ----------
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            const parent = item.parentElement;
            parent.querySelectorAll('.accordion-item').forEach(sibling => {
                sibling.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ---------- Load Featured Packages ----------
function loadFeaturedPackages() {
    const container = document.getElementById('featured-packages');
    if (!container) return;

    const packages = IKSafarData.getFeaturedPackages(6);

    let html = '';
    packages.forEach(pkg => {
        const inWishlist = StorageManager.isInWishlist(pkg.id);
        html += `
            <div class="package-card" data-id="${pkg.id}">
                <div class="package-image">
                    <img src="${pkg.image}" alt="${pkg.name}" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
                    <span class="package-region">${pkg.region}</span>
                    <button class="wishlist-btn" data-id="${pkg.id}">
                        <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="package-info">
                    <h3>${pkg.name}</h3>
                    <div class="package-meta">
                        <span><i class="fas fa-clock"></i> ${pkg.duration}</span>
                        <span class="rating"><i class="fas fa-star"></i> ${pkg.rating} (${pkg.reviews})</span>
                    </div>
                    <p>${pkg.description}</p>
                    <div class="package-footer">
                        <span class="price">₹${pkg.price.toLocaleString()}</span>
                        <a href="package-detail.html?id=${pkg.id}" class="btn-view">View Details</a>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    attachWishlistEvents();
}

// ---------- Load Destinations ----------
function loadDestinations() {
    const container = document.getElementById('destinations-grid');
    if (!container) return;

    const destinations = IKSafarData.destinations.slice(0, 6);

    let html = '';
    destinations.forEach(dest => {
        html += `
            <div class="destination-card">
                <img src="${dest.image}" alt="${dest.name}" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
                <div class="destination-overlay">
                    <span class="destination-region">${dest.region}</span>
                    <h4>${dest.name}</h4>
                    <p>${dest.description}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ---------- Load Testimonials ----------
function loadTestimonials() {
    const container = document.getElementById('testimonials');
    if (!container) return;

    const testimonials = IKSafarData.testimonials;

    let html = '';
    testimonials.forEach(testimonial => {
        const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
        html += `
            <div class="swiper-slide">
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy" onerror="this.src='assets/images/user-placeholder.jpg'">
                        <div>
                            <h4>${testimonial.name}</h4>
                            <span>${testimonial.location}</span>
                        </div>
                    </div>
                    <div class="testimonial-stars">${stars}</div>
                    <p>"${testimonial.text}"</p>
                    <span class="testimonial-date">${testimonial.date}</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    if (typeof Swiper !== 'undefined') {
        new Swiper('#testimonials-slider', {
            slidesPerView: 1,
            spaceBetween: 24,
            autoplay: {
                delay: 4000,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });
    }
}

// ---------- Toast Notification ----------
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
    toast.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 3000);
}

// ---------- Utility Functions ----------
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

function getUrlParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    for (const [key, value] of urlParams) {
        params[key] = value;
    }
    return params;
}

// ---------- Header Scroll Effect ----------
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// ---------- Console Greeting ----------
console.log('✈️ Iksafar Travel - Explore India with Authentic Journeys');
console.log('📞 Call us: 8882911056 | 7979092626');
console.log('📍 Office: Plot 42, Sector 18, Gurugram');
console.log('👤 Owner: Ankit Anand Singh');
console.log('🔗 LinkedIn: https://in.linkedin.com/in/ankit-singh-914025211');