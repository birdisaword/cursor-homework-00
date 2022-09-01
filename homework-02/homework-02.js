let min, max

 let minValue = parseInt(prompt('enter minimum value'));
 console.log(minValue);

 let maxValue = parseInt(prompt('enter maximum value'));
 console.log(maxValue);

 let omitEvens = confirm('omit even numbers?')
 let sum = 0;


for (let i = minValue; i <= maxValue; i++) {
let isEven = i % 2 === 0;

   if (omitEvens && isEven) {
      continue
    } 
      sum += i;
   };

console.log(sum)