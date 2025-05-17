const {
  Connection,
  PublicKey,
  clusterApiUrl,
} = require('@solana/web3.js');

const TOKEN_PROGRAM_ID = new PublicKey(
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
);

async function main() {
  const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

  // Subscribe to logs emitted by the Token Program
  const subscriptionId = connection.onLogs(
    TOKEN_PROGRAM_ID,
    (logs, ctx) => {
      // logs contain transaction logs for token program instructions
      const { signature, err, logs: logMessages } = logs;

      if (err) {
        console.error('Transaction error:', err);
        return;
      }

      // Check logs for InitializeMint instruction (simplified)
      const initMintLog = logMessages.find((log) =>
        log.includes('InitializeMint')
      );

      if (initMintLog) {
        console.log('New token mint detected in tx:', signature);
        // Further processing: parse mint address, supply, creator, etc.
        // You may fetch transaction details or parse instruction data here
      }
    },
    'confirmed'
  );

  console.log('Subscribed to token program logs with subscription ID:', subscriptionId);
}

main().catch(console.error);
