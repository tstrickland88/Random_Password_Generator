// Assignment code here
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var special = ['.','\\','/',"'",'^','?',':','!',',',')','(','[','~','-','#','$','}','{',']','@','%','+','_',];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
  
  var password=[]
  var grabbag=[]
  if (useLower==true){
    grabbag=grabbag.concat(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
    
  }

  if (useUpper==true){
    grabbag=grabbag.concat(upper)
  }
  if (useNumber==true){
    grabbag=grabbag.concat(numeric)
  }

  if (useSpecial==true){
    grabbag=grabbag.concat(special)
  }
  console.log (grabbag)
  for (var i=0;i<plen;i++){
    var randNum = Math.floor(Math.random() * grabbag.length);
    console.log(grabbag[randNum])
    password.push(grabbag[randNum])
  }
  console.log(password)
return password.join('')
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)


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