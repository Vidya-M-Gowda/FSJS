// //Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer

const prompt=require("prompt-sync")({sigint:true}); 

var month = prompt("Enter Month (Like JAN, FEB): ");
console.log("Month is "+month);


if(month =='JAN' || month== 'DEC' || month == 'FEB'){
console.log('winter');}
else if(month =='APR' || month=='MAR' || month== 'MAY'){
console.log('spring');}
else if(month=='AUG'|| month=='JUL'|| month=='JUN'){
console.log('summer');}
else if(month=='SEP' || month=='OCT' || month=='NOV'){
console.log('autumn')}

