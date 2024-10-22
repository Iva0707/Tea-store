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



//=============== Pagination Caralog ===============//

$(document).ready(function () {
    let products = [];
    const pageSize = 6; // Кількість товарів на сторінці

    //=============== Завантаження товарів з products.json ===============//

    function loadProducts() {
        fetch('assets/data/products.json')
            .then(response => response.json())
            .then(data => {
                products = data;
                setupPagination(products);
            })
            .catch(error => console.error('Error loading products:', error));
    }

    function setupPagination(products) {
        const totalPages = Math.ceil(products.length / pageSize);

        $('#paginationContainer').pagination({
            dataSource: Array.from({ length: totalPages }, (v, k) => k + 1), // Генерація масиву сторінок
            pageSize: 1, // Кількість елементів на сторінці (кнопок пагінації)
            callback: function (data, pagination) {
                renderProducts(products.slice((pagination.pageNumber - 1) * pageSize, pagination.pageNumber * pageSize)); // Рендеринг товарів
            },
            // Кастомні параметри пагінації
            className: 'pagination',
            prevText: '<',
            nextText: '>',
            showPrevious: true,
            showNext: true,
            onPageButtonRender: function (buttonData, isDisabled) {
                if (buttonData.type === 'page') {
                    return `<li class="pagination-button" data-page="${buttonData.pageNumber}">${buttonData.pageNumber}</li>`;
                } else if (buttonData.type === 'ellipsis') {
                    return '<li class="pagination-ellipsis">...</li>';
                }
                return '';
            },
            onPageChange: function (pageNumber) {
                $('#paginationContainer').pagination('go', pageNumber);
            },
            formatPage: function (pageNumber) {
                return pageNumber.toString();
            },
        });

        // Кастомна логіка для відображення сторінок
        $('#paginationContainer').on('page:changed', function (event, page) {
            const pagesToShow = createPaginationArray(totalPages, page);
            $('#paginationContainer').pagination('dataSource', pagesToShow);
        });
    }

    function createPaginationArray(totalPages, currentPage) {
        const pages = [];

        if (totalPages <= 1) return pages;

        if (currentPage > 1) pages.push(1);

        if (currentPage > 3) {
            pages.push('...');
        }

        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 2) {
            pages.push('...');
        }

        if (totalPages > 1) pages.push(totalPages);

        return pages;
    }


    //=============== Додавання карток товарів до каталогу ===============//

    function renderProducts(products) {
        const productContainer = $('#productContainer');
        productContainer.empty();

        products.forEach(product => {
            let weightOptions = '';

            product.weights.forEach((weightInfo, index) => {
                weightOptions += `<span data-index="${index}" class="card-goods__dropdown-item">${weightInfo.weight} гр</span>`;
            });

            // Встановлюємо мінімальну вагу, беручи перший елемент з масиву weights
            const initialWeight = product.weights[0].weight;
            const initialPrice = product.weights[0].price;

            const productHtml = `
            <a href="#" class="card-goods">
                <figure class="card-goods__img">
                    <img src="${product.image}" alt="${product.name}">
                </figure>
                <div class="card-goods__content">
                    <h3 class="card-goods__title card-text">${product.name}</h3>
                    <div class="card-goods__icons icons-card">
                        <button class="card-goods__icon-like" aria-label="Додати до улюблених">
                            <img src="../assets/img/card_like.svg" alt="Значок улюбленого" />
                        </button>
                        <button class="card-goods__icon-cart" aria-label="Додати в кошик">
                            <img src="../assets/img/card_cart.svg" alt="Значок кошика" />
                        </button>
                    </div>
                    <div class="card-goods__dropdown">
                        <!-- Встановлюємо мінімальну вагу замість "Оберіть вагу" -->
                        <button class="card-goods__dropdown-toggle card-text">${initialWeight} гр</button>
                        <div class="card-goods__dropdown-menu card-text">${weightOptions}</div>
                    </div>
                    <p class="card-goods__price card-text">${initialPrice} грн</p>
                </div>
            </a>
        `;

            productContainer.append(productHtml);
        });

        //=============== Відкриття та закриття дропдаун меню ===============//

        $('.card-goods__dropdown-toggle').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const $menu = $(this).siblings('.card-goods__dropdown-menu');

            if ($menu.css('display') === 'flex') {
                $menu.hide();
            } else {
                $('.card-goods__dropdown-menu').hide();
                $menu.css('display', 'flex');
            }
        });

        $(document).on('click', function () {
            $('.card-goods__dropdown-menu').hide();
        });

        //=============== Грам до ціни ===============//

        $('.card-goods__dropdown-item').on('click', function () {
            const selectedWeightIndex = $(this).data('index');
            const productIndex = $(this).closest('.card-goods').index();

            const selectedProduct = products[productIndex];
            const selectedWeight = selectedProduct.weights[selectedWeightIndex];

            $(this).closest('.card-goods__dropdown').find('.card-goods__dropdown-toggle').text(`${selectedWeight.weight} гр`);
            $(this).closest('.card-goods').find('.card-goods__price').text(`${selectedWeight.price} грн`);

            $(this).closest('.card-goods__dropdown-menu').hide();
        });
    }

    loadProducts();
});

//=============== Finding lowest and highiest price ===============//


let minPrice;
let maxPrice;

function findMinMaxPrices(products) {
    minPrice = Infinity;
    maxPrice = -Infinity;

    products.forEach(product => {
        product.weights.forEach(weightInfo => {
            const price = weightInfo.price;

            if (price < minPrice) {
                minPrice = price;
            }
            if (price > maxPrice) {
                maxPrice = price;
            }
        });
    });
}

$.getJSON('assets/data/products.json', function (data) {
    findMinMaxPrices(data);
});


//=============== Slider Price ===============//

const slider = document.getElementById('price-slider');
const maxValue = document.getElementById('max-value');
const minValue = document.getElementById('min-value');

$.getJSON('assets/data/products.json', function (data) {
    findMinMaxPrices(data);

    noUiSlider.create(slider, {
        start: [minPrice, maxPrice],
        connect: true,
        range: {
            'min': minPrice,
            'max': maxPrice,
        }
    });

    slider.noUiSlider.on('update', (values, handle) => {
        minValue.innerHTML = parseInt(values[1]);
        maxValue.innerHTML = parseInt(values[0]);
    });
});

