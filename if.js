myfun();
function myfun() {
  let x = prompt("enter name");
  let y = x.toUpperCase();
  let z = x.toString();

  if (x != z) {
    alert("number");
  } else if (x == y) {
    alert("uppercase");
  } else {
    alert("lowercase");
  }
}

let integer1 = prompt("write first integer");
let integer2 = prompt("write second integer");

if (integer1 > integer2) {
  alert(integer1 + " is greater then " + integer2);
} else if (integer1 < integer2) {
  alert(integer2 + " is greater then " + integer1);
} else if (integer1 === integer2) {
  alert(integer2 + "is equal to " + integer1);
} else {
  alert("invalid integer");
}

let num1 = prompt("enter a number");
if (num1 > 0) {
  alert("number is positive");
} else if (num1 < 0) {
  alert("number is negative");
} else if (num1 === 0) {
  alert("number is equal to zero");
} else {
  alert("invalid number");
}

let char = prompt("check weather the alphabet is vowel or not");
if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  alert("this alphabet is vowel");
} else {
  alert("this is not a vowel");
}

let password = "correctpassword123";
let userInput = prompt("Please enter your password:");

if (!userInput) {
  alert("Please enter your password");
} else if (userInput === password) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

let time = prompt("enter time in minutes");
if(time >= 0000 && time < 1200){
    alert("good morning");
}
else if(time >= 1200 && time < 1700){
    alert("good afternoon");
}
else if(time >= 1700 && time < 2100){
    alert("good evening");
}
else if(time >= 2100 && time <= 2359){
    alert("good night");
}
else{
    alert("invalid time");
}