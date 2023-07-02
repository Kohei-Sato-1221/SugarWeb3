import { ethers } from "ethers";
import sugarArtifact from '../artifacts/contracts/SugarContract.sol/SugarContract.json'

const main = async (address: string) => {
    const rpcURL: string = process.env.SEPOLIA_URL ?? "";
    if (rpcURL === "") {
        throw new Error("set Environment value!!")
    }
    const provider = ethers.getDefaultProvider(rpcURL);
    const contract = new ethers.Contract(address, sugarArtifact.abi, provider);

    const message = await contract.getMessage();
    console.log(`SugarContract getMessage: ${message}`);   
}

const address = "0x62C5f434C97128A73fb57f1b6B60880275B8Ba2A";
main(address).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});