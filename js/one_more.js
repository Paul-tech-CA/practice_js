// const number = 808;

// const intr = number => {
//   const result = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// console.log(intr(number));
// ============================================================================
// Сгенерировать обьект с рандомными названиями ключей.
// После этого в значение каждого ключа поместить число, это количество символов ключа умноженное
// на порядковый номер в алфавите последней буквы ключа.

// const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// const generateRandomString = function (minLength, maxLength) {
//   const strLength = parseInt(
//     Math.random() * (maxLength - minLength) + minLength,
//   );
//   let stringResponse = '';
//   for (let i = 0; i < strLength; i++)
//     stringResponse += alphabet.charAt(
//       parseInt(Math.random() * alphabet.length),
//     );
//   return stringResponse;
// };

// const generateRandomObject = function (minLength, maxLength) {
//   const objectResponse = {};
//   const keyCount = parseInt(
//     Math.random() * (maxLength - minLength) + minLength,
//   );
//   for (let i = 0; i < keyCount; i++) {
//     let randomString = generateRandomString(5, 8);
//     objectResponse[randomString] =
//       randomString.length * alphabet.indexOf(randomString.substr(-1));
//   }
//   return objectResponse;
// };

// console.log(generateRandomString(5, 8));
// console.log(generateRandomObject(5, 8));

// =================================================================================================
// Сгенерировать строку цифр от 0 до 9 длиной, кот передадим в функцию
// Определить наибольшую последовательность
// 8555238397379716621549384598978692182877122955895555502001344734026270107421597387466806040235694188891848853405174157089986073009305193743206082566354381982568303248598946899129416988722832444623014483790127138754647543424327519657367430296701454558
// const strNumbers = amount => {
//   let responseString = '';
//   for (let i = 0; i < amount; i++) {
//     responseString += parseInt(Math.random() * 10);
//   }
//   return responseString;
// };

// const longestChain = string => {
//   let responseChain = '';
//   let isChain = false;
//   let tempChain = '';
//   for (let i = 0; i < string.length; i++) {
//     if (Number(string[i]) + 1 === Number(string[i + 1])) {
//       isChain = true;
//       tempChain += string[i];
//     } else {
//       if (isChain === true) {
//         tempChain += string[i];
//       }
//       isChain = false;
//       if (tempChain.length > responseChain.length) {
//         responseChain = tempChain;
//       }
//       tempChain = '';
//     }
//   }
//   return responseChain;
// };

// let stringNumbers = strNumbers(1000);

// console.log(stringNumbers);
// console.log(longestChain(stringNumbers));
// ===================================================================

// createTransaction(amount, type){
//   const transactionNew = { name: id, operation: type, summary: amount };
//   console.log(transitionNew);
// };
// let wordBlanks;
// var myNoun = 'dog';
// var myAdjective = 'big';
// var myVerb = 'ran';
// var myAdverb = 'quickly';
// console.log((wordBlanks = `${myNoun} ${myAdjective}`));

// const generateRandomArray = (count, min, max) => {
//   const responseArray = [];
//   for (let i = 0; i < count; i++) {
//     responseArray.push(Math.random() * (max - min) + min);
//   }
//   return responseArray;
// };

// const minMaxObject = arrayNum => {
//   return { min: Math.min(...arrayNum), max: Math.max(...arrayNum) };
// };

// let result = generateRandomArray(15, 5, 20);
// console.log(result);
// console.log(minMaxObject(result));

// const average = (...numbers) => {
//     let total = 0;
//     for (let number of numbers) total += number;
//     return total / numbers.length;
//   };

//   console.log(average(1, 53, 85, 69, 2, 100));

// создать объект каталог у которого были бы следующие возможности
//     добавить, удалить, создать, изменить, вернуть количество, фильтрация по типу.

// const catalog = {
//   list: [],

//   add: () => {},
//   remove: () => {},
//   create: (name, type, quantity) => {},
//   change: () => {},
//   filterType: () => {},
//   count: () => {},
// };

const catalog = {
    list: [],
  
    add: function (product) {
      this.list.push(product);
    },
    remove: function (id) {
      for (let i = 0; i < this.list.length; i++)
        if (product.id === id) this.list.splice(i, 1);
    },
    create: function (name, type, quantity) {
      return { id: this.list.length + 1, name, type, quantity };
    },
    change: function (id, props) {
      let index;
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id === id) {
          index = i;
          break;
        }
      }
      for (let key in props) this.list[index][key] = props[key];
    },
  
    filterType: function (type) {
      let response = [];
      for (let product of this.list)
        if (product.type === type) response.push(product);
      return response;
    },
  