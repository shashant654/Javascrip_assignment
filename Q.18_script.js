
// 18. Write a program which tells the number of days in a month, now consider leap year.



//         FIRST OF ALL WRITE NPM INSTALL PROPT-SYNC THEN NODE SCRIPT.JS 

const prompt = require("prompt-sync")({sigint: true});

// const month = alert("Enter the month");
const month = prompt("Enter the month:");

if(month === "February") {
    console.log("The number of days are either 28 or 29");
}
else if(month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
    console.log("The number of days are 31");
}
else if( month === "April" || month === "June" || month === "September" || month === "November") {
    console.log("The number of days are 30");
}
else {
    console.log("Enter a valid month");
}