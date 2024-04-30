'use strict';

const inputText = document.querySelector('.text-copy');
const btnCopy = document.querySelector('.btn-copy');

////////////////////////////////

const copyInputText = () => {
    if (!inputText.value) return;

    const text = inputText.value;
    inputText.select();
    navigator.clipboard.writeText(text);

    // Change Button Style 
    btnCopy.innerText = 'Copied!';
    btnCopy.style.backgroundColor = '#8be98b';

    setTimeout(()=> {

        // Return It Back
        btnCopy.innerText = 'Copy';
        btnCopy.style.backgroundColor = '#67cc67';
    }, 2000);

};


btnCopy.addEventListener('click', copyInputText);
inputText.addEventListener('keydown', (e) =>{
    if (e.code === 'Enter') copyInputText();
});

