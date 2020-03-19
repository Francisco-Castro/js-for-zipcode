/** Spread operator for Arrays */
let arrayOfNumbers = [1, 2, 3, 4, 5];

let anotherArrayOfNumbers = [...arrayOfNumbers];
anotherArrayOfNumbers.push(true);

console.log(arrayOfNumbers);
console.log(anotherArrayOfNumbers);


/** Spread operator for Objects */

let example1 = {
   firstName: 'Francisco'
};

let example2 = {
   ...example1,
   firstName: 'Frank',
};

console.log(example1);
console.log(example2);
