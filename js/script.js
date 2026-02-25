// Jednostavan efekat pojavljivanja elemenata pri skrolovanju
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    // Postavljamo početni stil pre animacije
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
});

// Logika za GitHub API (opciono, ako želiš da povučeš i ostale male repozitorijume)
console.log("Marko Popov Portfolio - Učitana skripta.");