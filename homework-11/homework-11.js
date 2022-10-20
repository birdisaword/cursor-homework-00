
   async function getRandomChinese(resultLength) {
    let promise = () => new Promise((res) => { 
      setTimeout(function() {
        return res(convertToChinese())
      }, 50);
    })

    function convertToChinese() {
      const lastFiveNumbers = [Date.now()].join().slice(-5)
      const numsToChinese = String.fromCharCode(lastFiveNumbers)
      return numsToChinese
    }

    let finalString = '';
    let count = 1;
    while (count <= resultLength) {
      finalString += await promise()
      count++
    }
    return finalString
  }

getRandomChinese(4).then(res =>
  console.log(res))