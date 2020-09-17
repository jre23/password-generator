///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function that is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

function generatePassword() {

  // set passwordLength = 1 to force while loop check
  var passwordLength = 1;

  // while loop to validate user input. Checks if user hits cancel, otherwise will prompt the user until a valid input is received 
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Please choose a length from 8 to 128 characters for your password.");
    if (passwordLength === null) {
      return;
    } else {
      passwordLength = parseInt(passwordLength);
    }
  }
  // test output
  console.log(passwordLength);

  // set all booleans to false to force following while loop 
  var lowercaseBoolean = uppercaseBoolean = numericBoolean = specialCharactersBoolean = false;

  // this while loop is used to ensure that at least one character type is selected
  while (lowercaseBoolean === false && uppercaseBoolean === false && numericBoolean === false && specialCharactersBoolean === false) {

    alert("At least one character type (lowercase, uppercase, numeric, or special characters) must be chosen.")

    var lowercaseBoolean = confirm("Do you want your password to have lowercase characters? Press OK for yes and Cancel for no.")
    // test output
    console.log(lowercaseBoolean);

    var uppercaseBoolean = confirm("Do you want your password to have uppercase characters? Press OK for yes and Cancel for no.")
    //test output
    console.log(uppercaseBoolean);

    var numericBoolean = confirm("Do you want your password to have numbers? Press OK for yes and Cancel for no.")
    //test output
    console.log(numericBoolean);

    var specialCharactersBoolean = confirm("Do you want your password to have special characters? Press OK for yes and Cancel for no.")
    //test output
    console.log(specialCharactersBoolean);
  }

  // create strings that contain the characters to be used in the password 
  var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericString = "0123456789";
  var specialCharactersString = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // this function creates the password depending on how many arguments are passed to it. Arguments are directly related to what character types the user chooses
  function createPass(a, b, c, d) {
    var createPassword = "";
    if (b === undefined) {
      for (let i = 0; i < passwordLength; i++) {
        // randomChoice is a random number from 0 to the length of the string(s) - 1
        var randomChoice = Math.floor(Math.random() * a.length);
        // createPassword is a string that has random values added to the end of it from the string argument(s) using randomChoice as the index 
        createPassword = createPassword.concat(a[randomChoice]);
      }
    } else if (c === undefined) {
      for (let i = 0; i < passwordLength; i++) {
        var randomChoice = Math.floor(Math.random() * a.concat(b).length);
        createPassword = createPassword.concat(a.concat(b)[randomChoice]);
      }
    } else if (d === undefined) {
      for (let i = 0; i < passwordLength; i++) {
        var randomChoice = Math.floor(Math.random() * a.concat(b, c).length);
        createPassword = createPassword.concat(a.concat(b, c)[randomChoice]);
      }
    } else {
      for (let i = 0; i < passwordLength; i++) {
        var randomChoice = Math.floor(Math.random() * a.concat(b, c, d).length);
        createPassword = createPassword.concat(a.concat(b, c, d)[randomChoice]);
      }
    }
    // test that the created password has the same length as the user input passwordLength
    console.log(createPassword.length);
    return createPassword;
  }

  // if statements that will determine the arguments to pass to the createPass function depending on user input booleans. These if statements compare every combination of possible characters, assuming at least one is chosen. Returns value of createPass when generatePassword() is called
  if (lowercaseBoolean && uppercaseBoolean && numericBoolean && specialCharactersBoolean) {
    return createPass(lowercaseString, uppercaseString, numericString, specialCharactersString);
  } else if (lowercaseBoolean && uppercaseBoolean && numericBoolean) {
    return createPass(lowercaseString, uppercaseString, numericString);
  } else if (lowercaseBoolean && uppercaseBoolean && specialCharactersBoolean) {
    return createPass(lowercaseString, uppercaseString, specialCharactersString);
  } else if (lowercaseBoolean && numericBoolean && specialCharactersBoolean) {
    return createPass(lowercaseString, numericString, specialCharactersString);
  } else if (lowercaseBoolean && uppercaseBoolean) {
    return createPass(lowercaseString, uppercaseString);
  } else if (lowercaseBoolean && numericBoolean) {
    return createPass(lowercaseString, numericString);
  } else if (lowercaseBoolean && specialCharactersBoolean) {
    return createPass(lowercaseString, specialCharactersString);
  } else if (uppercaseBoolean && numericBoolean && specialCharactersBoolean) {
    return createPass(uppercaseString, numericString, specialCharactersString);
  } else if (uppercaseBoolean && numericBoolean) {
    return createPass(uppercaseString, numericString);
  } else if (uppercaseBoolean && specialCharactersBoolean) {
    return createPass(uppercaseString, specialCharactersString);
  } else if (uppercaseBoolean) {
    return createPass(uppercaseString);
  } else if (numericBoolean && specialCharactersBoolean) {
    return createPass(numericString, specialCharactersString);
  } else if (numericBoolean) {
    return createPass(numericString);
  } else if (specialCharactersBoolean) {
    return createPass(specialCharactersString);
  } else if (lowercaseBoolean) {
    return createPass(lowercaseString);
  }
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