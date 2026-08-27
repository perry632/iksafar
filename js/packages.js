// ============================================
// Iksafar Travel - Packages Page
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initPackageFilters();
    initPackageSearch();
    initPackageSort();
    initLoadMorePackages();
});

function initPackageFilters() {
    const filterForm = document.getElementById('package-filters');
    if (!filterForm) return;
    
    const checkboxes = filterForm.querySelectorAll('input[type="checkbox"]');
    const radioButtons = filterForm.querySelectorAll('input[type="radio"]');
    
    checkboxes.forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });
    
    radioButtons.forEach(rb => {
        rb.addEventListener('change', applyFilters);
    });
}

function initPackageSearch() {
    const searchInput = document.getElementById('package-search');
    if (searchInput) {
        let timeoutId;
        searchInput.addEventListener('input', function() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                applyFilters();
            }, 300);
        });
    }
}

function initPackageSort() {
    const sortSelect = document.getElementById('package-sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    const packages = IKSafarData.packages;
    const filtered = filterPackages(packages);
    const sorted = sortPackages(filtered);
    displayPackages(sorted);
    updatePackageCount(sorted.length);
}

function filterPackages(packages) {
    let filtered = [...packages];
    
    // Region filter
    const selectedRegions = document.querySelectorAll('input[name="region"]:checked');
    if (selectedRegions.length > 0) {
        const regions = Array.from(selectedRegions).map(el => el.value);
        filtered = filtered.filter(pkg => regions.includes(pkg.region.toLowerCase()));
    }
    
    // Price filter
    const minPrice = parseInt(document.getElementById('price-min')?.value) || 0;
    const maxPrice = parseInt(document.getElementById('price-max')?.value) || Infinity;
    filtered = filtered.filter(pkg => pkg.price >= minPrice && pkg.price <= maxPrice);
    
    // Duration filter
    const selectedDurations = document.querySelectorAll('input[name="duration"]:checked');
    if (selectedDurations.length > 0) {
        const durations = Array.from(selectedDurations).map(el => el.value);
        filtered = filtered.filter(pkg => durations.includes(pkg.duration));
    }
    
    // Search filter
    const searchQuery = document.getElementById('package-search')?.value?.trim() || '';
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(pkg => 
            pkg.name.toLowerCase().includes(query) ||
            pkg.description.toLowerCase().includes(query) ||
            pkg.region.toLowerCase().includes(query) ||
            pkg.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }
    
    // Rating filter
    const minRating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value) || 0;
    if (minRating > 0) {
        filtered = filtered.filter(pkg => pkg.rating >= minRating);
    }
    
    return filtered;
}

function sortPackages(packages) {
    const sortBy = document.getElementById('package-sort')?.value || 'popular';
    const sorted = [...packages];
    
    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'duration':
            sorted.sort((a, b) => {
                const durA = parseInt(a.duration);
                const durB = parseInt(b.duration);
                return durA - durB;
            });
            break;
        case 'popular':
        default:
            sorted.sort((a, b) => b.reviews - a.reviews);
            break;
    }
    
    return sorted;
}

function displayPackages(packages) {
    const container = document.getElementById('packages-grid');
    if (!container) return;
    
    if (packages.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted);"></i>
                <h3>No packages found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button onclick="resetFilters()" class="btn-primary">Reset Filters</button>
            </div>
        `;
        return;
    }
    
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
                    ${pkg.rating >= 4.8 ? '<span class="package-badge">Popular</span>' : ''}
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

function updatePackageCount(count) {
    const countEl = document.getElementById('package-count');
    if (countEl) {
        countEl.textContent = `${count} packages found`;
    }
}

function resetFilters() {
    const filterForm = document.getElementById('package-filters');
    if (filterForm) {
        filterForm.querySelectorAll('input').forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = false;
            }
        });
    }
    
    const searchInput = document.getElementById('package-search');
    if (searchInput) searchInput.value = '';
    
    const sortSelect = document.getElementById('package-sort');
    if (sortSelect) sortSelect.value = 'popular';
    
    applyFilters();
}

function initLoadMorePackages() {
    const loadMoreBtn = document.querySelector('.load-more-packages');
    if (!loadMoreBtn) return;
    
    let currentPage = 1;
    const perPage = 6;
    
    loadMoreBtn.addEventListener('click', function() {
        currentPage++;
        const container = document.getElementById('packages-grid');
        const packages = IKSafarData.packages;
        const start = 0;
        const end = currentPage * perPage;
        const visiblePackages = packages.slice(start, end);
        
        displayPackages(visiblePackages);
        
        if (end >= packages.length) {
            this.style.display = 'none';
        }
    });
}

// Make resetFilters available globally
window.resetFilters = resetFilters;