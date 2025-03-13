import { basketItems } from "./basket_data.js";
window.addEventListener('load', () => {
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 1;
    const itemWidth = 324;
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const sliderBar = document.querySelector('.product__slider-bar');
    const items = document.querySelectorAll('.product');
    const itemCount = items.length;
    const movePosition = slidesToScroll * itemWidth;
    console.log("items count:" + itemCount);

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : slidesToScroll * itemWidth;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        console.log("Нова позиція:", position);
        sliderBar.style.transform = `translateX(${position}px)`;
    };


    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
    };
    checkBtns()
})

function updateTotalPrice() {
    const totalPriceElement = document.querySelector("#basket__products-summ");
    const totalSummElement = document.querySelector("#basket__summ");

    if (!totalPriceElement || !totalSummElement) {
        console.error("Елементи для виводу загальної суми не знайдені!");
        return;
    }

    let totalPrice = 0;
    basketItems.forEach(item => {
        totalPrice += item.price * item.amount;
    });

    totalPriceElement.textContent = `${totalPrice} грн`;
    totalSummElement.textContent = `${totalPrice} грн`;
}

document.addEventListener("DOMContentLoaded", () => {
    updateTotalPrice();
});
