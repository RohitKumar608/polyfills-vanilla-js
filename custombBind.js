Object.prototype.customBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + "cannot be bound as it's not callable")
  }
  const uniqueKey = Symbol()
  context[uniqueKey] = this

  return function (...newArgs) {
    const result = context[uniqueKey](...args, ...newArgs)
    delete context[uniqueKey]
    return result
  }
}

let name = {
  firstname: 'Rohit',
  lastname: 'Kumar',
}

let printName = function (hometown, state, country, universe) {
  console.log(
    this.firstname +
      ' ' +
      this.lastname +
      ' , ' +
      hometown +
      ', ' +
      state +
      ', ' +
      country +
      ', ' +
      universe
  )
}

let printMyName = printName.bind(name, 'Dehradun', 'Uttarakhand')
printMyName('India', 'Earth')

let printMyName2 = printName.customBind(name, 'Dehradun', 'Uttarakhand')
printMyName2('India', 'Earth')
