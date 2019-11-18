var password = "";
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-";
var charactersLength = characters.length;
 

function generate(length) {
    password = "";
    for ( var i = 0; i < length; i++ ) {
        console.log(password);
        var x = Math.floor(Math.random() * characters.length);
        password = password + characters.charAt(x);
    }
    return password;
};


function myFunction() {
    generate(8); 
    document.getElementById("textAreaBox").value = password;
}

// console.log(generate(8));

function copy() {
    let textarea = document.getElementById("textAreaBox");
    textarea.select();
    document.execCommand("copy");
}