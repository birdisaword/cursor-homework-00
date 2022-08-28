// 1
function getMaxDigit(number){
    let int = String(number);
    return (Math.max(...int))
};

// 3
function makeName(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};



// 4 
function countSum (salary) {
    tax1 = 18;
    tax2 = 1.5;
    taxes = tax1 + tax2;
   return salary - (salary / 100 * taxes);
};


// 5
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};



// 7
function converter (str) {
    let rate = 25;

    if (str.includes('$')) {
      return Number(str.slice(0, -1)) * rate + 'UAH'
    };

    if (str.toUpperCase().includes('UAH')) {
       return Number(str.slice(0, -3)) / rate + '$'
    } else {
       return 'Error';
    };
};


 // 8
function getRandomPassword(length = 8) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
};



document.writeln(`Функція №1: ${getMaxDigit(348534)} <br>`);
document.writeln(`Функція №3: ${makeName('bubBaSmith')} <br>`);
document.writeln(`Функція №4: ${(countSum(1000))} <br>`);
document.writeln(`Функція №5: ${(getRandomNumber(1, 10))} <br>`);
document.writeln(`Функція №7: ${(converter('2500uah'))} <br>`);
document.writeln(`Функція №4: ${(getRandomPassword(4))} <br>`);