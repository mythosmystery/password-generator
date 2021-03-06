// Assignment Code
const MAX_CHARS = 128;
const MIN_CHARS = 8;
const LOWER = 0;
const UPPER = 1;
const NUMBER = 2;
const SPECIAL_CHAR = 3;

var generateBtn = document.querySelector("#generate");

var card = document.querySelector("card-body");

// Write password to the #password input
function writePassword() {
  var textInput = document.querySelector(".password-criteria");
  var passwordText = document.querySelector("#password");

  textInput.setAttribute("type", "text");

  var passwordLength = 20;
  var userCharTypes = [true, true, true, false];

  var validCharTypes = validateCharTypes(userCharTypes);

  var password = generatePassword(passwordLength, validCharTypes);

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function validateCharTypes(userCharTypes){
  var numFalse = 0;

  for (let i = 0; i < userCharTypes.length; i++) {
    if(!userCharTypes[i]) numFalse++;    
  }  

  if(numFalse === userCharTypes.length){
    console.error("ALL VALUES FALSE");
    console.error("INCLUDING LOWERCASE CHARACTERS")
    userCharTypes[LOWER] = true;
    return userCharTypes;     
  }

  return userCharTypes; 
}

function generatePassword(passwordLength, validCharTypes) {
  const validChars = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
  var s = "";

  var randomchar = function (validCharTypes) {

    do {
      var type = Math.floor(Math.random() * validChars.length)
    } while (!validCharTypes[type]);

    var charCode = Math.floor(Math.random() * validChars[type].length);

    return validChars[type].charAt(charCode);
  }

  while (s.length < passwordLength) s += randomchar(validCharTypes);
  return s;
}

