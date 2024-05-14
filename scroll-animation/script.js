"use strict";

const allBoxes = document.querySelectorAll(".box");
///////////////

const checkBoxes = function () {
    const triggerBottom = (window.innerHeight / 5) * 4;

    allBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
};

checkBoxes();

window.addEventListener("scroll", checkBoxes);
