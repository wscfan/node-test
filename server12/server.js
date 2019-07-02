const http = require("http");
const url = require("url");
const PORT = 8888;

function startRequest (route) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log("接收来自 " + pathname + ' 的请求');
    route(pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('可以展示数据了');
    response.end();
  }
  http.createServer(onRequest).listen(PORT);
  console.log('服务启动在' + PORT + '端口');
}
exports.startRequest = startRequest;