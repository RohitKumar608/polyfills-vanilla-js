const STATE = {
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
  PENDING: 'pending',
}

class MyPromise {
  thenCbs = []
  catchCbs = []
  value = ''
  state = STATE.PENDING
  onSuccessBind = this.onSuccess.bind(this)
  onFailBind = this.onFail.bind(this)

  constructor(executor) {
    try {
      executor(this.onSuccessBind, this.onFailBind)
    } catch (error) {
      this.onFail(error)
    }
  }
  runCallbacks() {
    if (this.state === STATE.FULFILLED) {
      this.thenCbs.forEach((cb) => {
        cb(this.value)
      })
      this.thenCbs = []
    }
    if (this.state === STATE.REJECTED) {
      this.catchCbs.forEach((cb) => {
        cb(this.value)
      })
      this.catchCbs = []
    }
  }
  onSuccess(value) {
    if (this.state !== STATE.PENDING) return
    if (value instanceof MyPromise) {
      value.then(this.onSuccessBind, this.onFailBind)
      return
    }
    this.value = value
    this.state = STATE.FULFILLED
    this.runCallbacks()
  }
  onFail(value) {
    if (this.state !== STATE.PENDING) return
    if (value instanceof MyPromise) {
      value.then(this.onSuccessBind, this.onFailBind)
      return
    }
    this.value = value
    this.state = STATE.REJECTED
    this.runCallbacks()
  }
  then(thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.thenCbs.push((result) => {
        if (thenCb == null) {
          resolve(result)
          return
        }

        try {
          resolve(thenCb(result))
        } catch (error) {
          reject(error)
        }
      })

      this.catchCbs.push((result) => {
        if (catchCb == null) {
          reject(result)
          return
        }

        try {
          resolve(catchCb(result))
        } catch (error) {
          reject(error)
        }
      })

      this.runCallbacks()
    })
  }
  catch(cb) {
    this.then(null, cb)
  }

  finally(cb) {
    return this.then(
      (result) => {
        cb()
        return result
      },
      (result) => {
        cb()
        throw result
      }
    )
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
