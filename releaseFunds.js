var StellarSdk = require('stellar-sdk');
StellarSdk.Network.useTestNetwork();
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

// Keys for accounts to issue and receive the new asset
var multisigKeys = StellarSdk.Keypair
  .fromSecret('SDNCO5YVZAXKQHDQEKVSUTO246D7CW6ZLZJ4OMDR77BERAHL23JY2YYF');
var ownerKeys = StellarSdk.Keypair
  .fromSecret('SALM4IBDMX7ZPSPUKP6VSCWRNI6MLGRJMTNSOLDEU36MH2H7ACXZH3NB');
var receiverKeys = StellarSdk.Keypair
  .fromSecret('SAGDJFPOEKGG3OV644XM6KJLGIUM2K5YDE4CXYJQAKOJ4BUIPPJJU35Q');
  

  // First, the receiving account must trust the asset
server.loadAccount(multisigKeys.publicKey())
.then(function(escrow) {
  var transaction = new StellarSdk.TransactionBuilder(escrow, {timebounds: {minTime: "1520796473", maxTime: "0"}})
    // The `changeTrust` operation creates (or alters) a trustline
    .addOperation(StellarSdk.Operation.setOptions({
      masterWeight: 0,
      lowThreshold: 1,
      medThreshold: 1,
      highThreshold: 1
    }))
    .build();
  transaction.sign(multisigKeys);
  transaction.sign(receiverKeys);
  return server.submitTransaction(transaction);
})
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.error('Error!', JSON.stringify(error));
});
