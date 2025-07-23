// Enhanced interactivity for the thank you website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

    // Add hover effects to cards
    const cards = document.querySelectorAll('.alignment-card, .value-item, .plan-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click tracking for analytics (if needed)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Track CTA click (placeholder for analytics)
            console.log('CTA button clicked');
        });
    }

    // Add subtle parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        document.body.style.backgroundPosition = `center ${rate}px`;
    });

    // Intersection Observer for animation triggers
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.alignment-card, .value-item, .expertise-category, .plan-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add typing effect to the main title (optional enhancement)
    const mainTitle = document.querySelector('.header-left h1');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                mainTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add badge hover effects
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effect to interviewer cards
    const interviewers = document.querySelectorAll('.interviewer');
    interviewers.forEach(interviewer => {
        interviewer.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add loading animation completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Add some utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'T' to scroll to top
    if (e.key === 't' || e.key === 'T') {
        scrollToTop();
    }
    
    // Press 'C' to focus on CTA button
    if (e.key === 'c' || e.key === 'C') {
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.focus();
            ctaButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// Add print styles optimization
window.addEventListener('beforeprint', function() {
    // Optimize for printing
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});

// Add error handling for any missing elements
window.addEventListener('error', function(e) {
    console.log('An error occurred:', e.error);
});

// Performance optimization: Lazy load animations
const lazyAnimations = document.querySelectorAll('[data-animate]');
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            animationObserver.unobserve(entry.target);
        }
    });
});

lazyAnimations.forEach(el => {
    animationObserver.observe(el);
});

