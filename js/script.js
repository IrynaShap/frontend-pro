const numbers = [
  16, -37, 54, -4, 72, -56, 47, 4,
  -16, 25, -37, 46, 4, -51, 27, -63,
  4, -54, 76, -4, 12, -35, 4, 47
];

const positiveNumbers = numbers.filter(n => n > 0);

let sumPositive = 0;
let productPositive = 1;

positiveNumbers.forEach(n => {
  sumPositive += n;
  productPositive *= n;
});

const countPositive = positiveNumbers.length;

const evenPositive = positiveNumbers.filter(n => n % 2 === 0);
let sumEvenPositive = 0;
evenPositive.forEach(n => sumEvenPositive += n);
const countEvenPositive = evenPositive.length;

const oddPositive = positiveNumbers.filter(n => n % 2 !== 0);
let sumOddPositive = 0;
oddPositive.forEach(n => sumOddPositive += n);
const countOddPositive = oddPositive.length;

const countNegative = numbers.filter(n => n < 0).length;

let minValue = numbers[0];
let maxValue = numbers[0];

numbers.forEach(n => {
  if (n < minValue) minValue = n;
  if (n > maxValue) maxValue = n;
});

const minIndex = numbers.indexOf(minValue);
const maxIndex = numbers.indexOf(maxValue);

const filteredMaxArray = numbers.map(n => n === maxValue ? n : 0);

console.log("Сума позитивних:", sumPositive);
console.log("Кількість позитивних:", countPositive);
console.log("Добуток позитивних:", productPositive);

console.log("Кількість парних позитивних:", countEvenPositive);
console.log("Сума парних позитивних:", sumEvenPositive);
console.log("Кількість непарних позитивних:", countOddPositive);
console.log("Сума непарних позитивних:", sumOddPositive);

console.log("Кількість негативних:", countNegative);

console.log("Мінімальний елемент:", minValue, "його індекс:", minIndex);
console.log("Максимальний елемент:", maxValue, "його індекс:", maxIndex);

console.log("Масив після обнулення всіх, крім max:", filteredMaxArray);