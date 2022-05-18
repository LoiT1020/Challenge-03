// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var chars="";

  var begin="";
 
  var pass = window.prompt ('length of passwords');
  pass = parseInt(pass);
 
 if (pass >=8){
 var confirmU = window.confirm ('uppercase');
  if(confirmU){
   //create Upper case
   var upper ="QWERTYUIOPASDFGHJKLZXCVBNM"
   source = upper;
   
 /*window.confirm ('lowercase');
   //create Lower case
   var lower = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
 window.confirm ('numeric');
   //create randomNumber
   var number ="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
 window.confirm ('special characters');
   var spec = "!@#$%^&*()0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";*/

for (var i=0;i<=pass;i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  begin += chars.substring(randomNumber, randomNumber +1);

  var passwordText = document.querySelector("#password");
  var wheretoshow = document.querySelector(".card-body")
  passwordText.value = begin;
 
}
  return true;
 }
   }



 else {window.alert('something is wrong, please do it again')};
 
}  

  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
