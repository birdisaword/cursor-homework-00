
// 1 масив випадкових цілих чисел

  function getRandomArray(length, min, max) {
    const numbers = [];
    
    for (let i = min; i <= length; i++) {
      const randomNum = Math.floor((Math.random(i) * max + min));
      numbers.push(randomNum);
    }
    return numbers;
  }
console.log(getRandomArray(14, 1, 10))


// 2 мода всіх переданих аргументів

  function getModa(...numbers) {
    const objOfNums = {};
    const arrOfNums = [...numbers]. filter(n => Number.isInteger(n));
    
    arrOfNums.forEach((el) => {
      if (objOfNums[el]) {
        objOfNums[el] += 1
      } else {
        objOfNums[el] = 1
      }
    });
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
console.log('mode: ' + getModa(1, 5, 3, 6.5, 8, 8.7, 8, 8, 44, 3))


// 3  середнє арифметичне всіх переданих аргументів

  function getAverage(...numbers) {
    let i = 0;
    let averageNum;
    const arrOfNums = [...numbers]. filter(n => Number.isInteger(n));
    let sumOfNums = arrOfNums.reduce((a, b) => a + b, 0); 
    averageNum = sumOfNums / arrOfNums.length;
    
    return averageNum
  }

console.log('average number: ' +  getAverage(2, 5, 3, 7, 8, 35, 2))


// 4 медіана всіх переданих аргументів

  function getMedian(...numbers) {
    let i = 0;
    const arrOfNums = [...numbers]. filter(n => Number.isInteger(n));
    let sortedArr = arrOfNums.sort((a, b) => a - b);
    let len = sortedArr.length;
    let median;
    let middle = Math.floor(len / 2);
    let thisArrMiddle = arrOfNums[middle]
    let thisArrRest = arrOfNums[middle - 1]

      if (len % 2 === 0) { 
        median = (thisArrMiddle + thisArrRest) / 2; 
      } else {
        median = arrOfNums[middle] 
      }
      return median      
}
console.log('median: ' + getMedian(43, 7, 25, 9, 8, 67, 14, 3))


// 6 кількість чисел більших 0

  function countPositiveNumbers(...numbers) {
    let positiveNums = [];
    let finalCount;
    let arr = [...numbers];

    arr.forEach((el) => {
      if (el >= 0) {
        positiveNums.push(el)
      }
    });
    finalCount = positiveNums.length
    
    return finalCount
  }
       
console.log('count of positive numbers: ' + countPositiveNumbers(-2, 6, 34, 6, -6, -7, 3, -9))


// 7 елементи, які діляться націло на 5

  function getDividedByFive(...numbers) {
    const filterArr = value => value % 5 === 0;
    const dividedByFiveNums = [...numbers].filter(filterArr);
    return dividedByFiveNums
  }

console.log('divided by five: ' + getDividedByFive(5, 2, 7, 6, 9, 15))