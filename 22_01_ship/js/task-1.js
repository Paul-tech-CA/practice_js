const container = document.querySelector('#container');

const ball = document.createElement('div');

ball.classList.add('ball');

let exit = false;

const changeBallPosLeft = _.throttle((move = 1, step = 1) => {
    if (!exit) return false;

    ball.style.left = parseInt(ball.style.left) + (move * step) + 'px';
    
    if ((container.clientWidth - ball.offsetWidth) <= parseInt(ball.style.left) || parseInt(ball.style.left) === 0)
        changeBallPosLeft(move*(-1), step);

    else changeBallPosLeft(move, step);

}, 5);

const changeBallPosBottom = _.throttle((move = 1, step = 1) => {
    if (exit) return false;

    ball.style.bottom = parseInt(ball.style.bottom) + (move * step) + 'px';
    
    if ((container.clientHeight - ball.offsetHeight) <= parseInt(ball.style.bottom) || parseInt(ball.style.bottom) === 0)
        changeBallPosBottom(move*(-1), step);

    else changeBallPosBottom(move, step);
}, 5);

window.addEventListener('scroll', _.debounce(e => {
    exit = !exit;

    ball.style.left = ball.offsetLeft + 'px';
    ball.style.bottom = (container.clientHeight - ball.offsetTop - ball.offsetHeight) + 'px';

    if (exit) changeBallPosLeft();
    else changeBallPosBottom();

}, 500)); 


container.append(ball);



