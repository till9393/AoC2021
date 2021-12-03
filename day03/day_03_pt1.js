const fs = require('fs');

const lines = fs
  .readFileSync('day_03.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter((x) => Boolean(x))
  .map((x) => x);

console.log(lines);
