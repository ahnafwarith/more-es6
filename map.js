const numbers = [4, 6, 8, 10];
const output2 = [];

//function old style vs arrow functions
/* function doubleOld(num) {
    return num * 2;
} */
const doubleNew = num => num * 2;

for (const number of numbers) {
    const result = doubleNew(number);
    output2.push(result);
}
/* console.log(output); */
//1. loop through each element
//2. call function for each element
//3. push the result for each element into an array
const output = numbers.map(doubleNew)
/* console.log(output) */
const square = numbers.map(x => x * x);