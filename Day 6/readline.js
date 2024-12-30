// 1. Import readline
const readline = require('readline');

// 2. Create a readline interface to connect with terminal/command line.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 3. Reading values.
rl.question('Enter your firstname: ', (answer1) => {
    rl.question('Enter your lastName: ', (answer2) => {
        console.log(answer1 + ' ' + answer2);
        rl.close(); 
    });
});