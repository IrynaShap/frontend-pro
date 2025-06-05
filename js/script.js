const hours = Number(prompt("Введіть кількість годин:"));

if (isNaN(hours) || hours < 1) {
    alert("Будь ласка, введіть коректне число годин більше 0.");
} else {
    const seconds = hours * 3600;
    alert(`Кількість секунд у ${hours} годині(ах): ${seconds}`);
}
