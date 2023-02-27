// //The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// - Sort the array and find the min and max age
var max = Math.max(...ages); 
var min = Math.min(...ages);
console.log(min)
console.log(max)

// - Find the median age(one middle item or two middle items divided by two)
const median = arr => {
    const mid = Math.floor(arr.length / 2),
      num = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? num[mid] : (num[mid - 1] + num[mid]) / 2;
  };

console.log(median(ages))

// - Find the average age(all items divided by number of items)
const average = ages.reduce((a, b) => a + b, 0) / ages.length;
console.log(average)

//Find the range of the ages(max minus min)
let range = max - min;
console.log(range)

//Compare the value of (min - average) and (max - average), use abs() method
function maximum(x,y)
    {
            return ((x + y + Math.abs(x - y)) / 2);
    }
     
function minimum(x,y)
    {
            return ((x + y - Math.abs(x - y)) / 2);
    }

    let x = min - average;
    let y = max - average;

    console.log(maximum(x,y))
    console.log(minimum(x,y))