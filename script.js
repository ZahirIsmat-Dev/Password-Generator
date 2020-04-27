// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var splitLower = lowerCharacters.split("");

var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var splitUpper = upperCharacters.split("");

var specialCharacters = "!,@,#,$,%,^,&,*";
var splitSpecial = specialCharacters.split("");


//Alerts & Prompts for password generation
alert("Welcome to the Password Generator! Please provide following criteria to generate password...");
var passLength = prompt("Choose a length between 8 and 128 characters");
var passUpper = prompt("Do you want password to contain uppercase characters?  (y or n)");
var passLower = prompt("Do you want password to contain lowercase characters?  (y or n)");
var passSpecial = prompt("Do you want password to contain special characters?  (y or n)") ;

//Create list of possible characters, numerics and or specials
var possibleCharacters = [,]; 

if (passUpper = "y") {
  splitUpper.concat(possibleCharacters);
}
if (passLower = "y") {
  splitLower.concat(possibleCharacters);
}
if (passSpecial = "y") {
  splitSpecial.concat(possibleCharacters);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
