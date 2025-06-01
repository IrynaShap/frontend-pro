const userName = prompt("Введіть ваше ім'я:");

const userAge = Number(prompt("Введіть ваш вік:"));

const isConfirmed = confirm("Ви погоджуєтесь отримувати сповіщення?");

const userId = 1234567890123456789n;

let lastLogin = null;

let nickname;

const favoriteTechnologies = ["JavaScript", "Python", "Java"];

const settings = {
    theme: "dark",
    autoLogin: false,
}

// Create a user object with personal information
const session = {
    userName: userName,
    userAge: userAge,
    isConfirmed: isConfirmed,
    userId: userId,
    lastLogin: lastLogin,
    nickname: nickname,
    favoriteTechnologies: favoriteTechnologies,
    settings: settings,
}

alert(`Привіт, ${session.userName}! Ваш ID: ${session.userId}.`);

// Display user information in the console
console.log("Весь об'єкт сесії:", session);

// Display types of properties in the session object
console.log(`Тип властивості userName: ${typeof session.userName}`);
console.log(`Тип властивості userAge: ${typeof session.userAge}`);
console.log(`Тип властивості isConfirmed: ${typeof session.isConfirmed}`);
console.log(`Тип властивості userId: ${typeof session.userId}`);
console.log(`Тип властивості lastLogin: ${typeof session.lastLogin}`);
console.log(`Тип властивості nickname: ${typeof session.nickname}`);
console.log(`Тип властивості favoriteTechnologies: ${typeof session.favoriteTechnologies}`);
console.log(`Тип властивості settings: ${typeof session.settings}`);
