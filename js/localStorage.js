// ============================================
// Iksafar Travel - LocalStorage Manager
// User preferences, wishlist, cart, etc.
// ============================================

const StorageManager = {
    // ---------- Wishlist ----------
    getWishlist: function() {
        const wishlist = localStorage.getItem('iksafar_wishlist');
        return wishlist ? JSON.parse(wishlist) : [];
    },
    
    addToWishlist: function(packageId) {
        const wishlist = this.getWishlist();
        if (!wishlist.includes(packageId)) {
            wishlist.push(packageId);
            localStorage.setItem('iksafar_wishlist', JSON.stringify(wishlist));
            this.trackEvent('wishlist_add', { packageId });
            return true;
        }
        return false;
    },
    
    removeFromWishlist: function(packageId) {
        let wishlist = this.getWishlist();
        wishlist = wishlist.filter(id => id !== packageId);
        localStorage.setItem('iksafar_wishlist', JSON.stringify(wishlist));
        this.trackEvent('wishlist_remove', { packageId });
        return wishlist;
    },
    
    isInWishlist: function(packageId) {
        const wishlist = this.getWishlist();
        return wishlist.includes(packageId);
    },
    
    toggleWishlist: function(packageId) {
        if (this.isInWishlist(packageId)) {
            this.removeFromWishlist(packageId);
            return false;
        } else {
            this.addToWishlist(packageId);
            return true;
        }
    },
    
    // ---------- Cart ----------
    getCart: function() {
        const cart = localStorage.getItem('iksafar_cart');
        return cart ? JSON.parse(cart) : [];
    },
    
    addToCart: function(packageId, bookingDetails = {}) {
        const cart = this.getCart();
        const existing = cart.find(item => item.id === packageId);
        
        if (existing) {
            existing.quantity = (existing.quantity || 1) + 1;
        } else {
            cart.push({
                id: packageId,
                quantity: 1,
                details: bookingDetails,
                addedAt: new Date().toISOString()
            });
        }
        
        localStorage.setItem('iksafar_cart', JSON.stringify(cart));
        this.trackEvent('cart_add', { packageId, quantity: existing ? existing.quantity : 1 });
        return cart;
    },
    
    removeFromCart: function(packageId) {
        let cart = this.getCart();
        cart = cart.filter(item => item.id !== packageId);
        localStorage.setItem('iksafar_cart', JSON.stringify(cart));
        this.trackEvent('cart_remove', { packageId });
        return cart;
    },
    
    updateCartQuantity: function(packageId, quantity) {
        let cart = this.getCart();
        const item = cart.find(item => item.id === packageId);
        if (item) {
            if (quantity <= 0) {
                cart = cart.filter(i => i.id !== packageId);
            } else {
                item.quantity = quantity;
            }
        }
        localStorage.setItem('iksafar_cart', JSON.stringify(cart));
        return cart;
    },
    
    clearCart: function() {
        localStorage.removeItem('iksafar_cart');
        this.trackEvent('cart_clear', {});
    },
    
    getCartTotal: function() {
        const cart = this.getCart();
        let total = 0;
        cart.forEach(item => {
            const pkg = window.IKSafarData?.getPackageById(item.id);
            if (pkg) {
                total += pkg.price * (item.quantity || 1);
            }
        });
        return total;
    },
    
    getCartCount: function() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    },
    
    // ---------- Theme ----------
    getTheme: function() {
        return localStorage.getItem('iksafar_theme') || 'light';
    },
    
    setTheme: function(theme) {
        localStorage.setItem('iksafar_theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        this.trackEvent('theme_change', { theme });
    },
    
    toggleTheme: function() {
        const current = this.getTheme();
        const newTheme = current === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        return newTheme;
    },
    
    // ---------- Recent Searches ----------
    getRecentSearches: function() {
        const searches = localStorage.getItem('iksafar_recent_searches');
        return searches ? JSON.parse(searches) : [];
    },
    
    addRecentSearch: function(query) {
        if (!query || query.trim().length < 2) return;
        let searches = this.getRecentSearches();
        const q = query.trim();
        searches = searches.filter(s => s.toLowerCase() !== q.toLowerCase());
        searches.unshift(q);
        if (searches.length > 10) searches = searches.slice(0, 10);
        localStorage.setItem('iksafar_recent_searches', JSON.stringify(searches));
        return searches;
    },
    
    clearRecentSearches: function() {
        localStorage.removeItem('iksafar_recent_searches');
    },
    
    // ---------- Booking Data ----------
    saveBookingData: function(data) {
        localStorage.setItem('iksafar_booking_data', JSON.stringify(data));
        this.trackEvent('booking_save', { data: { ...data, timestamp: new Date().toISOString() } });
    },
    
    getBookingData: function() {
        const data = localStorage.getItem('iksafar_booking_data');
        return data ? JSON.parse(data) : null;
    },
    
    clearBookingData: function() {
        localStorage.removeItem('iksafar_booking_data');
    },
    
    // ---------- User Preferences ----------
    getPreferences: function() {
        const prefs = localStorage.getItem('iksafar_preferences');
        return prefs ? JSON.parse(prefs) : {
            currency: 'INR',
            language: 'en',
            notifications: true
        };
    },
    
    setPreferences: function(preferences) {
        const current = this.getPreferences();
        const updated = { ...current, ...preferences };
        localStorage.setItem('iksafar_preferences', JSON.stringify(updated));
        this.trackEvent('preferences_update', updated);
        return updated;
    },
    
    // ---------- Analytics ----------
    trackEvent: function(eventName, data = {}) {
        const events = this.getAnalyticsEvents();
        events.push({
            event: eventName,
            data: data,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent
        });
        // Keep last 100 events
        if (events.length > 100) {
            events.splice(0, events.length - 100);
        }
        localStorage.setItem('iksafar_analytics', JSON.stringify(events));
    },
    
    getAnalyticsEvents: function() {
        const events = localStorage.getItem('iksafar_analytics');
        return events ? JSON.parse(events) : [];
    },
    
    clearAnalytics: function() {
        localStorage.removeItem('iksafar_analytics');
    },
    
    // ---------- Utility ----------
    clearAll: function() {
        const keys = [
            'iksafar_wishlist',
            'iksafar_cart',
            'iksafar_theme',
            'iksafar_recent_searches',
            'iksafar_booking_data',
            'iksafar_preferences',
            'iksafar_analytics'
        ];
        keys.forEach(key => localStorage.removeItem(key));
    },
    
    // ---------- Session Management ----------
    getSessionId: function() {
        let sessionId = localStorage.getItem('iksafar_session_id');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('iksafar_session_id', sessionId);
        }
        return sessionId;
    },
    
    getVisitCount: function() {
        let count = parseInt(localStorage.getItem('iksafar_visit_count') || '0');
        count++;
        localStorage.setItem('iksafar_visit_count', count.toString());
        return count;
    }
};

// Make available globally
window.StorageManager = StorageManager;

// Auto-track page view
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        StorageManager.trackEvent('page_view', {
            page: window.location.pathname,
            title: document.title
        });
        StorageManager.getVisitCount();
    });
}

// Export for Node.js (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StorageManager;
}