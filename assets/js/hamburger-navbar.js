const hamburger = document.getElementById('menu');
const navLinks = document.getElementById('nav-links'); 

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('is-open');
})

const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('is-open');
    })
})