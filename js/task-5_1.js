'use strict';
// ___________За допомогою оператора визначення типу переконайтеся,
//  що змінних належать типам: string, number, boolean.

// const str = 'qwerty';
// const num = 3.14;
// const boolean = false;
// const object = {
//   a: 1,
//   b: 'b',
//   c: true,
// };
// const array = [1, 2, 3, 4, 5];

// console.log(typeof str);

// ___________За допомогою оператора визначення типу переконайтеся,
// що змінних належать типам: string, number, boolean.

// const str = 'qwerty';
// const num = 3.14;
// const boolean = false;
// const object = {
//   a: 1,
//   b: 'b',
//   c: true,
// };
// const array = [1, 2, 3, 4, 5];

// console.log('"str"', typeof str);
// console.log('"num"', typeof num);
// console.log('"boolean"', typeof boolean);
// console.log('"object"', typeof object);
// console.log('"array"', typeof array);

// ______________ а) Вивести на екран  суму: ваш вік + вік сусіда справа.

// let myAge = 133;
// let mentorsAge = 135;
// let result = myAge + mentorsAge;
// console.log(result);

// // _______________б) Вивести в консоль  результат: 108+223-2*5

// let a;
// console.log((a = 108 + 223 - 2 * 5));

// __________________Определить площадь круга с
// радиусом 10см ( ПR(2) )

// const PI = 3.14;
// let radius = 10;

// console.log(
//   `Площадь круга радиусом ${radius} см = ${PI * Math.pow(10, 2)} sm2`,
// );

// ________________ Написать фразу с помощью интерполяции `${...}`
// "Здравствуйте, меня зовут А, мне Б лет и мне нравятся Ц"
// где А, Б, Ц - переменные вставленные в строку

// const name = 'Sasha';
// const age = 8;
// const hobby = 'candies';

// console.log(
//   `"Здравствуйте, меня зовут ${name}, мне ${age} лет и мне нравятся ${hobby}"`,
// );

//________________________
// Каким будет результат этих выражений?

// console.log(5 > 4); // true
// console.log('Ёнанас' < 'ёжик'); // true
// console.log('2' > '12'); // true
// console.log(undefined == null); // true

// console.log(undefined === null); // false

// #2
// _________________________Выведется ли alert?
//  Yes!

// if ('0') {
//   alert('Привет');
// }

// console.log('0');

// #3
// ________________________IF/ELSE/?
// Используя конструкцию if..else, напишите код, который
// будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!»,
// в противном случае – отобразить: «Не знаете? ECMAScript!»

// let input = prompt('Какое "официальное" название JavaScript?');
// if (input === 'ECMAScript') alert('You are right!!');
// else alert('Don*t know? ECMAScript!');

// #4__________________________
// Перепишите if с использованием условного оператора '?':

// let result;
// let a = 0;
// let b = 4;

// a + b < 4 ? (result = 'Мало') : (result = 'Много');

// console.log(result);

// #5____________________
// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let message;
// let login = 'Директор';

// login == 'Сотрудник'
//   ? (message = 'Привет')
//   : login == 'Директор'
//   ? (message = 'Здравствуйте')
//   : login == ''
//   ? (message = 'Нет логина')
//   : (message = '');

// console.log(message);

// #6______________________ Logic Operators
// Что выведет код ниже?
//  2
// alert(null || 2 || undefined);

// #7________________
// Что выведет код ниже? === false;

// alert((1 && nu3gll && 2) > 0);

// #8
// Что выведет код ниже? === 3;

// alert(null || (2 && 3) || 4);

// #9_________________________
// Напишите условие if для проверки,
// что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age
// может быть равно 14 или 90.

// let age = 13;

// age >= 14 && age <= 90 ? console.log('Yes') : console.log('No');

// if (age >= 14 && age <= 90) console.log('Yes');
// else console.log('No');

// #10_______________________________
// Какие из перечисленных ниже alert выполнятся? 'first = -1' and 'third = 1'

// Какие конкретно значения будут результатами выражений в условиях if(...)?

// if (-1 || 0) {
//   alert('first');
// }
// if (-1 && 0) alert('second');
// if (null || (-1 && 1)) alert('third');

// console.log(null || (-1 && 1));

// #11_________________________________________
// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// const input = prompt('Input login');
// if (input === 'Админ') {
//   let password = prompt('Input password');
//   if (password === 'Я главный') console.log('Здравствуйте!');
//   else if (password === null) console.log('Отменено');
//   else console.log('Неверный пароль');
// } else if (input === null) console.log('Отменено');
// else console.log('Я вас не знаю');

// #12 While/For_____________________
// Какое последнее значение выведет этот код? Почему? "БЕСКОНЕЧНЫЙ ЦИКЛ!!!"

// let i = 3;

// while (i) {
//   console.log(i++);
// }

// #13
// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// #14
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число,
// большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа.
// Предусматривать обработку нечисловых строк в этой задаче необязательно.

// while (!false) {
//   let input = prompt('Input number which more than 100');
//   if (input < 100 && input > 0) alert('Input number one more time');
//   else break;
// }

//______________

// #2
// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения
//  в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles.indexOf(styles.length / 2);

// console.log(styles.indexOf(styles.length / 2));

//_______________
// console.log(styles.length / 2);

// ============ m3 task 19
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const property = [];

//   for (const product of products) {
//     for (const item in product) {
//       if (item === propName) {
//         property.push(product[item]);
//       }
//     }
//   }

//   return property;
//   // Пиши код выше этой строки
// }

