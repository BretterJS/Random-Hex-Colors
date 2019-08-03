const body = document.querySelector('body');
const container = document.querySelector('#container');
const hexColorBtn = document.querySelector('#hexColorBtn');
const hexCode = document.querySelector('#hexCode');
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

hexColorBtn.addEventListener('click', changeColor);

function changeColor() {

    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random()*hexNumbers.length);
        hexColor += hexNumbers[randomNum];
        body.classList.add = 'transitionColor';
        body.style.backgroundColor = hexColor;
    
    }

    setTimeout(() => {

        hexCode.innerHTML = hexColor;

    }, 300);
   
};
