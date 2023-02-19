const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// FIRST SOLUTION
// const ingredientsList = document.querySelector("#ingredients");

// ingredients.forEach((ingredient) => {
//   let ingredientsItem = document.createElement("li");
//   ingredientsItem.textContent = ingredient;
//   ingredientsItem.classList.add("item");
//   ingredientsList.append(ingredientsItem);
//   console.log(ingredientsItem);
// });

// SECOND SOLUTION
// const ingredientsList = document.querySelector("#ingredients");
// let newIngredients = [];

// ingredients.forEach((ingredient) => {
//   let ingredientItem = document.createElement("li");
//   ingredientItem.tag = 'li';
//   ingredientItem.textContent = ingredient;
//   ingredientItem.class = 'item';
//   newIngredients.push(ingredientItem);
// });

// const markup = newIngredients.map((ingredient) => `<${ingredient.tag} class="${ingredient.class}">${ingredient.textContent}</${ingredient.tag}>`).join("");

// ingredientsList.insertAdjacentHTML("afterbegin", markup);

// THIRD SOLUTION
const ingredientsList = document.querySelector("#ingredients");
let markup = "";

ingredients.forEach((ingredient) => {
  let ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");
  console.log(ingredientsItem);
  
  markup += `<${ingredientsItem.localName} class="${ingredientsItem.className}">${ingredientsItem.innerText}</${ingredientsItem.localName}>`;
});
ingredientsList.insertAdjacentHTML("afterbegin", markup);
