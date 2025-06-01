// Toggle the navigation menu on click
document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("navMenu").classList.toggle("active");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
