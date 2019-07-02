const fs = require('fs');

console.log('创建目录ws');

fs.mkdir('./aa/ws/', { recursive: true }, err => {
  if (err) {
    return console.error(err);
  }
  console.log('目录创建成功');
})

fs.readdir('./ws', (err, files) => {
  if (err) {
    return console.error(err);
  }
  console.log(files);
})