'use strict';

function arithmeticMean(array) {
    let count = 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            count++;
            sum += array[i];
        }
    }
    return count > 0 ? sum / count : null;
}

const array = ['f', 1, 'b', 2, 3, 'n', 4, 5];

console.log(arithmeticMean(array));
console.log('--------------------');

function doMath(x, znak, y) {
    x = Number(x);
    y = Number(y);

    if (isNaN(x) || isNaN(y)) {
        return 'Помилка: введено нечислові значення';
    }

    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return y !== 0 ? x / y : 'Помилка: ділення на нуль';
        case '%':
            return y !== 0 ? x % y : 'Помилка: ділення на нуль';
        case '^':
            return Math.pow(x, y);
        default:
            return 'Помилка: невідомий оператор';
    }
}

const x = prompt("Введіть перше число:");
const znak = prompt("Введіть оператор (+, -, *, /, %, ^):");
const y = prompt("Введіть друге число:");

console.log(doMath(x, znak, y));
console.log('--------------------');

function create2DArray() {
    const outerLength = parseInt(prompt("Введіть кількість рядків (основний масив):"), 10);
    const innerLength = parseInt(prompt("Введіть кількість стовпців (внутрішні масиви):"), 10);

    const array = [];

    for (let i = 0; i < outerLength; i++) {
        const innerArray = [];
        for (let j = 0; j < innerLength; j++) {
            const value = prompt(`Введіть значення для елемента [${i}][${j}]:`);
            innerArray.push(value);
        }
        array.push(innerArray);
    }

    return array;
}

const userArray = create2DArray();
console.log(userArray);

function removeChars(str, chars) {
    if (typeof str !== 'string') {
        return 'Помилка: Перший аргумент має бути рядком';
    }
    if (!Array.isArray(chars)) {
        return 'Помилка: Другий аргумент має бути масивом символів';
    }

    let result = [];
    let array = Array.from(str);

    for (let i = 0; i < array.length; i++) {
        let found = false;
        for (let j = 0; j < chars.length; j++) {
            if (array[i] === chars[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(array[i]);
        }
    }
    return result.join('');
}

const str = prompt("Введіть рядок:");
if (typeof str !== 'string' || str.length === 0) {
    console.log('Помилка: Ви не ввели рядок');
} else {
    const charsInput = prompt("Введіть символи для видалення (без пробілів):");
    if (typeof charsInput !== 'string') {
        console.log('Помилка: Ви не ввели символи для видалення');
    } else {
        const chars = Array.from(charsInput);
        console.log(removeChars(str, chars));
    }
}
