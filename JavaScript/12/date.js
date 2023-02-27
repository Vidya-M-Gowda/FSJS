// Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm

var date = new Date();
console.log("dd/mm/yyyy => " + date.toLocaleString());
console.log("dd/mm/yyyy => " + date.toLocaleDateString());
console.log("dd/mm/yyyy => " + date.toDateString());
console.log("dd/mm/yyyy => " + date.toTimeString());
console.log("dd/mm/yyyy => " + date.toLocaleTimeString());
console.log(date);