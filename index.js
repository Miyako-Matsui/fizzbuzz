function fizzbuzz(number) {
  if (number % 3 == 0 && number % 5 == 0) return 'fizzbuzz'
  else if (number % 3 == 0) return 'fizz'
  else if (number % 5 == 0) return 'buzz'
}

function fizzbuzzV2(number) {
  let result = ''
  if (number % 3 == 0) result += 'fizz'
  if (number % 5 == 0) result += 'buzz'

  return result
}

module.exports = { fizzbuzz }
