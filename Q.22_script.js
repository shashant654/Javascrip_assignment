
// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let maxi = 0;

ages.sort();
console.log(ages);
console.log("Here is the min and max age");
console.log(`Min: ${ages[0]} and Max: ${ages[ages.length - 1]}`);

// Here is logic for find the median
if(ages.length % 2 === 0) {
    console.log("The median is: ", ages[(ages.length / 2) - 1] + " and " + ages[ages.length / 2]);
    
}
else {
    console.log("The median is: ", ages[ages.length / 2]);
}

// Here is the average of ages
let sum = 0;
for(let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
// console.log(sum);
console.log("The average is: ", sum / ages.length);

// Find the range of the ages(max minus min)
console.log("The range of ages is: ", ages[ages.length - 1] - ages[0]);


//- Compare the value of (min - average) and (max - average), use abs() method

const calDiff = (a, b) => {
    return Math.abs(a - b);
}

// Compare the value of (min - average)
const differenceOne = calDiff(ages[0], sum / ages.length);
// Compare the value of (max - average)
const differenceTwo = calDiff(ages[ages.length - 1], sum / ages.length);

console.log(differenceOne);
console.log(differenceTwo);


