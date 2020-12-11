let superman = {
   name: 'Clark',
   lastName: 'Ken',
   power: 'Strength',
   getName() {
      return `${this.name} ${this.lastName} - power: ${this.power}`;
   }
   // getName: () => `${this.name} ${this.lastName} - power: ${this.power}`;
};

console.log(superman.getName());

/** 3 variables in different lines */
// let name = superman.name;
// let lastName = superman.lastName;
// let power = superman.power;

let {name, lastName, power: feature} = superman;
console.log(name);
console.log(lastName);
console.log(feature);

/** Destructuring Arrays */

// let [number1, number2, number3] = [3, 5, 1];
//
// console.log(number3);

