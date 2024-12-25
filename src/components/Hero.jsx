const Hero = () => {
    return (
        <div className="bg-white border border-gray-300 rounded-md shadow-md -z-10 dark:bg-gray-800 dark:border-gray-700">
            <Banner / >
            <h2 className="text-white">Bidder</h2>
        </div>
    )
}
const Banner = () => {
    return(
        <div className="relative my-4 mx-4 md:flex-row w-full justify-between items-center mx-auto">

            <h1 className="text-white py-1 font-semibold text-5xl">Discover, Collect, and Sell NFTs
            <p className="text-[#BFC4CA] py-1 font-semibold text-3xl mb-11">More than 100+ NFTs available to collect</p>
            </h1>

        <div className="flex p-4 font-semibold bg-indigo-600 text-white rounded-xl ">
            <button>Create NFT</button>
        </div>

        </div>

    )
}

export default Hero;