import Hero from "../components/Hero";
import CreateNFT from "../components/CreateNFT";
import ArtWork from "../components/ArtWork";
import { useGlobalState } from "../store";
const Home = () => {
    const [auctions] = useGlobalState('auctions')
    return (
        <div className="w-4/5 mx-auto mt-11">
            <Hero />
            <CreateNFT />
            <ArtWork auctions={auctions}/>
        </div>
    )

}

export default Home;