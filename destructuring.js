const fish = { id: 58, name: 'King Hilsha', price: 900, phone: '01795511141', address: 'Chandpur', dress: 'silver' };

/* const price = fish.price;
const phone = fish.phone;
const dress = fish.dress;
const id = fish.id; */

const { phone, price, dress, id } = fish;

/* console.log(price, phone, dress, id); */

const company = {
    name: 'GP',
    ceo: { id: 01, name: 'Ahnaf', age: '20' },
    web: { work: 'webDev', employee: 22, framework: 'react' }
};
/* const work = company.web.work;
const framework = company.web.framework; */
const { frameWork, work } = company.web;
console.log(frameWork, work);