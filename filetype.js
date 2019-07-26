const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});

let pointMap = {
  python: ['print', 'print\\(.*', 'def', 'import'],
  ruby: ['def', 'end', '\\.new'],
  javascript: ['{', 'function', '=>'],
}

const scorePoints = pointMap => (acc, token) => {
  Object.keys(pointMap)
    .forEach(lang => pointMap[lang].find(exp => token.match(exp)) ?
      acc[lang] = acc[lang] ? acc[lang]+1 : 1
      : null)
  return acc
}

let scores = {}

rl.on('line', line =>
  scores = line.split(' ').reduce(scorePoints(pointMap), scores)
)

rl.on('close', () => console.log(
  Object.keys(scores)
    .sort((a,b) => scores[b] - scores[a])[0]
))
