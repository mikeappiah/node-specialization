const util = require('node:util');
const fs = require('node:fs');

// 1. util.format - The util.format() function formats strings in a printf-style manner.
const name = 'Alice';
const age = 25;
console.log(util.format('My name is %s and I am %d years old.', name, age));
// Output: My name is Alice and I am 25 years old.

const obj = {
	name: 'Alice',
	age: 25,
	address: { city: 'Wonderland', zip: 12345 }
};
// 2. util.inspect - The util.inspect() method converts objects into human-readable strings, especially useful for debugging.
console.log(util.inspect(obj, { showHidden: true, depth: 1, colors: true }));

// 3. util.promisify - Convert fs.readFile to a promise-based function
const readFile = util.promisify(fs.readFile);

(async () => {
	try {
		const data = await readFile('../file-system/txt/example.txt', 'utf8');
		console.log(data);
	} catch (err) {
		console.error(err);
	}
})();

async function fetchData() {
	return 'Hello, World!';
}

// 4. util.callbackify -  Convert it to a callback-based function
const callbackFetchData = util.callbackify(fetchData);

callbackFetchData((err, data) => {
	if (err) throw err;
	console.log(data); // Output: Hello, World!
});

// 5. utils.types - checks type of an object
console.log(util.types.isDate(new Date())); // true
console.log(util.types.isRegExp(/abc/)); // true
console.log(util.types.isSet(new Set())); // true

// 6. util.deprecate - marks a function as deprecated and warns the user
const oldFunction = util.deprecate(() => {
	console.log('This function is deprecated.');
}, 'oldFunction is deprecated!');

oldFunction();
