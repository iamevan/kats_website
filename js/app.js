const hamburger = document.querySelector('.hamburger');
const sideNav = document.getElementById('side-nav');
const navLinks = document.querySelector('.nav-links');
const lines = document.querySelectorAll('.hamburger .line');
const headerContainer = document.querySelector('.header');

// Ed's menu

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('open');

//     lines.forEach(line => {
//         line.classList.toggle('color-change');
//     });
// });

// Brad's side bar menu

// Toggle nav
hamburger.addEventListener('click', () => {
    headerContainer.classList.toggle('show-nav');
});