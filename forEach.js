Array.prototype.myForEach = function (callback, context) {
  if (this === undefined || !Array.isArray(this)) {
    throw new Error('Please provide the valid this')
  }
  for (let index = 0; index < this.length; index++) {
    callback.call(context, this[index], index, this)
  }
}

let myArray = [1, 2, 3]
myArray.myForEach((value, idx) => (myArray[idx] = value * value))

console.log(myArray)
