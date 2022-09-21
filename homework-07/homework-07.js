const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1 скільки податків ви заплатите як IT-спеціаліст в якійсь з країн

  function getMyTaxes(salary) {
    return this.tax * salary; 
  }

console.log(getMyTaxes.call(litva, 1000))


// 2 скільки у середньому податків платятт IT-спеціалісти у кожній країні

  function getMiddleTaxes() {
    return this.tax * this.middleSalary
  }

console.log(getMiddleTaxes.call(litva))


// 3 скільки всього податків платять IT-спеціалісти у кожній країні

  function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies
  }

  console.log(getTotalTaxes.call(ukraine))


// 4 об'єкт виду: { salary: number, taxes: number, profit: number } - кожні 10 секунд
 
    function getMySalary(country) {
      let timer = 0;
      let timerId = setInterval(() => {
        const salary = getRandomNumber(1500, 2000);
        const tax = +getMyTaxes.call(country, salary).toFixed(2);
        const profit = +(salary - tax).toFixed(2);
        console.log({ 
          salary: salary, 
          taxes: tax, 
          profit: profit 
          })
          if (timer === 10) {
            clearInterval(timerId);
          }
          timer++
        }, 10000)
      
    }
    getMySalary(ukraine)

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;