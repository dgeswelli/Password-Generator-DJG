var generatePasswordBtn = document.querySelector("#generatePassword");
var passwordOptions = ""
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()_-+=<>?,./{}|[]~`"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";

function createUserPassword() {
    var characterLength = parseInt(
        prompt("Choose character length of password. Required to be between 8-128 in length")
    );
    // Checks if entered character is a number
    if (isNaN(characterLength) === true) {
        alert("Please select a numerical character length!");
        return;
    }
    // Checks if character length is too short
    if (characterLength < 8) {
        alert("Character length is too short!");
        return;
    }
    // Checks if character length is too short
    if (characterLength > 128) {
        alert("Character length is too long!");
        return;
    }
    var numberChoice = confirm("Include numbers in password?"); {
        if (numberChoice === true) {
            passwordOptions = passwordOptions + numbers;
        }
        else {
            passwordOptions = passwordOptions;
        }
    }
    var specialChoice = confirm("Include special characters in password?"); {
        if (specialChoice === true) {
            passwordOptions = passwordOptions + specialCharacters;
        }
        else {
            passwordOptions = passwordOptions;
        }
    }
    var upperChoice = confirm("Include uppercase characters in password?"); {
        if (upperChoice === true) {
            passwordOptions = passwordOptions + uppercase;
        }
        else {
            passwordOptions = passwordOptions;
        }
    }
    var lowerChoice = confirm("Include lowercase characters in password?"); {
        if (lowerChoice === true) {
            passwordOptions = passwordOptions + lowercase;
        }
        else {
            passwordOptions = passwordOptions;
        }
    }
}