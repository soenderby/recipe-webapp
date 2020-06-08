// Returns target.value of synthetic event
const getEventValue = event => event.target.value;

// returns last element of an array
const getLastElement = (list = []) => 
  list.length > 0 ?
    list[list.length - 1]
  :
    list
;

// Adds an element to a list
const addElementToList = (element, list) => [...list, element];

// Debug function using partial application
const trace = label => value => {
  console.log(label + ': ' + value);
  return value;
}

// curried map function
// does not really need tests
const map = fn => mappable => mappable.map(fn);

export {
  getEventValue,
  getLastElement,
  addElementToList,
  trace,
  map
}