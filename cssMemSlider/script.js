"use strict"
import {data} from './data.js';

// const body = document.querySelector('body');

function createField(tagName, className, parentName) {
  const parent = document.querySelector(parentName)
  const controlsField = document.createElement(tagName);
  controlsField.setAttribute('class', className);
  parent.appendChild(controlsField);
}

createField('div', 'field', 'body');
createField('div', 'fieldImg', '.field');
createField('img', 'img', '.fieldImg');
createField('div', 'phrase', '.field');
createField('blockquote', 'text', '.phrase');
createField('div', 'controls', '.field');


function addData(number) {
  const img = document.querySelector('.img');
  img.setAttribute('src', data[number][1]);
  const text = document.querySelector('.text');
  text.innerHTML = data[number][0];
}

addData(0);


for (let i = 0; i < data.length; i++) {
  createField('span', 'controlsField' + i, '.controls');
  createField('div', 'circle', '.controlsField' + i);

}

const circle = document.querySelectorAll('span');
circle.forEach(element => element.addEventListener('mouseover', changeBackground))
circle.forEach(element => element.addEventListener('mouseout', changeBackground))

function changeBackground(e) {
  if (e.target.children[0].style.background === 'dodgerblue') {
    e.target.children[0].style.background = ''
  } else {
    e.target.children[0].style.background = 'dodgerblue'
  }
}

let i = 0
function slider() {
  if (i === data.length) {
    i = 0
    addData(i)
  } else {
    addData(i)
    i += 1
  }
}

setInterval(slider, 2000);