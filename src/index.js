var uniqueRandomArray = require('unique-random-array')
var starWarsNames = require('./starWars-names.json')

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
}