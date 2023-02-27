// //Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const year = new Date();
console.log(year.getFullYear());

const d = new Date();
console.log(d.getMonth() + 1);

const date = new Date();
console.log(date.getDate());

const day = new Date();
console.log(day.getDay());

const hours = new Date();
console.log(hours.getHours());

const minutes = new Date();
console.log(minutes.getMinutes());

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day1 = hour * 24;
const year2 = day1 * 365;

let seconds = Math.round(Date.now() / second);
console.log(seconds);
