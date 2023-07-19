function mergeSort(leftSide, rightSide) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
    if (leftSide[leftIndex] <= rightSide[rightIndex]) {
      result[leftIndex + rightIndex] = leftSide[leftIndex]
      leftIndex++
    } else {
      result[leftIndex + rightIndex] = rightSide[rightIndex]
      rightIndex++
    }
  }

  return result
    .concat(leftSide.slice(leftIndex))
    .concat(rightSide.slice(rightIndex))
}

function sort() {
  const numbers = this
  if (numbers === undefined || !Array.isArray(numbers)) {
    throw new Error('Please provide the valid array')
  }
  if (numbers.length <= 1) {
    return numbers
  }
  const midPoint = Math.floor(numbers.length / 2)

  const leftSide = numbers.slice(0, midPoint)
  const rightSide = numbers.slice(midPoint)
  return mergeSort(sort.call(leftSide), sort.call(rightSide))
}

Array.prototype.sort = sort

console.log([3, 2].sort())

console.log([3, 4, 1, 2, 6, 8, 7, 0, 9].sort())
