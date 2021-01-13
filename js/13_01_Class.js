// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
//  который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
//   который параметром принимает строку, а возвращает эту же строку,
//    сделав ее первую букву заглавной и метод ucWords,
//     который принимает строку и делает заглавной первую букву каждого слова этой строки.

// Наш класс должен работать так:

// const str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

/*
class MyString {
  reverse(str) {
    console.log(str.split('').reverse().join(''));
  }
  upFirst(str) {
    console.log(str[0].toUpperCase() + str.slice(1));
  }
  ucWords(str) {
    let results = [];
    const strArr = str.split(' ');
    for (let word of strArr) {
      results.push(word[0].toUpperCase() + word.slice(1));
    }
    console.log(results.join(' '));
  }
}

const a = new MyString();
console.log(a);
a.reverse('abcd');
a.upFirst('all friends');
a.ucWords('all friends Are the best');
*/

//==============================================================
// Реализуйте класс Validator, который будет проверять строки. К примеру,
//  у него будет метод isEmail параметром принимает строку и проверяет,
//   является ли она корректным емейлом или нет. Если является - возвращает true,
//    если не является - то false. Кроме того, класс будет иметь следующие методы:
//     метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:

// var validator = new Validator();

// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

/*
class Validator {
    isEmail(str) {
      str.includes("@") && str.includes(".")
        ? console.log(true)
        : console.log(false);
    }
  
    isDomain(str) {
      str.includes(".net") || str.includes(".com")
        ? console.log(true)
        : console.log(false);
    }
  
    isDate(date) {
      let arr = date.split(".");
      for (const item of arr) {
        if (!+item) {
          return false;
        }
      }
      if (
        arr.length === 3 &&
        arr[0].length === 2 &&
        arr[1].length === 2 &&
        arr[2].length === 4
      ) {
        return true;
      } else {
        return false;
      }
    }
  
    isPhone(phone) {
      console.log(phone);
      return phone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);
    }
  }
  
  const validator = new Validator();
  validator.isEmail("adfadfa@sdfd.fdsf");
  validator.isDomain("gous.ru");
  console.log(validator.isDate("12.05.2020"));
  console.log(validator.isPhone("+22 2222 2222"));
  */

//   Сеть фастфудов предлагает несколько видов гамбургеров.
//   Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
// 	- маленькая (+30 денег, +50 калорий)
// 	- большая (+50 денег, +100 калорий)
//   Гамбургер может быть с одной из нескольких видов начинок (обязательно):
// 	- сыром (+15 денег, +20 калорий)
// 	- салатом (+20 денег, +5 калорий)
// 	- мясом (+35 денег, +15 калорий)
//   Дополнительно, гамбургер можно:
// 	- посыпать приправой (+10 денег, +0 калорий)
// 	- полить соусом (+15 денег, +5 калорий)
// Напишите скрипт, расчитывающий стоимость и калорийность гамбургера.

/* 
const MENU = {
  sizes: {
    small: {
      name: 'small',
      price: 30,
      calories: 50,
    },
    big: {
      name: 'big',
      price: 50,
      calories: 100,
    },
  },

  fillings: {
    cheese: {
      name: 'cheese',
      price: 15,
      calories: 20,
    },
    salad: {
      name: 'salad',
      price: 20,
      calories: 5,
    },
    meat: {
      name: 'meat',
      price: 35,
      calories: 15,
    },
  },

  addings: {
    herbs: {
      name: 'herbs',
      price: 10,
      calories: 0,
    },
    sauce: {
      name: 'sauce',
      price: 15,
      calories: 5,
    },
  },
};

class Hamburger {
  constructor(sizes, fillings, addings) {
    this.sizes = sizes;
    this.fillings = fillings;
    this.addings = addings;
  }
  
//     getPrice() {
//       let result = 0;
//       for (let key in this) {
//         result += this[key].price;
//       }
//       this.price = result;
//       console.log(this.price);
//     }
  
//     getCalories() {
//       let result = 0;
//       for (let key in this) {
//         this[key].calories ? (resu
//   From Vitaly K to Everyone:  04:28 PM
//   getCalories() {
//       let result = 0;
//       for (let key in this) {
//         this[key].calories ? (result += this[key].calories) : '';
//       }
//       this.calories = result;
//       console.log(result);
    } 

  calculate(str) {
    let result = 0;
    for (let key in this) {
      this[key][str] ? (result += this[key][str]) : '';
    }
    this[str] = result;
    console.log(result);
  }
}

const choice1 = new Hamburger(
  MENU.sizes.small,
  MENU.fillings.cheese,
  MENU.addings.herbs,
);
console.log(choice1);
// choice1.getPrice();
// choice1.getCalories();
choice1.calculate('calories');
*/

//=============================================
// const MENU = {
//   sizes: {
//     small: {
//       name: 'small',
//       price: 30,
//       calories: 50,
//     },
//     big: {
//       name: 'big',
//       price: 50,
//       calories: 100,
//     },
//   },

//   fillings: {
//     cheese: {
//       name: 'cheese',
//       price: 15,
//       calories: 20,
//     },
//     salad: {
//       name: 'salad',
//       price: 20,
//       calories: 5,
//     },
//     meat: {
//       name: 'meat',
//       price: 35,
//       calories: 15,
//     },
//   },

//   addings: {
//     herbs: {
//       name: 'herbs',
//       price: 10,
//       calories: 0,
//     },
//     sauce: {
//       name: 'sauce',
//       price: 15,
//       calories: 5,
//     },
//   },
// };

// class Hamburger {
//   constructor(sizes, fillings, addings) {
//     this.sizes = sizes;
//     this.fillings = fillings;
//     this.addings = addings;
//   }
//   /*
//     getPrice() {
//       let result = 0;
//       for (let key in this) {
//         result += this[key].price;
//       }
//       this.price = result;
//       console.log(this.price);
//     }

//     getCalories() {
//       let result = 0;
//       for (let key in this) {
//         this[key].calories ? (resu
//   From Vitaly K to Everyone:  04:28 PM
//   getCalories() {
//       let result = 0;
//       for (let key in this) {
//         this[key].calories ? (result += this[key].calories) : '';
//       }
//       this.calories = result;
//       console.log(result);
//     } */

//   calculate(str) {
//     let result = 0;
//     for (let key in this) {
//       this[key][str] ? (result += this[key][str]) : '';
//     }
//     this[str] = result;
//     console.log(result);
//   }
// }

// const choice1 = new Hamburger(
//   MENU.sizes.small,
//   MENU.fillings.cheese,
//   MENU.addings.herbs,
// );
// console.log(choice1);
// // choice1.getPrice();
// // choice1.getCalories();
// choice1.calculate('calories');

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значаение которого укажем 0.
const likes = tweets.reduce(
  (totalLikes, tweet) => (totalLikes += tweet.likes),
  0,
);

console.log(likes); // 32

// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
const countLikes = tweets =>
  tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(countLikes(tweets)); // 32

// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.

const tagsAll = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);
  return allTags;
}, []);

console.log(tagsAll);

const users = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];

const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

console.log(users.sort(sortByActiveDays));
