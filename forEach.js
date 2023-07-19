Array.prototype.myForEach = function (callback) {
  let array = this
  if (array === undefined || !Array.isArray(array)) {
    throw new Error('Please provide the valid array')
  }
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index)
  }
}

let myArray = [1, 2, 3]
myArray.myForEach((value, idx) => {
  myArray[idx] = value * value
})

// console.log(myArray)
