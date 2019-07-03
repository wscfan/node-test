const http = require('http');
const querystring = require('querystring');

let postHTML = `
  <html lang="zh-CN">
    <head>
      <meta charset="utf-8">
      <title>前端博客</title>
    </head>
    <body>
      <form method="post">
        <p>姓名：<input name="name" type="text" /></p>
        <p>年龄：<input name="age" type="text" /></p>
        <p><input type="submit" /></p>
      </form>
    </body>
  </html>
`;

http.createServer((req, res) => {
  let body = "";
  req.on('data', chunk => {
    body += chunk;
  })
  req.on('end', () =>{
    body = querystring.parse(body);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    if (body.name && body.age) {
      res.write('姓名：' + body.name);
      res.write('<br>');
      res.write('年龄：' + body.age);
    } else {
      res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);
console.log('正在监听3000端口');