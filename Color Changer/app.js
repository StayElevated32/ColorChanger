const colorButton = document.querySelector('.color-button');
const bodyBackground = document.querySelector('body');

const colors = ['blue', 'indigo', 'yellow', 'orange', 'green', '#c5b977'];

function changeColor(){
    let random = Math.floor(Math.random() * colors.length);
    bodyBackground.style.backgroundColor = colors[random];
}

colorButton.addEventListener('click', changeColor);