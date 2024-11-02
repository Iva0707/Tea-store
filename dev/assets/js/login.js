function validateLogin() {
    let isValid = true;

    // Перевірка номера телефону
    const phoneInput = document.getElementById("phone_input");
    const phoneError = document.getElementById("phone_error");
    const phoneRegex = /^\d{3}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/; // Регулярний вираз для формату телефону
    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.style.display = "block"; // Відображаємо повідомлення
        phoneInput.classList.add("input-order--error"); // Додаємо клас для червоного стилю
        isValid = false;
    } else {
        phoneError.style.display = "none"; // Сховаємо повідомлення
        phoneInput.classList.remove("input-order--error"); // Вилучаємо червоний стиль
    }

    // Перевірка пароля
    const passwordInput = document.getElementById("password_input");
    const passwordError = document.getElementById("password_error");
    if (passwordInput.value.trim() === "") {
        passwordError.style.display = "block"; // Відображаємо повідомлення
        passwordInput.classList.add("input-order--error"); // Додаємо клас для червоного стилю
        isValid = false;
    } else {
        passwordError.style.display = "none"; // Сховаємо повідомлення
        passwordInput.classList.remove("input-order--error"); // Вилучаємо червоний стиль
    }

    return isValid;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє стандартну відправку форми

    if (validateLogin()) {
        // Імітація успішного входу без запиту на сервер
        alert('Успішний вхід! Перенаправлення...');
        // Тут буде код для реального запиту на сервер, коли він буде доступний
         window.location.href = 'index.html'; // перенаправлення на головну сторінку
    }
});
