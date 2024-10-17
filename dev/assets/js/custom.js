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
        closeMenu()
    }
})

burgerText.addEventListener('click', () => {
    closeMenu()
})

headerNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || event.target.tagName === 'IMG') {
        closeMenu();
    }
})

function resize() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 991.98) {
        closeMenu();
    }
}
window.addEventListener('resize', resize);
resize();

function closeMenu() {
    burger.classList.remove('header__burger-open');
    burgerText.classList.remove('header__burger-open');
    headerNav.classList.remove('header__burger-open');
    body.classList.remove('header__burger-open');
}

//=============== Accordeon Catalog ===============//

const accordionHeader = document.querySelectorAll('.catalog__checkbox-title');
const accordionContent = document.querySelectorAll('.catalog__checkbox-content');

accordionHeader.forEach((header, index) => {
    header.addEventListener('click', () => {
        header.classList.toggle('active');
        accordionContent[index].classList.toggle('active');
    })
})

//=============== Slider Price ===============//

const slider = document.getElementById('price-slider');
const maxValue = document.getElementById('max-value');
const minValue = document.getElementById('min-value');

noUiSlider.create(slider, {
    start: [50, 357],
    connect: true,
    range: {
        'min': 0,
        'max': 500,
    }
});

slider.noUiSlider.on('update', (values, handle) => {
    minValue.innerHTML = parseInt(values[1]);
    maxValue.innerHTML = parseInt(values[0]);
})

//=============== Pagination Caralog ===============//

const itemsPerPage = 6; // Кількість товарів
let currentPage = 1;

// Функція для отримання товарів з API (products.json)
async function fetchProducts() {
    try {
        const response = await fetch('/assets/data/products.json'); // Замінити на URL
        if (!response.ok) throw new Error('Network response was not ok');

        const products = await response.json();
        return products;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function renderProducts(products) {
    const container = document.getElementById('catalog');
    container.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(product => {
        product.weights.forEach(weight => {
            const card = document.createElement('a');
            card.classList.add('card-goods');
            card.href = `product.html?id=${product.id}&weight=${weight.weight}`;

            card.innerHTML = `
                <figure class="card-goods__img">
                    <img src="${product.image}" alt="${product.name}">
                </figure>
                <div class="card-goods__content">
                    <h3 class="card-goods__title">${product.name}</h3>
                    <div class="card-goods__icons icons-card">
                        <button class="card-goods__icon-like" aria-label="Додати до улюблених">
                            <img src="../assets/img/card_like.svg" alt="Значок улюбленого" />
                        </button>
                        <button class="card-goods__icon-cart" aria-label="Додати в кошик">
                            <img src="../assets/img/card_cart.svg" alt="Значок кошика" />
                        </button>
                    </div>
                    <p class="card-goods__weight">${weight.weight} гр</p>
                    <p class="card-goods__price">${weight.price} грн</p>
                </div>
            `;

            container.appendChild(card);
        });
    });
}

// // Пагінація
// function setupPagination(products) {
//     const paginationContainer = document.getElementById('card-pagination');

//     const pagination = new Pagination(paginationContainer, {
//         totalItems: products.length,
//         itemsPerPage: itemsPerPage,
//         visiblePages: 3, // Кількість видимих сторінок
//         onPageChange: (pageNumber) => {
//             currentPage = pageNumber;
//             renderProducts(products);
//         }
//     });
// }

// async function main() {
//     const products = await fetchProducts();
//     if (products) {
//         renderProducts(products);
//         setupPagination(products);
//     }
// }

// main();

$(document).ready(function () {
    let products = []; // Масив для зберігання товарів
    const pageSize = 10; // Кількість товарів на сторінці

    // Функція для завантаження товарів з JSON
    function loadProducts() {
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                products = data; // Зберігаємо завантажені товари
                setupPagination(products);
            })
            .catch(error => console.error('Error loading products:', error));
    }

    // Функція для налаштування пагінації
    function setupPagination(products) {
        $('#paginationContainer').pagination({
            dataSource: products,
            pageSize: pageSize,
            callback: function (data, pagination) {
                renderProducts(data); // Рендерим товари на поточній сторінці
            }
        });
    }

    // Функція для рендерингу товарів
    function renderProducts(products) {
        const productContainer = $('#productContainer');
        productContainer.empty(); // Очищуємо контейнер перед додаванням нових товарів

        products.forEach(product => {
            product.weights.forEach(weightInfo => {
                const productHtml = `
                    <a href="#" class="card-goods">
                        <figure class="card-goods__img">
                            <img src="${product.image}" alt="${product.name}">
                        </figure>
                        <div class="card-goods__content">
                            <h3 class="card-goods__title">${product.name}</h3>
                            <div class="card-goods__icons icons-card">
                                <button class="card-goods__icon-like" aria-label="Додати до улюблених">
                                    <img src="../assets/img/card_like.svg" alt="Значок улюбленого" />
                                </button>
                                <button class="card-goods__icon-cart" aria-label="Додати в кошик">
                                    <img src="../assets/img/card_cart.svg" alt="Значок кошика" />
                                </button>
                            </div>
                            <p class="card-goods__weight">${weightInfo.weight} гр</p>
                            <p class="card-goods__price">${weightInfo.price} грн</p>
                        </div>
                    </a>
                `;
                productContainer.append(productHtml); // Додаємо товар до контейнера
            });
        });
    }

    // Викликаємо функцію для завантаження товарів
    loadProducts();
});

