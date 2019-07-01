const fs = require('fs');
let data = '这是一个测试 This is a test.';

const writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', () => {
  console.log('写入完成');
});

console.log('程序执行完毕');