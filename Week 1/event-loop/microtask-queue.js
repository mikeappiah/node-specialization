/* 1. EXPERIMENT 1- all synchronous code takes priority over asynchronous code */
// console.log('console.log 1');
// process.nextTick(() => console.log('This is process.next 1'));
// console.log('console.log 2');

/* 2. EXPERIMENT 2 - all callbacks in nextTick queue are executed before callbacks in promise queue */
// Promise.resolve().then(() => console.log('This is Promise.resolve 1'));
// process.nextTick(() => console.log('This is process.nextTick 1'));

/* 3. EXPERMENT 3 - Variation of experiment 2 */
// process.nextTick(() => console.log('This is process.nextTick 1'));
// process.nextTick(() => {
// 	console.log('This is process.nextTick 2');
// 	process.nextTick(() =>
// 		console.log('This is the inner next tick inside next tick')
// 	);
// });
// process.nextTick(() => console.log('This is process.nextTick 3'));

// Promise.resolve().then(() => console.log('This is Promise.resolve 1'));
// Promise.resolve().then(() => {
// 	console.log('This is Promise.resolve 2');
// 	process.nextTick(() =>
// 		console.log('This is the inner next tick inside Promise then block')
// 	);
// });
// Promise.resolve().then(() => console.log('This is Promise.resolve 3'));
