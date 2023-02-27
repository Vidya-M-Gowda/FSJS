//Write a program to check that the number given by the user is a prime number or not.
const prompt=require("prompt-sync")({sigint:true}); 

const number = parseInt(prompt("Enter a number: "));
let isPrime = true;
let i=2;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

if(number < 1){
    console.log("Invalid Input")
}
