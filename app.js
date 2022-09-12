const functions = require('./functions');
console.log(functions);
console.log(`res: ${functions(1,2)}`);
console.log(`PI: ${functions.PI}`);
console.log(`SomeMathObject: ${functions.SomeMathObject}`);
console.log(`SomeMathObject: ${new functions.SomeMathObject()}`);

// eventEmitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('functions', (num1, num2) => {
    console.log(`functions: ${num1 + num2}`);
});

eventEmitter.emit('functions', 1, 2);

let John = new functions.Person('John');
let Mary = new functions.Person('Mary');

John.on('name', () => {
    console.log(`My name is ${John.name}`);
});

Mary.on('name', () => {
    console.log(`My name is ${Mary.name}`);
});

John.emit('name');
Mary.emit('name');

// interactivity
const readline = require('readline');
const rl = readline.createInterface({
                                    input: process.stdin,
                                    output: process.stdout
                                });

// random number
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

// ask question
rl.question(`What is ${num1} + ${num2}? `,
            (userInput) => {
                if (userInput.trim() == answer) {
                    rl.close();
                } else {
                    rl.setPrompt('Incorrect response, please try again: ');
                    rl.prompt();
                    rl.on('line', (userInput) => {
                        if (userInput.trim() == answer) {
                            rl.close();
                        } else {
                            rl.setPrompt(`Your answer of ${userInput} is incorrect, please try again: `);
                            rl.prompt();
                        }
                    });
                }
            });

rl.on('close', () => {
    console.log('Correct👌');
});
