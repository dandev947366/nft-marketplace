import { Gavel, Wallet, UserRoundPen, Trophy } from "lucide-react";
import { setGlobalState, truncate, useGlobalState } from "../store";
import picture4 from "../assets/images/picture4.png";
import Footer from "../components/Footer";
import CountDown from "../components/CountDown";

const Details = ({ auction, account }) => {
  return (
    <>
      <div className="relative my-4 mx-4 md:flex-row w-full justify-between items-center mx-auto">
            <div className="mx-4 flex text-white py-1 font-semibold text-5xl ml-auto">
              <img
                src={picture4}
                alt=""
                className="w-2/5 mr-auto rounded m-4 p-5"
              />
            </div>
            {/* <div className="p-2 mx-4 font-semibold bg-indigo-600 text-white rounded-lg inline-block shadow-sm shadow-gray-700">
              <button onClick={onChange}>Create NFT</button>
            </div> */}
            <div className="my-7 mx-4 flex items-center gap-2 mb-5 pb-5 dark:text-gray-300 lg:mb-0">
              <div
                title="component is responsive"
                className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300"
              >
                <Gavel /> 10 Bidders
              </div>
              <div
                title="total views"
                className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300"
              >
                <Wallet /> 5 Offers
              </div>
              {/* <div
                title="total favorites"
                className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300"
              >
                <UserRoundPen /> +10k Artist
              </div> */}
            </div>
          </div>
    </>
  );
};

const Bidders = ({ bidders, auction }) => {
  return (
    <>
      <div
            title="total views"
            className="flex items-center gap-1 p-3 text-lg text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300"
          >
            <Wallet className="mr-2" /> x09082jsdadaug2.....
            <p className="ml-auto mr-10">0.04 ETH</p>
            <button className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-md p-1 rounded-md drop-shadow-xl border border-transparent hover:text-white">Claim</button>
          </div>
          <div
            title="total views"
            className="flex items-center gap-1 p-3 text-lg text-slate-300"
          >
            <Wallet className="mr-2" /> x09082jsdadaug2.....
            <p className="ml-auto mr-10">0.04 ETH</p>
            <button className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-md p-1 rounded-md drop-shadow-xl border border-transparent hover:text-white">Claim</button>
          </div>
          <div
            title="total views"
            className="flex items-center gap-1 p-3 text-lg text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300"
          >
            <Wallet className="mr-2" /> x09082jsdadaug2.....
            <p className="ml-auto mr-10">0.04 ETH</p>
            <button className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-md p-1 rounded-md drop-shadow-xl border border-transparent hover:text-white">Claim</button>
          </div>
          <div
            title="total views"
            className="flex items-center gap-1 p-3 text-lg text-slate-300"
          >
            <Wallet className="mr-2" /> x09082jsdadaug2.....
            <p className="ml-auto mr-10">0.04 ETH</p>
            <button className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-md p-1 rounded-md drop-shadow-xl border border-transparent hover:text-white">Claim</button>
          </div>
    </>
  );
};

const CountDownPrice = ({auction}) => {
  return(
    <>
      <span className="text-indigo-600 ml-2">{auction?.duration > Date.now() ? (<CountDown timestamp={auction.duration}/>) : '00:00:00'}</span>

    </>
  )
}


const NFT = () => {
  const [openBox] = useGlobalState("openBox");
  const [auction] = useGlobalState("auction");
  const [bidders] = useGlobalState("bidders");
  const [connectedAccount] = useGlobalState("connectedAccount");

  const onChange = () => {
    setGlobalState("boxModal", "scale-100");
    setGlobalState("openBox", true);
  };

  return (
    <div>
      <div className="w-4/5 flex flex-col mt-11 mx-auto bg-white border border-gray-300 rounded-md shadow-md -z-10 dark:bg-gray-800 dark:border-gray-700 shadow-[0px_0px_100px_-24px_rgba(147,_51,_234,_0.5)]">
        <div className={openBox ? "opacity-50" : "opacity-100"}>
          <Details />
        </div>
      </div>
      <div className="w-4/5 flex flex-col mt-11 mx-auto bg-white border border-gray-300 rounded-md shadow-md hover:shadow-indigo-500 -z-10 dark:bg-gray-800 dark:border-gray-700 h-[calc(140vh_-_40.5rem)] overflow-y-auto">

        <div className={openBox ? "opacity-50" : "opacity-100"}>
          <div className="relative my-4 mx-4 md:flex-row w-full justify-between items-center mx-auto">
            <p className="my-4 mx-4 text-white py-1 font-semibold text-2xl">
              Bidding History
            </p>
            <p className="my-4 mx-4 flex text-white py-1 font-semibold text-2xl dark:bg-gray-800 dark:border-gray-700 text-indigo-600">
              Current Price: 2 ETH
            </p>
          </div>
          <Bidders />

          <span className="my-4 mx-4 flex text-white py-1 font-semibold text-2xl">
              Count Down:<CountDownPrice auction={auction} />
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NFT;
