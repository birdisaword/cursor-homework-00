export function getRandomArray(length, min, max) {
  const numbers = [];
  
  for (let i = min; i <= length; i++) {
    const randomNum = Math.floor((Math.random(i) * max + min));
    numbers.push(randomNum);
  }
  return numbers;
}