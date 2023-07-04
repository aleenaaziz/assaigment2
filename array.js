let studentArray = [];
let stringArray = ["string1", "string2", "string3"];
let numberArray = [1, 2, 3];
let myBooleanArray = [5];
let myMixedArray = (5, true, "this", `*`);

let education = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
for (let i = 0; i < education.length; i++) {
  document.write("<p>" + (i + 1) + ". " + education[i] + "</p>");
}

var studentNames = ["std1", "std2", "std3"]; 
var studentScores = [380, 220, 450]; 
var totalMarks = 500; 


for (var i = 0; i < studentNames.length; i++){ 
   var percentage1 = (studentScores[i] / totalMarks) * 100;
   document.write('<br>' + "score of " + studentNames[i] + " is " + studentScores[i] + ". Precentage : " + percentage1 + '%' + '<br>');
}



// Initialize an array with color names 
var colors = ['red', 'green', 'blue']; 

// Display the array elements in your browser 
document.write('<br>' + colors); 

// Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array 
var newColor = prompt('What color do you want to add to the beginning?'); 
colors.unshift(newColor); 

// Display the updated array in your browser 
document.write( '<br>' + colors); 

// Ask the user what color he/shewants to add to the end & add that color to the end of the array. Display the updated array in your browser.
var newColor = prompt('What color do you want to add to the end?'); 
colors.push(newColor); 

// Display the updated array in your browser 
document.write('<br>' + colors); 

// Add two more color to the beginning of the array 
var addColor1 = prompt('What is the first color you want to add to the beginning'); 
var addColor2 = prompt('What is the second color you want to add to the beginning');
colors.unshift(addColor1, addColor2); 

 // Display the updated array in your browser 
document.write('<br>' + colors); 

// Delete the first color in the array 
colors.shift(); 

// Display the updated array in your browser
document.write('<br>' + colors); 

// Delete the last color in the array 
colors.pop(); 

// Display the updated array in your browser 
document.write('<br>' + colors); 

// Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index 
var index = prompt('At which index do you want to add the color?'); 
var addColor = prompt('What color do you want to add?'); 
colors.splice(index, 0, addColor); 

// Display the updated array in your browser 
document.write('<br>' + colors); 

// Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. 
var index = prompt('At which index do you want to delete color(s)?');
var numColors = prompt('How many colors do you want to delete?');
colors.splice(index, numColors);

document.write('<br>' + colors);


let studentS = [96, 78, 82, 65, 93];

document.write('<br>' + '<br>' + "score of students : " + studentScores);

studentScores.sort(function(a, b){
    return a - b;
});

document.write('<br>' + "orderd score of students : "+ studentScores);

let cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
document.write('<br>' + "cities list " + '<br>' + cities);
document.write('<br>' + "selected cities list " + '<br>' + cities[2] + ',' + cities[4]);

let cat = ["this" , "is" , "my" , "cat"];
let catstring = cat.join('');

document.write('<br>' + '<br>' + "array: " +'<br>' +  cat);
document.write('<br>' + "string:" +'<br>' +  catstring);


let array1 = [];

array1.push('keyboard');
array1.push('mouse');
array1.push('printer');
array1.push('monitor');

document.write('<br>' + "devices" + '<br>' + array1);
for(let i=0; i < array1.length; i++){
   
    document.write('<br>' + "out:"+ '<br>' +  array1[i]);
}


let array2 = [];

array2.push('keyboard');
array2.push('mouse');
array2.push('printer');
array2.push('monitor');
document.write('<br>' + "devices" + '<br>' + array1);

for(let i=array2.length - 1; i>=0; i--){
  document.write('<br>' + "out:"+ '<br>' +  array2[i] + '<br>');
}


let array3 = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];



document.write('<select>');
for(let i=0; i < array3.length; i++){
  document.write('<option>' + array3[i] + '</option>');
}
document.write('</select>');
