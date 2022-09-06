let min, max


while (isNaN(min)) {
   (min = prompt('enter minimum value'));
};

while (isNaN(max)) {
   (max = prompt('enter maximum value')); 
};
 
 console.log(min);
 console.log(max);

 let omitEvens = confirm('omit even numbers?')
 let sum = 0;


for (let i = min; i <= max; i++) {
let isEven = i % 2 === 0;

   if (omitEvens && isEven) {
      continue 
    } 
      sum += Number(i);
   };
   console.log(sum)