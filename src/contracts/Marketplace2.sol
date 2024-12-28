// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace2 is ERC721URIStorage, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    address payable public owner;
    uint256 public listingPrice = 0.0002 ether;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idMarketItem;

    event MarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    event MarketItemResold(
        uint256 indexed tokenId,
        address seller,
        uint256 price
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor() ERC721("Marketplace2 Token", "MKP2") {
        owner = payable(msg.sender);
    }

    function updateListingPrice(uint256 _listingPrice) public onlyOwner {
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    // Create NFT Token
    function createToken(string memory _tokenURI, uint256 _price)
        public
        payable
        returns (uint256)
    {
        require(_price > 0, "Price must be greater than 0");
        require(msg.value == listingPrice, "Must pay the listing price");

        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);

        createMarketItem(newTokenId, _price);
        return newTokenId;
    }

    // Create Market Item
    function createMarketItem(uint256 _tokenId, uint256 _price) private {
        idMarketItem[_tokenId] = MarketItem(
            _tokenId,
            payable(msg.sender),
            payable(address(this)),
            _price,
            false
        );

        _transfer(msg.sender, address(this), _tokenId);

        emit MarketItemCreated(
            _tokenId,
            msg.sender,
            address(this),
            _price,
            false
        );
    }

    // Resell Token
    function reSellToken(uint256 _tokenId, uint256 _price) public payable {
        require(idMarketItem[_tokenId].owner == msg.sender, "Must be the owner");
        require(_price > 0, "Price must be greater than 0");
        require(msg.value == listingPrice, "Must pay the listing price");

        idMarketItem[_tokenId].sold = false;
        idMarketItem[_tokenId].price = _price;
        idMarketItem[_tokenId].seller = payable(msg.sender);
        idMarketItem[_tokenId].owner = payable(address(this));

        _itemsSold.decrement();
        _transfer(msg.sender, address(this), _tokenId);

        emit MarketItemResold(_tokenId, msg.sender, _price);
    }

    // Create Market Sale
    function createMarketSale(uint256 _tokenId) public payable nonReentrant {
        uint256 price = idMarketItem[_tokenId].price;
        require(msg.value == price, "Submit the asking price");

        idMarketItem[_tokenId].owner = payable(msg.sender);
        idMarketItem[_tokenId].sold = true;
        _itemsSold.increment();

        _transfer(address(this), msg.sender, _tokenId);

        // Pay the listing fee and the seller
        payable(owner).transfer(listingPrice);
        payable(idMarketItem[_tokenId].seller).transfer(msg.value - listingPrice);
    }

    // Fetch Unsold Items
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 totalItems = _tokenIds.current();
        uint256 unsoldCount = totalItems - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldCount);
        for (uint256 i = 0; i < totalItems; i++) {
            if (idMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex++;
            }
        }
        return items;
    }

    // Fetch User's Purchased Items
    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint256 totalItems = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItems; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                itemCount++;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItems; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex++;
            }
        }
        return items;
    }

    // Fetch User's Listed Items
    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalItems = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItems; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                itemCount++;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItems; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex++;
            }
        }
        return items;
    }
}
