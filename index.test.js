const { fizzbuzz } = require('./index')

test('number divisible by 3 should return fizz', () => {
  const result = fizzbuzz(6)
  expect(result).toEqual('fizz')
})

test('number divisible by 5 should return buzz', () => {
  const result = fizzbuzz(10)
  expect(result).toEqual('buzz')
})

test('number divisible by 3 and 5 should return fizzbuzz', () => {
  const result = fizzbuzz(15)
  expect(result).toEqual('fizzbuzz')
})
