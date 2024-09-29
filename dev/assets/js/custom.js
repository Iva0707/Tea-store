const burger = document.getElementById('burger');
const burgerText = document.getElementById('burder_text');
const headerNav = document.getElementById('header_nav');
const body = document.querySelector('body');


burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger-open');
    burgerText.classList.toggle('header__burger-open');
    headerNav.classList.toggle('header__burger-open');
    body.classList.toggle('header__burger-open')
})