const p = document.querySelector('p');
function makeBlue() {
  p.style.color = '#1d1075';
  p.style.fontSize = '30px';
}

// Breakpoints
console.log("Part 1: Breakpoints");
console.log("We can add a breakpoint by right clicking an element and selecting when it should stop");

// Regular
console.log("\nPart 2: Regular");
console.log("The regular way to debug using console.log()");

// Interpolated
console.log("\nPart 3: Interpolated");
console.log("An interpolated way to debug is inserting a word in \"Hello, I am a %s string!\" with \%s", 'simple');

let version = "ES6";
console.log(`We can use the ${version} way of interpolating things using $\{var\}`); // ES6 Style

// Styled
console.log("\nPart 4: Styled");
console.log('%c We can style the text by adding css properties\n', 'font-size:30px; color: #1e5fac');

// warning!
console.log("\nPart 5: Warnings");
console.warn("We can add warnings that can help us trace the stack of our code if something goes wrong");

// Error :|
console.log("\nPart 6: Errors");
console.error("This will also gives us a stack trace");

// Info
console.log("\nPart 7: Info");
console.info("Use this to display any relevant info");

// Assertions
console.log("\nPart 8: Assertions");
console.assert(false, 'Will fire if something is false');

// clearing
console.log("\nPart 9: Clearing");
console.log("Using console.clear() will clear the entire log")

// Viewing DOM Elements
console.log("\nPart 10: Viewing DOM Elements");
console.log("Using console.dir() can show you alot of info about a particular thing");

console.dir(p);

// Grouping together
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
console.log("\nPart 11: Grouping Together");
console.log("Given the following table, we can group partiular data together. groupCollapsed() gives us the option to not collapse when loading");
console.table(dogs);

// Loop through the array
dogs.forEach(dog => {
  console.group(`${dog.name}`);

  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);

  console.groupEnd(`${dog.name}`);
});

// counting
console.log("\nPart 12: Counting");
console.log("Counts the iterations in realtime");
console.count('Method called');
console.count('Method called');
console.count('Function called');
console.count('Method called');

// timing
console.log("\nPart 13: Timing");
console.log("Can tell us how long something takes for example fetching data from github");

console.time('fetching data');
fetch('https://api.github.com/users/jennifertran')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
  })
