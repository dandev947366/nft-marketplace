import { Link } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../store";
const Footer = () => {
  const [openBox] = useGlobalState('openBox')
  return (
    <div className={openBox ? "opacity-50 " : "opacity-100"}>
      <div className="w-full pt-8 mt-20 mx-auto text-white bg-gray-800 border border-gray-700 border-t-2 shadow-[0px_-50px_100px_-49px_rgba(34,_197,_94,_0.5)]">
        <div className="grid gap-12 row-gap-6 px-4 mb-8 md:px-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link
              to="/"
              aria-label="home"
              title="NFT Marketplace"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide dark:text-gray-200">
                NFT Marketplace
              </span>
            </Link>
            <div className="mt-6 lg:max-w-sm ">
              Our NFT marketplace is built on a strong community of creators,
              collectors, and digital enthusiasts. Together, we’re shaping the
              future of art and digital assets on the blockchain.
            </div>
          </div>

          <div className="text-sm">
            <div>
              <p className="text-base font-bold tracking-wide dark:text-gray-300">
                Contact
              </p>

              <div className="flex flex-col gap-1 mt-2">
                <p className="mr-1">
                  Email:{" "}
                  <Link
                    to="mailto:danle947366@gmail.com"
                    aria-label="email"
                    title="Our email"
                    className="text-primary-600"
                  >
                    <span className="text-indigo-600">danle947366@gmail.com</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <div>
              <p className="text-base font-bold tracking-wide dark:text-gray-200">
                Resources
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <Link to="https://danle.dev/" target="_blank">
                  www.danle.dev
                </Link>
                For other portfolio projects
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between gap-2 px-4 pt-4 pb-8 text-sm border-t md:px-8 lg:flex-row">
          <p className="">© 2024 NFTMarketplace. All Rights Reserved.</p>
          <p>Made with <span className="mr-1 ml-1 text-red-500">&#10084;</span> by Dan Le</p>
          <ul className="flex flex-col gap-2 mb-4 text-sm sm:flex-row md:mb-0">
            <li className="md:border-r-2 dark:border-gray-600 md:pr-2">
              <Link to="https://danle.dev/">FAQs</Link>
            </li>
            <li className="md:border-r-2 dark:border-gray-600 md:pr-2">
              <Link to="https://danle.dev/">Privacy Policy</Link>
            </li>
            <li className="md:border-r-2 dark:border-gray-600 md:pr-2">
              <Link to="https://danle.dev/">Terms of Service</Link>
            </li>
            <li className="md:border-r-2 dark:border-gray-600 md:pr-2">
              <Link to="https://danle.dev/">Contribution Guidelines</Link>
            </li>
            <li>
              <Link to="https://danle.dev/">Legal</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
