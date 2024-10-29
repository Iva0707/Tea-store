// Отримуємо всі радіо-кнопки
const radios = document.querySelectorAll('.radio');
const orderButton = document.getElementById('order-btn');

// Дефолтний текст для кнопки
const defaultButtonText = 'Оформити замовлення';

// Динамічна зміна тексту кнопки
const updateButton = () => {
    if (document.getElementById('radio_3').checked) {
        orderButton.innerHTML = `<img src="../assets/img/applePay.svg" alt="Apple Pay">`;
    } else if (document.getElementById('radio_4').checked) {
        orderButton.innerHTML = `<img src="../assets/img/googlePay.svg" alt="Google Pay">`;
    } else {
        orderButton.innerHTML = defaultButtonText;
    }
};

// Викликаємо функцію при завантаженні сторінки, щоб кнопка відразу змінилась
document.addEventListener('DOMContentLoaded', updateButton);

// Слідкуємо за зміною радіо-кнопок
radios.forEach(radio => {
    radio.addEventListener('change', updateButton);
});


// Отримуємо всі товари
const products = document.querySelectorAll('.card-order');

// Функція для підрахунку загальної вартості
function calculateTotal() {
    let productTotal = 0;
    let deliveryCost = parseInt(document.getElementById('delivery').innerText);

    products.forEach(product => {
        const priceElement = product.querySelector('.card-order__price');
        const quantityElement = product.querySelector('.card-order__quantity');
        
        let price = parseInt(priceElement.innerText.replace(' грн', ''));
        let quantity = parseInt(quantityElement.innerText);

        productTotal += price * quantity;
    });

    // Обчислюємо суму замовлення
    document.getElementById('products__summ').innerText = `${productTotal} грн`;

    // Обчислюємо загальну суму
    let totalOrder = productTotal + deliveryCost;
    document.getElementById('order__summ').innerText = `${totalOrder} грн`;
}

// Додаємо обробку кліків на кнопки збільшення/зменшення кількості
products.forEach(product => {
    const addButton = product.querySelector('.card-order__add:last-child');
    const minusButton = product.querySelector('.card-order__add:first-child');
    const quantityElement = product.querySelector('.card-order__quantity');

    addButton.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = ++quantity;
        calculateTotal();
    });

    minusButton.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.innerText);
        if (quantity > 1) {
            quantityElement.innerText = --quantity;
            calculateTotal();
        }
    });
});

// Підраховуємо загальну суму при завантаженні сторінки
calculateTotal();
