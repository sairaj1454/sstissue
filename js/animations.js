// Animation on scroll functionality
document.addEventListener('DOMContentLoaded', function () {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Function to handle scroll animation
    function handleScrollAnimation() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                // Get animation type from data attribute
                const animationType = element.dataset.animation || 'animate-fade-in';
                element.classList.add(animationType);
                element.classList.add('animated');
            }
        });
    }

    // Run once on page load
    handleScrollAnimation();

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);

    // Particle background effect
    const particleContainers = document.querySelectorAll('.particle-container');

    particleContainers.forEach(container => {
        const particleCount = 8; // Reduced number of particles

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;

            // Random size (smaller particles)
            const size = Math.random() * 6 + 3;

            // Random animation duration (slower)
            const duration = Math.random() * 30 + 20;

            // Random delay
            const delay = Math.random() * 8;

            // Set styles
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;

            container.appendChild(particle);
        }
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button, .btn, a.bg-\\[\\#4A071C\\], a.bg-\\[\\#8E1946\\], a.bg-white');
    buttons.forEach(button => {
        button.classList.add('hover-lift');
    });

    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.bg-white.rounded-lg.shadow-md');
    productCards.forEach(card => {
        card.classList.add('hover-grow');
    });
});
