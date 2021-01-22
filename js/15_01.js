// Сортировать по убыванию

// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10

//========================
// alert( arr ); // 8, 5, 2, 1, -10
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

//============================

// // 3)Посчитайте все лайки пользователей
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// // 4)Найдите все обьекты у которых есть тег 'js'(массив tweets);

// const likesTotal = tweets.reduce((acc, { likes }) => acc + likes, 0);
// console.log(likesTotal);

// const jsIncludes = tweets.filter(({ tags }) => tags.includes('js'));
// console.log(jsIncludes);

//===================================

// // "Увольте сотрудника если его зп больше 100 и он не активен (учитывая список тех, кого увольнять нельзя=) )"
// const employees = [
//   { name: 'Adam', salary: 100, isActive: true },
//   { name: 'Sarah', salary: 90, isActive: false },
//   { name: 'Jacob', salary: 150, isActive: false },
//   { name: 'Mishele', salary: 100, isActive: true },
//   { name: 'Thor', salary: 110, isActive: false },
// ];
// const BENEFITED = ['Thor', 'Buddah', 'Krishna'];
// const fireEmpl = function (employee) {
//   if (
//     employee.salary > 100 &&
//     !employee.isActive &&
//     !BENEFITED.includes(employee.name)
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// };
// const listUpd = employees.filter(fireEmpl);
// console.log(listUpd);

// =================================================

// // Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// // Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
// let arr = [1, 2, 3, 4, 5, 6];
// const shuffle = arr => {
//   return arr.sort(() => Math.random() - 0.5);
// };
// // console.log(shuffle(arr));

//================================================

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str),
// который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами)
// и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func),
// который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.a

// const Calculator = function () {
//   this.methods = {
//     ‘+’:(a,b)=>a+b,
//     ‘-’:(a,b)=>a-b,
//   };
//   this.calculate = function (str) {
//     let splitted = str.split(' ’);
//     let first = +splitted[0];
//     let second = +splitted[2];
//     let operator = splitted[1];
//     return this.methods[operator](first,second);
//   }
//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   }
// }
// let calc = new Calculator;
// calc.addMethod(“*”, (a, b) => a * b)
// calc.addMethod(“/”, (a, b) => a / b)
// calc.addMethod(“**“, (a, b) => a ** b)
// console.log(calc.calculate(‘3 * 2’))
// console.log(calc.calculate(‘3 ** 2’))

//====================================

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O

//========================================================

const arr = [
  'Shelukhin Andrey',
  'Dmytro Bazhenov',
  'Vova Chelidze',
  'Dmitry Grinchenko',
  'Stanislav Karasyk',
  'Maxim Kazachuk',
  'Ivan Khailo',
  'Misha Khmara',
  'Vitaliy Kornienko',
  'Bogdan Lytvyn',
  'Dmytro Orgish',
  'Liudmila Popescu',
  'Pavel Sakun',
  'Evgeny Serebrennikov',
  'Roman Skliarenko',
  'Kateryna Tashkin',
  'Maria Trofimova',
  'Maksym Tuhanov',
  'Daria Viter',
  'Mykhailo Yefymovych',
  'Tetiana Ziatikova',
];

const sortedComands = n => {
  let newArr = arr.sort(() => Math.random() - 0.5);
  let l = newArr.length;
  let s = 0;
  let f = l / n;
  let res = {};
  for (let i = 0; i < n; i++) {
    res[i] = newArr.splice(s, f);
  }
  return res;
};
console.log(sortedComands(3));
