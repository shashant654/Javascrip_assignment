
// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.


console.log("without using console.log()");
console.log("The value of 4 > 3 is true");
console.log("The value of 4 >= 3 is true");
console.log("The value of 4 < 3 is false");
console.log("The value of 4 <= 3 is false");
console.log("The value of 4 == 4 is true");
console.log("The value of 4 === 4 is true");
console.log("The value of 4 != 4 is false");
console.log("The value of 4 !== 4 is false");
console.log("The value of 4 != '4' is false");
console.log("The value of 4 == '4' is true");
console.log("The value of 4 === '4' is false");

console.log("After using console.log()")
console.log(`The value of 4 > 3 is ${4 > 3}`);
console.log(`The value of 4 >= 3 is ${4 >= 3}`);
console.log(`The value of 4 < 3 is ${4 < 3}`);
console.log(`The value of 4 <= 3 is ${4 <= 3}`);
console.log(`The value of 4 == 4  is ${4 == 4 }`);
console.log(`The value of 4 === 4 is ${4 === 4}`);
console.log(`The value of 4 != 4 is ${4 != 4}`);
console.log(`The value of 4 !== 4 is ${4 !== 4}`);
console.log(`The value of 4 != '4' is ${4 != '4'}`);
console.log(`The value of 4 == '4' is ${4 == '4'}`);
console.log(`The value of 4 === '4' is ${ 4 === '4'}`);

const payString = "python"
const payPhone = "jargon"

if(payString.length !== payPhone.length) {
    console.log("truthy comparision");
}

else {
    console.log("falsy comparision");
}