import Hero from "../components/Hero";
import CreateNFT from "../components/CreateNFT";
import ArtWork from "../components/ArtWork";
import { useGlobalState } from "../store";
import Footer from "../components/Footer";
import Empty from "../components/Empty";
const Home = () => {
    const [auctions] = useGlobalState('auctions')
    return (
        <div className="w-4/5 mx-auto mt-11">
            <Hero />
            {auctions.length > 0 ? <ArtWork auctions={auctions}/> : <Empty />}
            <CreateNFT />
            <Footer />
        </div>
    )

}

export default Home;