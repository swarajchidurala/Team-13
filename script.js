document.addEventListener('DOMContentLoaded', () => {

    // Function to add a class to an element when it's in the viewport
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(animateOnScroll, {
        root: null, // Use the viewport as the root
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Observe all elements with the animation class
    document.querySelectorAll('.feature-card, .course-card, .testimonial-card').forEach(card => {
        observer.observe(card);
    });

    // Simple scroll-based parallax for the hero image (optional)
    const heroImage = document.querySelector('.hero-image-card img');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        });
    }
});