import { FaTimes } from "react-icons/fa";
import picture4 from "../assets/images/picture4.png";
import { useState } from "react";
import { useGlobalState, setGlobalState } from "../store";
const OfferItem = () => {
  const [offerModal] = useGlobalState("offerModal");
  const [auction] = useGlobalState("auction");
  const [period, setPeriod] = useState("");
  const [isBiddable, setIsBiddable] = useState(false);
  const [timeline, setTimeline] = useState("");
  const onClose = () => {
    resetForm();
    setGlobalState("offerModal", "scale-0");
    setGlobalState("openBox", false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!period || !biddable || !timeline) return;
    const formData = new FormData();
    formData.append("period", period);
    resetForm();
    console.log("Submited offer");
  };
  const resetForm = () => {
    setPeriod("");
  };
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
    justify-center bg-black bg-opacity-0 transform
    transition-transform duration-500 ${offerModal}`}
    >
      <div className="bg-[#303949] relative flex flex-col w-full max-w-3xl mx-auto my-8 rounded-md shadow dark:shadow-gray-100 shadow-primary-500 text-white w-11/12 sm:w-2/5 h-7/12 p-6">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center text-gray-400 w-full">
            <p className="font-semibold italic">Offer NFT</p>
            <button
              type="button"
              onClick={onClose}
              className="absolute top-2 right-2 border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex items-center justify-center my-4 w-full">
            <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
              <img
                src={auction.img || picture4}
                alt="Artwork"
                className="h-full w-full object-cover cursor-pointer"
              />
            </div>
          </div>
          <input
            type="number"
            className="block flex w-full p-3 mb-3 placeholder-gray-500 rounded-md dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-200"
            placeholder="Days E.g 7"
            name="period"
            value={period}
            onChange={(e) => {
              setPeriod(e.target.value);
            }}
            required
          />
          <select
            className="block w-full p-3 mb-3 rounded-md dark:bg-gray-800 dark:text-gray-200"
            name="duration"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Period
            </option>
            <option value="7">7 Days</option>
            <option value="14">14 Days</option>
            <option value="30">30 Days</option>
          </select>
          <select
            id="biddable"
            className="block w-full p-3 mb-3 rounded-md dark:bg-gray-800 dark:text-gray-200"
            name="biddable"
            value={isBiddable}
            onChange={(e) => setIsBiddable(e.target.value)}
            required
          >
            <option value="" disabled>
              Biddable
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button
            type="submit"
            className="flex bg-indigo-600 justify-center items-center w-[200px] text-white text-md py-2 px-5 rounded-full drop-shadow-xl border border-transparent hover:text-white"
          >
            Make Offer
          </button>
        </form>
      </div>
    </div>
  );
};

export default OfferItem;
