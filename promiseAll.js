function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    const array = []
    let count = 0
    promises.forEach(function (promise, idx) {
      array[idx] = promise
        .then((res) => ({ result: res, done: true }))
        .catch((err) => ({
          error: err,
          failed: true,
        }))

      Promise.resolve(promise)
        .then((res) => {
          array[idx] = {
            result: res,
            done: true,
          }
          count++
          if (count === promises.length) {
            resolve(array)
          }
        })
        .catch((err) => {
          reject({ error: err, failed: true })
        })
    })
  })
}

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('done1')
  }, 100)
})
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('done1')
  }, 100)
})
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('done1')
  }, 100)
})

const result = promiseAll([promise1, promise2, promise3])
result
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
