// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length= prompt("enter password length 8-128");
  var special= confirm("do you want special charachters");
  var upper= confirm ("do you want uppercase letters?");
  var lower= confirm ("do you want lower case letters?");
  var num= confirm("do you wamt numbers?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
const randomFunc = {
   upper: getRandomUpper,
   lower: getRandomLower,
   number: getRandomNum,
   special: getRandomSpecial
};



function generatePassword(length, special, upper, lower, num) {
  
    let generatedPassword = "";
    const typesCount = ( length + special + upper + lower);
    
    const typesArr = [{ length }, { special }, { upper }, { lower }]
        .filter(
            item => Object.values(item)[0]
        );
  
    if (typesCount === 0) {
        return "";
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            
            generatedPassword += randomFunc[funcName]();
        });
    }
    console.log(generatedPassword)
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
