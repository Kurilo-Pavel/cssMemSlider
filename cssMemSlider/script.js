"use strict"
import {data} from './data.js';

const body = document.querySelector('body');

function createField(tagName, className, parentName) {
  const parent = document.querySelector(parentName)
  const controlsField = document.createElement(tagName);
  controlsField.setAttribute('class', className);
  parent.appendChild(controlsField);
}

createField('div', 'field', 'body');
createField('div', 'fieldImg', '.field');
createField('div', 'phrase', '.field');
createField('div', 'controls', '.field');

for (let i = 0; i < data.length; i++) {
  createField('img', 'img', '.fieldImg');
  createField('blockquote', 'text', '.phrase');
  createField('span', 'controlsField' + i, '.controls');
  createField('div', 'circle', '.controlsField' + i);
}

function addData() {
  const image = document.querySelectorAll('.img');
  const text = document.querySelectorAll('.text');
  const circle = document.querySelectorAll('span');
  for (let i = 0; i < data.length; i++) {
    image[i].setAttribute('src', data[i][1]);
    text[i].innerHTML = data[i][0];
    circle[i].setAttribute('value', i);
  }
}

function start(e) {
  let image = document.querySelectorAll('img');
  image.forEach(img => {
    if (img.className === 'animationStart') {
      img.className = 'animationEnd'
    }
  })
  image[e.target.getAttribute('value')].setAttribute('class', 'animationStart');

}

addData(0);
const circle = document.querySelectorAll('span');
circle.forEach(element => element.addEventListener('mouseover', changeBackground));
circle.forEach(element => element.addEventListener('click', start));
circle.forEach(element => element.addEventListener('mouseout', changeBackground));

function changeBackground(e) {
  if (e.target.children[0].style.background === 'dodgerblue') {
    e.target.children[0].style.background = '';
  } else {
    e.target.children[0].style.background = 'dodgerblue';
  }
}

//
// let i = 0
// function slider() {
//   if (i === data.length) {
//     i = 0
//     addData(i)
//   } else {
//     addData(i)
//     i += 1
//   }
// }
//
// setInterval(slider, 2000);