const fs = require('fs');

const lines = fs
  .readFileSync('day_01.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

let increase = 0;
for (let i = 3; i < lines.length; i++) {
  let first = lines[i - 1] + lines[i - 2] + lines[i - 3];
  let second = lines[i] + lines[i - 1] + lines[i - 2];

  if (first < second) {
    increase++;
  }
}
console.log(increase);
