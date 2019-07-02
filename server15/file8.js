const fs = require('fs');

console.log('准备删除目录 ws');

fs.rmdir('./ws/', err => {
  if (err) {
    return console.error(err);
  }
  console.log('删除成功');
})