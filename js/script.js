'use strict';

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

let numbers = '';
for (let i = 10; i <= 20; i++) {
    numbers += i + (i < 20 ? ', ' : '');
}

console.log(`Числа від 10 до 20: ${numbers}`);

// 2. Вивести квадрати чисел від 10 до 20.

let squares = '';
for (let i = 10; i <= 20; i++) {
    squares += (i * i) + (i < 20 ? ', ' : '');
}

console.log(`Квадрати чисел від 10 до 20: ${squares}`);

// 3. Вивести таблицю множення на 7.

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 4. Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(`Сума всіх цілих чисел від 1 до 15: ${sum}`);

// 5. Знайти добуток всіх цілих чисел від 15 до 35.

let product = 1n;
for (let i = 15n; i <= 35n; i++) {
    product *= i;
}
console.log(`Добуток всіх цілих чисел від 15 до 35: ${product}`);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let averageSum = 0;
for (let i = 1; i <= 500; i++) {
    averageSum += i;
}

console.log(`Середнє арифметичне всіх цілих чисел від 1 до 500: ${averageSum / 500}`);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let evenSum = 0;
for (let i = 30; i <= 80; i++) {
    evenSum += (i % 2 === 0) ? i : 0;
}

console.log(`Сума парних чисел в діапазоні від 30 до 80: ${evenSum}`);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let multiplesOfThree = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        multiplesOfThree += i + (i < 198 ? ', ' : '');
    }
}

console.log(`Числа в діапазоні від 100 до 200, кратні 3: ${multiplesOfThree}`);

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10. Визначити кількість його парних дільників.
// 11. Знайти суму його парних дільників.

const naturalNumber = 666;
let divisors = '';
let evenDivisorsCount = 0;
let evenDivisorsSum = 0;
for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {
        divisors += i + (i < naturalNumber ? ', ' : '');
        if (i % 2 === 0) {
            evenDivisorsCount++;
            evenDivisorsSum += i;
        }
    }
}

console.log(`Дільники числа ${naturalNumber}: ${divisors}`);
console.log(`Кількість парних дільників числа ${naturalNumber}: ${evenDivisorsCount}`);
console.log(`Сума парних дільників числа ${naturalNumber}: ${evenDivisorsSum}`);

// 12. Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += `${i} x ${j} = ${i * j}` + (j < 10 ? ', ' : '');
    }
    console.log(row);
}
