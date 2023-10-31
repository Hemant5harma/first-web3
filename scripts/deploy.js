
const hre = require("hardhat");

async function main() {
  const Web = await hre.ethers.getContractFactory("web"); //fetching bytecode and ABI
  const web = await Web.deploy(); //creating an instance of our smart contract

  await web.waitForDeployment();//deploying your smart contract

  console.log("Contract deployed to:",await web.getAddress());
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x5FbDB2315678afecb367f032d93F642f64180aa3
