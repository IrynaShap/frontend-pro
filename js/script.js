// Create a user object with personal information
const user = {
    name: "Iryna",
    age: 30,
    isOnline: true,
    friends: ["Kate", "Olga", "Vlad"],
    settings: {
        theme: "dark",
        notifications: true,
    }
}

// Get the name of the first friend
const firstFriendName = user.friends[0];

// Check if notifications are enabled
const notificationsEnabled = user.settings.notifications;

console.log(`Ім’я користувача: ${user.name}`);
console.log(`Кількість друзів: ${user.friends.length}`);
console.log(`Ім’я першого друга: ${firstFriendName}`);
console.log(`Яка тема увімкнена: ${user.settings.theme}`);
console.log(`Чи увімкнені сповіщення: ${notificationsEnabled ? "Так" : "Ні"}`);