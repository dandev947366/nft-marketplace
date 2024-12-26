const ActionButton = ({ auction, account }) => {
  return (
    <>
    {/* {auction.tokenId % 2 == 0 ? ( */}
      {1 == 0 ? (
        <button className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-md p-1 rounded-md drop-shadow-xl border border-transparent hover:text-white">
          Place Bid
        </button>
      ) : (
        <button className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-md p-1 rounded-md drop-shadow-xl border border-transparent hover:text-white">
          Buy NFT
        </button>
      )}
    </>
  );
};

export default ActionButton;
