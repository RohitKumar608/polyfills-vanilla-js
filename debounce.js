function debounce(fn, delay) {
  let timeoutId = ''
  return function (params) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(fn.bind(this, params), delay)
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
