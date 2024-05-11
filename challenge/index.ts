import algosdk from "algosdk";
import * as algokit from '@algorandfoundation/algokit-utils';

const algodClient = algokit.getAlgoClient()

// Retrieve 2 accounts from localnet kmd
const sender = await algokit.getLocalNetDispenserAccount(algodClient)
const receiver = await algokit.mnemonicAccountFromEnvironment(
    {name: 'RECEIVER', fundWith: algokit.algos(100)},
    algodClient,
  )

const suggestedParams = await algodClient.getTransactionParams().do();
const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: sender.addr,
    suggestedParams,
    to: receiver.addr,
    amount: 1000000,  // amount is in microAlgos
});

// Sign the transaction with sender's secret key
const signedTxn = txn.signTxn(sender.sk);

// Send the signed transaction (raw transaction bytes)
await algodClient.sendRawTransaction(signedTxn).do();

// Wait for confirmation
const result = await algosdk.waitForConfirmation(
    algodClient,
    txn.txID().toString(),
    3  // number of rounds to wait
);

console.log(`Payment of ${result.txn.txn.amt} microAlgos was sent to ${receiver.addr} at confirmed round ${result['confirmed-round']}`);
