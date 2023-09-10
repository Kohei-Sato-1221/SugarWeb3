
const {abi} = require('../artifacts/contracts/SugarNFT.sol/SugarNFT.json')

main()

async function main () {
  try {
    const {API_URL, PRIVATE_KEY, PRIVATE_KEY_02, CONTRACT_ADDRESS, TOKEN_URI, WALLET_ADDRESS, WALLET_ADDRESS_02} = process.env
    const provider = ethers.getDefaultProvider(API_URL);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider)
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer)

    const tx = await contract.safeMint(WALLET_ADDRESS_02, TOKEN_URI)
    await tx.wait()

    console.info(`https://sepolia.etherscan.io/tx/${tx.hash}`)
  } catch (err) {
    console.error(err)
  }
}