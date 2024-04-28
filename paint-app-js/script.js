'use strict';

const canvas = document.querySelector('.draw-area');
const ctx = canvas.getContext('2d');
const inputBrashWidth = document.querySelector('#brush-width');
const inputBrashColor = document.querySelector('#color-picker');
const brush = document.querySelector('.brush');
const eraser = document.querySelector('.eraser');
const btnClear = document.querySelector('.clear');
const btnSave = document.querySelector('.save');
////////////////////////////////

let isDrawing = false;
let currentWidth = inputBrashWidth.value;
let currentColor = inputBrashColor.value;

window.addEventListener('load', () =>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const startDraw = function () {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = currentWidth;
}

const drawing = function (e) {
    if (!isDrawing) return;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.strokeStyle = `${currentColor}`;
};


canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousemove', drawing);

////////////
inputBrashWidth.addEventListener('change', () => currentWidth = inputBrashWidth.value); 
inputBrashColor.addEventListener('change', () => {
    if (eraser.classList.contains('active')) return;
        currentColor = inputBrashColor.value;
});

eraser.addEventListener('click', () =>{
    eraser.classList.add('active');
    brush.classList.remove('active');
    currentColor = '#fff';
});

brush.addEventListener('click', () => {
    eraser.classList.remove('active');
    brush.classList.add('active');
    currentColor = inputBrashColor.value;
});


btnClear.addEventListener('click', () => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

btnSave.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = `${Date.now()}.jpg`;
    link.href = canvas.toDataURL();
    link.click();
});