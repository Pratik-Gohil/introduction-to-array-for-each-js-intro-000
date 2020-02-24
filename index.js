// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(elem => {
    callback(elem)
  })
}

// Add your changeCompletely() function here:
function changeCompletely(array) {
  array.forEach(elem => alert(elem))
}