var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

// the JS SDK uses promises for most actions, such as retrieving an account
server.loadAccount("GD6M2KBZY3NHXKNQ2DRNG6DDFQSACYX4SXCLTCBH3CT4KBXUL5MUXVRU").then(function(account) {
  console.log('Balances for account: ' + "GD6M2KBZY3NHXKNQ2DRNG6DDFQSACYX4SXCLTCBH3CT4KBXUL5MUXVRU");
  account.balances.forEach(function(balance) {
    console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
  });
});