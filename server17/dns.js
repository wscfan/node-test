const dns = require('dns');

dns.lookup('baidu.com', (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

/*dns.lookupService('220.181.38.148', 80, (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
})*/

dns.resolve('baidu.com', (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});