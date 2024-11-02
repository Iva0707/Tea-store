// Генеруємо 6-значний код
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Валідація email
function validateEmail() {
    const emailInput = document.getElementById("email_input");
    const emailError = document.getElementById("email_error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = "block";
        emailInput.classList.add("input-order--error");
        return false;
    } else {
        emailError.style.display = "none";
        emailInput.classList.remove("input-order--error");
        return true;
    }
}

document.getElementById("repass_btn").addEventListener("click", function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми
    
    if (validateEmail()) {
        const code = generateVerificationCode();
        localStorage.setItem("verificationCode", code); // Зберігаємо код у localStorage
        
        console.log(`Згенерований код: ${code}`); // Виводимо код у консоль для тесту
        alert(`Ваш код: ${code}`); // Імітуємо відправлення коду

        // Перенаправлення на другу сторінку
        window.location.href = "repass_page_two.html";
    }
});
