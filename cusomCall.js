Function.prototype.customCall = function (param, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + "it's not callable")
  }
  const uniqueKey = Symbol()
  const context = { ...param }
  context[uniqueKey] = this
  const result = context[uniqueKey](...args)
  delete context[uniqueKey]
  return result
}

const obj = {
  name: 'rohit',
  printName: function () {
    console.log(`My name is ${this.name}`)
  },
}

obj.printName.customCall({ name: 'Mohit' })
