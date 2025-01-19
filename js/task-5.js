'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn  = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');


btn.addEventListener('click', event => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});