import algosdk  from "algosdk";
import * as algokit from '@algorandfoundation/algokit-utils';

const algodClient = algokit.getAlgoClient()

// Retrieve 2 accounts from localnet kmd
const sender = await algokit.getLocalNetDispenserAccount(algodClient)
const receiver = await algokit.mnemonicAccountFromEnvironment(
    {name: 'RECEIVER', fundWith: algokit.algos(100)},
    algodClient,
  )

/*
TODO: edit code below

Puzzle: 
The below code is trying to send a payment from accounts[0] to accounts[1]. 
However, the code is not working. fix the code so that the payment is sent 
successfully. 

When solved correctly, the console should print out the following:
"Payment of 1000000 microAlgos was sent to RRYKB23LFR62G3P4SFINZDQ4FVDUNWWQ4NOF7K6TP5GO65BQCHYMNTR3CU at confirmed round 59"
*/
const suggestedParams = await algodClient.getTransactionParams().do();
const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: sender.addr,
    suggestedParams,
    to: receiver.addr,
    amount: 1000000,
});

const signedTxn: Uint8Array[] = txn.signTxn(sender.sk)

await algodClient.sendRawTransaction(signedTxn).do();
const result = await algosdk.waitForConfirmation(
    algodClient,
    txn.txID().toString(),
    3
);

console.log(`Payment of ${result.txn.txn.amt} microAlgos was sent to ${receiver.addr} at confirmed round ${result['confirmed-round']}`);