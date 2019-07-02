const fs = require('fs');

fs.stat('input.txt', (err, stats) => {
  console.log(stats.isFile());
  console.log(stats);
  console.log(stats.isDirectory());
})