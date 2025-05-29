// User's full name
const userName = "Iryna";

// User's age
const age = 32;

// Is the user verified?
const isVerified = true;

// Date of registration in string format
const registrationDate = "2024-05-25";

// User's card number (BigInt, for large numbers)
const cardNumber = 98765432101234567890n;

// Promo code (null if none)
let promoCode = null;

// Backup name (not set yet)
let backupName;

// Number of bonus points in account
let bonusPoints = 450;

// Output #1: general user info using template string
console.log(`Користувач ${userName}, вік ${age}, зареєстрований ${registrationDate}.`);

// Output #2: account status
console.log(`Чи верифікований користувач ${isVerified}. Номер картки користувача: ${cardNumber}. Промокод: ${promoCode ?? "Немає промокоду"}.`);

// Output #3: bonuses and backup
console.log(`Кількість бонусів на рахунку: ${bonusPoints}. Резервне ім'я: ${backupName ?? "Немає резервного імені"}.`);

// Type checks
console.log("\nType checks:");
console.log(`userName: ${typeof userName}`);          // string
console.log(`age: ${typeof age}`);                    // number
console.log(`isVerified: ${typeof isVerified}`);      // boolean
console.log(`registrationDate: ${typeof registrationDate}`); // string
console.log(`cardNumber: ${typeof cardNumber}`);      // bigint
console.log(`promoCode: ${typeof promoCode}`);        // object (null is historically 'object')
console.log(`backupName: ${typeof backupName}`);      // undefined
console.log(`bonusPoints: ${typeof bonusPoints}`);    // number