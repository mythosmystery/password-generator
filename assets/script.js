// Assignment Code
const MAX_CHARS = 128;
const MIN_CHARS = 8;
const LOWER = 0;
const UPPER = 1;
const NUMBER = 2;
const SPECIAL_CHAR = 3;

var generateBtn = document.querySelector("#generate");

var card = document.querySelector("card-body");

var form = document.querySelector("#input-form");

var checkboxes = form.querySelectorAll("input[type=checkbox]");

// Write password to the #password input
function writePassword() {  
  var passwordText = document.querySelector("#password");  

  var userCharTypes = getCharacterTypes();

  var passwordLength = getLength();  

  var validCharTypes = validateCharTypes(userCharTypes);

  var password = generatePassword(passwordLength, validCharTypes);

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function getLength(){
  var userLength = form.querySelector("#password-length").value;
  if(userLength > MAX_CHARS || userLength < MIN_CHARS){
    form.querySelector("#length-error").setAttribute("style", "color:red");
    getLength();
  }
  form.querySelector("#length-error").setAttribute("style", "color:black");
  return userLength;
}

function getCharacterTypes(){  
  var checked = [];
  for (let i = 0; i < checkboxes.length; i++) {
    checked[i] = checkboxes[i].checked;       
  }
  return checked;
}

function validateCharTypes(userCharTypes){
  var numFalse = 0;

  for (let i = 0; i < userCharTypes.length; i++) {
    if(!userCharTypes[i]) numFalse++;    
  }  

  if(numFalse === userCharTypes.length){
    console.error("ALL VALUES FALSE");    
    form.querySelector("#error").hidden = false;   
    checkboxes[LOWER].checked = true;
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

