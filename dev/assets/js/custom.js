//___________burger______________

const burger = document.getElementById('burger');
const burgerText = document.getElementById('burder_text');
const headerNav = document.getElementById('header_nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger-open');
    if (burger.classList.contains('header__burger-open')) {
        burgerText.classList.toggle('header__burger-open');
        headerNav.classList.toggle('header__burger-open');
        body.classList.toggle('header__burger-open');
    } else {
          closeBurger ()
    }
});

burgerText.addEventListener('click', () => {
    closeBurger()
});

headerNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || event.target.tagName === 'IMG') {
        closeBurger ();
    }
});

function burgerResize () {
    const screenWidth = window.innerWidth;
    if (screenWidth > 991.98) {
        closeBurger ();
    }
};

window.addEventListener('resize', burgerResize);
burgerResize();

function closeBurger () {
    burger.classList.remove('header__burger-open');
    burgerText.classList.remove('header__burger-open');
    headerNav.classList.remove('header__burger-open');
    body.classList.remove('header__burger-open');
};

//___________swiper hero______________

const heroSwiperPage =()=> {
    
const swiperHero = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    touchRatio: 3,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    spaceBetween: 30,
    speed: 800,
});

    function swiperHeight() {
        const height = window.innerHeight;
        const width = window.innerWidth;
        const isLandscape = window.matchMedia("(orientation: landscape)").matches;

        if (height <= 601 && isLandscape && width >= 1040) {
            swiperHero.params.spaceBetween = 80;
        } else {
            swiperHero.params.spaceBetween = 30;
        }
        swiperHero.update();
    }

    window.addEventListener('resize', swiperHeight);
    swiperHeight();
    }

document.querySelector('.home') ? heroSwiperPage() : null;

//___________footer______________

const footerNav = document.getElementById('footer_nav');
const footerButton = document.getElementById('footer_subtitle');
const footerMenu = document.getElementById('footer_menu');

footerButton.addEventListener('click', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 991.98) {
        footerButton.classList.toggle('footer__help-active');
    }
    if (footerButton.classList.contains('footer__help-active')) {
        footerNav.classList.toggle('footer__help-active');
        footerMenu.classList.toggle('footer__help-active');
        getMenuHeight ();
    } else {
        closeFooterNav ()
    }
});

footerNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || event.target.tagName === 'IMG') {
        closeFooterNav ();
    }
});

function footerResize () {
    const screenWidth = window.innerWidth;
    if (screenWidth > 991.98) {
        closeFooterNav ();
    }
};

window.addEventListener('resize', footerResize);
footerResize();

function getMenuHeight () {
    const height = window.getComputedStyle(footerMenu).height;
    const newHeight = parseInt(height) + 50;    
    footerNav.style.height = `${newHeight}px`;
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
    });
};

function closeFooterNav () {
        footerButton.classList.remove('footer__help-active');
        footerNav.classList.remove('footer__help-active');
        footerMenu.classList.remove('footer__help-active');
        footerNav.style.height = `auto`;
}