// Assignment code here
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberCharacters = ["0","1","2","3","4","5","6","7","8","9"]

function generatePasswordPrompts() {
    var length = prompt("enter length between of at least 8 characters and no more than 128 characters")
    console.log (length);
    if(length < 8 || length > 128) {
        alert("Password must be at least 8 characters and no more than 128 characters")
    }
var hasLowercase = confirm("click ok to include lowercase")
var hasUppercase = confirm ("click ok to include uppercase")
var hasNumbers = confirm ("click ok to include numbers")
var passwordPrompts = {
    length: length, 
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumbers: hasNumbers

}
return passwordPrompts

}

function generatePassword () {
    var options = generatePasswordPrompts ();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
