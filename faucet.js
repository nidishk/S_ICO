var request = require('request');
var StellarSdk = require('stellar-sdk');
request.get({
  url: 'https://horizon-testnet.stellar.org/friendbot',
  qs: { addr: "GCU6NDXQC424SGEWKEDNMRSSJLXCSJPDMQ62N6U5JWKTGSYNMDMFHG3P"},
  json: true
}, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.error('ERROR!', error || body);
  }
  else {
    console.log('SUCCESS! You have a new account :)\n', body);
  }
});
