// Assignment code here
function generatePassword(){
  var plen=parseInt(prompt("How many characters in password"))
  if (isNaN(plen)){
    alert("invalid;setting to 6")
    plen= 6 
  }

  var useLower=confirm("use lowercase?")
  var useUpper=confirm("use Upercase?")
  var useNumber=confirm("use Number?")
  var useSpecial=confirm("use Special?")

  if (!useLower && !useUpper && !useNumber && !useSpecial ) {
    alert("invalid;setting to lowercase")
    useLower= true 
  }
  

return useLower
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function ourFunction(){
  var passwordText = document.querySelector("#password");

  passwordText.value = "cia is the best";
  console.log(document.querySelector("#password").value
)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(document.querySelector("#password").value
)