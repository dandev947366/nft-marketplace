// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "./MarketplaceShared.sol";
import "./MarketplaceAuction.sol";

contract Marketplace is MarketplaceShared, MarketplaceAuction {

    constructor(uint _royaltyFee) ERC721("Marketplace Tokens", "MKP") {
        companyAcc = msg.sender;
        royalityFee = _royaltyFee;
    }
    function getListingPrice() public view returns (uint) {
        return listingPrice;
    }

    function setListingPrice(uint _price) public  {
        require(msg.sender == companyAcc, "Unauthorized");
        listingPrice = _price;
    }
    function changePrice(uint tokenId, uint price) public {
        require(
            auctionedItem[tokenId].owner == msg.sender,
            "Unauthorized"
        );
        require(
            getTimestamp(0, 0, 0, 0) > auctionedItem[tokenId].duration,
            "Auction still Live"
        );
        require(price > 0 ether, "Price must be greater than zero");

        auctionedItem[tokenId].price = price;
    }

    function getBidders(uint tokenId)
        public
        view
        returns (BidderStruct[] memory)
    {
        return biddersOf[tokenId];
    }

}
