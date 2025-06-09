'use strict';

// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let numbers = '';
for (let i = 20; i <= 30; i += 0.5) {
    numbers += i + (i < 30 ? ' ' : '');
}

console.log(`Числа від 20 до 30 через пропуск з кроком 0,5: ${numbers}`);

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const dollarToUahRate = 27;
for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} доларів = ${i * dollarToUahRate} гривень`);
}

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const N = 66;
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(`Квадрат числа ${i} не перевищує ${N}: ${i * i}`);
    }
}

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1,
// які не мають інших дільників крім 1 і себе).

const number = 29;
let dividersCount = 0;
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        dividersCount++;
        break;
    }
}

const isPrime = (number > 1 && dividersCount === 0);
console.log(`Число ${number} ${isPrime ? 'є простим' : 'не є простим'}`);

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий
// ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const someNumber = 2187;
let currentNumber = someNumber;

while (currentNumber > 1) {
    currentNumber = currentNumber % 3 === 0 ? currentNumber / 3 : 0;
}

console.log(`Число ${someNumber} ${currentNumber === 1 ? 'можна отримати' : 'не можна отримати'} шляхом зведення числа 3 у деякий ступінь`);
