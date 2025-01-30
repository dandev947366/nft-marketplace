const { expect } = require("chai");

describe("Auction", function () {
    let nftMarketplace, owner, seller, buyer, bidder;
    let listingPrice, tokenURI = "ipfs://example-token-uri";

    beforeEach(async function () {
        [owner, seller, buyer, bidder] = await ethers.getSigners();

        // Deploy the contract
        const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
        nftMarketplace = await NFTMarketplace.deploy(5); // 5% royalty fee
        await nftMarketplace.deployed();

        listingPrice = await nftMarketplace.getListingPrice();
    });

    it("Should allow a user to create an auction", async function () {
        await expect(
            nftMarketplace.connect(seller).createAuction(
                "Test NFT",
                "This is a test NFT",
                "image_url",
                tokenURI,
                ethers.utils.parseEther("1")
            )
        ).to.emit(nftMarketplace, "AuctionItemCreated");

        const auction = await nftMarketplace.getAuction(1);
        expect(auction.price).to.equal(ethers.utils.parseEther("1"));
        expect(auction.owner).to.equal(seller.address);
    });

    it("Should allow a user to bid on an auction", async function () {
        await nftMarketplace.connect(seller).createAuction(
            "Test NFT",
            "This is a test NFT",
            "image_url",
            tokenURI,
            ethers.utils.parseEther("1"),
            { value: listingPrice }
        );

        await expect(
            nftMarketplace.connect(bidder).placeBid(1, { value: ethers.utils.parseEther("1.2") })
        ).to.changeEtherBalances([bidder, nftMarketplace], [ethers.utils.parseEther("-1.2"), ethers.utils.parseEther("1.2")]);

        const auction = await nftMarketplace.getAuction(1);
        expect(auction.winner).to.equal(bidder.address);
    });

    it("Should allow the winner to claim the prize", async function () {
        await nftMarketplace.connect(seller).createAuction(
            "Test NFT",
            "This is a test NFT",
            "image_url",
            tokenURI,
            ethers.utils.parseEther("1"),
            { value: listingPrice }
        );

        await nftMarketplace.connect(bidder).placeBid(1, { value: ethers.utils.parseEther("1.2") });

        await network.provider.send("evm_increaseTime", [3600]); // Simulate time passing
        await network.provider.send("evm_mine"); // Mine a block

        await expect(nftMarketplace.connect(bidder).claimPrize(1, 0))
            .to.emit(nftMarketplace, "AuctionItemCreated");

        const auction = await nftMarketplace.getAuction(1);
        expect(auction.sold).to.be.true;
    });
});
