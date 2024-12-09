/* Experiment 1 - Check queue callbacks are executed after Microtask queues callbacks, Timer queue callbacks and I/O queue callbacks are executed  */

const fs = require('node:fs');

// fs.readFile(__filename, () => {
// 	console.log('This is readFile 1');
// 	setImmediate(() => console.log('This is inner setImmediate inside readFile'));
// });

// process.nextTick(() => console.log('This is process.nextTick 1'));
// Promise.resolve().then(() => console.log('This is Promise.resolve 1'));
// setTimeout(() => console.log('This is setTimeout 1'), 0);

// for (let i = 0; i < 2000000000; i++) {}

/* Experiment 2 - Microtask queues callbacks are executed after I/O callbacks and before check queue callbacks  */

fs.readFile(__filename, () => {
	console.log('This is readFile 1');
	setImmediate(() => console.log('This is inner setImmediate inside readFile'));
	process.nextTick(() =>
		console.log('This is inner process.nextTick inside readFile')
	);
	Promise.resolve().then(() =>
		console.log('This is inner Promise.resolve inside readFile')
	);
});

process.nextTick(() => console.log('This is process.nextTick 1'));
Promise.resolve().then(() => console.log('This is Promise.resolve 1'));
setTimeout(() => console.log('This is setTimeout 1'), 0);

for (let i = 0; i < 2000000000; i++) {}

/* Experiment 3 - Microtask queues callbacks are executed inbetween check queue callbacks  */

// setImmediate(() => console.log("This is setImmediate 1"));
// setImmediate(() => {
//   console.log("This is setImmediate 2");
//   process.nextTick(() => console.log("This is process.nextTick 1"));
//   Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
// });
// setImmediate(() => console.log("This is setImmediate 3"));

/* Experiment 4 - Timer anamoly. Order of execution can never be guaranteed */

// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setImmediate(() => console.log("This is setImmediate 1"));

// for (let i = 0; i < 1000000000; i++) {}
