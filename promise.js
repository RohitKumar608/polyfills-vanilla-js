const STATE = {
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
  PENDING: 'pending',
}

class MyPromise {
  thenCsb = []
  catchCsb = []
  value = ''
  state = STATE.PENDING
  onSuccess = this.onSuccess.bind(this)
  onFail = this.onFail.bind(this)

  constructor(executor) {
    try {
      executor(this.onSuccess, this.onFail)
    } catch (error) {
      this.onFail(error)
    }
  }
  runCallbacks() {
    if (this.state === STATE.FULFILLED) {
      this.thenCsb.forEach((cb) => {
        cb(this.value)
      })
      this.thenCsb = []
    }
    if (this.state === STATE.REJECTED) {
      this.catchCsb.forEach((cb) => {
        cb(this.value)
      })
      this.catchCsb = []
    }
  }
  onSuccess(value) {
    if (this.state !== STATE.PENDING) return
    this.value = value
    this.state = STATE.FULFILLED
    this.runCallbacks()
  }
  onFail(value) {
    if (this.state !== STATE.PENDING) return
    this.value = value
    this.state = STATE.REJECTED
    this.runCallbacks()
  }
  then(cb) {
    this.thenCsb.push(cb)
    this.runCallbacks()
  }
  catch(cb) {
    this.catchCsb.push(cb)
    this.runCallbacks()
  }
  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value)
    })
  }
  static reject(value) {
    return new MyPromise((resolve, reject) => {
      reject(value)
    })
  }
}
// Sample code for test :
new MyPromise((resolve) => setTimeout(() => resolve(1000), 1000)).then((val) =>
  console.log(val)
)
new MyPromise((resolve) => resolve(1000)).then((val) => console.log(val))
