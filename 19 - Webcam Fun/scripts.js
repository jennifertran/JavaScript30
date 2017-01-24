const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// Gets the video that is being piped into the video element
function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);

      // Converts it into something the video can understand
      video.src = window.URL.createObjectURL(localMediaStream);

      video.play();
    })
    // Incase someone doesn't allow us to use the camera
    .catch(err => {
      console.error(`Webcam Access Denied`, err);
    });
}

// Take a frame from the webcam and paste it into the canvas
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  // Resize the canvas
  canvas.width = width;
  canvas.height = height;

  // Take an image from the video and place it into the canvas
  // every few seconds. Return stops it from running.
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    // Grab the pixel of the images
    let pixels = ctx.getImageData(0, 0, width, height);

    // Red filter effect
    //pixels = redEffect(pixels);

    // RGB effect
    pixels = rgbSplit(pixels);

    // Green screen effect
    //pixels = greenScreen(pixels);

    // Transparency to the stacked images
    // Ghosting effect
    ctx.globalAlpha = 0.8;


    // Set the filter effect to the image
    ctx.putImageData(pixels, 0, 0);

  }, 16);
}

// Takes a photo and allows the user to save
function takePhoto() {
  // Plays the snap sound whenever the user takes the photo
  snap.currentTime = 0;
  snap.play();

  // Takes the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');

  // Create a link of the data image
  const link = document.createElement('a');
  link.href = data;

  // Create thumbnails from the taken photos
  link.setAttribute('download', 'photo');
  link.innerHTML = `<img src="${data}" alt="Webcam Image" />`;

  // Allow us to download the image
  strip.insertBefore(link, strip.firstchild);
}

function redEffect(pixels){
  for(let i = 0; i< pixels.data.length; i +=4){
    pixels.data[i + 0] = pixels.data[i + 0] - 100; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }

  return pixels;
}

function rgbSplit(pixels){
  for(let i = 0; i< pixels.data.length; i +=4){
    pixels.data[i - 150] = pixels.data[i + 0]; // red
    pixels.data[i + 200] = pixels.data[i + 1]; // green
    pixels.data[i - 150] = pixels.data[i + 2]; // Blue
  }

  return pixels;
}

function greenScreen(pixels) {
  // Holds min and max green
  const levels = {};

  // Grab the slider info
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  // Loop over every pixel
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    // If the values are between the min and max values,
    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // Take it out from transparency pixel
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

// Listens to see if the video starts playing, paint it to canvas
video.addEventListener('canplay', paintToCanvas);
