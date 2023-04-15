// Assignment code here
var generateBtn = document.querySelector("#generate");

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharacters = "0123456789";
const specialCharacters = "~`!@#$%^&*()-_+={[}];:/<>.,'";
const passwordLength = "";


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
//generate function to generate password
  function generatePassword () {
    console.log("Hey! you clicked the button!");
   // var options = generatePasswordPrompts ();
    userPassword = "";
    passwordCharacters = "";

    //users password length
    let passwordLength = prompt (
        "Password must be at least 8 characters and no more than 128 characters"
    );

    //check if password length is between 8nand 128 characters
    if(passwordLength >= 8 && passwordLength <=128) {
        password.length = passwordLength;

        //does user want lowercase    
        var hasLowercase = confirm("click ok to include lowercase");
        //does user want uppercase
        var hasUppercase = confirm ("click ok to include uppercase");
        //does user want numbers
        var hasNumbers = confirm ("click ok to include numbers");
        //does user want special characters
        var hasSpecialCharacters = confirm ("click ok to include special characters");

        // var passwordPrompts = {
        //     length: length, 
        //     hasLowercase: hasLowercase,
        //     hasUppercase: hasUppercase,
        //     hasNumbers: hasNumbers,
        //     hasSpecialCharacters: hasSpecialCharacters



    } else {
        alert("Select a password between 8 and 128 characters");
    }
    //condition statements
    if (hasLowercase) {
        passwordCharacters += lowercaseCharacters;
    }
    if (hasUppercase) {
        passwordCharacters += uppercaseCharacters;
    }
    if (hasNumbers) {
        passwordCharacters += numberCharacters;
    }
    if (hasSpecialCharacters) {
        passwordCharacters += specialCharacters;
    } else {
        alert ("error: cannot generate a password!");
    }
    for (var i = 0; i < passwordLength; i++) {
        userPassword += passwordCharacters [Math.floor(Math.random() * passwordCharacters.length)];
    }
    return userPassword;
  }    

   
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// source that helped me with assignment https://www.youtube.com/watch?v=x4HUaiazDes&t=617s