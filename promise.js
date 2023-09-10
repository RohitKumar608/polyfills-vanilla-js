class PromisePolyFill {
  onResolve
  resolve = this.resolve.bind(this)
  constructor(executor) {
    executor(this.resolve, this.reject)
  }

  resolve(val) {
    if (typeof this.onResolve === 'function') {
      this.onResolve(val)
    }
  }

  reject(val) {
    if (typeof this.onResolve === 'function') {
      onResolve(val)
    }
  }

  then(callback) {
    // TODO: Complete the impl
    this.onResolve = callback
    return this
  }

  catch(callback) {
    // TODO: Complete the impl
    return this
  }
}

// Sample code for test :
new PromisePolyFill((resolve) => setTimeout(() => resolve(1000), 1000)).then(
  (val) => console.log(val)
)
// new PromisePolyFill((resolve) => resolve(1000)).then((val) => console.log(val))
