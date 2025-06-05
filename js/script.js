const a = Number(prompt("Введіть перше число:"));
const b = Number(prompt("Введіть друге число:"));
const c = Number(prompt("Введіть третє число:"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Будь ласка, введіть коректні числа.");
} else {
    const average = (a + b + c) / 3;
    alert(`Середнє арифметичне трьох чисел: ${average}`);
}
