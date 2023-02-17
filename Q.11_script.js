// - Find the length of python and jargon and make a falsy comparison statement.

// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const date = new Date()
const pastDate = new Date("1970-01-01")
const elapsed = (date - pastDate)

console.log("Today's year : ",date.getFullYear());
console.log("Today's month :", date.getMonth());
console.log("Today's date :", date.getDate());
console.log("Today's day :" ,date.getDay());
console.log("Today's Now :", date.getHours());
console.log("Today's Now :", date.getMinutes());
console.log("Second elapsed between 170-01-01 to 2023-01-16 is :" , elapsed / 1000);

