import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Collections from "./views/Collections";
import NFT from "./views/NFT";
import Header from "./components/Header";
import { useEffect } from "react";
import {isWalletConnected} from "../src/services/blockchain"
import { ToastContainer } from "react-toastify";
const App = () => {
  useEffect(async()=>{
    await isWalletConnected()
  },[])

  return (
    // <div className="min-h-screen bg-gradient-to-t from-[#43cea2] bg-repeat to-[#185a9d] bg-center subpixel-antialiased">
    <div className="min-h-screen dark:bg-gray-800 bg-center subpixel-antialiased dark:border-gray-700">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/collections" element={<Collections />}>
          Collections
        </Route>
        <Route path="/nft/:id" element={<NFT />}>
          NFT
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="dark"
      />
    </div>
  );
};
export default App;
