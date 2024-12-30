import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSDK } from "@metamask/sdk-react";

const Header = () => {
  const [account, setAccount] = useState(null);
  const { sdk, connected, connecting, provider } = useSDK();
  const [chainId, setChainId] = useState(null);

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("Failed to connect:", err);
    }
  };

  const getChainId = async () => {
    try {
      if (window.ethereum) {
        const chainIdHex = await window.ethereum.request({
          method: "eth_chainId",
          params: [],
        });
        const chainIdDecimal = parseInt(chainIdHex, 16); // Convert from hex to decimal
        setChainId(chainIdDecimal);
      }
    } catch (error) {
      console.error("Failed to get chain ID:", error);
    }
  };

  const switchToOpMainnet = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xa" }], // 0xa is the hex for Optimism Mainnet (chain ID 10)
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        // Chain not added to MetaMask, add it
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0xa", // 0xa is the hex for Optimism Mainnet (chain ID 10)
                chainName: "Optimism Mainnet",
                rpcUrls: ["https://mainnet.optimism.io"],
                nativeCurrency: {
                  name: "Ether",
                  symbol: "ETH",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://optimistic.etherscan.io"],
              },
            ],
          });
        } catch (addError) {
          console.error("Failed to add Optimism network:", addError);
        }
      } else {
        console.error("Failed to switch network:", switchError);
      }
    }
  };

  useEffect(() => {
    getChainId(); // Check the chain ID when the component mounts
  }, []);

  // Define networks array
  const networks = [
    { name: 'Ethereum', chainId: 1 },
    { name: 'BNB Smart Chain', chainId: 56 },
    { name: 'Arbitrum One', chainId: 42161 },
    { name: 'Avalanche C-Chain', chainId: 43114 },
    { name: 'OP', chainId: 10 },
    { name: 'Polygon', chainId: 137 },
    { name: 'Base', chainId: 8453 },
    { name: 'Cronos', chainId: 25 },
    { name: 'Manta Pacific', chainId: 169 },
    { name: 'Gnosis', chainId: 100 },
    { name: 'Klaytn Cypress', chainId: 8217 },
    { name: 'Celo', chainId: 42220 },
    { name: 'Mantle', chainId: 5000 },
    { name: 'PublicMint', chainId: 2020 },
    { name: 'Rootstock', chainId: 30 },
    { name: 'Astar', chainId: 592 },
    { name: 'Fantom Opera', chainId: 250 },
    { name: 'Fusion', chainId: 32659 },
    { name: 'Metis Andromeda', chainId: 1088 },
    { name: 'Huobi ECO Chain', chainId: 128 },
    { name: 'Moonbeam', chainId: 1284 },
  ];

  // Update getNetworkName function to use the networks array
  const getNetworkName = (chainId) => {
    const network = networks.find((network) => network.chainId === chainId);
    return network ? network.name : "Unknown Network";
  };

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
          <button
            onClick={connect}
            className="bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-white px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 shadow-sm"
          >
            {account ? `${account.slice(0, 6)}...` : "Connect Wallet"}
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
    <div className="flex items-center gap-1 px-12 py-1 text-sm text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300 mx-auto ml-auto">
      {/* Display network name */}
      {chainId && (
        <span className="">
          Network: {getNetworkName(chainId)}
        </span>
      )}
    </div>
  </>
  );
};

export default Header;
