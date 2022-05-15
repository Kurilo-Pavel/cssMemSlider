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
  for (let i = data.length-1; i >=0 ; i--) {
    image[i].setAttribute('src', data[i][1]);
    text[i].innerHTML = data[i][0];
    circle[i].setAttribute('value', i);
    circle[i].children[0].style.background = 'dodgerblue';
  }
}

function start(e) {
  const fieldCircle = e.target.closest('span');
  if (fieldCircle) {
    fieldCircle.children[0].style.background = 'none';
    const circle = document.querySelectorAll('.circle');
    circle.forEach(point => {
      point.style.background = point === fieldCircle.children[0] ? 'none' : 'dodgerblue';
    });

    const image = document.querySelectorAll('img');
    image.forEach(img => {
      if (img.className === 'startAnimationSlider') {
        img.className = 'endAnimationSlider';
      }
    })
    image[fieldCircle.getAttribute('value')].setAttribute('class', 'startAnimationSlider');

    const text = document.querySelectorAll('blockquote');
    text.forEach(phrase => {
      phrase.className = phrase.className === 'startAnimationText' ? 'endAnimationText' : null
    })
    text[fieldCircle.getAttribute('value')].setAttribute('class', 'startAnimationText')
  }
}

addData(0);
const circle = document.querySelectorAll('span');
circle.forEach(element => element.addEventListener('mouseover', overBackground));
circle.forEach(element => element.addEventListener('click', start));
circle.forEach(element => element.addEventListener('mouseout', outBackground));


function overBackground(e) {
  const hoverCircle = e.target.closest('span');
  if (hoverCircle) {
    hoverCircle.children[0].style.border = '3px solid white';
    console.log(hoverCircle.children[0].style.background )
    if (hoverCircle.children[0].style.background === 'dodgerblue') {
      hoverCircle.children[0].style.background = 'white'
    }
  }
}

function outBackground(e) {
  const hoverCircle = e.target.closest('span');
  if (hoverCircle) {
    hoverCircle.children[0].style.border = '3px solid dodgerblue';
    if (hoverCircle.children[0].style.background === 'white') {
      hoverCircle.children[0].style.background = 'dodgerblue'
    }
  }
}

function first(i){
  const circle = document.querySelectorAll('.circle');
  circle[i].style.background = 'none';
  const img = document.querySelectorAll('img');
  img[i].setAttribute('class', 'startAnimationSlider');
  const text = document.querySelectorAll('blockquote');
  text[i].setAttribute('class', 'startAnimationText');
}
first(0);

//
// let i = data.length-1
// function slider() {
//   if (i === -1) {
//     i = data.length-1
//     first(i)
//   } else {
//     first(i)
//     i -= 1
//   }
// }
//
// setInterval(slider, 2000);