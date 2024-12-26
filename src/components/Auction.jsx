import { Link } from "react-router-dom";
import CountDown from "./CountDown";
import { setGlobalState } from "../store";

const Auction = ({ auction, title }) => {
  return (
    <div className="full overflow-hidden md:w-6/4 md:mt-0 font-sans my-4 border border-gray-300 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-md hover:shadow-indigo-600 relative my-4 mx-4 md:flex-row w-full justify-between items-center mx-auto">
      <Link to={'/nft/' + auction.tokenId}>
        <img
          src={auction.imageUrl}
          alt={`NFT ${auction.tokenId}`}
          className="w-full h-60 shadow-lg shadow-gray border-[]"
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
            '00:00:00'
          )}
        </div>
        <button className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-sm p-1 rounded-full border border-slate-500 shadow-md ml-auto" onClick={()=>{setGlobalState('offerModal', 'scale-100')}}>
              Buy
            </button>
        {/* {showOffer ? (
          <button className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-sm p-1 rounded-full border border-slate-500 shadow-md ml-auto">
            Offer
          </button>
        ) : (
          auction.tokenId % 2 === 0 ? (
            <button className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-sm p-1 rounded-full border border-slate-500 shadow-md ml-auto">
              Bid
            </button>
          ) : (
            <button className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-sm p-1 rounded-full border border-slate-500 shadow-md ml-auto">
              Buy
            </button>
          )
        )} */}
      </div>
    </div>
  );
};

export default Auction;
