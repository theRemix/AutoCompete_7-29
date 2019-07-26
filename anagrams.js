const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});

let firstWord = false
let firstWordSorted = []
let anagramCount = 0

const notSpace = l => l !== ' '

const setFirstWord = word => {
  firstWord = word
  firstWordSorted = word.split('').filter(notSpace).sort()
}

// return 0 or 1
const checkAnagram = (firstWordSorted, word) =>
  word.split('').filter(notSpace).sort().join('') === firstWordSorted.join('') ? 1 : 0


rl.on('line', line => {
  if (firstWord === false) {
    setFirstWord(line)
    return
  }

  anagramCount += checkAnagram(firstWordSorted, line)
})

rl.on('close', () => console.log(anagramCount))
