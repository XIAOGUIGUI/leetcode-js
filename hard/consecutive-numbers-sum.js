/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
  let result = 0
  let index = 1
  let a
  do {
    a = N/index - (index - 1) / 2
    if (a > 0 && a % 1 === 0) {
      result++
    }
    index ++
  }while (a > 0)
  return result
};
