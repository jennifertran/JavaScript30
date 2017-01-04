const addItems = document.querySelector('.add-items'); // Form Element
const itemsList = document.querySelector('.plates'); // From the item loading

// Gets the objects from local storage or initalize an empty one
// JSON.parse converts strings back to an object
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  // Prevents the browser from refreshing
  e.preventDefault();

  // Gives us the input
  // this refers to the form element
  const text = (this.querySelector('[name=item]')).value;

  // Place the user's submission into an object
  const item = {
    text,
    check: false
  };

  // Push it into the items array
  items.push(item);

  // Update the list
  updateList(items, itemsList);

  // Save it to the local storage
  // Convert the items to a string first
  localStorage.setItem('items', JSON.stringify(items));

  // Clears the form
  this.reset();
}

// Updates the displayed table
// We initalized the tuples empty incase we pass in nothing
// We named the parameters as it is to be modular
function updateList(tuples = [], tuplesList){
  // Loops every single item in the array
  // Takes in an array of objects and returns a string
  tuplesList.innerHTML = tuples.map((tuple, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${tuple.check ? 'checked' : ''}/>
          <label for="item${i}">${tuple.text}</label>
        </li>
      `;
    }).join(''); // .join takes 1 big string
}

function toggleCheck(e){
  // Check if the target does not match what we are looking for, skip it
  // Part of an event delegation where we listen for something higher in
  // the hierarchy.
  if(!e.target.matches('input')) return;

  // If it does match we need to access the checkbox property
  const currTarget = e.target;
  const currIndex = currTarget.dataset.index;

  // If it's checked, check it and vice versa
  items[currIndex].check = !items[currIndex].check

  // Update the check settings to local storage
  localStorage.setItem('items', JSON.stringify(items));

  // Update the list once more
  updateList(items,itemsList);
}

// Listen for the submit event
addItems.addEventListener('submit', addItem);

// Listen for the unordered list
itemsList.addEventListener('click', toggleCheck);


// When page loads, add any tasks that were stored in the local storage
updateList(items,itemsList);
