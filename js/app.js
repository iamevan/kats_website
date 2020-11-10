const hamburger = document.querySelector('.burger-container');
const burgerLines = document.querySelectorAll('.burger-line');
const navMenu = document.querySelector('.nav-menu');

// burger menu toggle
hamburger.addEventListener('click', () => {

    navMenu.classList.toggle('open');

    burgerLines.forEach(e => {
        e.classList.toggle('active');
    });
});