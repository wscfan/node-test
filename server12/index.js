const server = require('./server');
const router = require('./router');

server.startRequest(router.route);