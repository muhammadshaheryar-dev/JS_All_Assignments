var input = prompt("Enter a character:");

var ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    alert("The given input is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    alert("The given input is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    alert("The given input is a lowercase letter.");
} else {
    alert("The given input is not a number or a letter.");
}

document.write("<br>");

var num1 = +(prompt("Enter the first integer:"));
var num2 = +(prompt("Enter the second integer:"));

if (num1 > num2) {
    alert("The larger number is: " + num1);
} else if (num2 > num1) {
    alert("The larger number is: " + num2);
} else {
    alert("Both numbers are equal.");
}

document.write("<br>");

var number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

document.write("<br>");

var character = prompt("Enter a character:");
character = character.toLowerCase();

var vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.includes(character)) {
    alert("The character is a vowel.");
} else {
    alert("The character is not a vowel.");
}

document.write("<br>");

var correctPassword = "Password123"; 

var enteredPassword = prompt("Enter your password:");

if (enteredPassword === "") {
    alert("Please enter your password.");
} else if (enteredPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

document.write("<br>");

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.write("<br>");

var time = +(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):"));

if (time >= 0000 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time input!");
}

