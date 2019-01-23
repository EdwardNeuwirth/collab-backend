const crypto = require('crypto');

// const key = new Int8Array(buffer);
// console.log(buffer);
// console.log(key);

// console.log(crypto.scryptSync('Edward', 'salt', ).toString('hex'));

const buffer = new Buffer(crypto.randomBytes(32)).toString('utf8');
console.log(buffer);
