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

export {
  getEventValue,
  getLastElement,
  addElementToList
}