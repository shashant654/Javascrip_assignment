// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.


//         FIRST OF ALL WRITE NPM INSTALL PROPT-SYNC THEN NODE SCRIPT.JS 

const prompt = require("prompt-sync")({sigint: true});
const number = prompt("Enter a number");

if(number % 2 == 0) {
    console.log(number + " is an even number");
}
else  {
    console.log(number + " is an odd number");
}