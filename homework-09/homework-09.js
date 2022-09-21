const container = document.querySelector('.container')
const grid = document.querySelector('.grid')


// create 25 squares

  function createDivElement() {
    for(i = 0; i < 25; i++) {
      const div = document.createElement('div');
      div.classList.add('block');
      grid.append(div)
    }
  }
  createDivElement()


// Рандомний колір

  const randomColor = () => {
    let randomNum = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + randomNum.slice(0, 6);
  };


// Щоб квадрати з'явились на сторінці, generateBlocks();

  function generateBlocks() {
    let boxes = document.querySelectorAll('.block');
    boxes.forEach((el) => el.style.background = randomColor())
  }
  generateBlocks()


// Щоб квадрати з'явились на сторінці та почали змінюватись, generateBlocksInterval(); 

  function generateBlocksInterval() {
    let timer = 0;
    setInterval(() => {
      generateBlocks()
      timer++
    }, 1000)
  }
  generateBlocksInterval()
