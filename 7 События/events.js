const EventEmitter = require('events');

const emitter = new EventEmitter;

emitter.on('start', (msg) => console.log(msg));

emitter.emit('start', 'Started1');

emitter.removeAllListeners();

emitter.emit('start', 'Started2');
emitter.emit('start', 'Started3');
