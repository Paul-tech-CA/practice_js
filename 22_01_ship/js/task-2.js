// const target = document.querySelector('#target');

// const randomFn = (max, min = 0) => {
//     return Math.round(Math.random() * (max - min) + min );
// }
//  const option = {
//     root: null,
//     rootMargin: '0px 0px 0px 0px',
//     threshold: 1.0
//  };

// const obs = new IntersectionObserver((e,o) => {
//     console.log(o);
//     e.forEach(entry => {
//         if (!entry.isIntersecting) {
//             const span = entry.target.querySelector('span');
//             span.textContent = parseInt(span.textContent) + 1;
            
//             entry.target.style.backgroundColor = `rgb(${randomFn(256)}, ${randomFn(256)}, ${randomFn(256)})`;
//         }
//     });
// }, option);

// obs.observe(target);



const ship = document.querySelector('.ship');
const sBox = document.querySelector('#shadow-box')
ship.style.left = sBox.offsetLeft*(-1) + 'px';

const moveShip = _.throttle((move = 1, setp = 3) => {
    ship.style.left = parseInt(ship.style.left) + (move * setp);
    const seaW = document.querySelector('#sea').offsetWidth;

    if (parseInt(ship.style.left) >= ((seaW - sBox.offsetLeft) - ship.offsetWidth) || parseInt(ship.style.left) <= (sBox.offsetLeft*(-1)))
        moveShip(move*(-1), setp);
    else moveShip(move, setp)
}, 20);

const option = {
    root: ship.parentNode,
    rootMargin: '0px -40px 0px -40px'
};
const obs = new IntersectionObserver(e => {
    e.forEach(entry => {
        entry.target.classList.toggle('hide');
    });
}, option);

obs.observe(ship);

moveShip();