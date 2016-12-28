// Selects every checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
  // Check to see if the shift key has been held down
  // and they are checking it.
  if(e.shiftKey && this.checked){
    let inBetween = false;
    // Loop over each checkbox
    checkboxes.forEach(checkbox => {
      // Needs to go both ways
      // the this includes if we initally checked it
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
      }

      // Check everything if is in-between
      if(inBetween){
        checkbox.checked = true;
      } 
    });
  }

  lastChecked = this;
}

// Listen for whenever one of the checkboxes get's clicked
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
