var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum: " + sum + "<br>");
document.write("<br>");

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;
document.write("Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus + "<br>");

document.write("<br>");
document.write("<br>");

var variable;
document.write("Value after variable declaration is: " + variable + "<br>");
variable = 5;
document.write("Initial value: " + variable + "<br>");
variable++;
document.write("Value after increment is: " + variable + "<br>");
variable += 7;
document.write("Value after addition is: " + variable + "<br>");
variable--;
document.write("Value after decrement is: " + variable + "<br>");
var remainder = variable % 3;
document.write("The remainder is: " + remainder + "<br>");

document.write("<br>");
document.write("<br>");

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets: " + totalCost + " PKR" + "<br>");

document.write("<br>");
document.write("<br>");

var multiplicationNumber = 5;
document.write("Multiplication Table of " + multiplicationNumber + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(multiplicationNumber + " x " + i + " = " + (multiplicationNumber * i) + "<br>");
}

document.write("<br>");
document.write("<br>");

var celsiusTemperature = 25;
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F" + "<br>");

var fahrenheitTemp = 77;
var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C" + "<br>");

document.write("<br>");
document.write("<br>");

var priceItem1 = 1000;
var priceItem2 = 800;
var quantityItem1 = 3;
var quantityItem2 = 2;
var shippingCharges = 200;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("Total cost of your order is: " + totalCost + "<br>");

document.write("<br>");
document.write("<br>");

var totalMarks = 500;
var marksObtained = 430;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Percentage: " + percentage + "%<br>");

document.write("<br>");
document.write("<br>");

var usDollars = 10;
var saudiRiyals = 25;
var exchangeRateDollar = 104.80;
var exchangeRateRiyal = 28;
var totalCurrency = (usDollars * exchangeRateDollar) + (saudiRiyals * exchangeRateRiyal);
document.write("Total currency in PKR: " + totalCurrency + " PKR<br>");

document.write("<br>");
document.write("<br>");

var number = 5;
var result = (((number + 5) * 10) / 2);
document.write("Result: " + result + "<br>");


document.write("<br>");
document.write("<br>");

var currentYear = new Date().getFullYear();
var birthYear = 1990;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old.<br>");
document.write("<br>");
document.write("The Geometrizer");
var radius = 5;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2) + "<br>");

document.write("<br>");
document.write("<br>");

// Task 13
var favoriteSnack = "Chips";
var currentAge = 25;
var maximumAge = 80;
var amountPerDay = 2;

var yearsRemaining = maximumAge - currentAge;
var snacksPerLifetime = amountPerDay * 365 * yearsRemaining;

document.write("You will need " + snacksPerLifetime + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".<br>");


