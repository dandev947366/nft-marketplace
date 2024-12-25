import { Gavel, Gem, UserRoundPen } from "lucide-react";
import {Link} from 'react-router-dom';
const ArtWork = ({ auctions, title, showOffer }) => {
  return (

    <div className="flex gap-4">
      {auctions.map((auction, i) => (
        <Auction key={i} auction={auction} title={title} />
      ))}
    </div>
  );
};

const Auction = ({auction, showOffer}) => {
  return (
    <div className="full overflow-hidden md:w-6/4 md:mt-0 font-sans my-4 border border-gray-300 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-md hover:shadow-indigo-600 relative my-4 mx-4 md:flex-row w-full justify-between items-center mx-auto">
        <Link to={'/nft/' + auction.tokenId}></Link>
      <img src="" alt="" className="w-full h-60 shadow-lg shadow-gray border-[]" />
      <p className="flex flex-row items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded dark:text-gray-300 text-xl text-white mb-4">
        Current Bids:
      </p>
      <p className="flex flex-row items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded dark:text-gray-300 text-xl text-white mb-4">
        Auction End:
      </p>
    </div>
  );
};

export default ArtWork;
