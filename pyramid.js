const { stdin, stdout } = process
const readline = require('readline');
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
});

let input = 0
let output = []

rl.on('line', line => input = parseInt(line))


rl.on('close', () => {

  for(let i = 1; i <= input; i++){
    let line = []
    for(let j = 1; j <= i; j++){
      line.push(j)
    }
    for(let j = i-1; j > 0; j--){
      line.push(j)
    }
    output.push(line.join(''))
  }

  for(let i = input-1; i > 0; i--){
    let line = []
    for(let j = 1; j <= i; j++){
      line.push(j)
    }
    for(let j = i-1; j > 0; j--){
      line.push(j)
    }
    output.push(line.join(''))
  }

  console.log(output.join('\n'))
})
