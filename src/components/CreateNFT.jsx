import { FaTimes } from "react-icons/fa";
import picture4 from "../assets/images/picture4.png";
import {
  useGlobalState,
  setGlobalState,
  setAlert
} from "../store";
import { useState } from "react";
import { toast } from "react-toastify";
import { mintNFT } from "../Blockchain.Services";
import { uploadToPinata, uploadMetadataToPinata } from "../services/pinata"; // Import the Pinata functions

const CreateNFT = () => {
  const [boxModal] = useGlobalState("boxModal");
  const [openBox] = useGlobalState("openBox");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [fileUrl, setFileUrl] = useState("");
  const [imgBase64, setImgBase64] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setURL] = useState(null);
  const [message, setMessage] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);

  // Close modal and reset form
  const onClose = () => {
    resetForm();
    setGlobalState("boxModal", "scale-0");
    setGlobalState("openBox", false);
  };

  // Handle image file selection
  const changeImage = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result;
      setImgBase64(file);
      setFileUrl(e.target.files[0]);
    };
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !description || !fileUrl) return;
    setIsWaiting(true);
    setMessage("Uploading image to Pinata...");

    try {
      // Step 1: Upload image to Pinata
      const imageUrl = await uploadToPinata(fileUrl, name); // Using the Pinata function

      setMessage("Uploading metadata to Pinata...");

      // Step 2: Create NFT metadata
      const metadata = {
        name: name,
        description: description,
        image: imageUrl,
        attributes: [
          { trait_type: "Price", value: price }
        ],
      };

      // Step 3: Upload metadata to Pinata
      const metadataUri = await uploadMetadataToPinata(metadata); // Using the Pinata function

      setMessage("Minting NFT...");

      // Step 4: Mint NFT on blockchain
      const nft = { name, price, description, metadataURI: metadataUri };

      await toast.promise(mintNFT(nft), {
        pending: "Minting & saving data to chain...",
        success: "Minting completed, will reflect within 30 sec 👌",
        error: "Encountered an error 🤯",
      });

      resetForm();
      setAlert("Minting completed...", "green");
      setURL(metadataUri);
    } catch (error) {
      console.error("Error:", error);
      setAlert("Minting failed...", "red");
    } finally {
      setIsWaiting(false);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setFileUrl("");
    setImgBase64("");
    setName("");
    setDescription("");
    setPrice(0);
  };

  return (
    <div className={openBox ? "bg-white" : "bg-opacity-100"}>
      <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-0 transform transition-transform duration-500 ${boxModal}`}>
        <div className="bg-[#303949] relative flex flex-col w-full max-w-3xl mx-auto my-8 rounded-md shadow dark:shadow-gray-100 shadow-primary-500 text-white w-11/12 sm:w-2/5 h-7/12 p-6">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            {/* Form UI */}
            <div className="w-full flex flex-col items-center mb-4">
              <label className="text-white text-xl font-semibold">Upload Image</label>
              <input
                type="file"
                className="mt-2"
                onChange={changeImage}
                accept="image/*"
              />
              {imgBase64 && <img src={imgBase64} alt="Selected" className="mt-4 w-32 h-32 object-cover rounded-md" />}
            </div>

            <div className="w-full flex flex-col items-center mb-4">
              <label className="text-white text-xl font-semibold">NFT Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="mt-2 p-2 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col items-center mb-4">
              <label className="text-white text-xl font-semibold">Description</label>
              <textarea
                placeholder="Enter description"
                className="mt-2 p-2 rounded-md"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col items-center mb-4">
              <label className="text-white text-xl font-semibold">Price</label>
              <input
                type="number"
                placeholder="Enter price"
                className="mt-2 p-2 rounded-md"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col items-center mb-4">
              <button
                type="submit"
                className={`w-full p-4 bg-blue-500 text-white rounded-md ${isWaiting ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isWaiting}
              >
                {isWaiting ? message : "Mint NFT"}
              </button>
            </div>
          </form>

          {/* Close button */}
          <div className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>
            <FaTimes size={24} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
