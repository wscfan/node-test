const net = require('net');

let server = net.createServer(conn => {
  console.log('客户端连接');
  conn.on('end', () => {
    console.log('客户端关闭连接');
  })
  conn.write('Hello World!\r\n');
  conn.pipe(conn);
})

server.listen(8080, () => {
  console.log('正在监听8080端口');
})
