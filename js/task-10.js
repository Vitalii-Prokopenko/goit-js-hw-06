function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let numberOfBoxes = 0;

const handleInput = (event) => {
  numberOfBoxes = event.currentTarget.value;  
};

const createBoxes = (amount) => {
  let boxWidth = 30;
  let boxHeight = 30;
  let markup = "";

  for (let i = 1; i <= amount; i += 1) {
    let box = document.createElement("div");
    let boxColor = getRandomHexColor();   

    markup += `<${box.localName} style="width: ${boxWidth}px; height: ${boxHeight}px; background-color: ${boxColor}"></${box.localName}>`;
    console.log(markup);

    boxWidth += 10;
    boxHeight += 10;
  }
  boxes.insertAdjacentHTML("afterbegin", markup);
};

const handleCreate = (event) => {
  createBoxes(numberOfBoxes);
};

const destroyBoxes = (event) => {
  boxes.innerHTML = "";
};

inputNumber.addEventListener("input", handleInput);
createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", destroyBoxes);
