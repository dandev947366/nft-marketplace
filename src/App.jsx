import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Collections from "./views/Collections";
import NFT from "./views/NFT";
import Header from "./components/Header";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="min-h-screen bg-center subpixel-antialiased bg-gray-800">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collections" element={<Collections />}></Route>
        <Route path="/nft/:id" element={<NFT />}></Route>
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
