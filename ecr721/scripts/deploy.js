const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("SugarNFT");
  const nft = await NFT.deploy();
  await nft.deployed();
  console.log("Nft deployed to:", nft.address);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });