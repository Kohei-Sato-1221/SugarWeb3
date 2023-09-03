
const {abi} = require('../artifacts/contracts/SugarNFT.sol/SugarNFT.json')

main()

async function main () {
  try {
    const {API_URL, PRIVATE_KEY, CONTRACT_ADDRESS, TOKEN_URI} = process.env
    // const provider = new ethers.providers.JsonRpcProvider(API_URL)
    const provider = ethers.getDefaultProvider(API_URL);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider)
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer)

    const tx = await contract.safeMint(signer.address)
    await tx.wait()

    console.info(`https://sepolia.etherscan.io/tx/${tx.hash}`)
  } catch (err) {
    console.error(err)
  }
}