const crypto = require('crypto');

// Generate a SHA256 hash
const hash = crypto.createHash('sha256').update('password123').digest('hex');
console.log('Hash:', hash);
