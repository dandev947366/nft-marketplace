import { FaTimes } from "react-icons/fa";
import picture4 from "../assets/images/picture4.png";
import {useState} from 'react';
import { useGlobalState, setGlobalState } from "../store";
const CreateNFT = () => {
     const [boxModal] = useGlobalState('boxModal')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [imgBase64, setImgBase64] = useState(null)
    const onClose = () => {
        resetForm()
        setGlobalState('boxModal','scale-0')
        setGlobalState('openBox',false)
    }
    const changeImage = async(e) => {
        const reader = new FileReader()
        if(e.target.files[0]) reader.readAsDataURL(e.target.files[0])
        reader.onload = (readerEvent) => {
            const file = readerEvent.target.result
            setImgBase64(file)
            setFileUrl(e.target.files[0])
        }
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!name || !description || !fileUrl) return
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('fileUrl', fileUrl)
        resetForm()
        console.log({name, description, fileUrl})
    }
    const resetForm = () => {
        setFileUrl('')
        setImgBase64('')
        setName('')
        setDescription('')
    }
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center
    justify-center bg-black bg-opacity-0 transform
    transition-transform duration-500 ${boxModal}`}>
      <div className="bg-[#303949] relative flex flex-col w-full max-w-3xl mx-auto my-8 rounded-md shadow dark:shadow-gray-100 shadow-primary-500 text-white w-11/12 sm:w-2/5 h-7/12 p-6">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center text-gray-400 w-full">
            <p className="font-semibold italic">Mint NFT</p>
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
                <span className="flex items-center justify-center m-4 w-full">Choose NFT Artwork</span>
                <input type="file" accept="image/png, image/gif, image/jpeg, image/webp" className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:bg-indigo-600 file:text-white file:border-solid file:border-slate-500 file:cursor-pointer file:ring-0 file:py-2 file:px-4" required onChange={changeImage}/>
            </label>
          </div>
                <input type="text" className="block flex w-full p-3 mb-3 placeholder-gray-500 rounded-md dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-200 " required placeholder="Title" value={name} onChange={(e)=>setName(e.target.value)} name="name"/>
                <input type="text"  className="block flex w-full p-3 mb-3 placeholder-gray-500 rounded-md dark:placeholder-gray-300 dark:bg-gray-800 dark:text-gray-200" required placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} name="description"/>
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
