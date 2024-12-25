import { Link } from "react-router-dom";
import Promotion from "./Promotion";

const Header = () => {
  return (
    <>
      <Promotion />
      <nav class="inset-x-0 top-0 w-full bg-indigo-600 border-gray-200 py-2.5 shadow-lg z-50">
  <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
    <Link to="/" class="flex items-center">
      <span class="self-center text-xl font-semibold text-white whitespace-nowrap">
        NFT Marketplace
      </span>
    </Link>
    <div class="flex items-center lg:order-2">
      <div class="hidden mt-2 mr-4 sm:inline-block">
        <span></span>
      </div>
      <Link
        href="/"
        class="text-indigo-600 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 shadow-sm"
      >
        Connect Wallet
      </Link>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
        aria-controls="mobile-menu-2"
        aria-expanded="true"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <Link
            href="/"
            class="block py-2 pl-3 pr-4 text-white bg-indigo-800 rounded lg:bg-transparent lg:text-white lg:p-0"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/marketplace"
            class="block py-2 pl-3 pr-4 text-white hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0"
          >
            Marketplace
          </Link>
        </li>
        <li>
          <Link
            href="/collections"
            class="block py-2 pl-3 pr-4 text-white hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0"
          >
            Collections
          </Link>
        </li>
        <li>
          <Link
            href="/artists"
            class="block py-2 pl-3 pr-4 text-white hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0"
          >
            Artists
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            class="block py-2 pl-3 pr-4 text-white hover:bg-indigo-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0"
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
