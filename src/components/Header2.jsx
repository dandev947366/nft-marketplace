import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

import axios from "axios";
require("dotenv").config();
// You can configure the provider options here (e.g., MetaMask, WalletConnect)
const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Modal",
      infuraId: {10:"https://optimism-sepolia.infura.io/v3/6402339beb7f4cdcb3e1c4a988ef21de"}
    }
  }
};
const Header = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [gasFees, setGasFees] = useState(null);
  const fetchGasFees = async () => {
    try {
      const chainId = "10"; // Replace with the actual chain ID if needed
      const { data } = await axios.get(
        `https://gas.api.infura.io/v3/${process.env.INFURA_API_KEY}/networks/${chainId}/suggestedGasFees`
      );
      console.log("Suggested gas fees:", data);
      setGasFees(data);
    } catch (error) {
      console.log("Server responded with:", error);
    }
  };
  // Function to connect wallet
  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      // Open the modal and connect the wallet
      const web3ModalInstance = await web3Modal.connect();

      // Create a Web3Provider from the Web3Modal instance
      const web3Provider = new ethers.BrowserProvider(web3ModalInstance);

      // Get the signer (user's wallet)
      const userSigner = web3Provider.getSigner();

      // Set provider and signer in state
      setProvider(web3Provider);
      setSigner(userSigner);

      console.log("Connected wallet provider:", web3Provider);
      console.log("Signer:", userSigner);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };
  useEffect(() => {
    fetchGasFees();
  }, []);
  return (
    <>
      <nav className="inset-x-0 top-0 w-full bg-white border-b md:px-2 dark:border-gray-500/50 dark:bg-gray-800 py-2.5 shadow-lg z-50">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
              NFT Marketplace
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
          <div>
      <h1>Gas Fees: </h1>
      <button onClick={fetchGasFees}>Gas fee: {gasFees}</button>
    </div>
            <button
              className="bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-white px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 shadow-sm"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu-2"
              aria-expanded="true"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-indigo-800 rounded lg:bg-transparent lg:text-white lg:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace"
                  className="block py-2 pl-3 pr-4 text-white hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="block py-2 pl-3 pr-4 text-white hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/artists"
                  className="block py-2 pl-3 pr-4 text-white hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0"
                >
                  Artists
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="block py-2 pl-3 pr-4 text-white hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
