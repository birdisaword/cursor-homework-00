
export const keys = document.querySelectorAll('.key');

export function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  
  if(!key) {
    return
  }
  sound.currentTime = 0;
  sound.play();
 
  key.classList.toggle('active');
  setTimeout(() => {
    key.classList.toggle('active')
  }, "100")
}

window.addEventListener('keydown', playSound);

