/*const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
    photo:
      'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg',
  },
];
*/
// const newInventors = inventors.filter(({ year, passed }) => {
//   if (passed - year < 50) {
//     return true;
//   }
// });
// console.log(newInventors);

// inventors.forEach(({ first, last }) => {
//   first.includes('e') || first.includes('E') ? console.log(last) : '';
// });

//===================================

// const woman = (inventors.find(
//   ({ first, last }) => last === 'Curie' && first === 'Marie',
// ).husband = 'Pierre');
// console.log(woman);
// console.log(inventors);
// const sumYears = inventors.reduce(
//   (acc, { year, passed }) => acc + passed - year,
//   0,
// );
// console.log(sumYears);


//================================
// написати ф-ю getSalary(worker, rate) яка приймає аргументами обєкт робітника і погодинну ставку.
// Ф-я вертає зарплату робітника за тиждень з урахуванням штрафів і премій
// hours - години роботи
// value - сума штрафу
// premium - премія
// console.log(getSalary(worker, 20)); // 1235
// console.log(getSalary(worker, 8)); // 671

// let worker = {
//   workSchedule: [
//     { day: 'M', hours: 9 },
//     { day: 'T', hours: 10 },
//     { day: 'W', hours: 11 },
//     { day: 'T', hours: 5 },
//     { day: 'F', hours: 12 },
//   ],
//   penalty: [
//     { day: 'M', value: 0 },
//     { day: 'T', value: 120 },
//     { day: 'W', value: 50 },
//     { day: 'T', value: 0 },
//     { day: 'F', value: 35 },
//   ],
//   premium: 500,
// };

const getSalary = ({ workSchedule, penalty, premium }, perHour) => {
  const totalSalary = workSchedule.reduce(
    (acc, { hours }) => acc + hours * perHour,
    premium,
  );
  console.log(totalSalary);
  const totalFine = penalty.reduce((acc, { value }) => acc + value, 0);
  console.log(totalFine);
  const result = totalSalary - totalFine;
  console.log(result);
};

getSalary(worker, 10);


//===========================
// const getCentury = function (year) {
//   return Math.floor(year / 100) + 1;
// };

// getCentury(1999);

//===============================

// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис
// 1952 рік - 20 століття
// 1440 рік - 15 століття

// let userInput;
// let years = [];

// while (userInput !== null) {
//   userInput = prompt('Insert year');
//   userInput ? years.push(userInput) : '';
// }

// years.forEach(year => {
//   console.log(`Year ${year}, Centure ${getCentury(year)}`);
//   Math.floor(year / 100) + 1;
// });

// //======================
// const century = function (year){
//     return Math.floor(year / 100) + 1;
// }
// let userInput;
// let years = [];
// while (userInput!== null) {
//     userInput = prompt('Insert year');
//     userInput ? years.push(userInput) : '';
// }
// years.forEach((year) => {
//     console.log(`Year ${year} , Century ${century(year)}`);
// });

// //=================================

// // проверка на высокостный год
// const isLeap = year => year % 4 === 0;

// console.log(isLeap(2000));
// console.log(isLeap(1997));

//--------------------------------------------------------------------

// console.log('%c some message', 'color: red; padding: 30px; background: tomato');

//----------------------------------------------------------------

// Напишите ф-ю которая принимает строку и возвращает объект с  количеством  букв в строке
// console.log(countLetter('w3school.com')) // 3

// const countLetter = str => {
//   let obj = {};
//   const splittedStr = str.split('').forEach(el => (obj[el] = '0'));
//   splittedStr.forEach(el => {
//     obj[el] ? (obj[el] = obj[el] += 1) : console.log(el);
//   });
//   return obj;
// };
// console.log(countLetter('w3school.com')); // 3

const countLetter = str => {
    let obj = {};
    let splitted = str.split(‘’);
    splitted.forEach(el => obj[el] = ‘0’);
    // console.log(splitted)
    splitted.forEach(el => { obj[el] ? obj[el] = +obj[el] + 1  : console.log(el) })
    // for (const el of splitted) {
    //   if (obj[el]) {
    //     obj[el] = +obj[el] + 1
    //   }
    //   console.log(el)
    // }
    return obj;
  }

  console.log(countLetter('w3school.com')); // 3