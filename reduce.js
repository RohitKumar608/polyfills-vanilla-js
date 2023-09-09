Array.prototype.customReduce = function (fn, param, context) {
  if (!Array.isArray(this)) {
    throw new Error(`${this} reduce is not a function`)
  }
  if (this.length === 0 && param === '') {
    throw new Error('Reduce of empty array with no initial value')
  }
  let result = param

  for (let i = 0; i < this.length; i++) {
    if (!result) {
      result = this[i]
    } else {
      result = fn.call(this, result, this[i], i, context)
    }
  }
  return result
}
const arr = [1, 2, 3, 4, 5]
console.log(arr.customReduce((prev, curr) => curr * prev))
console.log(arr.customReduce((prev, curr) => curr + prev))
