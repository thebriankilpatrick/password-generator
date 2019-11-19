var password = "";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "!@#$%^&*()_-";
var ind = 0;
var characterArray = [lower];
 
var characterPrompt = prompt("How many characters does your password need to be?");
var specialConfirm = confirm("Do you need special characters?");
var uppercaseConfirm = confirm("Do you need uppercase letters?");
var numberConfirm = confirm("Do you need numbers?");

if (specialConfirm === true) {
    characterArray.push(special);
}

if (uppercaseConfirm === true) {
    characterArray.push(upper);
}

if (numberConfirm === true) {
    characterArray.push(number);
}

console.log(characterArray);

function generate(length) {
    password = "";
    for (var i = 0; i < length; i++) {
        var choice = characterArray.length;
        var string = characterArray[ind];
        var x = Math.floor(Math.random() * string.length);
        password += characterArray[ind][x];
        ind++; 
        if (ind === choice) {
            ind = 0;
        }
    }
}


function myFunction() {
    generate(characterPrompt); 
    document.getElementById("textAreaBox").value = password;
}

function copy() {
    let textarea = document.getElementById("textAreaBox");
    textarea.select();
    document.execCommand("copy");
}