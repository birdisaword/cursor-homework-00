const buttonA = document.getElementById('a-button')
const buttonS = document.getElementById('s-button')
const buttonD = document.getElementById('d-button')
const buttonF = document.getElementById('f-button')
const buttonSpace = document.getElementById('space-button')

// const audioA = ('./audio/audio1.mp3')

buttonA.addEventListener('keydown', someFunc);

function someFunc(e) {
  if (e.target.value = 'a'){
    console.log({value: e.target.value})
    play1()
  }
}


function play1() {
  audio1.play();
}