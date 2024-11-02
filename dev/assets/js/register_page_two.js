function validateSecondPage() {
    let isValid = true;

    // Перевірка електронної пошти
    const emailInput = document.getElementById("email_input");
    const emailError = document.getElementById("email_error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = "block";
        emailInput.classList.add("input-order--error");
        isValid = false;
    } else {
        emailError.style.display = "none";
        emailInput.classList.remove("input-order--error");
    }

    // Перевірка імені
    const nameInput = document.getElementById("name_input");
    const nameError = document.getElementById("name_error");
    if (nameInput.value.trim() === "") {
        nameError.style.display = "block";
        nameInput.classList.add("input-order--error");
        isValid = false;
    } else {
        nameError.style.display = "none";
        nameInput.classList.remove("input-order--error");
    }

    // Перевірка прізвища
    const surnameInput = document.getElementById("surname_input");
    const surnameError = document.getElementById("surname_error");
    if (surnameInput.value.trim() === "") {
        surnameError.style.display = "block";
        surnameInput.classList.add("input-order--error");
        isValid = false;
    } else {
        surnameError.style.display = "none";
        surnameInput.classList.remove("input-order--error");
    }

    // Перевірка віку
    const ageInput = document.getElementById("age_input");
    const ageError = document.getElementById("age_error");
    if (ageInput.value.trim() === "") {
        ageError.style.display = "block";
        ageInput.classList.add("input-order--error");
        isValid = false;
    } else {
        ageError.style.display = "none";
        ageInput.classList.remove("input-order--error");
    }

    return isValid;
}

document.getElementById('secondRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє стандартну відправку форми

    if (validateSecondPage()) {
        // Імітація успішної реєстрації без запиту на сервер
        alert('Успішна реєстрація! Перенаправлення на головну сторінку...');
        window.location.href = 'index.html'; // перенаправлення на головну сторінку
    }

    // Закоментований реальний запит на сервер
    /*
    const formData = new FormData(this);
    fetch('/path/to/your/database/endpoint', {  // замініть `/register` на ваш серверний обробник
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'index.html';
        } else {
            alert('Помилка реєстрації: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Помилка:', error);
        alert('Виникла помилка під час реєстрації.');
    });
    */
});
