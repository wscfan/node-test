const path = require('path');

console.log(path.resolve('/foo/bar', './baz'));
console.log(path.normalize('/foo/../bar'));
console.log(path.join('/foo/bar/aaa', '../baz'));
console.log(path.isAbsolute('../foo/bar/aaa'));
console.log(path.relative('/foo/bar/aa', '/foo/bar/ws/bzz'));
console.log(path.dirname('/foo/bar/aa'));
console.log(path.extname('/foo/bar/aa.txt'));
console.log(path.basename('/foo/bar/aa'));
console.log(path.parse('{name: "zhangsan", age: 19}'));

let obj = path.parse('{name: "zhangsan", age: 19}')

console.log(path.format(obj));

console.log('=====================');

console.log(path.sep);
console.log(path.delimiter);
console.log(path.posix);
console.log(path.win32);
