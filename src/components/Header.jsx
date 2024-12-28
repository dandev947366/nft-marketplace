import { Link } from "react-router-dom";
import Promotion from "./Promotion";
import { connectWallet } from '../services/blockchain';
import { truncate, useGlobalState } from '../store';

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount');

  return (
    <>
      {/* <Promotion /> */}
      <nav className="inset-x-0 top-0 w-full bg-white border-b md:px-2 dark:border-gray-500/50 dark:bg-gray-800 py-2.5 shadow-lg z-50">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
              NFT Marketplace
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>
            {connectedAccount ? (
              <button
                className="bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-white px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 shadow-sm"
              >
                {truncate(connectedAccount, 4, 4, 11)}
              </button>
            ) : (
              <button
                className="text-indigo-600 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 shadow-sm"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
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