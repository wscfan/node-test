const fs = require('fs');
const buff = new Buffer.alloc(1024);

console.log('文件准备打开');
fs.open('input.txt', 'r+', (err, fd) => {
  if (err) {
    return console.log(err);
  }
  console.log('文件打开成功');
  console.log('开始截取文件内容');

  fs.ftruncate(fd, 12, err => {
    if (err) {
      console.log(err);
    }
    console.log('文件截取成功');
    fs.read(fd, buff, 0, buff.length, 0, (err, bytes) => {
      if (err) {
        console.log(err);
      }
      if(bytes > 0) {
        console.log(buff.slice(0, bytes).toString());
      }
    })
    fs.close(fd, err => {
      if (err) {
        console.log(err);
      }
      console.log("文件关闭成功");
    })
  })
})