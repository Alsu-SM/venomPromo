const menuButton = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');
const menu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
  menu.classList.add('is-active');
  menuClose.classList.add('is-active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('is-active');
  menuClose.classList.remove('is-active');
});

// Виджет, всплывающая форма

const hideForm = document.querySelector('.hide-form');
const orderTicket = document.querySelector('.order-ticket');
const orderTicketForm = document.querySelector('.order-ticket__form');
const orderTrigger = document.querySelector('.order-trigger');

const orderTicketFormWrapper = document.querySelector(
  '.order-ticket__form-wrapper'
);
const orderTicketPreloaderWrapper = document.querySelector(
  '.order-ticket__preloader-wrapper'
);
const orderTicketThanksWrapper = document.querySelector(
  '.order-ticket__thanks-wrapper'
);
const orderTicketThanksName = document.querySelector(
  '.order-ticket__thanks-name'
);

const sendData = (data, callback, callBefore) => {
  if (callBefore) callBefore();

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset = utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(callback);
};

const showPreloader = () => {
  orderTicketFormWrapper.style.display = 'none';
  orderTicketPreloaderWrapper.style.display = 'block';
};
const showThankYou = (data) => {
  orderTicketThanksName.textContent = data.name;
  orderTicketPreloaderWrapper.style.display = 'none';
  orderTicketThanksWrapper.style.display = 'block';
};

setTimeout(() => {
  const heightForm = orderTicket.offsetHeight;
  hideForm.style.bottom = -heightForm + 'px';
}, 1000);

orderTrigger.addEventListener('click', () => {
  hideForm.classList.toggle('hide-form-active');
});

orderTicketForm.addEventListener('change', (event) => {
  const target = event.target;
  const label = target.labels[0];

  if (target.value) {
    label.classList.add('order-ticket__label-focus');
  } else {
    label.classList.remove('order-ticket__label-focus');
  }
});

orderTicketForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // FormData - специальный объект по работе с формой, позволяет получить данные
  const formData = new FormData(orderTicketForm);
  const data = {};

  for (const element of formData) {
    // деструктуризация
    const [name, value] = element;
    data[name] = value;
  }
  sendData(data, showThankYou, showPreloader);
});
