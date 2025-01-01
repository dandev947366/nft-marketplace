import axios from "axios";
import dotenv from "dotenv";
import {ethers} from "ethers"
dotenv.config();

const INFURA_API_KEY = process.env.INFURA_API_KEY || "default_api_key";
const INFURA_API_KEY_SECRET = process.env.INFURA_API_KEY_SECRET || "default_api_secret";

// const Auth = Buffer.from(`${INFURA_API_KEY}:${INFURA_API_KEY_SECRET}`).toString("base64");

// The chain ID of the supported network
// const chainId = 10;

const provider = new ethers.JsonRpcProvider(
  `https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}`
)

provider
  .getBlockNumber()
  .then((blockNumber) => {
    console.log(blockNumber)
  })
  .catch((error) => {
    console.error(error)
  })
// const getGasPrice = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,
//       {
//         headers: {
//           Authorization: `Basic ${Auth}`,
//         },
//       }
//     );

//     // Extract low, medium, and high gas fees
//     const { low, medium, high } = data;

//     console.log("Low Gas Fee:", {
//       maxPriorityFee: low.suggestedMaxPriorityFeePerGas,
//       maxFee: low.suggestedMaxFeePerGas,
//       minWaitTime: low.minWaitTimeEstimate,
//       maxWaitTime: low.maxWaitTimeEstimate,
//     });

//     console.log("Medium Gas Fee:", {
//       maxPriorityFee: medium.suggestedMaxPriorityFeePerGas,
//       maxFee: medium.suggestedMaxFeePerGas,
//       minWaitTime: medium.minWaitTimeEstimate,
//       maxWaitTime: medium.maxWaitTimeEstimate,
//     });

//     console.log("High Gas Fee:", {
//       maxPriorityFee: high.suggestedMaxPriorityFeePerGas,
//       maxFee: high.suggestedMaxFeePerGas,
//       minWaitTime: high.minWaitTimeEstimate,
//       maxWaitTime: high.maxWaitTimeEstimate,
//     });
//   } catch (error) {
//     console.error("Server responded with:", error.response?.data || error.message);
//   }
// };
// getGasPrice()
// export default getGasPrice;
