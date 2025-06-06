"use strict";
const firstNumber = Number(prompt("Введіть перше число:"));
const secondNumber = Number(prompt("Введіть друге число:"));
const thirdNumber = Number(prompt("Введіть третє число:"));

if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
    alert("Будь ласка, введіть коректні числа.");
} else {
    const average = (firstNumber + secondNumber + thirdNumber) / 3;
    alert(`Середнє арифметичне трьох чисел: ${average}`);
}
