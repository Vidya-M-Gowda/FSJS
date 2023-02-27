// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = 22;  
// console.log("age =  "+age)

const prompt=require("prompt-sync")({sigint:true}); 
  
var age = prompt("What's your age: ");
console.log("Your age is " +age+ "!");

// if-else statement 
if (age > 18){
    console.log("You are old enough to drive") 
}else{
    console.log("wait for the "+(18-age)+"  year until you to turn 18. ")
}
	

