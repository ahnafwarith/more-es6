// declare a variable based on the name of an object property
const myObject = { x: 2, y: 5, z: 600, a: 25, b: 89 };
const { x, b } = myObject;

//destructing array, taking first two elements from an array
const [p, q] = [45, 50, 60, 75];

//nested objects
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Ahnaf', age: 20 },
    web: {
        work: 'webdev',
        employee: 25,
        framework: 'angular',
        tech: {
            first: 'HTML5',
            second: 'CSS3',
            third: "JavaScript"
        }
    }
}
//chaining
const takiTaki = company.web.tech
/* console.log(takiTaki) */

//optional chaining
console.log(company?.web?.tech.fourth.fith)