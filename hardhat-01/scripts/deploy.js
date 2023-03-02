// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const [deployed] = await hre.ethers.getSigners();
  const accountBalance = (await deployed.getBalance()).toString();
  console.log('Account address deployed ', deployed.address);
  console.log('Account balance: ', accountBalance);
  const Polkadex = await hre.ethers.getContractFactory("Polkadex");
  const lock = await Polkadex.deploy();

  await lock.deployed();
  console.log('Address of toke Polkadex: ', lock.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
