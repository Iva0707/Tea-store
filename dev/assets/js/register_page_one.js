function validateFirstPage() {
    let isValid = true;

    // Перевірка телефону
    const phoneInput = document.getElementById("phone_input");
    const phoneError = document.getElementById("phone_error");
    const phoneRegex = /^380\d{9}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.style.display = "block";
        phoneInput.classList.add("input-order--error");
        isValid = false;
    } else {
        phoneError.style.display = "none";
        phoneInput.classList.remove("input-order--error");
    }

    // Перевірка пароля
    const passwordInput = document.getElementById("password_input");
    const passwordError = document.getElementById("password_error");
    if (passwordInput.value.trim() === "") {
        passwordError.style.display = "block";
        passwordInput.classList.add("input-order--error");
        isValid = false;
    } else {
        passwordError.style.display = "none";
        passwordInput.classList.remove("input-order--error");
    }

    // Перевірка повторного введення пароля
    const repeatPasswordInput = document.getElementById("repeat_password_input");
    const repeatPasswordError = document.getElementById("repeat_password_error");
    if (passwordInput.value !== repeatPasswordInput.value) {
        repeatPasswordError.style.display = "block";
        repeatPasswordInput.classList.add("input-order--error");
        isValid = false;
    } else {
        repeatPasswordError.style.display = "none";
        repeatPasswordInput.classList.remove("input-order--error");
    }

    return isValid;
}

document.getElementById('firstRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє стандартну відправку форми

    if (validateFirstPage()) {
        // Імітація успішного переходу на другу сторінку без запиту на сервер
        window.location.href = 'reg_page_two.html';
    }
});
