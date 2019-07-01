const events = require('events');

const eventEmitter = new events.EventEmitter();

let num = 0;

eventEmitter.on('sub_event', () => {
  num += 1;
  console.log(num);
});

setInterval(() => {
  eventEmitter.emit('sub_event');
}, 1000);

console.log(eventEmitter.listeners('sub_event'))