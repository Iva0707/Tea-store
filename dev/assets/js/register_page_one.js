document.getElementById("firstRegistrationForm").addEventListener("submit", (event) => { event.preventDefault() });


function validateFirstPage() {
    let isValid = true;
    const phoneInput = document.getElementById("phone_input");
    const phoneError = document.getElementById("phone_error");
    const passwordInput = document.getElementById("password_input");
    const passwordError = document.getElementById("password_error");
    const repeatPasswordInput = document.getElementById("repeat_password_input");
    const repeatPasswordError = document.getElementById("repeat_password_error");
    // Перевірка телефону

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
    if (passwordInput.value.trim() === "") {
        passwordError.style.display = "block";
        passwordInput.classList.add("input-order--error");
        isValid = false;
    } else {
        passwordError.style.display = "none";
        passwordInput.classList.remove("input-order--error");
    }

    // Перевірка повторного введення пароля
    if (passwordInput.value !== repeatPasswordInput.value) {
        repeatPasswordError.style.display = "block";
        repeatPasswordInput.classList.add("input-order--error");
        isValid = false;
    } else {
        repeatPasswordError.style.display = "none";
        repeatPasswordInput.classList.remove("input-order--error");
    }

    return isValid;
};

document.getElementById('firstRegistrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняє стандартну відправку форми

        // Імітація успішного переходу на другу сторінку без запиту на сервер
    if (validateFirstPage()) {
        window.location.href = 'reg_page_two.html';
    }
});
