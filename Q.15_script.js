
// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F


//         FIRST OF ALL WRITE NPM INSTALL PROPT-SYNC THEN NODE SCRIPT.JS 

const prompt = require("prompt-sync")({sigint: true});

const score = prompt("Enter your score to know your grades: ");

if(score >= 80 && score <= 100) {
    console.log("Grade A");
}
else if(score >= 70 && score <= 89) {
    console.log("Grade B");
}
else if(score >= 60 && score <= 69) {
    console.log("Grade C");
}
else if(score >= 50 && score <= 59) {
    console.log("Grade D");
}
else if(score >= 0 && score <= 49) {
    console.log("Grade F");
}
else {
    console.log("You will try next time");
}