export function calculateWordLetters(str) {
  const arrOfLetters = str.split('')
  const count = {};

  arrOfLetters.forEach(function(i) {
    count[i] = (count[i] || 0) + 1; 
  });
return count
}