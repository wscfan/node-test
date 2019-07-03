const http = require('http');

let options = {
  host: 'localhost',
  port: '8080',
  path: '/index.html'
};

let callback = res => {
  let body = '';
  res.on('data', data => {
    body += data;
  })
  res.on('end', () => {
    console.log(body);
  })
}

let req = http.request(options, callback);
req.end();