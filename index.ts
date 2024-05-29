import algosdk from "algosdk";
import * as algokit from "@algorandfoundation/algokit-utils";

async function main() {
  const algodClient = algokit.getAlgoClient();

  // Retrieve 2 accounts from localnet kmd
  const sender = await algokit.getLocalNetDispenserAccount(algodClient);
  const receiver = await algokit.mnemonicAccountFromEnvironment(
    { name: "RECEIVER", fundWith: algokit.algos(100) },
    algodClient
  );

  const suggestedParams = await algodClient.getTransactionParams().do();
  const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: sender.addr,
    suggestedParams,
    to: receiver.addr,
    amount: 1000000,
  });

  const signedTxn = txn.signTxn(sender.sk);
  const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
  const result = await algosdk.waitForConfirmation(algodClient, txId, 3);

  console.log(
    `Payment of ${result.txn.txn.amt} microAlgos was sent to ${receiver.addr} at confirmed round ${result["confirmed-round"]}`
  );
}

main().catch((error) => {
  console.error("Error in main function:", error);
});