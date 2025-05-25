// This script prompts the user for their name and whether they want to see a greeting

const userName = prompt("Enter your name:");
const showGreeting = confirm("Would you like to see a greeting?");

if (showGreeting) {
    alert("Hello, " + userName + "!");
}