
const {abi} = require('../artifacts/contracts/SugarNFT.sol/SugarNFT.json')

main()

async function main () {
  const tokenID = 1; //URIを取得したいトークンのID
  try {
    const {API_URL, PRIVATE_KEY, CONTRACT_ADDRESS} = process.env
    const provider = ethers.getDefaultProvider(API_URL);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
    const uri = await contract.tokenURI(tokenID);
    if (uri) {
      console.log('Token URI:', uri);
    } else {
      console.log('Token URI not found for token ID', tokenIdToCheck);
    }
  } catch (err) {
    console.error(err)
  }
}