
// завдання 1

// const iterator = {
//   done: false,
//   value: '',
// }

// function * createIdGenerator() {
//   let i = 1;
//   while(true){
//     yield i++
//   }
// }

// const idGenerator = createIdGenerator();

// console.log(idGenerator.next().value);
// console.log(idGenerator.next().value);
// console.log(idGenerator.next().value);

// завдання 2

// const fontGenerator = newFontGenerator(14); // 14 – стартове значення

// fontGenerator.next("up").value -> 14

// fontGenerator.next("up").value -> 16

// fontGenerator.next("up").value -> 18

// fontGenerator.next().value -> 18

// fontGenerator.next("down").value -> 16

// fontGenerator.next("down").value -> 14

// fontGenerator.next("down").value -> 12

// fontGenerator.next().value -> 12

// const block = document.getElementsByClassName('block')
// const text = document.getElementsByClassName('text')
// const btnUp = document.getElementsByClassName('up')
// const btnDown = document.getElementsByClassName('down')

const iterator = {
  done: false,
  value: '',
}

// function changeSize() {
// let i = 14;
// const up = i+=2
// const down = i-=2
// }

function * newFontGenerator(i) {
  while(true){
    let i = yield 14;
    const up = yield i + 2;
    const down = yield i - 2;
  }

}

// function* upFont() {
//   while(true){
//     yield up
//     }
// }

// function* downFont() {
//   while(true){
//     yield down
//     }




const fontGenerator = newFontGenerator(14);

console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next().value)
console.log(fontGenerator.next("down").value)