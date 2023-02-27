//Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F
const prompt=require("prompt-sync")({sigint:true}); 

var marks = prompt("Enter Score: ");
console.log("Your Score is "+marks);

if(marks>=80)
    {
        console.log("Grade A");
    }
    else if(marks>=70)
    {
        console.log("Grade B");
    }
    else if(marks>=60)
    {
        console.log("Grade C");
    }
    else if(marks>=50)
    {
        console.log("Grade D");
    }
    else if(marks<=49)
    {
        console.log("Grade F");
    }
    