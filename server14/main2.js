const util = require('util');

console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

console.log('--------------------------');

console.log(util.isRegExp(/ws/));
console.log(util.isRegExp(new RegExp('ws')));
console.log(util.isRegExp({}));

console.log('**************************');

console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log(util.isDate({}));

console.log('==========================');

console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({name: 'error', msg: 'error msg'}));
