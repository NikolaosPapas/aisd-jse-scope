let globalVar = "I am a global variable!";

console.log("Accessing globalVar in the global scope.", globalVar); // Output: I am a global variable!

if (true) {
    console.log("Accessing globalVar inside an if block.", globalVar); // Output: I am a global variable!
  }

  // let globalVar = "I am a global variable!";
// console.log("Accessing globalVar in the global scope.", globalVar);
// if (true) {
//   console.log("Accessing globalVar inside an if block.", globalVar);
// }


if (true) {
    let localVar = "I am a local variable!";
    console.log("Accessing localVar outside the block.", localVar); // Error: localVar is not defined

  }

  // if (true) {
//   let localVar = "I am a local variable!";
//   console.log("Accessing localVar inside the block.", localVar);
// }
// console.log("Accessing localVar outside the block.", localVar);


let message = "Global message";
if (true) {
    let message = "Local message"; // This variable is local to the block
    console.log("Accessing message inside the block.", message); // Output: Local message
  }

  // let message = "Global message";
// if (true) {
//   let message = "Local message"; // This variable is local to the block
//   console.log("Accessing message inside the block.", message); // Output: Local message
// }
// console.log("Accessing message in the global scope.", message);

let counter = 0; // Global variable
console.log("Accessing modified counter in the global scope.", counter); // Output: 5

// let counter = 0; // Global variable
// if (true) {
//   counter = 5; // Modifying the global variable inside the block
//   console.log("Modified counter inside the block.", counter); // Output: 5
// }
// console.log("Accessing modified counter in the global scope.", counter);

if (true) {
    let counter = 10; // Local variable inside the block
    console.log("Counter inside the block.", counter); // Output: 10
  }
  
  counter = counter + 1; // Trying to increment the local variable outside the block
  console.log("Modified counter outside the block.", counter); // Expected Error: counter is not defined