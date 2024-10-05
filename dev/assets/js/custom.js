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
          closeMenu ()
    }
})

burgerText.addEventListener('click', () => {
    closeMenu()
})

headerNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || event.target.tagName === 'IMG') {
        closeMenu ();
    }
})

function resize () {
    const screenWidth = window.innerWidth;
    if (screenWidth > 991.98) {
        closeMenu ();
    }
}
window.addEventListener('resize', resize);
resize();

function closeMenu () {
    burger.classList.remove('header__burger-open');
    burgerText.classList.remove('header__burger-open');
    headerNav.classList.remove('header__burger-open');
    body.classList.remove('header__burger-open');
}

//___________swiper hero______________

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
    mousewheel: {
        invert: true,
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