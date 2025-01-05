
# SOFTWARE DESIGN
## NFT Marketplace
**Author:** Dan Le

---

## Architecture

---

## Application Design

---

## Functional Design

### A. NFT Marketplace smart contract

#### updateListPrice()
- **Function name:** updateListPrice
- **Function purpose:** Updates the listing price for NFTs in the marketplace.
- **List of parameters:**
  - uint256 _listPrice
- **Return type:** void

#### getListPrice()
- **Function name:** getListPrice
- **Function purpose:** Retrieves the current listing price for NFTs.
- **List of parameters:** None
- **Return type:** uint256

#### createToken()
- **Function name:** createToken
- **Function purpose:** Mints a new NFT and lists it on the marketplace.
- **List of parameters:**
  - string memory tokenURI
  - uint256 price
- **Return type:** uint

#### getAllNFTs()
- **Function name:** getAllNFTs
- **Function purpose:** Retrieves all NFTs currently listed in the marketplace.
- **List of parameters:** None
- **Return type:** ListedNFT[] memory

#### getMyNFTs()
- **Function name:** getMyNFTs
- **Function purpose:** Retrieves all NFTs owned or listed by the caller.
- **List of parameters:** None
- **Return type:** ListedNFT[] memory

#### executeSale()
- **Function name:** executeSale
- **Function purpose:** Executes the sale of an NFT to a buyer.
- **List of parameters:**
  - uint256 tokenId
- **Return type:** void

#### createListedNFT()
- **Function name:** createListedNFT
- **Function purpose:** Lists an NFT with the given token ID and price on the marketplace.
- **List of parameters:**
  - uint256 tokenId
  - uint256 price
- **Return type:** void

#### getLatestIdToListedNFT()
- **Function name:** getLatestIdToListedNFT
- **Function purpose:** Retrieves details of the most recently minted NFT.
- **List of parameters:** None
- **Return type:** ListedNFT memory

#### getListedNFTForId()
- **Function name:** getListedNFTForId
- **Function purpose:** Retrieves details of a listed NFT by its token ID.
- **List of parameters:**
  - uint256 tokenId
- **Return type:** ListedNFT memory

#### getCurrentToken()
- **Function name:** getCurrentToken
- **Function purpose:** Retrieves the current token ID (most recently minted).
- **List of parameters:** None
- **Return type:** uint256

---

### B. Auction smart contract

#### updateListPrice()
- **Function name:** updateListPrice
- **Function purpose:** Updates the listing price for NFTs in the marketplace.
- **List of parameters:**
  - uint256 _listPrice
- **Return type:** void

#### getListPrice()
- **Function name:** getListPrice
- **Function purpose:** Retrieves the current listing price for NFTs.
- **List of parameters:** None
- **Return type:** uint256

#### changePrice()
- **Function name:** changePrice
- **Function purpose:** Changes the price of an auctioned NFT.
- **List of parameters:**
  - uint256 tokenId
  - uint256 price
- **Return type:** void

#### mintToken()
- **Function name:** mintToken
- **Function purpose:** Mints a new NFT token and assigns it a URI.
- **List of parameters:**
  - string memory tokenURI
- **Return type:** bool

#### createAuction()
- **Function name:** createAuction
- **Function purpose:** Creates a new auction for an NFT token.
- **List of parameters:**
  - string name
  - string description
  - string image
  - string tokenURI
  - uint256 price
- **Return type:** void

#### offerAuction()
- **Function name:** offerAuction
- **Function purpose:** Starts or modifies an auction for an NFT, making it live and setting bidding parameters.
- **List of parameters:**
  - uint256 tokenId
  - bool biddable
  - uint256 sec
  - uint256 min
  - uint256 hour
  - uint256 day
- **Return type:** void

#### placeBid()
- **Function name:** placeBid
- **Function purpose:** Places a bid on an auctioned NFT.
- **List of parameters:**
  - uint256 tokenId
- **Return type:** void

#### claimPrize()
- **Function name:** claimPrize
- **Function purpose:** Claims the prize after winning the auction.
- **List of parameters:**
  - uint256 tokenId
  - uint256 bid
- **Return type:** void

#### performRefund()
- **Function name:** performRefund
- **Function purpose:** Refunds all unsuccessful bidders after an auction ends.
- **List of parameters:**
  - uint256 tokenId
- **Return type:** void

#### buyAuctionedItem()
- **Function name:** buyAuctionedItem
- **Function purpose:** Directly purchases an auctioned NFT without bidding.
- **List of parameters:**
  - uint256 tokenId
- **Return type:** void

#### getAuction()
- **Function name:** getAuction
- **Function purpose:** Retrieves the details of a specific auction by its ID.
- **List of parameters:**
  - uint256 id
- **Return type:** AuctionStruct

#### getAllAuctions()
- **Function name:** getAllAuctions
- **Function purpose:** Retrieves a list of all auctions.
- **List of parameters:** None
- **Return type:** AuctionStruct[]

#### getMyAuctions()
- **Function name:** getMyAuctions
- **Function purpose:** Retrieves a list of auctions created by the caller.
- **List of parameters:** None
- **Return type:** AuctionStruct[]

#### getLiveAuctions()
- **Function name:** getLiveAuctions
- **Function purpose:** Retrieves a list of currently live auctions.
- **List of parameters:** None
- **Return type:** AuctionStruct[]

#### getBidders()
- **Function name:** getBidders
- **Function purpose:** Retrieves a list of all bidders for a specific auction.
- **List of parameters:**
  - uint256 tokenId
- **Return type:** BidderStruct[]

#### getTimestamp()
- **Function name:** getTimestamp
- **Function purpose:** Calculates a future timestamp based on the given duration.
- **List of parameters:**
  - uint256 sec
  - uint256 min
  - uint256 hour
  - uint256 day
- **Return type:** uint256

#### payTo()
- **Function name:** payTo
- **Function purpose:** Sends Ether to a specified address.
- **List of parameters:**
  - address to
  - uint256 amount
- **Return type:** void
