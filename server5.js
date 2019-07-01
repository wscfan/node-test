const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10, 1);
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from([1, 2, 3]);
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test', 'latin1');

console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);
console.log(buf5);
console.log(buf6);

const buf7 = Buffer.alloc(256);
console.log('----------buf7 old----------');
console.log(buf7);
console.log('----------buf7 new----------');
const buf7Len = buf7.write('Hello world');
console.log(buf7);
console.log('写入字节数' + buf7Len);
console.log(buf7.toString('ascii', 0, 5));