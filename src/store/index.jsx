import { createGlobalState } from "react-hooks-global-state";

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
    boxModal: 'scale-0',
    openBox: false,
    openPromotion: true,
    auctions: [
        { id: 1, title: "Auction 1" },
        { id: 2, title: "Auction 2" },
        { id: 3, title: "Auction 3" },

        // Add more auction objects here
      ],
})

export { getGlobalState, useGlobalState, setGlobalState }

