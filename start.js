const sdk = require('stellar-sdk');

var pair = sdk.Keypair.random();

privateKey = pair.secret();
publicKey = pair.publicKey();

console.log(privateKey);

console.log(publicKey);

