import { createGlobalState } from "react-hooks-global-state";
import picture4 from "../assets/images/picture4.png"
import picture9 from "../assets/images/picture9.png"
import picture2 from "../assets/images/picture2.png"

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
    boxModal: 'scale-0',
    offerModal: 'scale-0',
    priceModal: 'scale-0',
    bidModal: 'scale-0',
    showOffer: false,
    openBox: false,
    openPromotion: true,
    auction: [],
    auctions: [
        { id: 1, title: "Auction 1", imageUrl:picture4 },
        { id: 2, title: "Auction 2", imageUrl:picture9 },
        { id: 3, title: "Auction 3", imageUrl:picture2 },

        // Add more auction objects here
      ],
    collections: [
        { id: 1, title: "Collections 1" },
        { id: 2, title: "Collections 2" },
        { id: 3, title: "Collections 3" },
      ],
})

export { getGlobalState, useGlobalState, setGlobalState }

