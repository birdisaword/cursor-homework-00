// 1
 function getMaxDigit(number){
    const stringifiedNum = String(number);
    return Math.max(...stringifiedNum)
}


// 3
function makeName(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}


// 4 
function countSum(salary) {
   const tax1 = 18;
   const tax2 = 1.5;
   const taxes = tax1 + tax2;
   const taxSum = salary / 100 * taxes
   return salary - taxSum;
}


// 5
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// 7
function converter(str) {
    let rate = 25;

    if (str.includes('$')) {
      return Number(str.slice(0, -1)) * rate + 'UAH'
    };

    if (str.toUpperCase().includes('UAH')) {
       return Number(str.slice(0, -3)) / rate + '$'
    };
    return 'Error';
}


 // 8
function getRandomPassword(length = 8) {
    let max = Math.pow(10, length - 1);
    let min = Math.pow(10, length) - Math.pow(10, length - 1);

    return Math.floor(max - Math.random() * min + min);
}


document.writeln(`Функція №1: ${getMaxDigit(348534)} <br>`);
document.writeln(`Функція №3: ${makeName('bubBaSmith')} <br>`);
document.writeln(`Функція №4: ${(countSum(1000))} <br>`);
document.writeln(`Функція №5: ${(getRandomNumber(1, 10))} <br>`);
document.writeln(`Функція №7: ${(converter('2500uah'))} <br>`);
document.writeln(`Функція №4: ${(getRandomPassword(5))} <br>`);