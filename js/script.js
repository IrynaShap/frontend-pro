// Ask for the user's name (string)
const userName = prompt("Введіть ваше ім'я:");

// Ask for the user's age and convert it to a number
const userAge = Number(prompt("Введіть ваш вік:"));

// Ask for user consent (boolean)
const isConfirmed = confirm("Ви погоджуєтесь брати участь?");

// Create userId as a BigInt
const userId = 12345678901234567890n;

// Create bonusCode with null value
let bonusCode = null;

// Create secondName as undefined
let secondName;

// Prepare participation status
const status = isConfirmed ? "участь підтверджено" : "відмовлено";

// Show alert with the results
alert(`Привіт, ${userName}!
Твій вік: ${userAge}
Твій статус: ${status}`);

// Log all variables with their types to the console
console.log("Ім'я:", userName, typeof userName);
console.log("Вік:", userAge, typeof userAge);
console.log("Статус участі:", isConfirmed, typeof isConfirmed);
console.log("Id користувача:", userId, typeof userId);
console.log("Бонусний код:", bonusCode, typeof bonusCode);
console.log("Прізвище:", secondName, typeof secondName);

// Display the username in the HTML element with id "username"
document.getElementById("username").textContent = userName;