const hoverBox = document.querySelector('.hover-box');

hoverBox.addEventListener('mousemove', (e)=>{
    const x = e.offsetX - hoverBox.offsetWidth / 2;
    const y = e.offsetY - hoverBox.offsetHeight / 2;
    
    hoverBox.style.setProperty('--x', `${x}px`);
    hoverBox.style.setProperty('--y', `${y}px`);
});