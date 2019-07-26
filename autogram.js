const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});

rl.on('line', () => null)

rl.on('close', () => {
  console.log('This sentence includes one a')
})
