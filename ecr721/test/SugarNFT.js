const { expect, fail } = require("chai");

describe("SugarNFT", function() {
  it("NFT basic test", async function() {
    const [signer, badSigner] = await ethers.getSigners();
    const SugarNFT = await ethers.getContractFactory('SugarNFT');
    const sugarNFT = await SugarNFT.deploy();
    const address = await sugarNFT.getAddress();
    if (!address) {
      fail("address is undefined!!");
    }
    const mintResult = await sugarNFT.safeMint(signer.address);
    if (!mintResult) {
      fail("mintResult is undefined!!");
    }
    // expect(await sugarNFT.balanceOf(signer.address)).to.equal(1);
    // await expect(sugarNFT.connect(badSigner).safeMint(signer.address)).to.revertedWith("ERC721PresetMinterPauserAutoId: must have minter role to mint");
  });
});