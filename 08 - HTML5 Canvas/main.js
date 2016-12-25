// Grab the canvas
const canvas = document.querySelector('#draw');

// Context can be 2D or 3D
const context = canvas.getContext('2d');

// We need to resize our canvas before doing anything
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Inital paint brush settings
context.strokeStyle = '#f00b42';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 30;

// Text settings
context.font = "30px Comic Sans MS";
context.fillStyle = "black";
context.textAlign = "center";
context.fillText("Click away!!", canvas.width/2, canvas.height/2);

// Optional, there are many more different settings to use
//context.globalCompositeOperation = 'overlay';

// Flags
let isDrawing = false;
let growing = true;

// Tells us where the drawing will start
let lastX = 0;
let lastY = 0;
let hue = 0;

// Takes in an event
function draw(e) {
  // Stops the function from running when the mouse is not pressed down
  if(!isDrawing) {
    return;
  }
  else {
    console.log(e);
    // (hue, saturation, lightness)
    context.strokeStyle = `hsl(${hue}, 100%,50%)`;

    context.beginPath();
    // Start from
    context.moveTo(lastX, lastY);
    // End to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    // ES6 Trick called structing in an array
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // Checks to see if the colors made a 360
    if(hue >= 360){
      hue = 0;
    } else {
      hue++;
    }

    // Switch the direction after a certain amount of increments
    if(context.lineWidth >= 80 || context.lineWidth <=20){
      growing = !growing;
    }

    if(growing){
      context.lineWidth++;
    } else {
      context.lineWidth--;
    }

  }
}

// When the mouse is pressed down update position, passing event
canvas.addEventListener('mousedown', (e)=> {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> isDrawing = false);

// When the mouse goes off screen
canvas.addEventListener('mouseout', ()=> isDrawing = false);
