var a = 2, b = 1;
var result = --a - --b + ++b + b--;


document.write("<br>");

var your_name = prompt("Enter your name:");
document.write("Hello, " + your_name + "! Welcome to our website.");

document.write("<br>");
document.write("Table");

var number = +(prompt("Enter Table number"));

if ((number)) {
    number = 5;
}
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

document.write("<br>");

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");


var totalMarks = 100;


var obtainedMarks1 = +(prompt("Enter the obtained marks for " + subject1 + ":"));


var obtainedMarks2 = +(prompt("Enter the obtained marks for " + subject2 + ":"));
var obtainedMarks3 = +(prompt("Enter the obtained marks for " + subject3 + ":"));


var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;


document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("</table>");

document.write("<br>");
document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");