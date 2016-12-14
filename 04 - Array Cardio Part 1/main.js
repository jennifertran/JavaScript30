// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Question
console.log("Given the following:");
console.table(inventors);
console.log(flavours);
console.log(people);

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// The function method loops each item in the array
// Takes in one inventor at a time

/* This is the same as:
  const fifteen = inventors.filter(function(inventor) {
    if(inventor.year >= 1500 && inventor.year < 1600)
    {
      // This means we add that particular inventor to the results
      return true;
    }
  });

  inventor => same as function(inventor)

*/

// Returns a boolean
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

console.log("\nPart 1: Give the list of inventors for those who were born in the 1500's")
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

// Map returns the same amount of items as you give it
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

console.log("\nPart 2: Give an array of the inventors first and last names")
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

/* This is the same as:
const ordered = inventors.sort(function(first,second) {
  if(first.year > second.year){
    return 1;
  }
  else {
    return -1;
  }
});
*/

// We return either 1 or -1 to reposition the inventors in the list
// We solve this by using a ternary statement
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

console.log("\nPart 3: Give a sorted array of the inventors by birthyear, from oldest to youngest");
console.table(ordered);

// Array.prototype.reduce()
// reduce is a quicker way to count things

// 4. How many years did all the inventors live?

// The 0 initalizes the total for the first loop
const totalYears = inventors.reduce((total,inventor) => {
  return total + (inventor.passed - inventor.year);
},0);

console.log("\nPart 4: How many years did all the inventors live?");
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a,b) => {
  const prev = a.passed - a.year;
  const next = b.passed - b.year;
  return prev > next ? -1 : 1;
});

console.log("\nPart 5: Sort the inventors by years lived from oldest to youngest");
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// This only works on the wiki page console
/*
const category = document.querySelector(`.mw-category`);
const links = Array.from(category.querySelectorAll('a'));

const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'));

*/

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((prev,next) => {
  // Helps us split the information inorder to organize
  const [prevLast,prevFirst] = prev.split(', ');
  const [nextLast,nextFirst] = next.split(', ');
  return prevLast > nextLast ? 1 : -1;
})

console.log("\nPart 6: Sort the people alphabetically by last name");
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

console.log("\nPart 7: Given the following data, sum up the instances of each of these");
console.log(data);

const frequency = data.reduce((obj,item) => {
  // Check if the item exists first then increment it
  if(!obj[item])
  {
    // if it doesn't initalize it
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {}); // Start with a blank object

console.log(frequency);
