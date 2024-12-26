import { Gavel, Wallet, UserRoundPen } from "lucide-react";
import { setGlobalState, useGlobalState } from "../store";
import picture4 from "../assets/images/picture4.png"
const NFT = () => {
  const [openBox] = useGlobalState("openBox");

  const onChange = () => {
    setGlobalState("boxModal", "scale-100");
    setGlobalState("openBox", true);
  };

  return (
    <div className="">
      <div className="w-4/5 flex flex-col mt-11 mx-auto bg-white border border-gray-300 rounded-md shadow-md -z-10 dark:bg-gray-800 dark:border-gray-700 shadow-[0px_0px_85px_6px_rgba(147,_51,_234,_0.15)]">
        <div className={openBox ? "opacity-50" : "opacity-100"}>
          <div className="relative my-4 mx-4 md:flex-row w-full justify-between items-center mx-auto">

            <div className="mx-4 flex text-white py-1 font-semibold text-5xl ml-auto">
            <img src={picture4} alt="" className="w-2/5 mr-auto rounded m-4 p-5" />
            <div className="ml-auto mt-5">
              <p className="text-[#BFC4CA] py-1 font-semibold text-2xl mb-11">
                Owner: x09082jsdadaug2.....
              </p>
              <p className="text-[#BFC4CA] py-1 font-semibold text-3xl mb-11">
                More than 100+ NFTs available to collect
              </p>
              <p className="text-[#BFC4CA] py-1 font-semibold text-3xl mb-11">
                More than 100+ NFTs available to collect
              </p>
              </div>
            </div>
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
      </div>
      <div className="w-4/5 flex flex-col mt-11 mx-auto bg-white border border-gray-300 rounded-md shadow-md hover:shadow-indigo-500 -z-10 dark:bg-gray-800 dark:border-gray-700 ">
        <div className={openBox ? "opacity-50" : "opacity-100"}>
          <div className="relative my-4 mx-4 md:flex-row w-full justify-between items-center mx-auto">
            <p className="my-4 mx-4 text-white py-1 font-semibold text-2xl">
              Bidding History
            </p>
          </div>
          <div className="my-7 mx-4 flex items-center gap-2 mb-5 pb-5 dark:text-gray-300 lg:mb-0"></div>
          <div
            title="total views"
            className="flex items-center gap-1 p-3 text-lg text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300"
          >
            <Wallet className="mr-2"/> x09082jsdadaug2.....
            <p className="ml-auto">0.04 ETH</p>
          </div>
          <div
            title="total views"
            className="flex items-center gap-1 p-3 text-lg text-slate-300 "
          >
            <Wallet className="mr-2"/> x09082jsdadaug2.....
            <p className="ml-auto">0.03 ETH</p>
          </div>
          <div
            title="total views"
            className="flex items-center gap-1 p-3 text-lg text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300"
          >
            <Wallet className="mr-2"/> x09082jsdadaug2.....
            <p className="ml-auto">0.01 ETH</p>
          </div>
          <div
            title="total views"
            className="flex items-center gap-1 p-3 text-lg text-slate-300 "
          >
            <Wallet className="mr-2"/> x09082jsdadaug2.....
            <p className="ml-auto">0.02 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFT;
