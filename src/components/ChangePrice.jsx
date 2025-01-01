import { FaTimes } from "react-icons/fa";
import dog1 from "../assets/images/dog1.jpg";
import {useState} from 'react';
import { useGlobalState, setGlobalState } from "../store";
const ChangePrice = () => {
     const [priceModal] = useGlobalState('priceModal')
     const [auction] = useGlobalState('auction')
    const [imgBase64, setImgBase64] = useState(null)
    const [price, setPrice] = useState(null)

    const onClose = () => {
        resetForm()
        setGlobalState('priceModal','scale-0')
        setGlobalState('openBox',false)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!price) return
        const formData = new FormData()
        resetForm()
        console.log({price})
    }
    const resetForm = () => {
        setPrice('')
    }
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center
    justify-center bg-black bg-opacity-0 transform
    transition-transform duration-500 ${priceModal}`}>
      <div className="bg-[#303949] relative flex flex-col w-full max-w-3xl mx-auto my-8 rounded-md shadow dark:shadow-gray-100 shadow-primary-500 text-white w-11/12 sm:w-2/5 h-7/12 p-6">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center text-gray-400 w-full">
            <p className="font-semibold italic">Chang Price</p>
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
                src={auction.imageUrl || dog1}
                alt="Artwork"
                className="h-full w-full object-cover cursor-pointer"
              />
            </div>
          </div>

                <input type="number" min={0.01}  className="block flex w-full p-3 mb-3 placeholder-gray-500 rounded-md dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-200" required placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} name="price"/>
          <button
            type='submit'
            className="flex bg-indigo-600 justify-center items-center w-[200px] text-white text-md py-2 px-5 rounded-full drop-shadow-xl border border-transparent hover:text-white"
          >
            Change Price
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePrice;
