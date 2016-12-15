const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');
}

function toggleActive(e){
  // We do this incase if the user runs this in Safari
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

// Listen for a panel click
panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
