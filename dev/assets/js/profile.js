
import { orders } from './orders.js';
import { generateOrderHTML } from './templateOrders.js';
import { generateNoOrders } from './templateOrders.js';



const sidebarItems = document.querySelectorAll('.sidebar__item');
const contentSections = document.querySelectorAll('.content__section');

function showSection(sectionId) {
  contentSections.forEach(section => {
    section.classList.remove('content__active');
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('content__active');
  }
}


sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebarItems.forEach(el => el.classList.remove('sidebar__active'));
    item.classList.add('sidebar__active');
    const sectionId = item.getAttribute('data-section');
    showSection(sectionId);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  showSection('personal-info');
});



//Взаємодія з БД

// fetch('/api/update-profile', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ key, value }),
//   });


// fetch('/api/get-profile')
//   .then(response => response.json())
//   .then(data => {
//     // Заповнюємо інпути даними з бази
//     inputs.forEach(input => {
//       if (data[input.id]) {
//         input.value = data[input.id];
//       }
//     });
//   });



//history


document.addEventListener("DOMContentLoaded", () => {
  const ordersContainer = document.querySelector("#order-history");

  if (!Array.isArray(orders) || orders.length === 0) {
    ordersContainer.insertAdjacentHTML("beforeend", generateNoOrders());
  }
  else {
    orders.forEach((order) => {
      const orderHTML = generateOrderHTML(order); // Використання функції
      ordersContainer.insertAdjacentHTML("beforeend", orderHTML);
    });

    ordersContainer.addEventListener("click", (event) => {
      const targetElement = event.target.closest(".btn--toggle");
      const orderId = targetElement.dataset.orderId;
      const order = targetElement.dataset.orderId;

      if (order) {
        const card = document.getElementById(`order-status_card-${orderId}`)
        const orderStatus = document.getElementById(`order-status-${orderId}`);
        const arrowDown = document.getElementById(`arrow_down-${orderId}`);
        const details = document.getElementById(`order-details-${orderId}`);
        const arrowUp = document.getElementById(`arrow_up-${orderId}`);

        if (details.hidden) {
          details.hidden = false;
          details.classList.add("active");
          orderStatus.classList.remove("active");
          orderStatus.hidden = true;
          arrowDown.classList.remove("active");
          arrowUp.classList.add("active");
        } else {
          details.hidden = true;
          details.classList.remove("active");
          orderStatus.classList.add("active");
          orderStatus.hidden = false;
          arrowDown.classList.add("active");
          arrowUp.classList.remove("active");

        }
      }
    });
  }
});




document.addEventListener("DOMContentLoaded", function () {
  const paidStep = document.getElementById("paid");
  const shippingStep = document.getElementById("shipping");
  const completedStep = document.getElementById("completed");

  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");

  // Через 10 секунд активується "Доставляється"
  setTimeout(() => {
    paidStep.classList.remove("status__step--active");
    line1.classList.add("status__line--active");
    shippingStep.classList.add("status__step--active");
  }, 10000);

  // Через 20 секунд активується "Виконано"
  setTimeout(() => {
    shippingStep.classList.remove("status__step--active");
    line2.classList.add("status__line--active");
    completedStep.classList.add("status__step--active");
  }, 20000);
});



// VM662 profile.js:84 Uncaught TypeError: toggleButtons.forEach is not a function
//     at HTMLDocument.<anonymous> (VM662 profile.js:84:17)

// Профіль

const mockUser = {
  avatar: "../assets/img/demo_avatar.png",
  age: "23",
  fullName: "Олег Ферненко",
  phoneNumber: "380 68 119 45 58",
  email: "tea_store@gmail.com"
};

// Зберігаємо дані в localStorage (імітація реєстрації)
localStorage.setItem("userData", JSON.stringify(mockUser));

document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData) {
      document.getElementById("avatar").src = userData.avatar;
      document.getElementById("profile-age").value = userData.age;
      document.getElementById("profile-name").value = userData.fullName;
      document.getElementById("profile-number").value = userData.phoneNumber;
      document.getElementById("profile-email").value = userData.email;
  }
});

