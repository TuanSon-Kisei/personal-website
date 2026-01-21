const hamburger = document.getElementById('menu');
const navLinks = document.getElementById('nav-links'); 

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('is-open');

    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
})

const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('is-open');
        document.body.style.overflow = 'auto';
    })
})