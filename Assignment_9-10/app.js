var cityName = prompt("Enter the city name:");

if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
}

document.write("<br>");

var gender = prompt("Enter your gender:");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am");
}

document.write("<br>");

var signalColor = prompt("Enter the color of the road traffic signal:");

if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
} else {
    alert("Invalid color");
}

document.write("<br>");

var remainingFuel = +(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}

document.write("<br>");

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

document.write("<br>");

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

document.write("<br>");

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

document.write("<br>");

var subject1 = +(prompt("Enter marks obtained in Subject 1:"));
var subject2 = +(prompt("Enter marks obtained in Subject 2:"));
var subject3 = +(prompt("Enter marks obtained in Subject 3:"));

var totalMarks = 300;
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "Satisfactory";
} else if (percentage >= 50) {
    grade = "C";
    remarks = "Average";
} else if (percentage >= 40) {
    grade = "D";
    remarks = "Below Average";
} else {
    grade = "Fail";
    remarks = "Fail";
}

document.write("<h2>Result:</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Obtained Marks: " + obtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");

document.write("<br>");

var secretNumber = Math.floor(Math.random() * 10) + 1;  // Generate a random number between 1 and 10
var userGuess = +(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess. The secret number was " + secretNumber);
}

document.write("<br>");

var number = +(prompt("Enter a number:"));

if (number % 3 === 0) {
    alert("The number is divisible by 3.");
} else {
    alert("The number is not divisible by 3.");
}

document.write("<br>");

var number = +(prompt("Enter a number:"));

if (number % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}

document.write("<br>");

var temperature = +(prompt("Enter the temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The weather today is normal.");
} else if (temperature > 20) {
    alert("Today's weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
} else {
    alert("Temperature is below 10. Please enter a valid temperature.");
}

document.write("<br>");

var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation. Please enter a valid operation.");
}

if (result !== undefined) {
    alert("The result is: " + result);
}



