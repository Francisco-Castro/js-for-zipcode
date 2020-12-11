
// MODULE 2
// /** Defining a basic function */
// function greetings( name ) {
//   return `Hi ${name}`;
// }
//
// /** Declaring a variable and calling the greetings' function */
// let greeting = greetings('John');
// const t = document.createTextNode(greeting)
// document.getElementById('app').appendChild(t)
//
// /** Printing out the variable */
// console.log(greeting);


// //  Button
var x = document.createElement("BUTTON");
var t = document.createTextNode("Click me please only one time!");
x.appendChild(t);
x.className = "btn btn-dark m-5";
x.onclick = function() {console.log("Hello from Button")}

document.getElementById('app').appendChild(x);
// //  Button

// /** Defining variables */
// let var1 = 'Hello';
// let var2 = 'World';
//
// /** Printing variables using Template Literals */
// console.log(`${var1} ${var2}`);
//
//
// /** Printing variables normal concatenation */
// console.log(var1 + ' ' + var2);
//
// let message = `${var1} ${var2}`;
// //
// document.getElementById('app').innerText = message;


// const rootNode = document.getElementById('app')
// const div = document.createElement("div");
// const content = document.createTextNode("Hi, there!!!!!");
// const divWithContent = div.appendChild(content);
// rootNode.appendChild(divWithContent)

