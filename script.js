let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let closeSearch = document.querySelector('#close-search');

// Mobile Menu toggle
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active'); // Search band kar do agar menu khule
};

// Search Bar Open
searchBtn.onclick = () => {
    searchForm.classList.add('active');
    navbar.classList.remove('active'); // Navbar band kar do agar search khule
};

// Search Bar Close
closeSearch.onclick = () => {
    searchForm.classList.remove('active');
};

// Scroll activities
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

    // Show/Hide Back to top button
    if (window.scrollY > 300) {
        document.querySelector('#scroll-top').style.display = 'block';
    } else {
        document.querySelector('#scroll-top').style.display = 'none';
    }
};

// Simple Fade-in effect for sections on scroll
const sections = document.querySelectorAll('section');
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0.9'; // Default state
    observer.observe(section);
});

