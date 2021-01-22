//===== The Game with 😍!! Where're you put pointer, there're gonna be this smile )) 😍
/*
document.body.addEventListener('click', event => {
  if (event.target.nodeName === 'DIV') {
    event.target.remove();
  } else {
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div class="smile"style="position: absolute; top: ${
        event.y - 20
      }px; left: ${event.x - 10}px; cursor: pointer">😍</div>`,
    );
  }
});
*/

//===============================================
// 2) В штмл у вас есть список имён (в дата-атрибуте каждой лишки лежит фамилия).
//  Сделайте так, чтобы когда курсор мышки проходит над лишкой в неё подставлялась фамилия,
//   а когда курсор уходит из области - всё возвращается в начальное состояние

// const ref = {
//     ul: document.querySelector('.list_names'),
// }

// function surname (event){
//     const currentName = event.target.textContent;
//     const currentSurname = event.target.dataset.surname;
//     console.log(event.target);
//     event.target.textContent = currentName + ' ' + currentSurname
//     event.target.addEventListener('mouseleave', () => {
//         event.target.textContent = currentName;

//     })
// }

// ref.ul.addEventListener('mouseover', surname);

//=====================================

// ! Task 21.01.18
// 3) напищите ф-цию которая создаст 10 квадратов с нумерацией внутри(стили в цсс),
// при клике на квадрат должен выводиться алерт с его номером

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach(num => {
//   const square = document.createElement('div');
//   document.body.append(square);
//   square.classList.add('square');
//   square.textContent = num;
// });

// document.body.addEventListener('click', event => {
//   if (event.target.nodeName === 'DIV') {
//     alert(event.target.textContent);
//   }
// });
// console.log([...document.querySelector('.a').classList]);

//============================

// 1) У вас есть форма с инпутами(Имя, фамилия, номер телефона), сделайте так,
//  чтобы при сабмите формы (именно событие сабмит) по цетру экрана появлялось модальное окно (простые стили)
//  с сообщением Заявка от (Фамилия+Имя) принята! Мы перезвоним вам по этому номеру (Номер)

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
//   const modal = document.createElement('div');
//   modal.classList.add('modal');
//   modal.innerHTML = `<h3 class="color-text">Заявка от ${formInput.surname} ${formInput.name} принята! Мы перезвоним вам по этому номеру ${formInput.phone}</h3>`;
//   document.body.append(modal);
//   ref.form.removeEventListener('submit', makeModal);
// }
// function closeModal(event) {
//   if (
//     document.querySelector('.modal') &&
//     event.target === event.currentTarget
//   ) {
//     document.querySelector('.modal').remove();
//     document.body.removeEventListener('click', closeModal);
//   }
// }
// document.body.addEventListener('click', closeModal);
// ref.form.addEventListener('submit', makeModal);

//==========================================

// 4) Напишите скрипт который будет двигать чёрный квадрат по заданной области при нажатии на стрелки (верх, низ, лево, право)
// 5) Перепишите скрипт таким образом, чтобы движение квадрата достигалось путем внесение данных в инпуты (оси Х/У, событие Input);
//задание 4)

// const div = document.querySelector('.square-black');
// const coord = {
//   x: 0,
//   y: 0,
// };

// function moveSquare(event) {
//   if (event.code === 'ArrowUp') {
//     coord.y -= 100;
//   }
//   if (event.code === 'ArrowDown') {
//     coord.y += 100;
//   }
//   if (event.code === 'ArrowLeft') {
//     coord.x -= 100;
//   }
//   if (event.code === 'ArrowRight') {
//     coord.x += 100;
//   }
//   coord.x > 600 ? (coord.x = -650) : coord.x < -600 ? (coord.x = 600) : '';
//   coord.y > 400 ? (coord.y = -400) : coord.y < -400 ? (coord.y = 400) : '';
//   div.style.transform = `translate(${coord.x}px,${coord.y}px)`;
//   console.log(event.code);
// }

// document.body.addEventListener('keydown', moveSquare);

// ==================================================
// 5) Перепишите скрипт таким образом, чтобы движение квадрата достигалось путем внесение данных в инпуты (оси Х/У, событие Сhange);
// task 5 doesn't work ..........

// const div = document.querySelector('.square-black');

// const x = document.querySelector("[name='X']");
// const y = document.querySelector("[name='Y']");

// console.log(x.value, y.value);

// x.addEventListener('input', () => {
//   div.style.transform = `translate(${x.value}px,${y.value}px)`;
// });

// y.addEventListener('input', () => {
//   div.style.transform = `translate(${x.value}px,${y.value}px)`;
// });
