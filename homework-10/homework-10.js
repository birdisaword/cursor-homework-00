
const keys = document.querySelectorAll('.key');

function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if(!key) {
    return
  }
  sound.currentTime = 0;
  sound.play();
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') {
    return
  }
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);