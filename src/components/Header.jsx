import { Link } from "react-router-dom";
import { connectWallet } from '../services/blockchain';
import { truncate, useGlobalState } from '../store';
import { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
const Header = () => {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");
  const [owner, setOwner] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef(null);
  //CONNECT WALLET
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    console.log("provider", provider);
    console.log("web3Provider", web3Provider);

    // If user is not connected to the OP network, let them know and throw an error
    // const OP_CHAINID = 11155420;
    const OP_CHAINID = 10;
    const LOCAL_HOST_CHAINID = 31337;
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== OP_CHAINID) {
      window.alert("Change the network to OP_CHAINID");
      throw new Error("Change the network to OP_CHAINID");
    }
    console.log("chainId", chainId);

    if (needSigner) {
      const signer = web3Provider.getSigner();
      console.log("signer", signer);

      return signer;
    }
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const truncatedAddress =
      address.slice(0, 6) + "..." + address.slice(38, 42);
    setAddress(truncatedAddress);
    console.log("address", address);
    return web3Provider;
  };
  const handleConnectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };
  const connectWallet = async () => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "opsepolia",
        providerOptions: {},
        disableInjectedProvider: false
      });

      handleConnectWallet();
    }
  };
  useEffect(() => {
    getProviderOrSigner();
  }, [walletConnected]);

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
                className="bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-white px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 shadow-sm" onClick={() => {
                  if (!walletConnected) {
                    alert("Please connect your wallet to create a proposal.");
                  } else {
                    setModalOpen(true);
                  }
                }}
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


