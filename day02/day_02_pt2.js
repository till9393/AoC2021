const fs = require('fs');

const lines = fs
  .readFileSync('day_02.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter((x) => Boolean(x))
  .map((x) => x);

let horizontalPosition = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('forward')) {
    let string = lines[i];
    let array = string.split(' ');
    intForward = parseInt(array[1]);
    horizontalPosition += intForward;
    depth += aim * intForward;
  }

  if (lines[i].includes('down')) {
    let string = lines[i];
    let array = string.split(' ');
    intDown = parseInt(array[1]);
    aim += intDown;
  }

  if (lines[i].includes('up')) {
    let string = lines[i];
    let array = string.split(' ');
    intUp = parseInt(array[1]);
    aim -= intUp;
  }
}
result = horizontalPosition * depth;
console.log(result);
