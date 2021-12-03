const fs = require('fs');

const lines = fs
  .readFileSync('day_02.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter((x) => Boolean(x))
  .map((x) => x);
