Array.prototype.myFilter = function (callback, context) {
  if (this === undefined || !Array.isArray(this)) {
    throw new Error('Please provide the valid array')
  }
  const result = []

  for (let index = 0; index < this.length; index++) {
    if (callback.call(context, this[index], index, this)) {
      result.push(this[index])
    }
  }
  return result
}

// ----------------- testing examples -------------

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(myArray.myFilter((val) => val % 2 === 0))

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.myFilter((word) => word.length > 6)

console.log(result)

function isBigEnough(value) {
  return value >= 10
}

const filtered = [12, 5, 8, 130, 44].myFilter(isBigEnough)

console.log(filtered)

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

console.log(array.myFilter(isPrime)) // [2, 3, 5, 7, 11, 13]
