// let and const
const hubby = 'NiggaWHaaaaa';
let phone = 'iphone 15';
phone = 'Samsung Galaxy S20';

//default parameter
//spread of three dots
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
//arrow function
const square = x => x * x;
console.log(square(8));
//template String
const myNotes = `I am Mojnu of ${hubby} I have a ${phone}`
console.log(biggest)