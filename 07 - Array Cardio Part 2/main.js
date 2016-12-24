// ## Array Cardio Day 2
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

console.log("Given the following:");
console.table(people);
console.table(comments);

// .some() checks and see's if at least one thing in the array satisfies
// the particular condition

// Array.prototype.some() // is at least one person 19 or older?
console.log("Part 1: Is there at least one person 19 or older?");
const isAdult = people.some(person => {
  const currYear = (new Date()).getFullYear();
  return currYear - person.year >= 19;
});

console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?
console.log("Part 2: Is everyone 19 or older?");
const allAdult = people.every(person => {
  const currYear = (new Date()).getFullYear();
  return currYear - person.year >= 19;
});

console.log(allAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for

// find the comment with the ID of 823423
console.log("Part 3: Find the comment with the ID of 823423");
const findID = comments.find(comment => comment.id === 823423);
console.log(findID);

// Array.prototype.findIndex()
// Find the index with this ID
// delete the comment with the ID of 823423
console.log("Part 4: Delete the comment with the ID of 823423");
const index = comments.findIndex(found => found.id === 823423);
comments.splice(index,1);
console.table(comments);
