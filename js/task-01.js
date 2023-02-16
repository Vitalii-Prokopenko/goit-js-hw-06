const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
const categoryNames = document.querySelectorAll(".item h2");

categoryNames.forEach((categoryName) => {
  console.log(`Category: ${categoryName.textContent}`);
  let categoryItems = categoryName.nextElementSibling.querySelectorAll("li");
  console.log(`Elements: ${categoryItems.length}`);
});
