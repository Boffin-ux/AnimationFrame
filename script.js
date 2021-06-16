'use strict';

const start = document.querySelector('.start'),
   reset = document.querySelector('.reset'),
   boat = document.querySelector('.boat');

let swimInterval,
   animate = false,
   count = 0;
console.log('count: ', count);

const swimAnimate = () => {
   swimInterval = requestAnimationFrame(swimAnimate);
   count++;
   if (count < 890) {
      boat.style.left = `${count}px`;
   } else {
      cancelAnimationFrame(swimInterval);
   }
};

start.addEventListener('click', function () {
   if (!animate) {
      swimInterval = requestAnimationFrame(swimAnimate);
      animate = true;
   } else {
      animate = false;
      cancelAnimationFrame(swimInterval);
   }
});
reset.addEventListener('click', function () {
   cancelAnimationFrame(swimInterval);
   animate = false;
   count = 0;
   boat.style.left = `${count}px`;
});

