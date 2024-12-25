import { FaTimes } from "react-icons/fa";
import picture4 from "../assets/images/picture4.png";

const CreateNFT = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 scale scale-100">
      <div className="bg-[#303949] relative flex flex-col w-full max-w-3xl mx-auto my-8 rounded-md shadow dark:shadow-gray-100 shadow-primary-500 text-white w-11/12 sm:w-2/5 h-7/12 p-6">
        <form className="flex flex-col items-center">
          <div className="flex justify-between items-center text-gray-400 w-full">
            <p className="font-semibold italic">Add NFT</p>
            <button
              type="button"
              className="absolute top-2 right-2 border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex items-center justify-center my-4 w-full">
            <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
              <img
                src={picture4}
                alt="Artwork"
                className="h-full w-full object-cover cursor-pointer"
              />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="" className="">
                <span className="flex items-center justify-center m-4 w-full">Choose NFT Artwork</span>
                <input type="file" accept="image/png, image/gif, image/jpeg, image/webp" className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:bg-indigo-600 file:text-white file:border-solid file:border-slate-500 file:cursor-pointer file:ring-0 file:py-2 file:px-4" required />
            </label>
          </div>
            <label htmlFor="" className="">
                <input type="text" className="block flex w-full p-3 mb-3 placeholder-gray-500 rounded-md dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-200 " required placeholder="Title"/>
            </label>
            <label htmlFor="" className="">
                <input type="text"  className="block flex w-full p-3 mb-3 placeholder-gray-500 rounded-md dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-200" required placeholder="Description"/>
            </label>
          <button
            type='subimt'
            className="flex bg-indigo-600 justify-center items-center w-[100px] text-white text-md py-2 px-5 rounded-full drop-shadow-xl border border-transparent hover:text-white"
          >
            Mint
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;
