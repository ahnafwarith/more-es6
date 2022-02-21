/* const numbers = [5, 7, 9, 17, 30, 80, 2, 19];
const smallNumbers = numbers.filter(num => num < 10);
console.log(smallNumbers);  */
const products = [
    { name: 'bottle', price: 1000, color: 'yellow' },
    { name: 'phone', price: 12200, color: 'black' },
    { name: 'glass', price: 1200, color: 'black' },
    { name: 'note', price: 122, color: 'blue' },
];
const expensive = products.find(x => x.price > 10000);
console.log(expensive);