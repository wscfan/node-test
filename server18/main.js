const http = require('http');
const fs = require('fs');
const url = require('url');

// 创建服务器
http.createServer((req, res) => {
  // 解析请求，包括文件名
  let pathname = url.parse(req.url).pathname;
  console.log(pathname);

  // 输出请求的文件名
  console.log('接收到来自：' + pathname + '的请求');
  console.log(pathname.substr(1))

  // 从文件系统中读取请求的文件内容
  fs.readFile(pathname.substr(1), (err, data) => {
    if (err) {
      console.log(err);
      // 状态码：404
      res.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      // 响应头部
      res.writeHead(200, {'Content-Type': 'text/html'});
      // 响应文件内容
      res.write(data.toString());
    }
    res.end();
  })

}).listen(8080);
console.log('正在监听8080端口');
