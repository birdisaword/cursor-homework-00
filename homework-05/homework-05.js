// 1
 const numbers = [];

function getRandomArray(length, min, max) {
   
for (let i = min; i <= length; i++) {
    numbers.push(Math.floor((Math.random(i) * max + min)));
}
return numbers;
};
console.log(getRandomArray(14, 1, 10))


// 2

const objOfNums = {};

function getModa(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(objOfNums[arr[i]])) {
            objOfNums[arr[i]] += 1
        } else {
            objOfNums[arr[i]] = 1
        }
    }
let highestValue = 0;
let highestValueKey = -Infinity;

for (let key in objOfNums) {
    const value = objOfNums[key] 

        if (value > highestValue) {
            highestValue = value;
            highestValueKey = key;
        } 
}
 return highestValueKey
}

console.log('mode: ' + getModa(numbers))

// const objOfNums = {};

// function getModa(arr) {
    
//     for (let i = 0; i < arr.length; i++) {
//         if (Number.isInteger(objOfNums[arr[i]])) {
//             objOfNums[arr[i]] += 1
//         } else {
//             objOfNums[arr[i]] = 1
//         }
//     }

// let highestValue = 0;
// let highestValueKey = -Infinity;

// for (let key in objOfNums) {
//     const value = objOfNums[key] 

//         if (value > highestValue) {
//             highestValue = value;
//             highestValueKey = key;
//         } 
// }
//  return highestValueKey
// }

// console.log('mode: ' + getModa(numbers))


// 3

function getAverage(arr) {
let i = 0;
let averageNum;

        if (Number.isInteger(arr[i])) {
      let sumOfNums = arr.reduce((a, b) => a + b, 0); 
      averageNum = Math.floor(sumOfNums / arr.length);
        }
return averageNum
    }

console.log('average number: ' +  getAverage(numbers))


// 4

function getMedian(arr) {
    let i = 0;
    if (Number.isInteger(arr[i])) {
    let sortedArr = arr.sort(function(a, b){return a - b});
    let len = sortedArr.length;
    let median;
    let medianIndex = Math.floor(len / 2);

    if (len % 2 === 0) { 
        median = (arr[medianIndex] + arr[medianIndex - 1] ) / 2; 
    } else {
        median = arr[medianIndex] 
    }
    return median      
}}
console.log('median: ' + getMedian(numbers))


// 6 
let exampleArr = [4, 3, -5, -2, 0, 1, 4, 3, 5]

function countPositiveNumbers(arr) {
let positiveNums = [];
let finalCount;

    for (let i = 0; i < arr.length; i++) {
       if (arr[i] >= 0) {
        positiveNums.push(arr[i])
   }
   finalCount = positiveNums.length
}
return finalCount
}
console.log('count of positive numbers: ' + countPositiveNumbers(exampleArr))


// 7
function getDividedByFive(arr) {
    let dividedByFiveNums = [];

    for (let i = 0; i < arr.length; i++) {
       if (arr[i] % 5 === 0) {
        dividedByFiveNums.push(arr[i])
    }
}
return dividedByFiveNums
 }
console.log('divided by five: ' + getDividedByFive(numbers))