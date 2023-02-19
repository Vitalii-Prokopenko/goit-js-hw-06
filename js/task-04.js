const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

const handleClick = (event) => {
  if (event.currentTarget === btnDecrement) {
    counterValue -= 1;
  } else if (event.currentTarget === btnIncrement) {
    counterValue += 1;
  }
  counter.textContent = counterValue;
};

btnDecrement.addEventListener("click", handleClick);
btnIncrement.addEventListener("click", handleClick);
