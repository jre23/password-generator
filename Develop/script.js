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

  var numericString = "0123456789";
  // test output
  console.log(numericString[0]);
  console.log(numericString[8]);

  var specialCharactersString = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  //test output
  console.log(numericString.length);
  console.log(specialCharactersString.length);
  console.log(specialCharactersString[24]);
  console.log(specialCharactersString[3]);
  //test output of .concat() method
  console.log(numericString.concat(specialCharactersString).length);

  //Pseudocode
  // - next write if/else statements comparing each of the different boolean combinations (true, true, true, true) or (true, true, true, false) etc.
  // - depending on the combination, add the required strings using .concat() method to create new string
  // - use Math.floor(Math.random() * string.length) to choose a random index of the newly created string
  // - iterate using for loop up to passwordLength to create password using random chosen string index value as i value in for loop string!

  // function created to combine strings using .concat. The returned string will represent the characters the user has chosen to include in their password. This string will then be used with Math.random() to choose characters for their password
  function combineStrings(a, b, c, d) {
    if (b === undefined) {
      return a;
    } else if (c === undefined) {
      return a.concat(b);
    } else if (d === undefined) {
      return a.concat(b, c);
    } else return a.concat(b, c, d);
  }

  // test combineStrings function
  console.log(combineStrings(lowercaseString));

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