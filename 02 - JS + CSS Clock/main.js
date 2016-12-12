// Get the all the hands
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const date = new Date();

  // Get the seconds and convert them to degrees
  const seconds = date.getSeconds();
  const secDegrees = ((seconds/60) * 360) + 90;

  // Now start transforming the hand
  secondHand.style.transform = `rotate(${secDegrees}deg)`;

  // Do the same for the rest
  const mins = date.getMinutes();
  const minDegrees = ((mins/60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = date.getHours();
  const hourDegrees = ((hours/12) *360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

// This runs every second
setInterval(setDate,1000);
