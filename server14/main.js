const util = require('util');

function Person () {
  this.name = 'joison';
  this.toString = function () {
    return this.name;
  }
}

let obj = new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
