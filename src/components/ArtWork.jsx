import { Gavel, Gem, UserRoundPen } from "lucide-react";
import { Link } from "react-router-dom";
import Auction from "./Auction";
const ArtWork = ({ auctions, title, showOffer }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {auctions.map((auction, i) => (
        <Auction key={i} auction={auction} title={title} showOffer />
      ))}
    </div>
  );
};

export default ArtWork;
