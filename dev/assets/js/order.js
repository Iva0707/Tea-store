const arrowButton = document.querySelector('.select__arrow');
const optionsList = document.querySelector('.option__list');
const selectedOptionDiv = document.querySelector('.select');
const optionElements = document.querySelectorAll('.option');

// Коли натискаємо на стрілку, показується список
arrowButton.addEventListener('click', function() {
  optionsList.classList.toggle('option__hidden'); // Показати/сховати список
  arrowButton.classList.toggle('rotated'); // Міняємо стрілку
  console.log("Список показується чи ховається:", optionsList.classList.contains('option__hidden'));
});

// Обробка вибору опції
optionElements.forEach(option => {
  option.addEventListener('click', function() {
    selectedOptionDiv.textContent = this.textContent; // Оновлюємо рядок з вибором
    optionsList.classList.add('option__hidden'); // Ховаємо список після вибору
    arrowButton.classList.remove('rotated'); // Повертаємо стрілку вниз
  });
});

// Закриття списку при кліку поза елементом
document.addEventListener('click', function(event) {
  if (!event.target.closest('.select__container')) {
    optionsList.classList.add('option__hidden'); // Приховуємо список, якщо клікнули поза контейнером
    arrowButton.classList.remove('rotated'); // Повертаємо стрілку вниз
  }
});