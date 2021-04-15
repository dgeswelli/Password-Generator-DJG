var passwordOptions = ""
var numbers = "1234567890";
var special = "!@#$%^&*()_-+=<>?,./{}|[]~`";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var generatePasswordBtn = document.querySelector("#generatePassword");

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
    // Confirming password character options via 4 variables
    var numberChoice = confirm("Include numbers in password?"); {
        if (numberChoice === true) {
            passwordOptions = passwordOptions + numbers;
        }
        else {
            passwordOptions = passwordOptions;
        }
        console.log(numberChoice)
    }
    var specialChoice = confirm("Include special characters in password?"); {
        if (specialChoice === true) {
            passwordOptions = passwordOptions + special;
        }
        else {
            passwordOptions = passwordOptions;
        }
        console.log(specialChoice)
    }
    var upperChoice = confirm("Include uppercase characters in password?"); {
        if (upperChoice === true) {
            passwordOptions = passwordOptions + uppercase;
        }
        else {
            passwordOptions = passwordOptions;
        }
        console.log(upperChoice)
    }
    var lowerChoice = confirm("Include lowercase characters in password?"); {
        if (lowerChoice === true) {
            passwordOptions = passwordOptions + lowercase;
        }
        else {
            passwordOptions = passwordOptions;
        }
        console.log(lowerChoice)
    }
    
    if (!numberChoice && !specialChoice && !lowerChoice && !upperChoice) {
        alert("Generated Password must contain at least 1 of the previous choices");
        return }
        else {
            var generateUniquePassword = "";

            for (var i = 0; i < characterLength; i++) {
                generateUniquePassword += passwordOptions [Math.floor(Math.random() * passwordOptions.length)];
            }
            return generateUniquePassword;
        }
    }


// function to display a generated password

function displayUserPassword() {
    var newPassword = createUserPassword();

    var passwordComplete = document.getElementById("generatedPassword")
    passwordComplete.value = newPassword;
}

generatePasswordBtn.addEventListener("click", displayUserPassword);
