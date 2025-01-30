const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarketplace", function () {
  let NFTMarketplace, nftMarketplace, owner, seller, buyer;
  const listPrice = ethers.utils.parseEther("0.01");
  const nftPrice = ethers.utils.parseEther("1");
  const tokenURI = "https://example.com/metadata.json";

  beforeEach(async function () {
    [owner, seller, buyer] = await ethers.getSigners();
    NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    nftMarketplace = await NFTMarketplace.deploy();
    await nftMarketplace.deployed();
  });

  it("Should allow creating an NFT and listing it", async function () {
    await nftMarketplace.connect(seller).createToken(tokenURI, nftPrice, { value: listPrice });
    const listedNFT = await nftMarketplace.getLatestIdToListedNFT();
    expect(listedNFT.price).to.equal(nftPrice);
    expect(listedNFT.currentlyListed).to.equal(true);
  });

  it("Should allow buying an NFT and transfer ownership", async function () {
    await nftMarketplace.connect(seller).createToken(tokenURI, nftPrice, { value: listPrice });
    await nftMarketplace.connect(buyer).executeSale(1, { value: nftPrice });
    const purchasedNFT = await nftMarketplace.getListedNFTForId(1);
    expect(purchasedNFT.seller).to.equal(buyer.address);
  });

  it("Should only allow owner to update listing price", async function () {
    await expect(
      nftMarketplace.connect(seller).updateListPrice(ethers.utils.parseEther("0.02"))
    ).to.be.revertedWith("Only owner can update listing price");
  });
});
