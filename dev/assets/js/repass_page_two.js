// Валідація введеного коду
function validateCode() {
    const codeInput = document.getElementById("code_input");
    const codeError = document.getElementById("code_error");
    const storedCode = localStorage.getItem("verificationCode"); // Отримуємо збережений код із localStorage
    
    if (codeInput.value !== storedCode) {
        codeError.style.display = "block";
        codeInput.classList.add("input-order--error");
        return false;
    } else {
        codeError.style.display = "none";
        codeInput.classList.remove("input-order--error");
        return true;
    }
}

document.getElementById("repass_btn").addEventListener("click", function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми
    
    if (validateCode()) {
        alert("Код правильний! Переходимо на наступну сторінку...");
        // Очистимо код із localStorage, якщо він більше не потрібен
        localStorage.removeItem("verificationCode");

        // Перенаправлення на наступну сторінку (наприклад, для введення нового паролю)
        window.location.href = "reset_password_page.html";
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const codeInput = document.getElementById("code_input");
    if (codeInput) {
        codeInput.focus();
    }
});