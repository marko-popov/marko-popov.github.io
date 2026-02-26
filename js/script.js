/**
 * Marko Popov Portfolio - Main Script
 * Focus: Scroll animations and UI enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Marko Popov Portfolio - Script Loaded Successfully.");

    // Select all sections to apply the fade-in effect
    const sections = document.querySelectorAll('section');

    // Configuration for the Intersection Observer
    const options = {
        threshold: 0.15, // Trigger when 15% of the section is visible
        rootMargin: "0px 0px -50px 0px" // Slight offset to feel more natural
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply final visible styles
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                
                // Stop observing once the animation is done
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        // Set initial hidden state before animation starts
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)"; // Slightly deeper movement
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        
        // Start watching the section
        observer.observe(section);
    });

    // Optional: Smooth scroll for internal links (if any are added in the future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});