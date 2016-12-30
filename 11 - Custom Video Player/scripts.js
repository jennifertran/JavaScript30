// Grab all the elements required
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Toggles the play/pause button
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Updates the play button whenever it is played
function updateButton() {
  // we can use this.paused because it is bounded to the video
  if(this.paused)
  {
    toggle.textContent = '►';
  } else {
    toggle.textContent = '❚ ❚';
  }
}


function skip() {
  // parseFloat converts it into a number
  video.currentTime += parseFloat(this.dataset.skip);
}

// Updates the volume or playback rate
function updateRange() {
  video[this.name] = this.value;
}

function updateProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Is called whenever someone moves the progressbar
function jump(e) {
  const jumpTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = jumpTime;
}

/* We need to hook it up with event listeners */

// Plays/Stop whenever we click the video
video.addEventListener('click', togglePlay);
toggle.addEventListener('click',togglePlay);

// Updates the play/pause button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// Updates the Progressbar as the video is playing
video.addEventListener('timeupdate', updateProgressBar);

// Listen for all types of skip
skipButtons.forEach(button => button.addEventListener('click',skip));

// Listen for a change in the ranges
ranges.forEach(range => range.addEventListener('change', updateRange));
ranges.forEach(range => range.addEventListener('mousemove', updateRange));

// Listens for any movement in the progressbar
let mousedown = false;

progress.addEventListener('click',jump);
// If the mousedown is false it will return otherwise check the
// next logic condition
progress.addEventListener('mousemove', (e) => mousedown && jump(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
