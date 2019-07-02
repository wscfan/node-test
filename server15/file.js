const fs = require('fs');

// 异步读取数据
fs.readFile('input.txt', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log('异步读取数据：\n' + data.toString());
})

// 同步读取数据
let data = fs.readFileSync('input.txt');
console.log('同步读取数据：\n' + data.toString());

console.log('程序执行完毕。');
