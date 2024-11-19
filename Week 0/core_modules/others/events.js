const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', () => {
	console.log('Hello World');
});

myEmitter.emit('greet');

myEmitter.once('special', () => {
	console.log('This will only run once.');
});
myEmitter.emit('special'); // Output: This will only run once.
myEmitter.emit('special'); // No output

const callback = () => console.log('Removed!');
myEmitter.on('removeMe', callback);
// removes a specific listener for an event
myEmitter.removeListener('removeMe', callback);

myEmitter.removeAllListeners('greet');
myEmitter.emit('greet'); // won't run since all the listeners have been removed
myEmitter.listeners('greet');
