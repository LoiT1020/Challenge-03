// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var pass = window.prompt ('length of passwords');
   pass = parseInt(pass);
  
  if (pass >=8){
  window.confirm ('uppercase');
    //create Upper case
    var upper ="QWERTYUIOPASDFGHJKLZXCVBNM"
  window.confirm ('lowercase');
    //create Lower case
    var lower = "qwertyuiopasdfghjklzxcvbnm"
  window.confirm ('numeric');
    //create randomNumber
    var randomnumber =  Math.floor(Math.random()*10);
  

  window.confirm ('special characters');
  
  }

  else {window.alert('something is wrong, please do it again')};
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
