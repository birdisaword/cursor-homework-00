
// завдання 1

function * createIdGenerator() {
  let i = 1;
  while(true){
    yield i++
  }
}

const idGenerator = createIdGenerator();

console.log('завдання 1:');
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

// завдання 2

function* newFontGenerator(size) {
  let step = 2
  while (size){
      let current = yield size
      if (current === "up") {
        size = size + step
      } else if (current === "down") {
        size = size - step
      }
    }
  } 
 
const fontGenerator = newFontGenerator(14);

console.log('завдання 2:');
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next().value)
console.log(fontGenerator.next("down").value)