import { createGlobalState } from "react-hooks-global-state";

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
    boxModal: 'scale-0',
    offerModal: 'scale-0',
    openBox: false,
    openPromotion: true,
    auctions: [
        { id: 1, title: "Auction 1" },
        { id: 2, title: "Auction 2" },
        { id: 3, title: "Auction 3" },

        // Add more auction objects here
      ],
    collections: [
        { id: 1, title: "Collections 1" },
        { id: 2, title: "Collections 2" },
        { id: 3, title: "Collections 3" },
      ],
})

export { getGlobalState, useGlobalState, setGlobalState }

