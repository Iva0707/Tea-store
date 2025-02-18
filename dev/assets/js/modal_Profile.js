document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { 
        const modals = document.querySelectorAll(".modal");
        const closeButtons = document.querySelectorAll(".close");
        const saveButtons = document.querySelectorAll(".saveChanges");
        const inputMap = {
            "modal-age": "profile-age",
            "modal-number": "profile-number",
            "modal-email": "profile-email"
        };

        document.querySelectorAll(".edit-btn").forEach(button => {
            button.addEventListener("click", (event) => {
                const modalId = event.target.dataset.modal;
                const modal = document.getElementById(modalId);

                if (modalId === "modal-name") {
                    changeName();
                } else {
                    changeOtherData(modalId);
                }
                
                modal.style.display = "flex";
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener("click", () => {
                button.closest(".modal").style.display = "none";
            });
        });

        function changeName() {
            document.querySelector("#modal-name .saveChanges").addEventListener("click", function () {
                const firstName = document.getElementById("new-firstname").value.trim();
                const lastName = document.getElementById("new-lastname").value.trim();

                if (firstName && lastName) {
                    const fullName = `${firstName} ${lastName}`;
                    const profileInput = document.getElementById("profile-name");
                    profileInput.value = fullName;
                    localStorage.setItem('profile-name', fullName); 
                } else {
                    alert("Будь ласка, введіть ім'я та прізвище");
                }

                document.getElementById("modal-name").style.display = "none";
            });
        }

        function changeOtherData(modalId) {
            const inputId = inputMap[modalId]; 
            document.querySelector(`#${modalId} .saveChanges`).addEventListener("click", function () {
                const newValue = document.querySelector(`#${modalId} input`).value.trim();

                if (newValue) {
                    document.getElementById(inputId).value = newValue; 
                    localStorage.setItem(inputId, newValue);
                } else {
                    alert("Будь ласка, введіть нове значення");
                }

                document.getElementById(modalId).style.display = "none";
            });
        }

        window.onclick = (event) => {
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        };
    }, 500); // Чекаємо 500 мс, щоб модальні вікна підгрузилися
});
