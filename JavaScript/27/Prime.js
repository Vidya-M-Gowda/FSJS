// Write a program to print all the prime number between 0 to 100 (0 and 100 included).
const prompt=require("prompt-sync")({sigint:true});
const from = parseInt(prompt('Enter lower number: '));
const to = parseInt(prompt('Enter higher number: '));

console.log("The prime numbers between "+from+ " to " +to+ " are:");

// looping from lowerNumber to higherNumber
for (let i = from; i <= to; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}