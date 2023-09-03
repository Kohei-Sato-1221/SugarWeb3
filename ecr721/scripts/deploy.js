main()

async function main () {
  try {
    const SugarNFT = await ethers.getContractFactory('SugarNFT')
    const sugarNFT = await SugarNFT.deploy()
    const address = await sugarNFT.getAddress()

    console.info(`Contract deployed to address: ${address}`)
    console.info(sugarNFT)
    console.info(`https://sepolia.etherscan.io/address/${address}`)
  } catch (err) {
    console.error(err)
  }
}