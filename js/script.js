'use strict';

function greetUser(name) {
    return `Привіт, ${name}!`;
}

const name = prompt("Введіть ваше ім'я:");


console.log(greetUser(name));