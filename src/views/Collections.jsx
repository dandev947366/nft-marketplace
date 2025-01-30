import { Gavel, Gem, UserRoundPen } from "lucide-react";
import ArtWork from "../components/ArtWork";
import Empty from "../components/Empty";
import { useGlobalState } from "../store";
import { useState } from "react";
import { title } from "process";
import OfferItem from "../components/OfferItem";
import Footer from "../components/Footer";
import MarketplaceJSON from "../api/NFTMarketplace.json";
import { GetIpfsUrlFromPinata } from "../utils/utils";
const Collections = () => {
  const [collections] = useGlobalState("collections");
  const [auctions] = useGlobalState("auctions");
  const [data, updateData] = useState({});
  const [dataFetched, updateDataFetched] = useState(false);
  const [message, updateMessage] = useState("");
  const [currAddress, updateCurrAddress] = useState("0x");
  return (
    <>
      <div className="w-4/5 mx-auto mt-11">
        {collections.length > 0 ? (
          <ArtWork auctions={auctions} title={title} />
        ) : (
          <Empty />
        )}
      </div>
      <OfferItem />
      <Footer />
    </>
  );
};

export default Collections;
