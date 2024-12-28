// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

abstract contract MarketplaceShared is ERC721URIStorage, ReentrancyGuard {

    // Shared state variables
    address public companyAcc;
    uint public royalityFee;  // Royality fee percentage (e.g., 5 means 5%)
    uint public listingPrice;  // Price for listing an item

    // Bidder structure for auction
    struct BidderStruct {
        address bidder;
        uint price;
        uint timestamp;
        bool refunded;
        bool won;
    }

    // Events for marketplace actions
    event Action(string actionType);
    event ItemListed(address indexed seller, uint indexed itemId, uint price);
    event ItemSold(address indexed buyer, uint indexed itemId, uint price);
    event BidPlaced(address indexed bidder, uint indexed itemId, uint price);
    event AuctionEnded(address indexed winner, uint indexed itemId, uint price);
    event AuctionItemCreated(
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );

    // Utility function to calculate the timestamp based on the given duration parameters
    function getTimestamp(
        uint sec,
        uint min,
        uint hour,
        uint day
    ) internal view returns (uint) {
        return
            block.timestamp +
            (1 seconds * sec) +
            (1 minutes * min) +
            (1 hours * hour) +
            (1 days * day);
    }

}
