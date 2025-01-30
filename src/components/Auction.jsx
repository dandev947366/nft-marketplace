import { Link } from "react-router-dom";
import CountDown from "./CountDown";
import { setGlobalState, useGlobalState } from "../store";

const Auction = ({ auction, title }) => {
  const [openBox] = useGlobalState("openBox");
  return (
    <div className={openBox ? "opacity-50 " : "opacity-100"}>
      <div className="full overflow-hidden md:w-6/4 md:mt-0 font-sans my-4 border border-gray-700 rounded-md shadow-md dark:bg-gray-800 hover:shadow-md hover:shadow-indigo-500 relative my-4 mx-4 md:flex-row w-full justify-between items-center mx-auto">
        <Link to={"/nft/" + auction.tokenId}>
          <img
            src={auction.imageUrl}
            alt={`NFT ${auction.tokenId}`}
            className="w-full h-80 shadow-lg shadow-gray border-[]"
          />
        </Link>
        <p className="flex flex-row items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded dark:text-gray-300 text-xl text-white mb-4">
          Title:{title}
        </p>
        <p className="flex flex-row items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded dark:text-gray-300 text-xl text-white mb-4">
          Current Bids:
        </p>

        <div className="flex flex-row items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded dark:text-gray-300 text-lg text-white mb-4">
          <span>Auction End</span>
          <div className="text-center">
            {auction.live && auction.duration > Date.now() ? (
              <CountDown timestamp={auction.duration} />
            ) : (
              "00:00:00"
            )}
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded dark:text-gray-300 text-lg text-white mb-4">
          <button
            className="bg-indigo-600 justify-center items-center w-[100px] text-white text-sm p-1 rounded-full border border-slate-500 shadow-md hover:bg-indigo-500 "
            onClick={() => {
              setGlobalState("offerModal", "scale-100");
            }}
          >
            Buy NFT
          </button>
          <button
            className="bg-indigo-600 justify-center items-center w-[100px] text-white text-sm p-1 rounded-full border border-slate-500 shadow-md hover:bg-indigo-500 "
            onClick={() => {
              setGlobalState("bidModal", "scale-100");
            }}
          >
            Place Bid
          </button>
          <button
            className="bg-indigo-600 justify-center items-center w-[100px] text-white text-sm p-1 rounded-full border border-slate-500 shadow-md hover:bg-indigo-500 "
            onClick={() => {
              setGlobalState("offerModal", "scale-100");
            }}
          >
            Make Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auction;
