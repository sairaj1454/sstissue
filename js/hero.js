// Hero Section Animations

document.addEventListener('DOMContentLoaded', function() {
    // Create particles for hero section
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
        createParticles(heroParticles, 20);
    }

    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        const heroShapes = document.querySelectorAll('.hero-shape');
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
            heroContent.style.opacity = 1 - (scrollY * 0.002);
        }
        
        heroShapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            shape.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        });
    });

    // Text typing effect
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && heroTitle.dataset.typingText) {
        setTimeout(() => {
            typeText(heroTitle, heroTitle.dataset.typingText, 0, 50);
        }, 500);
    }
});

// Create particles
function createParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 2;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Random delay
        const delay = Math.random() * 5;
        
        // Set styles
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.animation = `float ${duration}s ease-in-out infinite alternate`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
    }
}

// Text typing effect
function typeText(element, text, index, speed) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(() => typeText(element, text, index, speed), speed);
    }
}

// Parallax mouse movement effect
document.addEventListener('mousemove', function(e) {
    const heroShapes = document.querySelectorAll('.hero-shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    heroShapes.forEach((shape, index) => {
        const speed = 30 + (index * 20);
        const x = (0.5 - mouseX) * speed;
        const y = (0.5 - mouseY) * speed;
        
        shape.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
});
