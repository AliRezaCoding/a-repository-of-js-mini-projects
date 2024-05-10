"use strict";

const container = document.querySelector(".container");
const psEl = document.querySelector(".ps");
const xboxEl = document.querySelector(".xbox");
//////////////////////////////

psEl.addEventListener("mouseenter", () => container.classList.add("hover-ps"));
psEl.addEventListener("mouseout", () => container.classList.remove("hover-ps"));

xboxEl.addEventListener('mouseenter', () => container.classList.add('hover-xbox'));
xboxEl.addEventListener('mouseout', () => container.classList.remove('hover-xbox'));


