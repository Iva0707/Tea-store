export function generateOrderHTML(order) {
    return `<div class="order-status__card" id="order-status__card-${order.id}">
    <div class="order-status__header">
      <div class="order-status__header-left">
        <span class="order-status__number">№${order.id}</span>
        <span class="order-status__date">від ${order.date}</span>
      </div>
      <div class="order-status__header-right">
        <button class="btn btn--repeat">Повторити</button>
        <button class="btn--toggle" data-order-id="${order.id}">
          <img src="../assets/img/arrow_drop_down.png" alt="arrow_down" class="arrow active" id="arrow_down-${order.id}">
          <img src="../assets/img/arrow_drop_up.png" alt="arrow_up" class="arrow" id="arrow_up-${order.id}">
        </button>
      </div>
    </div>
    <div class="order-status__body active" id="order-status-${order.id}">
      <div class="order-status__progress">
        <div class="status__step status__step--active" id="paid">Оплачено</div>
        <div class="status__line" id="line1"></div>
        <div class="status__step" id="shipping">Доставляється</div>
        <div class="status__line" id="line2"></div>
        <div class="status__step" id="completed">${order.status}</div>
      </div>
    </div>
    <div class="order-status__details" id="order-details-${order.id}" hidden>
      <div class="details__info">
        <div class="details__info-tab">
          <div class="details__title">Спосіб доставки</div>
          <div class="subtitle">${order.deliveryMethod}</div>
        </div>
        <div class="details__info-tab">
          <div class="details__title">Адреса доставки</div>
          <div class="subtitle">${order.deliveryAddress}</div>
        </div>
        <div class="details__info-tab">
          <div class="details__title">Оплата</div>
          <div class="subtitle">${order.paymentMethod}</div>
        </div>
      </div>
      <div class="details__items">
        <h1 class="items-title">Товари</h1>
        <div class="order-details-header">
          <div class="price">Ціна за 100 г</div>
          <div class="amount">Кількість</div>
          <div class="sumarry">Вартість</div>
        </div>
        <div class="order-items">
          ${order.items
            .map(
              (item) => `
            <div class="order-item">
              <div class="order-name">
                <img src="" alt="" class="mini-product-img">
                <div class="name">${item.name}</div>
              </div>
              <div class="order-info">
                <span class="info">${item.pricePer100g} грн</span>
                <span class="info">${item.quantity} г</span>
                <span class="info">${item.totalPrice} грн</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
    <div class="order-status__footer">
      <div class="details__footer">Статус замовлення: <span class="completed">${order.status}</span></div>
      <span class="order-status__price">${order.totalPrice} грн</span>
    </div>
  </div>
`;
}

export function generateNoOrders(){
  return `<div class="history-miss">
            <div class="history-miss__text">Тут з'являться твої замовлення</div>
            <img class="history-miss__img" src="../assets/img/historyMiss.png" alt="history miss">
            <a href="#" class="btn history-miss__btn">Перейти в каталог</a>
        </div>`;
}