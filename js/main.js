// Main JavaScript file for Tissue World website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');

            // Toggle between menu and close icons
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnButton = mobileMenuButton.contains(event.target);

            if (!isClickInsideMenu && !isClickOnButton && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');

                // Reset icon
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    }

    // FAQ accordion functionality
    const faqButtons = document.querySelectorAll('.faq-btn');

    if (faqButtons.length > 0) {
        faqButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Toggle the active class on the button
                this.classList.toggle('active');

                // Toggle the icon
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                }

                // Toggle the content visibility
                const content = this.nextElementSibling;
                if (content) {
                    content.classList.toggle('hidden');
                }
            });
        });
    }

    // Product category filter functionality
    const categoryButtons = document.querySelectorAll('.category-btn');

    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.classList.add('bg-gray-200');
                    btn.classList.remove('bg-[#4A071C]');
                    btn.classList.add('text-gray-800');
                    btn.classList.remove('text-white');
                });

                // Add active class to clicked button
                this.classList.add('active');
                this.classList.remove('bg-gray-200');
                this.classList.add('bg-[#4A071C]');
                this.classList.remove('text-gray-800');
                this.classList.add('text-white');

                // Filter products based on category (in a real implementation)
                // const category = this.textContent.trim().toLowerCase();
                // filterProducts(category);
            });
        });
    }

    // Contact form validation
    const contactForm = document.querySelector('form[action^="https://formspree.io"]');

    if (contactForm) {
        // Client-side validation before submission
        contactForm.addEventListener('submit', function (event) {
            // Don't prevent default - let the form submit to Formspree
            // event.preventDefault();

            // Basic form validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });

            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value.trim())) {
                    isValid = false;
                    emailField.classList.add('border-red-500');
                }
            }

            // If validation fails, prevent form submission
            if (!isValid) {
                event.preventDefault();
                alert('Please fill in all required fields correctly.');
            } else {
                // Show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]');
                if (submitButton) {
                    const originalText = submitButton.innerHTML;
                    submitButton.disabled = true;
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';

                    // Re-enable after 10 seconds in case of network issues
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalText;
                    }, 10000);
                }
            }
        });
    }

    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    if (anchorLinks.length > 0) {
        anchorLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                const targetId = this.getAttribute('href');
                if (targetId !== '#') {
                    event.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // Add animation to elements when they come into view
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Add product to cart functionality (for demonstration)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productName = this.getAttribute('data-product');
                alert(`${productName} has been added to your cart!`);
            });
        });
    }

    // Initialize any sliders or carousels
    // This would typically use a library like Swiper or Slick
    // For demonstration purposes, we're just showing the structure
    function initSliders() {
        // Code to initialize sliders would go here
        console.log('Sliders initialized');
    }

    // Call initialization functions
    initSliders();
});
