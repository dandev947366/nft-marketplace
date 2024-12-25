import {FaTimes} from 'react-icons/fa'
const CreateNFT = () => {
    return(
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform  duration-300 scale scale-100">
            <div className="bg-[#303949] relative flex w-full max-w-3xl mx-auto my-8 rounded-md shadow dark:shadow-gray-100 shadow-primary-500 text-white w-11/12 sm:w-2/5 h-7/12 p-6">
                <form>
                    <div className='text-gray-400' >
                        <p>Add NFT</p>
                        <button>
                            <FaTimes/>
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default CreateNFT;