// console.log(getAllPropValues('name'));

// ============ m3 task 20
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     console.log(product.name);
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Рдар'));

// ================ DEEP DESTRUCTION============
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   }),
// );

// ==================== REST ===========

// function add(...args) {
//   let totalSum = 0;

//   for (const arg of args) {
//     totalSum += arg;
//   }
//   return totalSum;

// }
// console.log(add(12, 4, 11, 48));

// ===============
// function findMatches(array, ...args) {
//   const matches = []; // Не изменяй эту строку
//   for (const number of args) {
//     if (array.includes(number)) {
//       matches.push(number);
//     }
//   }

//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// =====================
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     let indexToRemove;
//     for (const item in this.potions) {
//       if (this.potions[item].name === potionName) {
//         indexToRemove = item;
//       } else if (item === -1) {
//         return `Зелья ${potionName} нет в инвентаре!`;
//       }
//     }

//     this.potions.splice(indexToRemove, 1);
//   },

//   updatePotionName(oldName, newName) {
//     let potionIndex;

//     for (const potion in this.potions) {
//       console.log(this.potions[potion].name);
//       if (this.potions[potion].name === oldName) {
//         this.potions[potion].name = newName;
//       } else if (potion === -1) {
//         return `Зелья ${oldName} нет в инвентаре!`;
//       }
//     }

//   },
//   // Пиши код выше этой строки
// };

// // atTheOldToad.removePotion('Зелье скорости');

// atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
// console.log(atTheOldToad.potions);

// ================
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     // console.log(!this.pizzas.includes(pizzaName));
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

//   for (const key of Object.keys(object)) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
//   // Пиши код выше этой строки
// }

// // ======================
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = orders.map((order, index) =>
//   composeMessage.apply(order, [index + 1]),
// );
// // ----------------------------------

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter(e => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action.call(service, email);
// }

// console.log(logAndInvokeAction('kiwi@mail.uk', service.subscribe));
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com',
//     'poly@hotmail.de',
//     'ajax@jmail.net',
//     'kiwi@mail.uk']*/

// console.log(logAndInvokeAction('poly@hotmail.de', service.unsubscribe));
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// ================================= 5.6

// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   return this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   let index = this.items.indexOf(item);
//   if (index > -1) return this.items.splice(index, 1);

//   // for (const stuff of this.items) {
//   //   if (stuff === item) {
//   //   }
//   //   console.log('stuff', stuff);
//   // }
//   // return this.items.splise(item);
// };

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ============== 5.7

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   return (this.value += str);
// };

// StringBuilder.prototype.padStart = function (str) {
//   return (this.value = str + this.value);
// };

// StringBuilder.prototype.padBoth = function (str) {
//   return (this.value = str + this.value + str);
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// ========================== 11.5 CLASS + pivat property

// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     return (this.#brand = newBrand);
//   }
// }

// ============================ 12.5 CLASS + pivat property
// class Storage {
//   #items;

//   constructor (items) {
//     this.#items = items;
//   }

// getItems() {
//   return this.#items;
// };

// addItem (newItem) {
//   this.#items.push(newItem);
// };

// removeItem (item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };

// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ==============recursion QUESTION
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
// function sum(arr, n) {
//   // Only change code below this line
//   if (n <= 0) {
//     return n;
//   } else {
//     console.log('n', n);
//     console.log('sum', sum(arr, n - 1));
//     console.log('arr', arr[n - 1]);
//     return sum(arr, n - 1) + arr[n - 1];
//   }
//   // Only change code above this line
// }
// console.log(sum([2, 3, 4, 5], 3));

// var contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//    {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (var i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       console.log(contacts[i]);
//       return contacts[i][prop] || 'No such property';
//     }
//   }
//   return 'No such contact';
//   // Only change code above this line
// }

// console.log(lookUpProfile('Kristian', 'lastName'));

// // ========================================
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countdown(10));

// // ======================n замікания
// const a = {};

// let test = function (arr) {
//   let y = 0;

//   arr.forEach(item => (y += item));

//   return y;
// };

// test([1, 6, 7, 9, 87]);

//============================= строку первая буква слова (camleCaseStyle)

// const toCamelCase = function (str) {
//   let splittedStr = str.split('-');
//   let res = splittedStr[0];
//   for (let i = 1; i < splittedStr.length; i++) {
//     let temp = splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1);
//     res += temp;
//   }
//   return res;
// };

// =========================================
// 4)Удалить значения из массива (те, которые между "от" и "до")

// let arr = [1, 'от', 2, 3, 4, 5, 6, 7, 8, 9, 'до', 10];

// const delate = function (arr, from, to) {
//   let first = arr.indexOf(from);
//   let second = arr.indexOf(to);
//   arr.splice(first, second + 1 - first);
//   return arr;
// };

// console.log(delate(arr, 'от', 'до'));

// =============================================
// 5)У нас есть объект:

// let user = {
//   name: 'John',
//   years: 30,
// };
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
//

// ==================RECURSION!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const pow = function(n,q) {
// if(q === 1) {
//     console.log('if',"n: ", n, "q: ", q)
//     return n
// }
// else {
//     console.log('else', "n: ", n, "q: ", q)
//     return n * pow(n, q-=1)
// }

// }
// console.log(pow(3,3))

// __________________
// const recursion = function(n) {
// console.log(n)
// if(n>=10) {
//     return n
// } else {
//     recursion(n+=1)
// }

// }

// recursion(0);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/
console.log(NaN ** 2);
