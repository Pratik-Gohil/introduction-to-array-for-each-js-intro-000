// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

// Add your changeCompletely() function here:
function changeCompletely(array) {
  array.forEach(callback)
  function callback(elem) {
    alert(elem)
  }
}
