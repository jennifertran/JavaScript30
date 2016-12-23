// Endpoint is from a github repository that contains all of the data
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

// Fetch is a new API in the web browser that allows us to capture the data
// in which returns a promise which is something that will be returned
fetch(endpoint)
  // Since the fetch does not know what type of file its getting, we need
  // to tell it that it's a json file
  .then(blob => blob.json())
  // We need to do this again to actually get the raw data
  // Or you can use cities.push(...data) to keep cities const
  .then(data => cities = data)

// Filters the cities object into a subset that matches the given word
function findMatch(word,cities) {
  return cities.filter(place => {
  // We need to figure out if the city or state matches what was searched
  // Plus we need to figure out how to put a regular variable into an expression

  // A RegExp is an object that describes a pattern of characters.
  // g means a global match
  // i means it's insensitive to any cases
  const regex = new RegExp(word,'gi');

  return place.city.match(regex) || place.state.match(regex)
  })
};

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function displayMatches() {
  const matches = findMatch(this.value, cities);
  const displayed = matches.map(place => {
    // This allows us to highlight what we are looking for while searching
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    // Add the following code into the html file
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');

  suggestions.innerHTML = displayed;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// Run displayMatches function whenever the input changes
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
