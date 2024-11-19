const myURL = new URL('https://example.com:8080/pathname?search=test#hash');

console.log(myURL.protocol); // 'https:'
console.log(myURL.hostname); // 'example.com'
console.log(myURL.port); // '8080'
console.log(myURL.pathname); // '/pathname'
console.log(myURL.search); // '?search=test'
console.log(myURL.hash); // '#hash'

// parsing relative urls
const relativeURL = new URL('/about', 'https://example.com');
console.log(relativeURL.href); // 'https://example.com/about'

// accessing query parameters
const myNewURL = new URL('https://example.com/search?q=nodejs&lang=en');
console.log(myNewURL.searchParams.get('q')); // 'nodejs'
console.log(myNewURL.searchParams.get('lang')); // 'en'

// adding query parameters
myNewURL.searchParams.append('page', '1');
console.log(myURL.href); // 'https://example.com/search?q=nodejs&lang=en&page=1'

// modifying query parameters
myNewURL.searchParams.set('q', 'javascript');
console.log(myURL.href); // 'https://example.com/search?q=javascript&lang=en&page=1'

// deleting query parameters
myNewURL.searchParams.delete('q');
console.log(myNewURL.href);

// iterating through query parameters
for (const [key, value] of myNewURL.searchParams) {
	console.log(`${key}: ${value}`);
}
