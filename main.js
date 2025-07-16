document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    // Toggle menu on click
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    });

    // Scroll sections active link
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.addEventListener('scroll', () => {
        let top = window.scrollY;
        
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        let header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });

    // ScrollReveal initialization
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '800px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom', distance: '800px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left', distance: '800px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right', distance: '800px', duration: 2000, delay: 200 });

    // Typed.js initialization
    const typed = new Typed('.multiple-text', {
        strings: ['Blockchain Development','Full Stack Development', 'Smart Contract Auditing'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });

});


