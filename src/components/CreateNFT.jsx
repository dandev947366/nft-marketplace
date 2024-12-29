import { FaTimes } from "react-icons/fa";
import picture4 from "../assets/images/picture4.png";
import { useGlobalState, setGlobalState } from "../store";
import { useState, useEffect } from 'react';
// import { NFTStorage, File } from 'nft.storage'
import { Buffer } from 'buffer';
import { ethers } from 'ethers';
import axios from 'axios';
import {uploadJSONToIPFS, uploadFileToIPFS} from "../config/pinata"
const CreateNFT = () => {
  const [boxModal] = useGlobalState("boxModal");
  const [openBox] = useGlobalState("openBox");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [fileUrl, setFileUrl] = useState("");
  const [imgBase64, setImgBase64] = useState(null);
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setURL] = useState(null);
  const [message, setMessage] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);

  const onClose = () => {
    resetForm();
    setGlobalState("boxModal", "scale-0");
    setGlobalState("openBox", false);
  };

  const changeImage = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result;
      setImgBase64(file);
      setFileUrl(e.target.files[0]);
    };
  };
  const createImage = () => {
    console.log("Create image....")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !fileUrl) return;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("fileUrl", fileUrl);
    resetForm();
    console.log({ name, description, fileUrl });
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await axios
          .post('https://localhost:9000/process', formData)
          .then((async (res) => {
            console.log(res)
            resolve()
          }))
          .catch((error) => reject(error))
      }),
      {
        pending: 'Minting in progress...',
        success: 'Minting completed.',
        error: 'Encountered an error.'
      }
    )

  };

  const resetForm = () => {
    setFileUrl("");
    setImgBase64("");
    setName("");
    setDescription("");
  };

  return (
    <div className={openBox? "bg-white":"bg-opacity-100"}>
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-0 transform transition-transform duration-500 ${boxModal}`}
    >
      <div className="bg-[#303949] relative flex flex-col w-full max-w-3xl mx-auto my-8 rounded-md shadow dark:shadow-gray-100 shadow-primary-500 text-white w-11/12 sm:w-2/5 h-7/12 p-6">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center text-gray-400 w-full">
            <p className="font-semibold italic">Mint NFT with AI</p>
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
                src={imgBase64 || picture4}
                alt="Artwork"
                className="h-full w-full object-cover cursor-pointer"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block">
              <span className="flex items-center justify-center m-4 w-full ">
                Choose NFT Artwork
              </span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/webp"
                className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:bg-indigo-600 file:text-white file:border-solid file:border-slate-500 file:cursor-pointer file:ring-0 file:py-2 file:px-4  "
                required
                onChange={changeImage}
              />
            </label>
          </div>

          <input
            type="text"
            className="block flex w-full p-3 mb-3 placeholder-gray-500 rounded-md dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-200 "
            required
            placeholder="Title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <input
            type="text"
            className="block flex w-full p-3 mb-3 placeholder-gray-500 rounded-md dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-200"
            required
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
          <input
            type="number"
            className="block flex w-full p-3 mb-3 placeholder-gray-500 rounded-md dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-200"
            required
            placeholder="Price (in ETH)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="price"
          />
          <button
            type="submit"
            className="flex bg-indigo-600 justify-center items-center w-[200px] text-white text-md py-2 px-5 rounded-full drop-shadow-xl border border-transparent hover:text-white mt-2 hover:bg-indigo-500 "
          >
            Upload NFT
          </button>
        </form>

        <div className="image">
          {!isWaiting && image ? (
            <img src={image} alt="AI generated image" />
          ) : isWaiting ? (
            <div className="image__placeholder">
              <Spinner animation="border" />
              <p>{message}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {!isWaiting && url && (
        <p>
          View&nbsp;
          <a href={url} target="_blank" rel="noreferrer">
            Metadata
          </a>
        </p>
      )}
    </div>
    </div>
  );
};

export default CreateNFT;
