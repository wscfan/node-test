const http = require('http');
const url = require('url');
const util = require('util');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // 解析 url 参数
  let params = url.parse(req.url, true).query;
  res.write('姓名：' + params.name);
  res.write('\n');
  res.write('年龄：' + params.age);
  res.end();

}).listen(3000);

console.log('正在监听3000端口');
