/** Experiment 1 - Microtask queues callbacks are executed before I/O queue callbacks */

const fs = require('node:fs');

// fs.readFile(__filename, () => {
// 	console.log('This is readFile 1');
// });

// process.nextTick(() => console.log('This is process.nextTick 1'));
// Promise.resolve().then(() => console.log('This is Promise.resolve 1'));

/** Experiment 2 - Timer anamoly. Order of execution can never be guaranteed */

setTimeout(() => console.log('This is setTimeout 1'), 0);

fs.readFile(__filename, () => {
	console.log('This is readFile 1');
});

/* Experiment 2 - I/O queue callbacks are executed after Microtask queues callbacks and Timer queue callbacks are executed */

fs.readFile(__filename, () => {
	console.log('This is readFile 1');
});

process.nextTick(() => console.log('This is process.nextTick 1'));
Promise.resolve().then(() => console.log('This is Promise.resolve 1'));
setTimeout(() => console.log('This is setTimeout 1'), 0);

for (let i = 0; i < 1000000000; i++) {} // to avoid timer issue in last experiment
