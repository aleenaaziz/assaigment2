let city = prompt("your city");
if (city === "karachi") {
  alert("welcome to the city of lights");
} else {
  alert("welcome to " + city);
}

let gender = prompt("enter your gender");
if (gender === "male") {
  alert("Welcome sir");
} else if (gender === "female") {
  alert("Welcome ma'am");
} else {
  alert("Welcome");
}

let s_color = prompt("enter color of traffic signal");
if (s_color === "red") {
  alert("Must stop");
} else if (s_color === "yellow") {
  alert("Ready to move");
} else if (s_color === "green") {
  alert("Move now");
} else {
  alert("this is not color of traffic light");
}

let liter = prompt("enter remaining fuel in your car(in liters)");
if (liter < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("enjoy your ride");
}

let a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

let b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

let c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}



let t_marks1 = prompt("write total marks");
let o_marks1 = prompt("write obtained marks");


let t_marks2 = prompt("write total marks");
let o_marks2 = prompt("write obtained marks"); 


let t_marks3 = prompt("write total marks");
let o_marks3 = prompt("write obtained marks"); 

document.write('<br>' + "marks sheet" );
document.write('<br>' + '<br>' + "total marks : " + (t_marks1+t_marks2+t_marks3));
document.write('<br>' + '<br>' + "marks obtained : " + (o_marks1+o_marks2+o_marks3));


let percentage = document.write('<br>' + '<br>' + "percentage : " + ((o_marks1+o_marks2+o_marks3) / (t_marks1+t_marks2+t_marks3)*100) + "%");

if(percentage >= 80){
  document.write('<br>' + "grade : A-one" + '<br>' + "Remarks : Excellent");
}

else if(percentage >= 70){
  document.write('<br>' + "grade : A" + '<br>' + "Remarks : Good");
}

else if(percentage >= 50){
  document.write('<br>' + "grade : B" + '<br>' + "Remarks : You need to improve");
}

else{
  document.write('<br>' + "grade : fail" + '<br>' + "Remarks : Sorry");
}


let guess = prompt("guess a number from 1 to 10");
if(guess === 8){
  alert("correct answer");
}

else{
  alert("close enough to the correct answer");
}

let num = prompt("enter a number");

if(num%3 === 0){
  alert("this number is divisible by 3");
}

else{
  alert("this number is not divisible by 3");
}

let num2 = prompt("enter a number");

if(num%2 === 0){
  alert("this number is even");
}

else{
  alert("this number is odd");
}

let temp = prompt("write the temprature");

if(temp > 40){
  alert("it is too hot outside")
}
else if(temp > 30){
  alert("the weather today is normal");
}
else if(temp > 20){
  alert("todays weather is cool");
}
else if(temp > 10){
  alert("OMG! Todays weather is so cool");
}

let operator = prompt("Enter the operator to perform the calculation (either +,-,*,/,%)");
let number1 = prompt("enter the first number");
let number2 = prompt("enter the second number");


if(operator === '+'){
  document.write('<br>' + (number1 + number2));
}
else if(operator === '-'){
  document.write('<br>' + (number1 - number2));
}
else if(operator === '*'){
  document.write('<br>' + (number1 * number2));
}
else if(operator === '/'){
  document.write('<br>' +  (number1 / number2));
}
else if(operator === '%'){
  document.write( '<br>' + (number1 % number2));
}
else{
  document.write('<br>' + 'not a number');
}
