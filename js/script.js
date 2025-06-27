'use strict';

function testVarLetConst() {
  // Цикл for виконається один раз
  for (let i = 0; i < 1; i++) {

    // Змінна, оголошена через var — має функціональну область видимості.
    // Вона буде доступна навіть ПОЗА циклом у межах цієї функції.
    var varVariable = "Я оголошена через var";

    // Змінна, оголошена через let — має блочну область видимості.
    // Доступна тільки в межах блоку, в якому оголошена, може бути переназначена.
    let letVariable = "Я оголошена через let";

    // Змінна, оголошена через const — має блочну область видимості.
    // Доступна тільки в межах блоку, і не може бути переназначена.
    const constVariable = "Я оголошена через const";

    // Виводимо всі три змінні всередині циклу
    console.log("Всередині циклу:");
    console.log("varVariable:", varVariable);       // Працює
    console.log("letVariable:", letVariable);       // Працює
    console.log("constVariable:", constVariable);   // Працює
  }

  // Виводимо значення після завершення циклу
  console.log("\n Поза циклом:");

  // Змінна var зберігає значення, бо має функціональну область видимості.
  console.log("varVariable:", varVariable);         // Працює

  // letVariable була оголошена всередині блоку, тому зараз НЕ ІСНУЄ.
  // Призведе до помилки ReferenceError.
  // Обгортаємо виклики в try...catch, щоб не зупинити програму.

  try {
    console.log("letVariable:", letVariable);       // ReferenceError
  } catch (error) {
    console.log("letVariable: Помилка -", error.message);
  }

  // constVariable так само недоступна поза блоком for.
  try {
    console.log("constVariable:", constVariable);   // ReferenceError
  } catch (error) {
    console.log("constVariable: Помилка -", error.message);
  }
}

// Функція для демонстрації
testVarLetConst();
