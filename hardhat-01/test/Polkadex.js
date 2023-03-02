const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Polkadex", function () {
  async function deployOneYearLockFixture() {
    const Polkadex = await ethers.getContractFactory("Polkadex");
    const [owner, address1, address2] = await ethers.getSigners();
    const hardhatToken = await Polkadex.deploy();
    await hardhatToken.deployed();

    return { Polkadex, hardhatToken, owner, address1, address2 };
  }

  it ("Total supply of tokens to the owner", async function () {
    const { Polkadex, hardhatToken, owner, address1, address2 } = await loadFixture(deployOneYearLockFixture);
    // get total tokens of address owenr
    const totalTokens = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(totalTokens);
  });

  it("Should fail if sender does not have enough tokens", async function () {
    const { Polkadex, hardhatToken, owner, address1, address2  } = await loadFixture(deployOneYearLockFixture);

    // Get initial balance of owner
    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    // Send 1 token from addr1 to owner address => revert transaction
    await expect(hardhatToken.connect(address1).transfer(owner.address, 1)).to.be.revertedWith("ERC20: transfer amount exceeds balance");

    // Check => owner balance not changed
    expect(await hardhatToken.balanceOf(owner.address)).to.equal(ownerBalance);
  });
});