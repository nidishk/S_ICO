var StellarSdk = require('stellar-sdk');
StellarSdk.Network.useTestNetwork();
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

// Keys for accounts to issue and receive the new asset
var multisigKeys = StellarSdk.Keypair
  .fromSecret('SDNCO5YVZAXKQHDQEKVSUTO246D7CW6ZLZJ4OMDR77BERAHL23JY2YYF');
  

// First, the receiving account must trust the asset
server.loadAccount(multisigKeys.publicKey())
.then(function(receiver) {
    return receiver.self.call();
}).then(function(result) {
  console.log(result);
})
.catch(function(error) {
    console.error('Error!', error);
});
