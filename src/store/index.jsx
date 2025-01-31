import { createGlobalState } from "react-hooks-global-state";
import picture4 from "../assets/images/picture4.png";
import picture9 from "../assets/images/picture9.png";
import picture2 from "../assets/images/picture2.png";

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  boxModal: "scale-0",
  offerModal: "scale-0",
  priceModal: "scale-0",
  mintModal: "scale-0",
  bidModal: "scale-0",
  showOffer: false,
  openBox: false,
  openPromotion: true,
  auction: [],
  connectedAccount: [],
  // connectedAccount: '',
  nft: null,
  nfts: [],
  bidders: [],
  transactions: [],
  contract: null,
  auctions: [
    { id: 1, title: "Auction 1", imageUrl: picture4 },
    { id: 2, title: "Auction 2", imageUrl: picture9 },
    { id: 3, title: "Auction 3", imageUrl: picture2 }

    // Add more auction objects here
  ],
  collections: [
    { id: 1, title: "Collections 1" },
    { id: 2, title: "Collections 2" },
    { id: 3, title: "Collections 3" }
  ]
});
const setAlert = (msg, color = "green") => {
  setGlobalState("loading", false);
  setGlobalState("alert", { show: true, msg, color });
  setTimeout(() => {
    setGlobalState("alert", { show: false, msg: "", color });
  }, 6000);
};

const setLoadingMsg = (msg) => {
  const loading = getGlobalState("loading");
  setGlobalState("loading", { ...loading, msg });
};

const truncate = (text, startChars, endChars, maxLength) => {
  // Ensure valid inputs
  if (
    typeof text !== "string" ||
    text.length === 0 ||
    typeof startChars !== "number" ||
    typeof endChars !== "number" ||
    typeof maxLength !== "number"
  ) {
    return text; // Return the original text if inputs are invalid
  }

  // If the text is longer than maxLength, truncate it
  if (text.length > maxLength) {
    // Ensure that startChars + endChars does not exceed maxLength
    const availableStartChars = Math.max(0, maxLength - endChars - 3); // Reserve space for '...'
    const start = text.substring(0, availableStartChars);
    const end = text.substring(text.length - endChars);

    // Add '...' to indicate truncation
    return start + "..." + end;
  }

  // If text is shorter than or equal to maxLength, return it as is
  return text;
};

export {
  getGlobalState,
  useGlobalState,
  setGlobalState,
  truncate,
  setAlert,
  setLoadingMsg
};
