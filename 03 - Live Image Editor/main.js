// Selects all the input tags within the controls div
// This gives us a Node List
const input = document.querySelectorAll('.controls input');

function handleUpdate(){
  // this.dataset prints out the stuff with the "data-" and puts it in a object
  // In this case, it prints out sizing: px

  // Since not all variables have sizing we need
  // to put nothing for the color case since it does not have px
  const suffix = this.dataset.sizing || '';

  // Now update the variables we defined in CSS (within root)
  // this.name is from our labels in the html file.
  // this.value is what we get from the user input.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Iterate through the NodeList using forEach
// Listen for a change (click and stop) and then call the handleUpdate
input.forEach(input => input.addEventListener('change',handleUpdate));

// Listen for whenever the user drags the scrollbar around
input.forEach(input => input.addEventListener('mousemove',handleUpdate));
