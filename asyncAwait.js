function* createFlow() {
  console.log('Me first from create flow')
  const data = yield fetch('https://jsonplaceholder.typicode.com/posts')
  console.log(data)
}

const returnNextElement = createFlow()
const futureData = returnNextElement.next().value

futureData.then(display)

function display(value) {
  returnNextElement.next(value)
}

console.log('Me second from global')
