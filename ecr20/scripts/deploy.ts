import { ethers } from "ethers";
import sugarArtifact from '../artifacts/contracts/SugarContract.sol/SugarContract.json'

const main = async () => {
    const privateKey: string = process.env.PRIVATE_KEY ?? "";
    const rpcURL: string = process.env.SEPOLIA_URL ?? "";
    if (privateKey === "" || rpcURL === "") {
        throw new Error("set Environment value!!")
    }
    console.log('PRIVATE_KEY:', privateKey)
    console.log('SEPOLIA_URL:', rpcURL)


    const provider = ethers.getDefaultProvider(rpcURL);
    const signer = new ethers.Wallet(privateKey, provider);
    const factory = new ethers.ContractFactory(sugarArtifact.abi, sugarArtifact.bytecode, signer);
    const contract = await factory.deploy();
    const address:string = await contract.getAddress();
    const txhash = await contract.deploymentTransaction()?.hash && "not_found";
    console.log(`contract address ${address}`)
    console.log(`tx url https://sepolia.etherscan.io/tx/${txhash}`)
    console.log('deploy completed!!!');
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});