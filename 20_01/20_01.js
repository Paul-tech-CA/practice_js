// 1) Красная кнопка

// 1. просит не нажимать
// 2. начинает двигаться (нужно попасть)
// 3. станоывится прозрачной в рандомном месте(нужно найти по cursor pointer)
// 4. становиться много кнопок (нужно найти ту самую)
// 5. появляется инпут куда нужно ввести число пи
// 6. Финал. При наведении убегает в рандомное место на экране

// const refs = {
//   button: document.querySelector('.red-button'),
// };
// let x = Math.round(Math.random()*700);
// let y = Math.round(Math.random()*300);
// const randomCoord = (n) => Math.round((Math.random()-0.5)*n);

// const turns = {
//   dontPress() {
//     document.body.insertAdjacentHTML(
//       'afterbegin',
//       '<p class="text-message">Do not press me!!!</p>',
//     );
//   },
//   moveBut() {
//     document.querySelector('.text-message').remove();
//     refs.button.classList.remove('pressed');
//     refs.button.classList.add('animated-button');
//   },
//   randomTransparent() {
//     refs.button.classList.remove('animated-button');
//     refs.button.classList.remove('pressed');
//     // refs.button.style.opacity='0';
//     refs.button.style.transform = `translate(${x}px, ${y}px)`;
//   },
//   cloneButtons(){
//     refs.button.style.opacity='1';
//     refs.button.classList.remove('pressed');
//     for (let i = 0; i < 10; i++){
//       let x = Math.round((Math.random()-0.5)*900);
//       let y = Math.round((Math.random()-0.5)*700);
//       const fakeBtn = document.createElement('div');
//       fakeBtn.classList.add('fake-button');
//       document.body.append(fakeBtn);
//       fakeBtn.style.transform = `translate(${x}px, ${y}px)`;

//     }
//     refs.button.style.transform = `translate(${x-250}px, ${y-250}px)`
//   },
//   inputCreater(){
//     refs.button.classList.remove('pressed');
//     const fakeArr = [...document.body.querySelector('fake-button')];
//     console.log(fakeArr);
//     fakeArr.forEach(elem => {
//       elem.remove();
//     });
//     document.body.insertAdjacentHTML('afterbegin', '<form><label>Insert number Pi<input type="text" name="Pi"></label></form>');
//     document.querySelector('form').addEventListener('submit', (event) => {
//       event.preventDefault();
//       let input = event.target.querySelector('input')
//       const pi = 3.14;
//       if(+input.value === pi) {
//         alert('Gool job!!')
//       }else{
//         alert('Try again!!')
//       }
//     });
//   },
//   final(){
//     refs.button.classList.remove('pressed');
//     refs.button.addEventListener('mouseover', event => {
//       refs.button.style.transform = `translate(${randomCoord(300)}px, ${randomCoord(350)}px)`
//     });
//   }
// };
// let counterValue = 0;
// function pressButton(event) {
//   event.target.classList.add('pressed');
//   counterValue += 1;
//   controlButton();
// }
// function relButton(event) {
//   event.target.classList.remove('pressed');
// }
// function controlButton() {
//   switch (counterValue) {
//     case 1:
//       turns.dontPress();
//       break;
//     case 2:
//       turns.moveBut();
//       break;
//     case 3:
//       turns.randomTransparent();
//       break;
//     case 4:
//       turns.cloneButtons();
//       break;
//     case 5:
//       turns.inputCreater();
//       break;
//     case 6:
//       turns.final();
//       break;
//   }
// }
// refs.button.addEventListener('mousedown', pressButton);
// refs.button.addEventListener('mouseup', relButton);

// calculator

// const refs = {
//   calc: document.querySelector('.calculator'),
//   screen: document.querySelector('.output'),
// };
// let isOperator = false;

// refs.calc.addEventListener('click', event => {
//   const target = event.target;

//   if (target.nodeName === 'BUTTON') {
//     target.className === 'operator'
//       ? (isOperator = true)
//       : (isOperator = false);
//     if (target.className === 'number') {
//       refs.screen.textContent += target.textContent;
//     } else if (
//       target.className === 'operator' &&
//       (target.textContent === '+' ||
//         target.textContent === '-' ||
//         target.textContent === '*' ||
//         target.textContent === '/' ||
//         target.textContent === '.')
//     ) {
//       isOperator
//         ? alert('Wrong operator')
//         : (refs.screen.textContent += target.textContent);
//     }
//   }
//   if (target.textContent === 'C') {
//     refs.screen.textContent = '';
//   }
//   if (target.textContent === '<') {
//     let output = refs.screen.textContent;
//     let splitStr = output.split('');
//     splitStr.pop();
//     splitStr = splitStr.join('');
//     refs.screen.textContent = splitStr;
//   }
// });
