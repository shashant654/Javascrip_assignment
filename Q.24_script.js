
// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

const oddArray = [];
const evenArray = [];

for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        evenArray[ i/2] = i;
    }
    else {
        oddArray[i/2 - 0.5] = i;
    }
}

console.log(oddArray);
console.log(evenArray);
