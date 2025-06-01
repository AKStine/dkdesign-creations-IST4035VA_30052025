// Toggle the navigation menu when the pulsing red dot is clicked
document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("navMenu").classList.toggle("active");
});

// JavaScript for Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor link behavior

        // Scroll smoothly to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation for Contact Form
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});
