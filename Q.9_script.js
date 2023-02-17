
// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.


const truthy1 = []
const truthy2 = "shashant"
const truthy3 = "0"

console.log("Here is the truthy value");
console.log(Boolean (truthy1));
console.log(Boolean (truthy2));
console.log(Boolean (truthy3));


// const falsy1 = 0
const falsy1 = !null
const falsy2 = "" 
let falsy3 


console.log("Here is the falsy value");
console.log(Boolean (falsy1));
console.log(Boolean (falsy2));
console.log(Boolean (falsy3));



// n1 = !null               // !t returns true
// n2 = !NaN              // !f returns true
// n3 = !''                 // !f returns true
// n4 = !'Cat'              // !t returns false