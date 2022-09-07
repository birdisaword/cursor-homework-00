// 1

  function getRandomArray(length, min, max) {
    const numbers = [];
    for (let i = min; i <= length; i++) {
    numbers.push(Math.floor((Math.random(i) * max + min)));
    }
    return numbers;
  }
console.log(getRandomArray(14, 1, 10))


// 2

  function getModa(arrOfNums) {
    const objOfNums = {};
    
    for (let i = 0; i < arrOfNums.length; i++) {
      if (Number.isInteger(objOfNums[arrOfNums[i]])) {
            objOfNums[arrOfNums[i]] += 1
      } else {
            objOfNums[arrOfNums[i]] = 1
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
console.log('mode: ' + getModa(getRandomArray(14, 1, 10)))


// 3

  function getAverage(arrOfNums) {
    let i = 0;
    let averageNum;

    if (Number.isInteger(arrOfNums[i])) {
    let sumOfNums = arrOfNums.reduce((a, b) => a + b, 0); 
    averageNum = Math.floor(sumOfNums / arrOfNums.length);
      }
    return averageNum
    }

console.log('average number: ' +  getAverage(getRandomArray(14, 1, 10)))


// 4

  function getMedian(arrOfNums) {
    let i = 0;
      if (Number.isInteger(arrOfNums[i])) {
    let sortedArr = arrOfNums.sort(function(a, b){return a - b});
    let len = sortedArr.length;
    let median;
    let medianIndex = Math.floor(len / 2);

      if (len % 2 === 0) { 
        median = (arrOfNums[medianIndex] + arrOfNums[medianIndex - 1] ) / 2; 
      } else {
        median = arrOfNums[medianIndex] 
      }
      return median      
}}
console.log('median: ' + getMedian(getRandomArray(14, 1, 10)))


// 6 

  function countPositiveNumbers(...arrOfNums) {
    let positiveNums = [];
    let finalCount;

    for (let i = 0; i < arrOfNums.length; i++) {
       if (arrOfNums[i] >= 0) {
        positiveNums.push(arrOfNums[i])
       }
       finalCount = positiveNums.length
    }
  return finalCount
  }
console.log('count of positive numbers: ' + countPositiveNumbers(-2, 3, 6, -6, 4, -7, 3, -9))


// 7
  function getDividedByFive(arrOfNums) {
    const dividedByFiveNums = arrOfNums.filter(filterArr);

    function filterArr(value) {
      return value % 5 === 0;
    }
  return dividedByFiveNums
  }

console.log('divided by five: ' + getDividedByFive(getRandomArray(14, 1, 10)))