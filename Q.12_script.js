
// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const date = new Date()

console.log(`Today's date and time is: ${date.getFullYear()}-${date.getMonth()}-${date.getDate()} AND TIME IS => ${date.getHours()}:${date.getMinutes()} `);

console.log(`Today's date and time is: ${date.getDate()}-${date.getFullYear()}-${date.getMonth()}- AND TIME IS => ${date.getHours()}:${date.getMinutes()} `);

console.log(`Today's date and time is: ${date.getDate()}-${date.getMonth()}-${date.getFullYear()} - AND TIME IS => ${date.getHours()}:${date.getMinutes()} `);
