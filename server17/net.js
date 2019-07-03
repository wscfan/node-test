const net = require('net');

console.log(net.isIP('192.168.1.1'));
console.log(net.isIP('2001:0D12:0000:0000:02AA:0987:FE29:9871'));
console.log(net.isIPv6('2001:0D12:0000:0000:02AA:0987:FE29:9871'));
