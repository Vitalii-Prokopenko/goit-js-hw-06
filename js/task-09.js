function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

const handleClick = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = body.style.backgroundColor;
};

changeColorBtn.addEventListener('click', handleClick);

