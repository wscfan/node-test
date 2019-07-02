const fs = require('fs');

fs.writeFile('input.txt', '这是写入的数据', (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log('数据写入成功!');
})