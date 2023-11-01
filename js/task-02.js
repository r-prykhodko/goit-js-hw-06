
const ingredientsList = document.querySelector("#ingredients");


const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];


const fragment = document.createDocumentFragment();


ingredients.forEach((ingredientText) => {

  const ingredientItem = document.createElement("li");


  ingredientItem.textContent = ingredientText;


  ingredientItem.classList.add("item");


  fragment.appendChild(ingredientItem);
});


ingredientsList.appendChild(fragment);