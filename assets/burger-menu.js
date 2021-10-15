const burgerToggle = document.getElementById('navToggle');
const nav = document.querySelector('.header__nav--header');
const burgerItem = document.querySelectorAll('.burger__item');
const welcomeBlock = document.querySelector('.welcome__inner');
const sideMenu = document.querySelector('.side__menu');
const sideMenuLinks = document.querySelectorAll('.nav__item--side');

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('active');
    welcomeBlock.classList.toggle('show')
    sideMenu.classList.toggle('show');
    burgerItem.forEach((e) => {
        e.classList.toggle('white');
    })
});

sideMenuLinks.forEach(e => {
    e.addEventListener('click', el => {
        sideMenu.classList.remove('show');
        burgerToggle.classList.remove('active');
        welcomeBlock.classList.remove('show')
    })
})