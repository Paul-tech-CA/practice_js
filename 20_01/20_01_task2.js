const refs = {
  calc: document.querySelector('.calculator'),
  output: document.querySelector('.output'),
  number: document.querySelector('.number'),
};
let isOperator = false;
refs.calc.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    if (event.target.className === 'number') {
      refs.output.textContent += event.target.textContent;
    } else if (
      event.target.className === 'operator' &&
      (event.target.textContent === '+' ||
        event.target.textContent === '-' ||
        event.target.textContent === '*' ||
        event.target.textContent === '/')
    ) {
      isOperator
        ? alert('Оператор уже выбран!')
        : (refs.output.textContent += event.target.textContent);
    }
    event.target.className === 'operator'
      ? (isOperator = true)
      : (isOperator = false);
  }
  if (event.target.textContent === 'C') {
    refs.output.textContent = '';
  }
  if (event.target.textContent === '<') {
    let output = refs.output.textContent;
    let splitStr = output.split('');
    splitStr.pop();
    splitStr = splitStr.join('');
    refs.output.textContent = splitStr;
  }
  // if (
  //   (event.target.textContent === 'number' && (
  //     event.target.textContent === '*') ||
  //   event.target.textContent === '/' ||
  //   event.target.textContent === '-' ||
  //   event.target.textContent === '+'
  // )) {
  //   refs.output.textContent = '';
  // }
  //   console.log(typeOf(refs.output.textContent));
});
