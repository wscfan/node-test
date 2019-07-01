const buf1 = Buffer.from('你好中国');
const buf2 = Buffer.from('world!');

const buf3 = Buffer.concat([buf1, buf2]);

console.log(buf3.toString());
console.log(buf1.compare(buf2));

buf2.copy(buf1, 3);
console.log(buf1.toString());
