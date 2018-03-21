var StellarSdk = require('stellar-sdk');
StellarSdk.Network.useTestNetwork();
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

// Keys for accounts to issue and receive the new asset
var multisigKeys = StellarSdk.Keypair
  .fromSecret('SB244DFC6ALBEIYL3GYG5CUQQ6MWRKL6FBJUYISQWVOUU4VCXOH6ERGI');
var ownerKeys = StellarSdk.Keypair
  .fromSecret('SALM4IBDMX7ZPSPUKP6VSCWRNI6MLGRJMTNSOLDEU36MH2H7ACXZH3NB');
var receiverKeys = StellarSdk.Keypair
  .fromSecret('SBMM75MXLCKCFB5WXTN22KZHPH42IDPYBGZOIJK4S477YV4GIPJXQ2LO');
  

  // First, the receiving account must trust the asset
server.loadAccount(multisigKeys.publicKey())
.then(function(receiver) {
  var transaction = new StellarSdk.TransactionBuilder(receiver)
    // The `changeTrust` operation creates (or alters) a trustline
    // The `limit` parameter below is optional
    .addOperation(StellarSdk.Operation.setOptions({
      signer: {ed25519PublicKey: receiverKeys.publicKey(), weight: 1}
    }))
    .build();
  transaction.sign(multisigKeys);
  return server.submitTransaction(transaction);
}).then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.error('Error!', error);
});
