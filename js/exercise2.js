// Generate a random decimal number between 0 and 100
// (EG: 93.60745257237626) and store it in a variable.
var number = Math.random() * 100

// Round the number to the nearest integer (EG: 94)
console.log('The nearest integer is ' + Math.round(number))

// Round the number up to the next largest integer (EG: 94)
console.log('The next largest integer is ' + Math.ceil(number))

// Round the number down to the next smallest integer (EG: 93)
console.log('The next smallest integer is ' + Math.floor(number))

// Print all four numbers out with labels.
