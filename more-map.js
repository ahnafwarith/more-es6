const friends = ['Tom Hanks', 'Tom Brady', 'Tom Holland', 'Tom Cruise'];

const fLengths = friends.map(friend => friend.length)
console.log(fLengths)

const products = [
    { name: 'bottle', price: 1000, color: 'yellow' },
    { name: 'phone', price: 12200, color: 'black' },
    { name: 'glass', price: 1200, color: 'black' },
    { name: 'note', price: 122, color: 'blue' },
];
const productNames = products.map(product => product.price);
products.map(product => console.log(product))
/* console.log(productNames) */