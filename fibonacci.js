function fibonacciSequence(number) {
  if (number < 2) {
    return number;
  } else {
    return fibonacciSequence(number - 1) + fibonacciSequence(number - 2);
  }
}

function fibonacci(firstNumber, secondNumber) {
  let result = [];
  let initial = 0;
  while ((firstNumber >= 0) && (secondNumber > firstNumber)) {
    let fibonacciNumber = fibonacciSequence(initial);
    if (fibonacciNumber > secondNumber) break;
    if (fibonacciNumber >= firstNumber) {
      result.push(fibonacciNumber);
    }
    initial++;
  }
  return result;
}

module.exports = fibonacci;