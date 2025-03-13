import {products, basketItems} from "./basket_data.js";

function generateProducts() {
    const container = document.querySelector(".product__slider-bar");

    if (!container) {
        console.error("Контейнер .product__slider-bar не знайдено!");
        return;
    }

    container.innerHTML = "";

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.id = `product-${product.id}`;

        // Додаємо HTML в productElement
        productElement.innerHTML = `
            <a href="#" class="product__img">
                <img src="${product.img}" alt="${product.name}" class="product__img">
            </a>
            <div class="product__name-buy">
                <div class="name">${product.name}</div>
                <div class="product__icons">
                    <button type="button" class="product__btn">
                        <img src="../assets/img/card_like.svg" alt="like">
                    </button>
                    <button type="button" class="product__btn">
                        <img src="../assets/img/card_cart.svg" alt="cart">
                    </button>
                </div>
            </div>
            <div class="product__price">
                <div class="product__weight">${product.weight}</div>
                <div class="product__price-per-weight">
                    <span class="product__pice">${product.price}</span> грн
                </div>
            </div>
        `;


        container.appendChild(productElement);
    });
}

function generateItems(){
    const container = document.querySelector('.basket__products');

    if(!container){
        console.log("container .basket__products not found:")
    }

    container.innerHTML = "";
    basketItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("basket__cart-order");
        itemElement.id = `item-${item.id}`;

        itemElement.innerHTML = `
            <div class="basket__cart-img-wrapper">
                    <a href="${item.href}" class="basket__cart-link"><img src="${item.img}" alt="img product" class="basket__cart-img"></a>
                </div>
                <div class="basket__cart-characteristic">
                    <div class="basket__cart-top">
                        <h2 class="basket__cart-title"><a class="basket__cart-link" href="${item.href}">Продукт</a></h2>
                        <div class="basket__cart-price"><span>${item.price}</span> грн</div>
                    </div>
                    <div class="basket__cart-counter">
                        <button class="basket__cart-amount-changer">-</button>
                        <span class="basket__cart-amount" id="basket__cart-quantity-1">${item.amount}</span>
                        <button class="basket__cart-amount-changer">+</button>
                    </div>
                </div>
                <div class="basket__cart-delete">
                    <button type="button" class="basket__delete-btn">
                        <img src="../assets/img/trash.svg" alt="" class="basket__delete-img">
                    </button>
                </div>
        `;
        container.appendChild(itemElement);
    });
}

document.addEventListener("DOMContentLoaded", generateProducts);
document.addEventListener("DOMContentLoaded", generateItems);