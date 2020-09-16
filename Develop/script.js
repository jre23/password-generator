///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

function generatePassword() {

  // var passwordLength = parseInt(prompt("Choose a length from 8 to 128 characters for your password."));

  // // test output
  // console.log(passwordLength);
  // console.log(typeof passwordLength);

  // while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  //   var passwordLength = parseInt(prompt("Please choose a length from 8 to 128 characters for your password."));
  // }

  // // test output
  // console.log(passwordLength);

  // var lowercaseBoolean = uppercaseBoolean = numericBoolean = specialCharactersBoolean = false;

  // while (lowercaseBoolean === false && uppercaseBoolean === false && numericBoolean === false && specialCharactersBoolean === false) {

  //   alert("At least one character type (lowercase, uppercase, numeric, and/or special characters) must be chosen.")

  //   var lowercaseBoolean = confirm("Do you want your password to have lowercase characters? Press OK for yes and Cancel for no.")
  //   // test output
  //   console.log(lowercaseBoolean);

  //   var uppercaseBoolean = confirm("Do you want your password to have uppercase characters? Press OK for yes and Cancel for no.")
  //   //test output
  //   console.log(uppercaseBoolean);

  //   var numericBoolean = confirm("Do you want your password to have numbers? Press OK for yes and Cancel for no.")
  //   //test output
  //   console.log(numericBoolean);

  //   var specialCharactersBoolean = confirm("Do you want your password to have special characters? Press OK for yes and Cancel for no.")
  //   //test output
  //   console.log(specialCharactersBoolean);
  // }

  var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
  //test output
  console.log(lowercaseString[0]);
  console.log(lowercaseString[25]);

  var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //test output
  console.log(uppercaseString[0]);
  console.log(uppercaseString[25]);

  var numericString = "123456789";
  // test output
  console.log(numericString[0]);
  console.log(numericString[8]);

  var specialCharactersString = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  //test output
  console.log(specialCharactersString.length);
  console.log(specialCharactersString[24]);
  console.log(specialCharactersString[3]);


}




///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////