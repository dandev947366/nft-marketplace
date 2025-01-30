import { Gavel, Gem, UserRoundPen } from "lucide-react";
import { setGlobalState, useGlobalState } from "../store";

const Banner = () => {
  const [openBox] = useGlobalState("openBox");

  const onChange = () => {
    setGlobalState("boxModal", "scale-100");
    setGlobalState("openBox", true);
  };
  const onChangeMint = () => {
    setGlobalState("mintModal", "scale-100");
    setGlobalState("openBox", true);
  };

  return (
    <>
      <div
        className={
          openBox ? "opacity-50 bg-gray-800" : "opacity-100 bg-gray-800"
        }
      >
        <div className="relative my-4 mx-4 md:flex-row w-full justify-between items-center mx-auto">
          <h1 className="my-4 mx-4 text-white py-1 font-semibold text-5xl">
            Discover, Collect, and Sell NFTs
            <p className="text-[#BFC4CA] py-1 font-semibold text-3xl mb-11">
              More than 100+ NFTs available to collect
            </p>
          </h1>
        </div>
        <div className="p-2 mx-4 font-semibold bg-indigo-600 text-white rounded-lg inline-block shadow-sm shadow-gray-700 hover:bg-indigo-500 ">
          <button onClick={onChange}>Create NFT</button>
        </div>
        {/* <div className="p-2 font-semibold bg-slate-500 text-white rounded-lg inline-block shadow-sm shadow-gray-700 hover:bg-slate-400 ">
          <button onClick={onChangeMint}>Mint NFT</button>
        </div> */}
        {/* <div className="p-2 mx-4 font-semibold bg-indigo-600 text-white rounded-lg inline-block shadow-sm shadow-gray-700">
          <button onClick={onChangeAI}>Create NFT with AI</button>
        </div> */}
        <div className="my-7 mx-4 flex items-center gap-2 mb-5 pb-5 dark:text-gray-300 lg:mb-0 bg-gray-800">
          <div
            title="component is responsive"
            className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300 dark:bg-gray-700/50 dark:text-gray-300"
          >
            <Gavel /> +100K Auctions
          </div>
          <div
            title="total views"
            className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300 dark:bg-gray-700/50 dark:text-gray-300"
          >
            <Gem /> +210K Rare
          </div>
          <div
            title="total favorites"
            className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300 dark:bg-gray-700/50 dark:text-gray-300"
          >
            <UserRoundPen /> +10k Artist
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
