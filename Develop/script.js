// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  
 
  var pass = window.prompt ('length of passwords');
  pass = parseInt(pass);

  function genpass (){
    this.begin='';
    for (var i=0;i<=pass;i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    begin += chars.substring(randomNumber, randomNumber +1);
    var passwordText = document.querySelector("#password");
    var wheretoshow = document.querySelector(".card-body")
        
        passwordText.value = begin;
      
        wheretoshow.appendChild(passwordText);}
}
   
 while(pass >=8){

  var confirmU = window.confirm ('uppercase?');
  if(confirmU){
   //create Upper ase
   var upper ="QWERTYUIOPASDFGHJKLZXCVBNM"
   chars += upper;
  } else{chars=chars};

  var confirmL=window.confirm('lowercase?');
  if(confirmL=true){
  //create lower case
  var lower= "qwertyuiopasdfghjklzxcvbnm";
  chars +=lower;} else{chars=chars}

  var confirmN = window.confirm ('numeric');
  if(confirmN=true){
   //create randomNumber
   var number ="0123456789";
   chars +=number;} else {chars=chars}

  var confirmS= window.confirm ('special characters');
  if(confirmS=true){
   //creat special characters
   var spec = "!@#$%^&*()";
   chars +=spec;} else {chars=chars}

   genpass();

   break;


   };   



 window.alert('something is wrong, please do it again')
 
}  

//variables

var chars="";

var begin="";





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
