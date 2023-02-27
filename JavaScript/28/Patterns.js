//Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
    // *
    // **
    // ***
 
//  b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//     ***
//     ***
//     ***

//  c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//       *
//      ***
//      *****

//Triangle
let t = 3;
let string = "";
for (let i = 1; i <= t; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


//Square
let s = 3; 
let string1 = "";

for(let i = 0; i < s; i++) { 
  for(let j = 0; j < s; j++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);


//Pyramid
let p = 3;
let string2 = "";
for (let i = 1; i <= p; i++) {
  // printing spaces
  for (let j = 1; j <= p - i; j++) {
    string2 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);

