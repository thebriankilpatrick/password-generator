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

// If statements to confirm user's answers.  It uses those inputs to push the character set into the array.

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
    password = "";                        // This is to "reset" the function for each time it is called
    document.getElementById("copyButton").innerText = "Copy to Clipboard";
    for (var i = 0; i < length; i++) {
        var choice = characterArray.length;  // Declares "choice" as the length of the array
        var string = characterArray[ind];  // Declares "string" as the 'set of characters' string within the array.  "ind" determines which string
        var x = Math.floor(Math.random() * string.length);   // Choses a random index, within the string, inside the array
        password += characterArray[ind][x];
        ind++; 
        if (ind === choice) {     // This will cycle through the array, ensuring it will grab a character from every set chosen
            ind = 0;
        }
    }
}

// Calling my "generate" function

function myFunction() {
    generate(characterPrompt); 
    document.getElementById("textAreaBox").value = password;
}

function copy() {
    let textarea = document.getElementById("textAreaBox");
    textarea.select();
    document.execCommand("copy");
    document.getElementById("copyButton").innerText = "Copied!";
}