//Write a program which tells the number of days in a month, now consider leap year.

var getDaysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(2, 2023));
console.log(getDaysInMonth(2, 2024));
console.log(getDaysInMonth(11, 2022));
console.log(getDaysInMonth(8, 2024));