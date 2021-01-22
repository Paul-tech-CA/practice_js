// /*
// //1) У вас есть форма с инпутами(Имя, фамилия, номер телефона), сделайте так,
// //  чтобы при сабмите формы (именно событие сабмит) по цетру экрана появлялось модальное окно (простые стили)
// //  с сообщением Заявка от (Фамилия+Имя) принята! Мы перезвоним вам по этому номеру (Номер)

// */

// const ref = {
//   form: document.querySelector('.form'),
//   name: document.querySelector('[name = "name"]'),
//   surname: document.querySelector('[name = "surname"]'),
//   phone: document.querySelector('[name = "phone"]'),
// };

// function makeModal(event) {
//   event.preventDefault();
//   let formInput = {
//     name: ref.name.value,
//     surname: ref.surname.value,
//     phone: ref.phone.value,
//   };
//   const modal = document.createrElement('div');
//   modal.classList.add('modal');
//   modal.innerHTML = `<h3 class='color-text'>Заявка от ${formInput.surname} ${formInput.name} принята!  Мы перезвоним вам по этому номеру ${formInput.phone}</h3>`;
//   document.body.append(modal);
//   console.log(event);

//   ref.form.removeEventListener('submit', makeModal);
// }

// function closeModal(event) {
//   event.target === event.currentTarget ||
//   document.querySelector('.modal') ? document.querySelector('.modal').remove();
//     document.body.removeEventListener('click', closeModal);
// }

// document.body.addEventListener('click', closeModal);
// ref.form.addEventListener('submit', makeModal);

// 2) В штмл у вас есть список имён (в дата-атрибуте каждой лишки лежит фамилия).
//  Сделайте так, чтобы когда курсор мышки проходит над лишкой в неё подставлялась фамилия,
//   а когда курсор уходит из области - всё возвращается в начальное состояние
