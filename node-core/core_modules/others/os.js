const os = require('node:os');

console.log('Platform:', os.platform()); // e.g., 'win32', 'linux'
console.log('CPU Architecture:', os.arch()); // e.g., 'x64'
console.log('Total Memory:', os.totalmem()); // Total memory in bytes
console.log('Free Memory:', os.freemem()); // Free memory in bytes
