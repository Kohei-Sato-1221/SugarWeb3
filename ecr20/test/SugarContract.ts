import { expect } from "chai";
import { ethers } from "hardhat";

describe("Sugar Contract", function() {
    it("getMessage", async function() {
        const con = await ethers.getContractFactory("SugarContract")
        const deployedCon = await con.deploy()

        const address:string = await deployedCon.getAddress();
        console.log(`address:${address}`)
        expect(await deployedCon.getMessage()).to.equal("This is Sugar's Smart Contract!!!");
    });
});