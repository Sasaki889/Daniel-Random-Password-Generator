// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  var userInput = window.prompt("How many characters would you like your password? Choose between 8 and 128 characters.")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("That is not a number")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 to 128 characters.")
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include special characters in your password?")
  var userWantsUpperCase = window.confirm("Would you like to include uppercase letters in your password?")
  var userWantsLowerCase = window.confirm("Would you like to include lowercase letters in your password?")


  var choices = [] ;
  
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "," ,"-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
  var  lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseList = []

  for (var i = 0; i < lowerCaseList.length; i++) {
     upperCaseList[i] = lowerCaseList[i].toUpperCase()
    }
  
  if (userWantsNumbers) {
    choices.push(numberList)
  }

  if (userWantsSymbols) {
    choices.push(symbolList)
  }

  if (userWantsLowerCase) {
    choices.push(lowerCaseList)
  }

  if (userWantsUpperCase) {
    choices.push(upperCaseList)
  }

  if (choices.length === 0) {
    choices.push(lowerCaseList)
  }
  var generatePassword = "" ;

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(choices)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar 
  }

  return generatePassword












    
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
