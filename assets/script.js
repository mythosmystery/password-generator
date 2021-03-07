//assign constants
const MAX_CHARS = 128;
const MIN_CHARS = 8;
const LOWER = 0;
const UPPER = 1;
const NUMBER = 2;
const SPECIAL_CHAR = 3;

//assign variables
var generateBtn = document.querySelector("#generate");
var card = document.querySelector("card-body");
var form = document.querySelector("#input-form");
var checkboxes = form.querySelectorAll("input[type=checkbox]");
var passwordText = document.querySelector("#password"); 

//main function, gets password criteria and calls to generate it
function writePassword() {     

  var userCharTypes = getCharacterTypes();

  form.querySelector("#error").hidden = true; 

  var passwordLength = getLength();
  if (passwordLength === null) writePassword();  

  var validCharTypes = validateCharTypes(userCharTypes);
  if (validateCharTypes === null) writePassword();

  var password = generatePassword(passwordLength, validCharTypes);
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

//get length of password from the user
function getLength(){

  var userLength = form.querySelector("#password-length").value;

  //returns null to trigger a restart in writePassword
  if(userLength > MAX_CHARS || userLength < MIN_CHARS){
    form.querySelector("#length-error").setAttribute("style", "color:red");
    return null;
  }

  form.querySelector("#length-error").setAttribute("style", "color:black");
  return userLength;
}

//gets character types the user wants in password
function getCharacterTypes(){  
  var checked = [];

  //assigning array to checkboxes from html
  for (let i = 0; i < checkboxes.length; i++) {
    checked[i] = checkboxes[i].checked;       
  }
  return checked;
}

//makes sure all values arent false
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
    //returns null to writePassword to restart it
    return null;     
  }

  return userCharTypes; 
}

//generates the passwords based on criteria passed in
function generatePassword(passwordLength, validCharTypes) {
  const validChars = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
  var s = "";

  var randomchar = function (validCharTypes) {

    //keeps generating until it gets a valid value
    do {
      var type = Math.floor(Math.random() * validChars.length)
    } while (!validCharTypes[type]);

    //gets random character from the character set picked above
    var charCode = Math.floor(Math.random() * validChars[type].length);

    return validChars[type].charAt(charCode);
  }

  //keeps looping until its the desired length
  while (s.length < passwordLength) s += randomchar(validCharTypes);
  return s;
}

