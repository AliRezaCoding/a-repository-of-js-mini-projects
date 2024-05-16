"use strict";

const contextMenu = document.querySelector(".container");
const subMenu = document.querySelector(".share-menu");

///////////////////////////////

document.addEventListener("contextmenu", e => {
    e.preventDefault();

    let x = e.offsetX;
    let y = e.offsetY;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let cmWidth = contextMenu.offsetWidth;
    let cmHeight = contextMenu.offsetHeight;

    x = x > windowWidth - cmWidth ? windowWidth - cmWidth : x;
    y = y > windowHeight - cmHeight ? windowHeight - cmHeight : y;

    let subMenuWidth = subMenu.offsetWidth;

    if (x > windowWidth - cmWidth - subMenuWidth) {
        subMenu.style.left = `-${subMenuWidth}px`;
    } else {
        // Initial Distance From Left
        subMenu.style.left = `${260}px`;
    }

    contextMenu.style.top = `${y}px`;
    contextMenu.style.left = `${x}px`;

    contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => {
    contextMenu.style.visibility = "hidden";
});
