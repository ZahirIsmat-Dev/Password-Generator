// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var splitLower = lowerCharacters.split("");

var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var splitUpper = upperCharacters.split("");

var numericCharacters = "0123456789";
var splitNumeric = numericCharacters.split("");

var specialCharacters = "!@#$%^&*";
var splitSpecial = specialCharacters.split("");


//Alerts & Prompts for password generation
alert("Welcome to the Password Generator! Please provide following criteria to generate password...");
var passLength = prompt("Choose a length between 8 and 128 characters");
var passUpper = confirm("Do you want password to contain uppercase characters?");
var passLower = confirm("Do you want password to contain lowercase characters?");
var passNumeric = confirm("Do you want password to contain numeric characters?");
var passSpecial = confirm("Do you want password to contain special characters?");

//Create list of possible characters, numerics and or specials
var possibleCharacters = []; 

if (passUpper) {
  possibleCharacters = possibleCharacters.concat(splitUpper);
}
if (passLower) {
  possibleCharacters =  possibleCharacters.concat(splitLower);
}
if (passNumeric) {
  possibleCharacters =  possibleCharacters.concat(splitNumeric);
}
if (passSpecial) {
  possibleCharacters = possibleCharacters.concat(splitSpecial);
}

// // Generate Password
// function generatePassword() {
//   var finalCharacters = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];

//   return finalCharacters;

// }

// Generate Password
function generatePassword() {
  
  var finalCharacters = [];

  for (var i = 0; i <= passLength; i++) {
    finalCharacters =  finalCharacters.concat(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);

  }

  return [finalCharacters.join('')];

}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);