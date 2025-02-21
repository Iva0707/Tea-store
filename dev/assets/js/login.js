function validateLogin() {
    let isValid = true;

    // Перевірка номера телефону
    const phoneInput = document.getElementById("phone_input");
    const phoneError = document.getElementById("phone_error");
    const phoneRegex = /^380\d{9}$/; // Регулярний вираз для формату телефону
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

const mockBackendData = {
    phone: "380930082769",
    password: "pasword123"
};

async function fakeLogin(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
                userData.password === mockBackendData.password &&
                userData.phone === mockBackendData.phone
            ) {
                resolve("Успішний вхід");
                return true;
            }
            else {
                reject("Помилка: дані не знайдено");
            }
        }, 1000);
    });
}

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Зупиняє стандартну відправку форми

    if (validateLogin()) {
        const phone = document.getElementById("phone_input").value;
        const password = document.getElementById("password_input").value;
        const phoneInput = document.getElementById("phone_input");
        const passwordInput = document.getElementById("password_input");
        const userData = { phone, password };
        const errorElements = document.getElementsByClassName("error-login");
        try {
            phoneInput.classList.remove("input-order--error");
            passwordInput.classList.remove("input-order--error");
            const result = await fakeLogin(userData);
            Array.from(errorElements).forEach(el => el.style.display = "none");
            console.log(result);
            window.location.href = 'profile.html'; // перенаправлення на профіль

        } catch (error) {
            phoneInput.classList.add("input-order--error");
            passwordInput.classList.add("input-order--error");
            Array.from(errorElements).forEach(el => el.style.display = "block");
        }
    }
});


function register(){
    window.location.href = "reg_page_one.html";
}
