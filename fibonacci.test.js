const fibonacci = require('./fibonacci')

test('Tests if fibonacci sequence is correct', () => {
  expect(fibonacci(1,1)).toStrictEqual([1,1])
})