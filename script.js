// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-wrapper video');
    
    if (video) {
        // Add loaded class when video is ready to play
        video.addEventListener('canplay', function() {
            video.classList.add('loaded');
        });

        // Handle video loading errors
        video.addEventListener('error', function() {
            const loadingElement = document.querySelector('.video-loading');
            if (loadingElement) {
                loadingElement.innerHTML = '<p>Error loading video. Please try again later.</p>';
            }
        });
    }
});

// Handle project image loading
document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(img => {
        const container = img.parentElement;
        const loadingSpinner = container.querySelector('.image-loading');
        
        // Show loading state
        loadingSpinner.classList.add('active');
        
        // Handle image load
        img.onload = function() {
            loadingSpinner.classList.remove('active');
        };
        
        // Handle image error
        img.onerror = function() {
            loadingSpinner.classList.remove('active');
            img.src = './assets/images/placeholder.jpg';
        };
    });
}); 