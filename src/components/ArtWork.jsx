import { Gavel, Gem, UserRoundPen } from "lucide-react";
import {Link} from 'react-router-dom';
import Auction from "./Auction";
const ArtWork = ({ auctions, title, showOffer }) => {
  return (

    <div className="flex gap-4">
      {auctions.map((auction, i) => (
        <Auction key={i} auction={auction} title={title} />
      ))}
    </div>
  );
};

export default ArtWork;