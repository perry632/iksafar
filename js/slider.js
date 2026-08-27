// ============================================
// Iksafar Travel - Hero Slider
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initHeroSlider();
});

function initHeroSlider() {
    if (typeof Swiper === 'undefined') return;
    
    const sliderElement = document.querySelector('.hero-slider');
    if (!sliderElement) return;
    
    const swiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        on: {
            slideChange: function() {
                // Add animation class to active slide content
                const slides = this.slides;
                slides.forEach(slide => {
                    const content = slide.querySelector('.hero-content');
                    if (content) {
                        content.classList.remove('animate-in');
                    }
                });
                const activeSlide = this.slides[this.activeIndex];
                const activeContent = activeSlide.querySelector('.hero-content');
                if (activeContent) {
                    setTimeout(() => {
                        activeContent.classList.add('animate-in');
                    }, 100);
                }
            }
        }
    });
    
    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
        });
        heroSection.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
        });
    }
}

// Add CSS for slider animations
const sliderStyles = document.createElement('style');
sliderStyles.textContent = `
    .hero-content {
        animation: fadeInUp 0.8s ease forwards;
        opacity: 0;
    }
    
    .hero-content.animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(sliderStyles);