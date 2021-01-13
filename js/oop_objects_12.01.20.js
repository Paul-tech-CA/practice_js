//=================== callbacks =====================
let a = 'world';
let b = 'earth';
function test(callback, callback2, x, y) {
  if (!true) {
    callback(x);
  } else {
    callback2(y);
  }
}
const cb = function (item) {
  console.log('hello ' + item + ' !!!');
};
const cb2 = function (iteM) {
  console.log('hello ' + iteM + ' ???');
};
test(cb, cb2, a, b);

//==========================

// const ask = (question, yes, no) => (confirm(question) ? yes() : no());

// ask(
//   'Вы согласны?',
//   () => {
//     alert('Вы согласились.');
//   },

//   () => {
//     alert('Вы отменили выполнение.');
//   },
// );

//========================

// const counter = function () {
//   let n = 0;
//   const increment = q => {
//     n += q;
//   };
//   const show = function () {
//     console.log(n);
//   };
//   return { increment, show };
// };
// let A = counter();
// A.increment(10);
// A.increment(100);
// A.show();

/*
const Hero = function (name, HP, MP) {
    this.name = name;
    this.HP = HP;
    this.MP = MP;
    this.baseHP = this.HP;
    this.baseMP = this.MP;
    this.exp = 0;
    this.level = 1;
​
    this.attack = function () {
        if (this.simpleHit.manaCost > this.MP) return; 
​
        this.MP -= this.simpleHit.manaCost;
        this.exp += 50; 
        return this.simpleHit.dmg; 
    };
​
    this.setDmg = function (dmg) {
        if (this.HP - dmg > this.baseHP) this.HP = this.baseHP;
        else this.HP -= dmg;
​
        if (this.HP < 0)
            this.rip();
    }; 
​
    this.rip = function () {
        this.HP = this.baseHP;
        this.MP = this.baseMP;
        this.exp /= 2;
    };
​
};
​
const Hit = function(dmg, manaCost) {
    this.dmg = dmg;
    this.manaCost = manaCost;
};
​
const Elf = function (name) {
    Hero.call(this, name, 1000, 3000);
​
    this.simpleHit = new Hit(200, 100);
};
​
const Orc = function(name) {
    Hero.call(this, name, 3000, 1000);
​
    this.simpleHit = new Hit(250, 100);
};
​
const Human = function (name) {
    Hero.call(this, name, 2000, 2000);
​
    this.simpleHit = new Hit(220, 150);
​
    this.attack = function () {
        this.MP -= this.simpleHit.manaCost;
        this.exp += 50; 
        return this.simpleHit.dmg * (-1); 
    }
​
}; 
​
const orc = new Orc('Bill');
const elf = new Elf('Sem');
const human = new Human('Michle');
​
elf.setDmg(orc.attack());
elf.setDmg(human.attack());
​
human.setDmg(orc.attack());
human.setDmg(human.attack());
human.setDmg(human.attack());
​
console.log(elf);
console.log(orc);
console.log(human);*\




//========================================
//? Elections
// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
//  статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

//=====================================


/*  
Напиши функцию-конструкор User для создания 
пользователя со следующим свойствами:
- name - строка (имя)
- age - число (возраст)
- friends - число (кол-во друзей)
Имя, возраст и друзей, 
будут переданы при вызове конструктора User.
Добавь метод getInfo(), который, выводит строку:
`User ${имя} is ${возраст} years old and has ${кол-во друзей} friends`
*/

// const electionsResult = {};
// const votedResult = {};
// const candidate = {
//   trump: 'Trump',
//   baiden: 'Baiden',
// };
// const Voter = function (name) {
//   this.name = name;
//   this.vote = function (choice) {
//     if (electionsResult[this.name]) {
//       return;
//     } else {
//       electionsResult[this.name] = choice;
//     }
//   };
// };
// const A = new Voter('Vova');
// const B = new Voter('Petya');
// const C = new Voter('Vasia');
// const D = new Voter('Roma');
// const F = new Voter('qwerty');
// const G = new Voter('zxcvbn');
// A.vote(candidate.baiden);
// B.vote(candidate.trump);
// C.vote(candidate.baiden);
// D.vote(candidate.trump);
// F.vote(candidate.baiden);
// G.vote(candidate.baiden);
// //формирует список уникальных кандидатов votedResult
// const countResults = function (electionsResult, votedResult) {
//   for (let key in electionsResult) {
//     votedResult[electionsResult[key]] = 0;
//   }
//   for (let vote in electionsResult) {
//     votedResult[electionsResult[vote]] += 1;
//     console.table('vote ', electionsResult[vote]);
//   }
//   console.log(votedResult);
// };
// countResults(electionsResult, votedResult);

// ============== то же самое, только через массивы ======
// let obj = {
//   a: 'A',
//   b: 'A',
//   c: 'B',
//   d: 'C'
// }
// let res = Object.values(obj);
// console.log(res);
// const candidates ={};
// for(let i= 0; i<res.length; i++) {
//   if(i === res.indexOf(res[i])) {
//     // candidates.push(res[i]);
// candidates[res[i]] = 0;
//   }
// }

// for(let i = 0; i<res.length; i++) {
//   for(let key in candidates) {
//     res[i] == key ? candidates[key]+=1 : '';

//   }

// }
// for(let key in candidates) {
// candidates[key] === Math.max(...Object.values(candidates)) ? console.log(`The winer is ${key}!`) : '';
// }
