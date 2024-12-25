import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Collections from "./views/Collections";
import NFT from "./views/NFT";
import Header from "./components/Header";

const App = () => {
  return (
    // <div className="min-h-screen bg-gradient-to-t from-[#43cea2] bg-repeat to-[#185a9d] bg-center subpixel-antialiased">
    <div className="min-h-screen dark:bg-gray-800 bg-center subpixel-antialiased">
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
    </div>
  );
};
export default App;
