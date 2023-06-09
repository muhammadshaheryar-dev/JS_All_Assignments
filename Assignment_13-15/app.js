var studentNames = [];
var studentNames = new Array();
var stringsArray = ["Hello", "World", "JavaScript"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
var mixedArray = ["Hello", 123, true, "JavaScript"];
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h3>Educational Qualifications in Pakistan:</h3>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");

document.write("<br>");

var studentNames = ["John", "Alice", "Michael"]; 
var scores = [390, 450, 410]; 

var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
  var studentName = studentNames[i];
  var score = scores[i];
  var percentage = (score / totalMarks) * 100;

  document.write("Student Name: " + studentName + "<br>");
  document.write("Score: " + score + "<br>");
  document.write("Percentage: " + percentage + "%<br><br>");
}

document.write("<br>");

var colors = ["Red", "Green", "Blue"]; 


document.write("Original Array: " + colors.join(", ") + "<br><br>");

var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(colorToAddBeginning);

document.write("Updated Array (After adding color to the beginning): " + colors.join(", ") + "<br><br>");

var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAddEnd);

document.write("Updated Array (After adding color to the end): " + colors.join(", ") + "<br><br>");

colors.unshift("Yellow", "Orange");

document.write("Updated Array (After adding two more colors to the beginning): " + colors.join(", ") + "<br><br>");

colors.shift();


document.write("Updated Array (After deleting the first color): " + colors.join(", ") + "<br><br>");

colors.pop();

document.write("Updated Array (After deleting the last color): " + colors.join(", ") + "<br><br>");

var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
var colorToAdd = prompt("Enter the color to add at index " + indexToAdd + ":");
colors.splice(indexToAdd, 0, colorToAdd);

document.write("Updated Array (After adding color at index " + indexToAdd + "): " + colors.join(", ") + "<br><br>");
var indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
var colorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
colors.splice(indexToDelete, colorsToDelete);

document.write("Updated Array (After deleting color(s) from index " + indexToDelete + "): " + colors.join(", ") + "<br><br>");
