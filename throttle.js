function throttle(cb, delay) {
  let shouldWait = false
  let waitingArgs = null
  return function (...args) {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    function timeOut() {
      if (waitingArgs === null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeOut, delay)
      }
    }

    cb(...args)
    shouldWait = true

    setTimeout(timeOut, delay)
  }
}

function consoleLogData() {
  console.log('Lorem ipsum ')
}

const throttleCb = throttle(consoleLogData, 200)
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
throttleCb()
setTimeout(() => {
  throttleCb()
}, 250)
