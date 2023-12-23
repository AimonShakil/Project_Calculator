//Project Calculator
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets start Calculation');
    await sleep();
    rainbowTitle.stop();
    console.log(`
    _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|`);
}
Welcome();
let answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter the first number:'
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the Second number :'
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the Operator you want to perform',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    }
]);
let result;
switch (answer.operator) {
    case 'Add':
        result = answer.num1 + answer.num2;
        console.log("The answer for addition is: " + result);
        break;
    case 'Subtract':
        result = answer.num1 - answer.num2;
        console.log("The answer for subtraction is: " + result);
        break;
    case 'Multiplication':
        result = answer.num1 * answer.num2;
        console.log("The answer for multiplication is: " + result);
        break;
    case 'Divsion':
        result = answer.num1 / answer.num2;
        console.log("The answer for division is: " + result);
        break;
}
