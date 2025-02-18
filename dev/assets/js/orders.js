export const orders = [
    {
      id: "8423754",
      date: "28.05.2024",
      status: "Виконано",
      deliveryMethod: "Доставка кур'єром",
      deliveryAddress: "Київ, вул. Хрещатик, 1",
      paymentMethod: "Картка Visa",
      totalPrice: 0,
      items: [
        { name: "Product 1", pricePer100g: 56, quantity: 200},
        { name: "Product 2", pricePer100g: 42, quantity: 150},
        { name: "Product 3", pricePer100g: 76, quantity: 300},
      ],
    },
    {
      id: "8514213",
      date: "28.05.2024",
      status: "Виконано",
      deliveryMethod: "Доставка Нова Пошта",
      deliveryAddress: "Львів, вул. Промислова, 1",
      paymentMethod: "Картка Mastercard",
      totalPrice: 0,
      items: [
        { name: "Product 1", pricePer100g: 175, quantity: 400},
        { name: "Product 2", pricePer100g: 31, quantity: 1000},
      ],
    },
  ];

  orders.forEach(order => {
    order.items.forEach(item => {
      item.totalPrice = (item.pricePer100g * item.quantity) / 100; // Розрахунок суми для кожного товару
    });
  });

  orders.forEach(order => {
    order.totalPrice = order.items.reduce((sum, item) => {
      return sum + item.pricePer100g * (item.quantity / 100);
    }, 0);
  }
);