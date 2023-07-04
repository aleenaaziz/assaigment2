let multiArray = [[], [], []];
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

for (let n = 1; n <= 10; n++) {
  document.write("<br>" + n);
}

let tableNum = prompt("Please enter a number:");
let tableLength = prompt("Please enter a table length:");

document.write("<br>");
document.write("Table of " + tableNum);
document.write("<br>");

for (i = 1; i <= tableLength; i++) {
  document.write(tableNum + " * " + i + " = " + tableNum * i + "<br>");
}

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<br>" + fruits);
for (let m = 0; m < fruits.length; m++) {
  document.write(
    "<br>" + "elements at index " + m + " is " + fruits[m] + "<br>"
  );
}

document.write("<br>" + "Counting" + "<br>");
for (var f = 1; f <= 15; f++) {
  document.write(f + ",");
}

// counting:
document.write("<br>" + "Reverse" + "<br>");
for (var z = 10; z >= 1; z--) {
  document.write(z + ",");
}

//   Even:
document.write("<br>" + "Even" + "<br>");
for (var x = 0; x <= 20; x += 2) {
  document.write(x + ",");
}

//  Odd:
document.write("<br>" + "Odd" + "<br>");
for (var y = 1; y <= 19; y += 2) {
  document.write(y + ",");
}

//  Series:
let k = "k";
document.write("<br>" + "Series" + "<br>");
for (var d = 2; d <= 20; d += 2) {
  document.write(d + k + ",");
}

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let int = prompt("Please enter the item you would like to search for:");

let found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i] == int) {
    found = true;
  }
}
if (found) {
  alert("The item was found in the list!");
} else {
  alert("The item was not found in the list!");
}


let B = [24, 53, 78, 91, 12]; 
let max = B[0]; 
document.write('<br>' + "arrat items: " + B);

for (let i=1; i < B.length; i++) { 
    if (B[i] > max) { 
        max = B[i]; 
    } 
}

document.write('<br>' + "the largest item is " + max);
let smallest = B[0];
document.write('<br>' + "array items: " + B);
for (let i=1; i < B.length; i++) { 
    if (B[i] < smallest) { 
        smallest = B[i]; 
    } 
}
document.write('<br>' + "the largest item is " + smallest+ '<br>');

for (let i = 5; i <= 100; i+=5) { 
    document.write( i + ",");
  }