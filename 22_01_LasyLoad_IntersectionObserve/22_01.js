import gallery from './data.js';
const divRef = document.querySelector('.container');
const imgRef = document.querySelectorAll('.img');

const options = {
  rootMargin: '100px',
  threshold: 0.5,
  root: divRef,
};

const onEntry = entries => {
  imgRef.forEach((elem, i) => {
    elem.dataset.url = gallery[i].src;
  });
  entries.forEach(element => {
    element.isIntersecting
      ? (element.target.src = element.target.dataset.url)
      : '';
  });
};

const observer = new IntersectionObserver(onEntry, options);

imgRef.forEach(elem => {
  observer.observe(elem);
});
