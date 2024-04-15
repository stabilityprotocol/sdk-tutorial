import {
  StabilityGtnRpcProviderEthers,
  StabilityTestnetRpcProviderEthers,
  createStabilityGtnClientViem,
  createStabilityTestnetClientViem,
} from "@stabilityprotocol/provider";

// API key configuration
const apiKey = "YOUR_API_KEY"; // Sign up to get an API key at https://portal.stabilityprotocol.com

// Ethers provider instances
const gtnEthersProvider = new StabilityGtnRpcProviderEthers(apiKey); // Provider for Global Trust Network using Ethers
const testnetEthersProvider = new StabilityTestnetRpcProviderEthers(); // Provider for Stability Testnet using Ethers

// Viem client instances
const gtnViemClient = createStabilityGtnClientViem(apiKey); // Client for Global Trust Network using Viem
const testnetViemClient = createStabilityTestnetClientViem(); // Client for Stability Testnet using Viem

// Function to print the current block numbers from various providers and clients
async function printCurrentBlockNumbers() {
  const blockNumberGtnEthers = await gtnEthersProvider.getBlockNumber();
  console.log(
    `Current Block Number on Global Trust Network (Ethers): ${blockNumberGtnEthers}`
  );

  const blockNumberTestnetEthers = await testnetEthersProvider.getBlockNumber();
  console.log(
    `Current Block Number on Stability Testnet (Ethers): ${blockNumberTestnetEthers}`
  );

  const blockNumberGtnViem = await gtnViemClient.getBlockNumber();
  console.log(
    `Current Block Number on Global Trust Network (Viem): ${blockNumberGtnViem}`
  );

  const blockNumberTestnetViem = await testnetViemClient.getBlockNumber();
  console.log(
    `Current Block Number on Stability Testnet (Viem): ${blockNumberTestnetViem}`
  );
}

// Execute the function to print block numbers
printCurrentBlockNumbers();
