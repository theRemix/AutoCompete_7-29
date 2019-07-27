const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});

const fillRow = num => new Array((num*2)-1)
  .fill(null)
  .map((_,i) => i+1)

const buildPyramidStep = num =>
  num === 1 ? [1] :
  fillRow(num)
    .map((i,j,a) => i <= num ? i : a.length-j)

let input = 0

rl.on('line', line => input = parseInt(line))

rl.on('close', () =>
  console.log(
    fillRow(input)
      .reduce((row, i, j, a) =>
        [...row, buildPyramidStep(i <= input ? i : a.length-j).join('')],[])
      .join('\n')
  )
)
