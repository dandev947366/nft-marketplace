import { ethers } from "ethers";

// Use Alchemy's URL to create a provider
const provider = new ethers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/v2/L2qclcHjbkaoT3iRtFWpmuqdjIX-VLMJ");

async function getBlockNumber() {
  const blockNumber = await provider.getBlockNumber();
  console.log("Current block number:", blockNumber);
}
async function getGasPrice() {
    const currentGasPrice = (await provider.getFeeData()).gasPrice  // Use ethers to get the gas price
    const gasPriceInGwei = ethers.utils.formatUnits(currentGasPrice, "gwei");
    console.log("Current gas price:", gasPriceInGwei);
  }

getGasPrice()
getBlockNumber();
