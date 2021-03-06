var password = "";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "!@#$%^&*()_-";
var ind = 0;
var characterArray = []; 

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
console.log(slider);
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
 
// var characterPrompt = prompt("How many characters does your password need to be?");

console.log(characterArray);

// Function to check what checkboxes are clicked, and push the appropriate strings into the array

function reqCheck() {
    if (document.getElementById("symbolCheck").checked === true) {
        characterArray.push(special);
    }

    if (document.getElementById("uppercaseCheck").checked === true) {
        characterArray.push(upper);
    }

    if (document.getElementById("numberCheck").checked === true) {
        characterArray.push(number);
    }

    if (document.getElementById("lowercaseCheck").checked === true) {
        characterArray.push(lower);
    }

}

function generate(length) {
    reqCheck();  // Calls my function to check what checkboxes are clicked
    password = "";                        // This is to "reset" the function for each time it is called
    console.log(slider.value);

    if (characterArray.length === 0) {
        console.log("Step one");
        $("#myModal").modal();
        return
    }

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
    characterArray = []; // Resets the array, as if no checkboxes are clicked
}

// Calling my "generate" function

function myFunction() {
    generate(slider.value); 
    document.getElementById("textAreaBox").value = password;
}

function copy() {
    let textarea = document.getElementById("textAreaBox");
    textarea.select();
    document.execCommand("copy");
    document.getElementById("copyButton").innerText = "Copied!";
}