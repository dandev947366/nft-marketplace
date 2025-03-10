import Hero from "../components/Hero";
import OfferItem from "../components/OfferItem";
import ArtWork from "../components/ArtWork";
import { useGlobalState } from "../store";
import Footer from "../components/Footer";
import Empty from "../components/Empty";
import ChangePrice from "../components/ChangePrice";
import PlaceBid from "../components/PlaceBid";
import CreateNFT from "../components/CreateNFT";
import GasPrice from "../components/GasPrice";
import Transactions from "../components/Transactions";
const Home = () => {
  const [auctions] = useGlobalState("auctions");

  return (
    <>
      <div className="w-4/5 mx-auto mt-11 dark:bg-gray-800 dark:border-gray-700 bg-gray-800">
        <GasPrice />
        <Hero />
        {auctions.length > 0 ? <ArtWork auctions={auctions} /> : <Empty />}
        {/* <MintAI /> */}
        <PlaceBid />
        <ChangePrice />
        <OfferItem />
        <CreateNFT />
        <Transactions  />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default Home;
