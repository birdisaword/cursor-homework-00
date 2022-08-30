let min, max

while (isNaN(min) && isNaN(max)) {
   min = prompt('enter minimum value'); 
   max = prompt('enter maximum value'); 
};

 let minValue = parseInt(min);
 console.log(minValue);

 let maxValue = parseInt(max);
 console.log(maxValue);

 let omitEvens = confirm('omit even numbers?')
 let sum = 0;


for (let i = minValue; i <= maxValue; i++) {

let isEven = (i % 2 === 0);

   if (omitEvens && isEven) {
      continue
    } 
      sum += i;
   };

console.log(sum)