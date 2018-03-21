const sdk = require('stellar-sdk');

// all the transactions happen on the testnet

// ##1 Generating the account to become multisig 

// # start with creating a new account. Use start.js

// Secret - SDNCO5YVZAXKQHDQEKVSUTO246D7CW6ZLZJ4OMDR77BERAHL23JY2YYF
// Public Key - GDMFZ56F57ZYF7GGOJAQREQO4AGT5M6BKUCXY4ETNRVSCA4NBBHTQ5XR


// # give it some balance using faucet.js
// replace the address that the file already contains with the above address.


// # check balance using checkBalance.js 

// ##2 Enable multisig

// # Set the desination public key as a signer of the multisig address as per addSignerSetOptions.js

// # Add the weights as per changeWeightSetOptions.js



// ##3 Start the future transaction to release the payment once the escrow time is over as per releaseFunds.js
