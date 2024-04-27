'use strict';

const   container = document.querySelector('.container');
//////////////////////////////

// Just For Fun
const colors = [
    createRandomColor(),
    createRandomColor(),
    createRandomColor(),
    createRandomColor(),
    createRandomColor(),
    createRandomColor(),
];
const suqaresAmount = 499;



for (let i = 0 ; i <= suqaresAmount ; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    container.appendChild(square);
};

function createRandomColor () {
    return `rgb(${Math.trunc((Math.random() * 255) + 1)},${Math.trunc((Math.random() * 255) + 1)},${Math.trunc((Math.random() * 255) + 1)})`;
};
function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)];
};

const setColor = function (e) {
    if (e.target.classList.contains('square')) {
        const color = getRandomColor();

        e.target.style.backgroundColor = color;
        e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }
};

const removeColor = function (e){
    if (e.target.classList.contains('square')) {

        e.target.style.backgroundColor = '#201f1f';
        e.target.style.boxShadow = '0 0 2px #000';

    }
};

container.addEventListener('mouseover', setColor);
container.addEventListener('mouseout', removeColor);