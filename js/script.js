/**
 * Marko Popov Portfolio - Main Script
 * Focus: Scroll animations and UI enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Marko Popov Portfolio - Script Loaded Successfully.");

    /* ===================================== */
    /* 1. SECTION FADE-IN ANIMATION */
    /* ===================================== */

    const sections = document.querySelectorAll('section');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        sectionObserver.observe(section);
    });


    /* ===================================== */
    /* 2. WORKFLOW STEP ANIMATION */
    /* ===================================== */

    const workflowSteps = document.querySelectorAll('.workflow-step');

    if (workflowSteps.length > 0) {

        const workflowObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    workflowSteps.forEach((step, index) => {
                        setTimeout(() => {
                            step.classList.add('active');
                        }, index * 200); // sequential delay
                    });

                    workflowObserver.disconnect(); // run once
                }
            });
        }, {
            threshold: 0.3
        });

        workflowObserver.observe(document.querySelector('#workflow-section'));
    }


    /* ===================================== */
    /* 3. SMOOTH SCROLL FOR INTERNAL LINKS */
    /* ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {

            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});