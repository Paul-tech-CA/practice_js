// const h1 = document.querySelector('h1');
// console.dir(h1);
// h1.textContent = 'Привет ';
// const inputName = prompt('Введите имя!');

// h1.textContent += inputName;

//  функция для создания списков в html коде
// const arr = [
//   'Andrey Shelukhin ',
//   'Dmytro Bazhenov',
//   'Vova Chelidze',
//   'Dmitry Grinchenko',
//   'Stanislav Karasyk',
//   'Maxim Kazachuk',
//   'Ivan Khailo',
//   'Misha Khmara',
//   'Vitaliy Kornienko',
//   'Bogdan Lytvyn',
//   'Dmytro Orgish',
//   'Liudmila Popescu',
//   'Pavel Sakun',
//   'Evgeny Serebrennikov',
//   'Roman Skliarenko',
//   'Kateryna Tashkin',
//   'Maria Trofimova',
//   'Maksym Tuhanov',
//   'Daria Viter',
//   'Mykhailo Yefymovych',
//   'Tetiana Ziatikova',
// ];

// const arr2 = [1, 2, 3, 5, 8];

// const groupList = document.querySelector('.group-list');

// const createList = (ul, arr) => {
//   arr.forEach(element => {
//     let elem = document.createElement('li');
//     ul.append(elem);
//     elem.textContent = element;
//   });
// };
// createList(groupList, arr);

// // https://picsum.photos/id/237/200/300

// // const img = document.createElement('img');
// const body = document.querySelector('body');
// // body.append(img);
// // img.src = `https://picsum.photos/id/237/200/300`;
// // img.setAttribute('alt', 'Little dogs');
// // console.log(body);

// for (let i=0; i < 3; i+=1){
//   const number = Math.round(Math.random()*100);
//   body.insertAdjacentHTML('afterbegin', `<img src='https://picsum.photos/id/${number+i}/200/300' alt='puctures'>`)
// }

// создаем профиль юзера
//созадть профиль юзера
// const arr = [
//   {
//     name: 'John',
//     last: 'Week1',
//     height: 200,
//     weight: 100,
//     photo:
//       'https://cdn.onebauer.media/one/empire-images/reviews_films/5898af57ccd4a51d075e10e6/john-wick-2.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
//   },
//   {
//     name: 'John',
//     last: 'Week2',
//     height: 200,
//     weight: 100,
//     photo:
//       'https://cdn.onebauer.media/one/empire-images/reviews_films/5898af57ccd4a51d075e10e6/john-wick-2.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
//   },
//   {
//     name: 'John',
//     last: 'Week3',
//     height: 200,
//     weight: 100,
//     photo:
//       'https://cdn.onebauer.media/one/empire-images/reviews_films/5898af57ccd4a51d075e10e6/john-wick-2.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
//   },
// ];
// const heroes = (arr, str) => {
//   const ul = document.querySelector(str);
//   arr.forEach(({ name, last, height, weight, photo }) => {
//     const template = `<li class='user-item'> <img src=${photo}> <h2>${name}</h2> <h3>${last}</h3> <p>height: ${height}</p> <p>weight: ${weight}</p></li>`;
//     ul.insertAdjacentHTML('beforeend', template);
//   });
//   console.log(ul);
// };
// heroes(arr, '.user-list');

const div = document.createElement('div');
const body = document.body;
body.append(div);
div.style.backgroundColor = 'red';
div.style.width = '200px';
div.style.height = '200px';
div.style.margin = '0 auto';
div.classList.add('square');

const div1 = document.createElement('div');
div.append(div1);
div1.classList.add('circle');
div1.classList.replace('circle', 'circle2');
