// Вибираємо елемент ul#categories
const categoriesList = document.querySelector("#categories");

// Знаходимо всі елементи li.item в списку
const categoryItems = categoriesList.querySelectorAll(".item");

// Виводимо кількість категорій в консоль
console.log("Number of categories:", categoryItems.length);

// Для кожної категорії виводимо текст заголовку і кількість елементів в категорії
categoryItems.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("li").length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements}`);
});