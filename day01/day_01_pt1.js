const fs = require('fs');

const lines = fs
  .readFileSync('day_01.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

let increase = 0;
for (let i = 1; i < lines.length; i++) {
  if (lines[i] > lines[i - 1]) {
    increase++;
  }
}
console.log(increase);
