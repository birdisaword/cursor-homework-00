const container = document.createElement('div')
container.classList = ('container')
document.getElementById("container-wr").appendChild(container);

const grid = document.createElement('div')
grid.classList = ('grid')
document.getElementById("grid-wr").appendChild(grid);

 function createDivElement() {
   let i = 0;
   for(i = 0; i < 25; i++) {
     const div = document.createElement('div');
     div.classList.add('block');
     grid.append(div)
   } 
 }
 createDivElement()

export function generateBlocksInterval() {
   function generateBlocks() {
     const randomColor = () => {
       let randomNum = (Math.random() * 0xfffff * 1000000).toString(16);
       return '#' + randomNum.slice(0, 6);
     };
     let boxes = document.querySelectorAll('.block');
     boxes.forEach((el) => el.style.background = randomColor())
   };
   setInterval(() => {
     generateBlocks()
   }, 1000)
 }