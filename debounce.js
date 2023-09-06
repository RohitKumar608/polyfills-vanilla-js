function debounce(fn, delay) {
  let timeoutId = ''
  return function (...args) {
    const context = this
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(context, args), delay)
  }
}

function print() {
  console.log('Hello Rohit')
}

const bounce = debounce(print, 300)
bounce()
bounce()
bounce()
bounce()
bounce()
bounce()
