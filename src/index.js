import uniqueRandomArray from 'unique-random-array'
import starWarsNames from './starWars-names.json'

var getRandomName = uniqueRandomArray(starWarsNames)

module.exports = {
  all: starWarsNames,
  random: random
}

function random(num) {
  if (num === undefined) {
    return getRandomName()
  } else {
    var randomNames = []
    for (var i =0; i < num; i++) {
      randomNames.push(getRandomName())
    }
    return randomNames
  }
}