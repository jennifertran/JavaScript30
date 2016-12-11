function playSound(e) {
  // ES6 Template strings ${}
  // Selects the corresponding audio given key code
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // Selects the corresponding key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // If there is no audio that corresponds to this, just stop the function
  if(!audio) {
    return;
  }
  else {
    // Rewinds the audio to the start
    // This allows us to play the same key multiple times
    audio.currentTime = 0;
    audio.play();
  }

  // Adds the playing class to the particular key
  key.classList.toggle('playing');
}

function removeTransition(e){
  // Skip the property if it doesn't transform
  if(e.propertyName !== 'transform') {
    return;
  }

  // this is refering to what is being called against it
  this.classList.remove('playing');
}

// Lists all key
const keys = document.querySelectorAll('.key');

// Checks for each key to see if the transition ends, then remove it
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

// We need to listen for a key event
window.addEventListener('keydown', playSound);
