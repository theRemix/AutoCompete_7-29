const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});

const BIGRAMS_LENGTH = 50

const bigrams = []
const cases = []

rl.on('line', line => bigrams.length < BIGRAMS_LENGTH ? bigrams.push(line.substr(0,2).toUpperCase()) : cases.push(line.toUpperCase()))

rl.on('close', () => console.log(
  cases.map(word =>
    new Array(word.length - 1)
      .fill(null)
      .map((_,i) => word.substr(i, 2))
      .every(bigrams.includes.bind(bigrams))
  ).join('\n')
))
