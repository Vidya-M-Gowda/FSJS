// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.
const prompt=require("prompt-sync")({sigint:true}); 
  
var num = prompt("Enter a number: ");

if((num % 2)==0){
       console.log(""+num+" is Even")
}else{
    console.log(""+num+" is Odd")
}